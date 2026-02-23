import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { Quill, } from 'react-quill';
import { DeltaOperation, Delta as DeltaType } from 'quill';
import ParchmentType from 'parchment';
import { unstable_batchedUpdates } from 'react-dom';
import { carderToHtml, htmlToCarder } from './helper';
import { WORD_HANDLER, QUOTE_HANDLER, RUBY_HANDLER, RT_HANDLER, FITRT_HANDLER } from './rich-text-inline';
import { LINE_HANDLER, FITLINE_HANDLER } from './rich-text-block';
import { IMAGE_HANDLER, ImageMemory, ImageModifierModal, ImageModifierModalRef, MAX_IMAGE_DIMENSION } from './rich-text-image';
import { InputRichTextToolbar, InputRichTextToolbarRef } from './input-toolbar';
import { mergeClass } from 'src/util';
import { CharPicker } from '../char-picker';
import 'react-quill/dist/quill.snow.css';

const Delta: typeof DeltaType = Quill.import('delta');
const Parchment: typeof ParchmentType = Quill.import('parchment');

const allowedFormatList = [
    'bold', 'italic',
    LINE_HANDLER,
    FITLINE_HANDLER,
    QUOTE_HANDLER,
    RUBY_HANDLER,
    RT_HANDLER,
    FITRT_HANDLER,
    WORD_HANDLER,
    'image',
];

export type InputRichTextRef = {
    getPickerRef: () => null | {
        insert: (letter: string) => void,
    },
    setValue: (nextValue: string) => void,
    getValue: () => ({
        carder: string,
        html: string,
        delta: { ops?: DeltaOperation[] },
    }),
};
export type InputRichText = {
    id: string,
    className?: string,
    format: string,
    furiganaHelper: boolean,
    defaultValue: string,
    onChange: (carder: string, html: string, delta: { ops?: DeltaOperation[] }) => void,
    onChangeMode: () => void,
    onTakePicker?: (ref: CharPicker) => void,
};
export const InputRichText = forwardRef<InputRichTextRef, InputRichText>(({
    id,
    className,
    format,
    furiganaHelper,
    defaultValue,
    onChange,
    onChangeMode,
    onTakePicker,
}, ref) => {
    const quillToolbarRef = useRef<InputRichTextToolbarRef>(null);
    const imageModifierModalRef = useRef<ImageModifierModalRef>(null);
    const immediateCarderValue = useRef('');
    const immediateHtmlValue = useRef('');
    const immediateDeltaValue = useRef(new Delta());
    const reactQuillRef = useRef<ReactQuill>(null);
    const [value, setValue] = useState(carderToHtml(defaultValue, format, furiganaHelper));

    const getToolbarById = useCallback((toolbarId: string) => document.getElementById(`${id}-${toolbarId}`) as HTMLInputElement | null, [id]);
    const insertRubyHandler = useCallback(() => {
        const reactQuill = reactQuillRef.current?.getEditor();
        if (!reactQuill) return;

        const range = reactQuill.getSelection();
        if (!range) return;

        const { index: cursorPosition, length } = range;
        if (typeof cursorPosition !== 'number') return;

        const head = getToolbarById('ruby-head')?.value;
        const foot = getToolbarById('ruby-foot')?.value;
        const widthNormal = getToolbarById('ruby-width-normal')?.checked;
        if (range.length === 0) {
            if (foot && head) {
                reactQuill.insertText(
                    cursorPosition,
                    foot,
                    { [RUBY_HANDLER]: true },
                    'user'
                );
                reactQuill.insertText(
                    cursorPosition + foot.length,
                    head,
                    { [RUBY_HANDLER]: true, [widthNormal ? RT_HANDLER : FITRT_HANDLER]: true },
                    'user'
                );
                reactQuill.setSelection(cursorPosition + foot.length + head.length + 1, 0);
            }
        } else {
            const selectedOpList = reactQuill.getContents(cursorPosition, length);
            /** We pretty much only allow raw text for ruby */
            const {
                validAttribute,
                validInsert,
            } = selectedOpList.reduce((acc, cur) => {
                return {
                    validInsert: acc.validInsert && typeof cur.insert === 'string',
                    validAttribute: acc.validAttribute && !(
                        cur.attributes?.[RUBY_HANDLER]
                        || cur.attributes?.[RT_HANDLER]
                        || cur.attributes?.[FITRT_HANDLER]
                        || cur.attributes?.[WORD_HANDLER]
                        || cur.attributes?.[QUOTE_HANDLER]
                    ),
                };
            }, { validInsert: true, validAttribute: true });

            if (!validAttribute || !validInsert || !head) return;
            reactQuill.formatText(cursorPosition, length, { [RUBY_HANDLER]: true }, 'user');
            reactQuill.insertText(
                cursorPosition + length,
                head,
                { [RUBY_HANDLER]: true, [widthNormal ? RT_HANDLER : FITRT_HANDLER]: true },
                'user'
            );
            reactQuill.setSelection(cursorPosition + length + head.length + 1, 0);
        }
        quillToolbarRef.current?.resetRubyInput();
    }, [getToolbarById]);
    const insertImageHandler = useCallback(() => {
        const reactQuill = reactQuillRef.current?.getEditor();
        if (!reactQuill) return;

        const cursorPosition = reactQuill.getSelection()?.index;
        if (typeof cursorPosition !== 'number') return;
        const name = getToolbarById('image-name')?.value;
        let src = getToolbarById('image-url')?.value;
        let width = getToolbarById('image-width')?.value;
        let height = getToolbarById('image-height')?.value;
        let offsetx = getToolbarById('image-offset-x')?.value;
        let offsety = getToolbarById('image-offset-y')?.value;

        if (name) {
            const memoizedImage = ImageMemory.get(id, name);
            if (memoizedImage) {
                src = src || memoizedImage.src;
                width = width || memoizedImage.width;
                height = height || memoizedImage.height;
                offsetx = offsetx || memoizedImage.offsetx;
                offsety = offsety || memoizedImage.offsety;
            } else ImageMemory.set(id, name, { src, width, height, offsetx, offsety, name });
        }
        if (!src && !name) return;
        reactQuill.insertEmbed(
            cursorPosition,
            'image',
            { src, width, height, offsetx, offsety, name },
            'user'
        );
        reactQuill.setSelection(cursorPosition + 1, 0);
        quillToolbarRef.current?.resetImageInput();
    }, [getToolbarById, id]);
    const imageMatcher = useCallback((node: HTMLImageElement) => {
        const src = node.getAttribute('src') ?? undefined;
        if (src && src.startsWith('data:image')) return new Delta();
        const normalizedImageNumericAttribute = (attr: string) => {
            const value = node.getAttribute(`data-${attr}`) ?? node.getAttribute(`${attr}`) ?? undefined;
            if (!value) return undefined;

            const parsedValue = parseInt(value);
            return !isNaN(parsedValue) ? `${Math.min(MAX_IMAGE_DIMENSION, parsedValue)}` : '0';
        };
        const name = node.getAttribute('data-name') ?? node.getAttribute('name');
        const width = normalizedImageNumericAttribute('width');
        const height = normalizedImageNumericAttribute('height');
        const offsetx = normalizedImageNumericAttribute('offsetx');
        const offsety = normalizedImageNumericAttribute('offsety');

        if (name && !ImageMemory.get(id, name)) ImageMemory.set(id, name, { src, width, height, offsetx, offsety, name });
        if (!src && !name) return new Delta();
        return new Delta().insert({ image: { src, width, height, offsetx, offsety, name, set: id } });
    }, [id]);

    const quoteHandler = useCallback(() => {
        const reactQuill = reactQuillRef.current?.getEditor();
        if (!reactQuill) return;

        const range = reactQuill.getSelection();
        if (range == null || range.length === 0) return;

        const formats = reactQuill.getFormat(range);
        if (!formats[QUOTE_HANDLER]) reactQuill.formatText(range.index, range.length, QUOTE_HANDLER, true);
        else reactQuill.formatText(range.index, range.length, QUOTE_HANDLER, false);
    }, []);
    const wordHandler = useCallback(() => {
        const reactQuill = reactQuillRef.current?.getEditor();
        if (!reactQuill) return;

        const range = reactQuill.getSelection();
        if (range == null || range.length === 0) return;

        const formats = reactQuill.getFormat(range);
        if (!formats[WORD_HANDLER]) reactQuill.formatText(range.index, range.length, WORD_HANDLER, true);
        else reactQuill.formatText(range.index, range.length, WORD_HANDLER, false);
    }, []);

    useEffect(() => {
        const reactQuill = reactQuillRef.current?.getEditor();
        if (reactQuill) {
            reactQuill.on('selection-change', function (range) {
                if (range) {
                    const formats = reactQuill.getFormat(range);
                    const quoteButton = document.querySelector(`#${id}-toolbar .ql-${QUOTE_HANDLER}`);
                    const wordButton = document.querySelector(`#${id}-toolbar .ql-${WORD_HANDLER}`);
                    const fitBlockquoteButton = document.querySelector(`#${id}-toolbar .ql-${FITLINE_HANDLER}`);

                    if (formats[QUOTE_HANDLER]) {
                        quoteButton?.classList.add('ql-active');
                        wordButton?.classList.remove('ql-active');
                        fitBlockquoteButton?.classList.remove('ql-active');
                    } else if (formats[WORD_HANDLER]) {
                        wordButton?.classList.add('ql-active');
                        quoteButton?.classList.remove('ql-active');
                        fitBlockquoteButton?.classList.remove('ql-active');
                    } else if (formats[FITLINE_HANDLER]) {
                        fitBlockquoteButton?.classList.add('ql-active');
                        wordButton?.classList.remove('ql-active');
                        quoteButton?.classList.remove('ql-active');
                    }
                }
            });

            const editorDom = reactQuill.root;
            editorDom.addEventListener('click', ev => {
                if (ev.target && (ev.target as HTMLElement).tagName === 'IMG') {
                    const node = ev.target as HTMLImageElement;
                    imageModifierModalRef.current?.open(
                        node as HTMLImageElement,
                        imageData => {
                            const blot = Parchment.find(node);
                            if (!blot) return;
                            blot.replaceWith('image', imageData);
                            reactQuill.update();

                            const src = imageData['src'];
                            const set = imageData['set'];
                            const name = imageData['name'];
                            const width = imageData['width'];
                            const height = imageData['height'];
                            const offsetx = imageData['offsetx'];
                            const offsety = imageData['offsety'];
                            if (name) ImageMemory.set(id, name, { src, width, height, offsetx, offsety, name, set });
                            reactQuill.setContents(
                                new Delta(reactQuill.getContents().map(op => {
                                    if (op.insert && op.insert.image) {
                                        const opImageName = op.insert.image?.name;
                                        if (typeof opImageName === 'string' && opImageName === name) {
                                            return { ...op, insert: { image: imageData } };
                                        }
                                        return op;
                                    }
                                    return op;
                                })),
                                'silent',
                            );
                        }
                    );
                }
            });
        }
    }, [id]);

    const module = useMemo(() => ({
        toolbar: {
            container: `#${id}-toolbar`,
            handlers: {
                [IMAGE_HANDLER]: insertImageHandler,
                [RUBY_HANDLER]: insertRubyHandler,
                [QUOTE_HANDLER]: quoteHandler,
                [WORD_HANDLER]: wordHandler,
            },
        },
        clipboard: {
            matchers: [
                ['IMG', imageMatcher],
            ]
        }
    }), [
        id,
        imageMatcher,
        insertImageHandler,
        insertRubyHandler,
        quoteHandler,
        wordHandler,
    ]);

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant && immediateHtmlValue.current === value) onChange(
                immediateCarderValue.current,
                value,
                immediateDeltaValue.current,
            );
        }, 250);

        return () => {
            relevant = false;
        };
    /** No need to depend on onChange here */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const getPickerRef = () => ({
        insert: (letter: string) => {
            const reactQuill = reactQuillRef.current?.getEditor();

            if (reactQuill) {
                var selection = reactQuill.getSelection(true);
                reactQuill.insertText(selection.index, letter);
            }
        }
    });
    useImperativeHandle(ref, () => ({
        getPickerRef,
        getValue: () => {
            return {
                carder: immediateCarderValue.current,
                html: immediateHtmlValue.current,
                delta: immediateDeltaValue.current,
            };
        },
        setValue: value => {
            setValue(carderToHtml(value, format, furiganaHelper));
        },
    }));

    return <div className={mergeClass('quill-input', className)}>
        <InputRichTextToolbar
            ref={quillToolbarRef}
            id={id}
            getContentRange={() => {
                return reactQuillRef.current?.getEditor().getSelection();
            }}
            onMemoizedImageInsert={imageData => {
                const reactQuill = reactQuillRef.current?.getEditor();
                if (!reactQuill) return;

                const cursorPosition = reactQuill.getSelection()?.index;
                if (typeof cursorPosition !== 'number') return;

                reactQuill.insertEmbed(
                    cursorPosition,
                    'image',
                    imageData,
                    'user'
                );
                reactQuill.setSelection(cursorPosition + 1, 0);
                quillToolbarRef.current?.resetImageInput();
            }}
            onChangeMode={onChangeMode}
        />
        <ReactQuill
            ref={reactQuillRef}
            id={id}
            theme="snow"
            value={value}
            formats={allowedFormatList}
            onFocus={() => onTakePicker?.(getPickerRef())}
            onChange={(value, _delta, _source, editor) => {
                unstable_batchedUpdates(() => {
                    const valueAsDelta = editor.getContents();

                    setValue(value);
                    immediateDeltaValue.current = valueAsDelta;
                    immediateHtmlValue.current = value;
                    immediateCarderValue.current = htmlToCarder(valueAsDelta);

                    const editorElement = document.querySelector('.ql-editor') as HTMLElement | null;
                    if (editorElement) {
                        /**
                         * Force reflow because the weird line height shift when ruby tags are present
                         * https://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes */
                        editorElement.style.display = 'inline-block';
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const offset = editorElement.offsetHeight; // no need to store this anywhere, the reference is enough
                        editorElement.style.display= '';
                    }
                });
            }}
            modules={module}
        />
        <ImageModifierModal
            ref={imageModifierModalRef}
        />
    </div>;
});