import { Quill } from 'react-quill';

const BlockquoteBlot = Quill.import('formats/blockquote');

export const LINE_HANDLER = 'line';
class LineBlot extends BlockquoteBlot {
    static create(value: boolean) {
        const node = super.create(value);
        return node;
    }
}
LineBlot.blotName = LINE_HANDLER;
LineBlot.tagName = 'line';
Quill.register(`formats/${LINE_HANDLER}`, LineBlot);

export const FITLINE_HANDLER = 'fitline';
class FitLineBlot extends BlockquoteBlot {
    static create(value: boolean) {
        const node = super.create(value);
        return node;
    }
}
FitLineBlot.blotName = FITLINE_HANDLER;
FitLineBlot.tagName = 'fitline';
Quill.register(`formats/${FITLINE_HANDLER}`, FitLineBlot);