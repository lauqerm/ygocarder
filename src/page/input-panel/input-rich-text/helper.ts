import {
    FIT_RUBY_DELIMITER,
    ForceWordANRegex,
    NB_FULL_LINE_CLOSE,
    NB_FULL_LINE_OPEN,
    NB_LINE_CLOSE,
    NB_LINE_OPEN,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NB_WORD_CLOSE,
    NB_WORD_OPEN,
    ReverseTotalImagePresetMap,
    RubyDelimiterRegex,
    RubyWordANRegex,
} from 'src/model';
import { normalizeCardText } from 'src/draw';
import sanitizeHtml from 'sanitize-html';
import { FITRT_HANDLER, WORD_HANDLER } from './rich-text-inline';
import { LINE_HANDLER, FITLINE_HANDLER } from './rich-text-block';
import { DeltaOperation, Delta as DeltaType } from 'quill';
import { Quill } from 'react-quill';

const Delta: typeof DeltaType = Quill.import('delta');

export const carderToHtml = (value: string, format: string, furiganaHelper: boolean) => {
    const lineOpenTag = `<${LINE_HANDLER}>`;
    const lineCloseTag = `</${LINE_HANDLER}>`;
    const fitLineOpenTag = `<${FITLINE_HANDLER}>`;
    const fitLineCloseTag = `</${FITLINE_HANDLER}>`;
    const convertedValue = normalizeCardText(
        value + '\n',
        format,
        { furiganaHelper, skip: ['encase-word', 'quote-conversion'] },
    );
    const valueAsHtml = convertedValue
        .split('\n')
        .map(line => {
            let parsedLine = line;
            if (!line.startsWith(NB_FULL_LINE_OPEN) && !line.startsWith(NB_LINE_OPEN)) {
                parsedLine = `<p>${parsedLine === '' ? '<br>' : parsedLine}</p>`;
            }
            return parsedLine
                .replaceAll(NB_FULL_LINE_OPEN, fitLineOpenTag).replaceAll(NB_FULL_LINE_CLOSE, fitLineCloseTag)
                .replaceAll(NB_LINE_OPEN, lineOpenTag).replaceAll(NB_LINE_CLOSE, lineCloseTag)
                .replaceAll(NB_UNCOMPRESSED_START, '<q>').replaceAll(NB_UNCOMPRESSED_END, '</q>')
                .replaceAll(ForceWordANRegex, m => {
                    return m.replaceAll(`${NB_WORD_OPEN}{`, '<word>').replaceAll(`}${NB_WORD_CLOSE}`, '</word>');
                })
                .replaceAll(RubyWordANRegex, m => {
                    const [foot, delimiter, head] = m.replaceAll(`${NB_WORD_OPEN}{`, '').replaceAll(`}${NB_WORD_CLOSE}`, '').split(RubyDelimiterRegex);

                    if (delimiter === FIT_RUBY_DELIMITER) return `<ruby>${foot}<fitrt>${head}</fitrt></ruby>`;
                    return `<ruby>${foot}<rt>${head}</rt></ruby>`;
                });
        })
        .join('');
    // console.info('Debug carderToHtml:', value, '\n=====\n', convertedValue, '\n=====\n', valueAsHtml);
    return sanitizeHtml(valueAsHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', LINE_HANDLER, FITLINE_HANDLER, FITRT_HANDLER, WORD_HANDLER]),
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            img: [
                'src',
                'data-set',
                'name', 'data-name',
                'width', 'data-width',
                'height', 'data-height',
                'offsetx', 'data-offsetx',
                'offsety', 'data-offsety',
            ],
        }
    });
};

export const htmlToCarder = (delta: { ops?: DeltaOperation[] }) => {
    const { ops } = delta;
    if (!Array.isArray(ops)) return '';
    const imageMemory: Record<string, Record<string, string | undefined>> = {};
    const lineList: string[] = [];
    const reconstructedDelta = new Delta(ops);
    reconstructedDelta.eachLine((lineContent, attribute, i) => {
        /** Only block-level attributes are available here */
        const {
            line, fitline,
        } = attribute ?? {};
        // Can return false to exit loop early
        let carderLine = '';
        let isInQuote = false;
        let isInRuby = false;
        let isInWord = false;
        let isInRt = false;
        let isInFitRt = false;
        lineContent.ops?.forEach((op, index, arr) => {
            const { insert, attributes } = op;
            const nextOp = arr[index + 1];
            let insertContent = '';
            if (typeof insert === 'string') {
                insertContent = insert;
            } else if (insert && typeof insert === 'object' && 'image' in insert) {
                const { image } = insert;
                const { src: fullSrc, name, width, height, offsetx, offsety } = image ?? {};
                const src = ReverseTotalImagePresetMap[fullSrc] ?? fullSrc;
                const memoizedImage = (name ? imageMemory[name] : {}) ?? {};
                if (name && !imageMemory[name]) {
                    imageMemory[name] = { src, name, width, height, offsetX: offsetx, offsetY: offsety };
                }
                const imgContent = '<img '
                    + [
                        ['name', name],
                        ['src', src],
                        ['width', width],
                        ['height', height],
                        ['offsetX', offsetx],
                        ['offsetY', offsety],
                    ].reduce((acc, [attributeName, value]) => {
                        /** Basically any information identical to the memoized image is not included */
                        if (value != null && value !== '' && (attributeName === 'name' || value !== memoizedImage[attributeName])) {
                            acc += `${attributeName}="${value}" `;
                        }
                        return acc;
                    }, '')
                    + '/>';

                insertContent = imgContent;
            }
            const {
                bold, italic,
                word, quote,
                ruby, rt, fitrt,
            } = attributes ?? {};
            /** Bold and italic text are innermost tags */
            if (bold) insertContent = `<b>${insertContent}</b>`;
            if (italic) insertContent = `<i>${insertContent}</i>`;
            /** We will connect consecutive ruby / words / rt / fitrt together */
            if (ruby) {
                if (!isInRuby) {
                    insertContent = `{${insertContent}`;
                    isInRuby = true;
                }
            }
            if (word) {
                if (!isInWord) {
                    insertContent = `{${insertContent}`;
                    isInWord = true;
                }
            }
            if (rt) {
                if (!isInRt) {
                    insertContent = `|${insertContent}`;
                    isInRt = true;
                }
            }
            if (fitrt) {
                if (!isInFitRt) {
                    insertContent = `||${insertContent}`;
                    isInFitRt = true;
                }
            }
            /** Quote is outermost tag, we will connect consecutive quotes together */
            if (quote) {
                if (!isInQuote) {
                    insertContent = `{{${insertContent}`;
                    isInQuote = true;
                }
            }
            /** Rt and FitRt do not need closing tags in carder text */
            if (isInRt && (!nextOp || !nextOp.attributes?.rt)) {
                isInRt = false;
            }
            if (isInFitRt && (!nextOp || !nextOp.attributes?.fitrt)) {
                isInFitRt = false;
            }
            /** Close ruby (like a stack, FIFO) */
            if (isInRuby && (!nextOp || !nextOp.attributes?.ruby)) {
                insertContent += '}';
                isInRuby = false;
            }
            /** Close word */
            if (isInWord && (!nextOp || !nextOp.attributes?.word)) {
                insertContent += '}';
                isInWord = false;
            }
            /** Close quote */
            if (isInQuote && (!nextOp || !nextOp.attributes?.quote)) {
                insertContent += '}}';
                isInQuote = false;
            }
            carderLine += insertContent;
        });

        /** We do not support nested lines */
        if (line) carderLine = `[${carderLine}]`;
        else if (fitline) carderLine = `[[${carderLine}]]`;
        lineList.push(carderLine);
    });

    return lineList.join('\n');
};