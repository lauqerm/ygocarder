export const randomCharacter = (charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = 1) => {
    let result = '';
    const charactersLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const randomSetID = (format: string) => {
    return `${randomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)}-${format === 'OCG' ? 'JP' : 'EN'}${randomCharacter('0123456789', 3)}`;
};

export const randomPassword = () => {
    return `${randomCharacter('0123456789', 8)}`;
};

export const nextChar = (c: string) => {
    return String.fromCharCode(c.charCodeAt(0) + 1);
};

export function insertUrlParam(key: string, value: string) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    }
};

export const normalizedCardName = (name: string) => {
    return name.replaceAll(/\{([^{}|]*)\|?[^{}|]*\}/g, '$1');
};

export * from './categorize';
export * from './condenser';
export * from './font';
export * from './gradient';
export * from './hook';
export * from './shortener';