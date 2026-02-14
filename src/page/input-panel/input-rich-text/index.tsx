import React, { useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import { DeltaStatic } from 'quill';
import { Quill } from 'react-quill';
import Parchement from 'parchment';
import { Delta as DeltaType } from 'quill';
import { unstable_batchedUpdates } from 'react-dom';
import 'react-quill/dist/quill.snow.css';
import { Popover } from 'antd';
import styled from 'styled-components';
import './toolbar.scss';

const Delta: typeof DeltaType = Quill.import('delta');
const ToolbarContainer = styled.div`
    &.ql-toolbar {
        .html-tooltip {
            button {
                width: unset;
            }
        }
    }
`;

const defaultToolbar = [
    ['bold', 'italic'],
    ['image'],
    ['clean']
];
const allowedFormatList = [
    'bold', 'italic',
    'image',
];
/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomButton = () => <span className="octicon octicon-star">IMG</span>;
const CustomToolbar = () => (
    <div id="toolbar" className="quill-custom-toolbar">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <div className="html-tooltip">
            <button>IMG2</button>
            <div className="html-tooltip-container">
                <div className="html-tooltip-content">
                    <button className="ql-insertImage">
                        <CustomButton />
                    </button>
                    <br />
                    <button className="ql-insertImage">
                        <CustomButton />
                    </button>
                </div>
                <div className="html-tooltip-arrow" />
            </div>
        </div>
    </div>
);

const Image = Quill.import('formats/image');

class ImageBlot extends Image {
  static create(value) {
    console.log('🚀 ~ ImageBlot ~ create ~ value:', value);
    const node = super.create(value);
    if (typeof value === 'string') {
      node.setAttribute('src', this.sanitize(value));
      node.setAttribute('alt', this.sanitize(value).split('/').reverse()[0]);
    }
    return node;
  }
}

Quill.register(ImageBlot);

export const InputRichText = () => {
    const reactQuillRef = useRef<ReactQuill>(null);
    const [value, setValue] = useState('test');

    const imageHandler = useCallback(() => {
        if (!reactQuillRef.current) return;

        const editor = reactQuillRef.current.getEditor();
        const range = editor.getSelection();
        const value = prompt('Please enter the image URL');
        console.log('🚀 ~ InputRichText ~ range:', range, value);

        if (value && range) {
            editor.insertEmbed(range.index, 'image', value, 'user');
        }
    }, []);
    const insertImageHandler = useCallback(() => {
        console.log('insertImageHandler called');
    }, []);
    const imageMatcher = useCallback((node: HTMLElement, delta: DeltaStatic) => {
        console.log('🚀 ~ InputRichText ~ node, delta:', node, delta);
        return delta.compose(new Delta([
            { insert: { image: node.getAttribute('src') || '' }, attributes: { offsetY: -4, alt: 'alter', offsetX: '5' } },
        ]));
    }, []);

    const module = useMemo(() => ({
        toolbar: {
            container: '#toolbar',
            handlers: {
                image: imageHandler,
                insertImage: insertImageHandler,
            },
        },
        clipboard: {
            matchers: [
                ['IMG', imageMatcher],
            ]
        }
    }), [imageHandler, imageMatcher]);

    return <div>
        <CustomToolbar />
        <ReactQuill
            ref={reactQuillRef}
            theme="snow"
            value={value}
            formats={allowedFormatList}
            onChange={(value, _delta, _source, editor) => {
                unstable_batchedUpdates(() => {
                    const valueAsDelta = editor.getContents();
                    console.log('🚀 ~ InputRichText ~ valueAsDelta:', valueAsDelta);

                    setValue(value);
                });
            }}
            modules={module}
        />
    </div>;
};