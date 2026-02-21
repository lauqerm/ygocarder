import ParchmentType from 'parchment';
import { Quill } from 'react-quill';

const Parchment: typeof ParchmentType = Quill.import('parchment');
const InlineBlot = Quill.import('blots/inline');

export const RUBY_HANDLER = 'ruby';
class RubyBlot extends InlineBlot {
    static create(value: boolean) {
        const node: HTMLQuoteElement = super.create(value);
        if (typeof value === 'string') {
            node.innerHTML = value;
            return node;
        }

        return node;
    }
};

RubyBlot.blotName = RUBY_HANDLER;
RubyBlot.tagName = 'ruby';
Quill.register(`formats/${RUBY_HANDLER}`, RubyBlot);

export const QUOTE_HANDLER = 'quote';
class QuoteBlot extends InlineBlot {
    static create(value: boolean) {
        const node: HTMLQuoteElement = super.create(value);
        if (typeof value === 'string') {
            node.innerHTML = value;
            return node;
        }

        return node;
    }
};
QuoteBlot.blotName = QUOTE_HANDLER;
QuoteBlot.tagName = 'q';
Quill.register(`formats/${QUOTE_HANDLER}`, QuoteBlot);

export const FITRT_HANDLER = 'fitrt';
class FitRtBlot extends InlineBlot {
    static create(value: boolean) {
        const node: HTMLQuoteElement = super.create(value);
        if (typeof value === 'string') {
            node.innerHTML = value;
            return node;
        }

        return node;
    }

    formatAt(index: number, length: number, name: string, value: unknown) {
        /** Prevents all other inline format */
        if (['bold', 'italic', RT_HANDLER].includes(name) && value === true) return;
        if (RtBlot.compare(this.statics.blotName, name) < 0 && Parchment.query(name, Parchment.Scope.BLOT)) {
            let blot = this.isolate(index, length);
            if (value) {
                blot.wrap(name, value);
            }
        } else {
            super.formatAt(index, length, name, value);
        }
    }
};

FitRtBlot.blotName = FITRT_HANDLER;
FitRtBlot.tagName = 'fitrt';
Quill.register(`formats/${FITRT_HANDLER}`, FitRtBlot);

export const RT_HANDLER = 'rt';
class RtBlot extends InlineBlot {
    static create(value: boolean) {
        const node: HTMLQuoteElement = super.create(value);
        if (typeof value === 'string') {
            node.innerHTML = value;
            return node;
        }

        return node;
    }

    formatAt(index: number, length: number, name: string, value: unknown) {
        /** Prevents all other inline format */
        if (['bold', 'italic', FITRT_HANDLER].includes(name) && value === true) return;
        if (RtBlot.compare(this.statics.blotName, name) < 0 && Parchment.query(name, Parchment.Scope.BLOT)) {
            let blot = this.isolate(index, length);
            if (value) {
                blot.wrap(name, value);
            }
        } else {
            super.formatAt(index, length, name, value);
        }
    }
};
RtBlot.blotName = RT_HANDLER;
RtBlot.tagName = 'rt';
Quill.register(`formats/${RT_HANDLER}`, RtBlot);

export const WORD_HANDLER = 'word';
class WordBlot extends InlineBlot {
    static create(value: boolean) {
        const node: HTMLQuoteElement = super.create(value);
        if (typeof value === 'string') {
            node.innerHTML = value;
            return node;
        }

        return node;
    }
};
WordBlot.blotName = WORD_HANDLER;
WordBlot.tagName = 'word';
Quill.register(`formats/${WORD_HANDLER}`, WordBlot);

InlineBlot.order = [
    'cursor',
    'inline', // Must be lower
    'link', // Chrome wants <a> to be lower
    'underline',
    'strike',
    'italic',
    'bold',
    RT_HANDLER,
    FITRT_HANDLER,
    RUBY_HANDLER,
    QUOTE_HANDLER,
    'script',
    'code', // Must be higher
];