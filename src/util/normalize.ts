import { contextualDoubleQuoteRegex } from 'src/model';

export const normalizeCardName = (name: string) => {
    try {
        return name
            .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
            .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return name;
    }
};
export const normalizeCardEffect = (effect: string) => {
    try {
        return effect
            .replaceAll(/\{([^{}|]*)\|+?[^{}|]*\}/g, '$1')
            .replaceAll(/(^\[|\[\[|{|{{)([^{}[\]]*)[}\]]{1,2}/gm, '$2');
    } catch (e) {
        console.error(e);
        return effect;
    }
};
export const normalizeOtherText = (text: string) => {
    try {
        return normalizeCardName(text)
            .replaceAll(/<|>/g, '');
    } catch (e) {
        console.error(e);
        return text;
    }
};
export const transformQuote = (text: string) => {
    return text
        .replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')   /** Turn straight single quote ' into contextual curly quote ‘ */
        .replace(/'/g, '\u2019')   /** Close open curly quote ’ */
        .replace(contextualDoubleQuoteRegex, '$1\u201c')   /** Turn straight double quote " into contextual curly double quote “ */
        .replace(/"/g, '\u201d')   /** Close open curly double quote ” */
        .replace(/--/g, '\u2014');                           /** Turn double dash "--" into em-dash "—" */
};
/** Sample image before normalization: `https://images.ygoprodeck.com/images/cards_cropped/46986414.jpg`. We convert into yugicrawler - another public API that allow us to bypass the CORS restriction for these images. If yugicrawler decide that it does not want to support our operation, we have no other options except force user to upload the image manually. */
export const isYgoprodeckImage = (link: string) => {
    try {
        return link.startsWith('https://images.ygoprodeck.com/images/cards_cropped');
    } catch (e) {
        console.error(e);
        return false;
    }
};

export const toDebugMonitor = ({ content, mode }: { content?: string, mode?: 'add' | 'delete' }) => {
    const target = document.getElementById('debug-monitor');
    if (target) {
        if (mode === 'delete') target.innerHTML = '';
        else target.innerHTML = target.innerHTML + '    ' + content;
    }
};

export const DebugCanvas = {
    height: 100,
    width: 600,
};