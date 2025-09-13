export const isImageData = (data: any) => typeof data === 'string' && data.startsWith('data:image/');

export const downloadBlob = (name: string, blob: Blob, type: string) => {
    const link = document.createElement('a');
    const href = window.URL.createObjectURL(blob);

    link.download = name;
    link.href = href;
    link.dataset.downloadurl = [type, link.download, link.href].join(':');

    const downloadEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(downloadEvent);
    link.remove();
    window.URL.revokeObjectURL(href);
};

export const nextChar = (c: string) => {
    return String.fromCharCode(c.charCodeAt(0) + 1);
};

export function insertUrlParam(key: string, value: string) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol
            + '//'
            + window.location.host
            + window.location.pathname
            + '?'
            + searchParams.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    }
};

export const setCharAt = (str: string, index: number, chr: string) => {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
};

export const filterFromTrail = (list: (string | undefined | null)[]) => {
    const nextList = [...list];
    for (let cnt = list.length - 1; cnt >= 0; cnt--) {
        if (nextList[cnt] == null || nextList[cnt] === '') {
            nextList.pop();
        } else {
            break;
        }
    }

    return nextList;
};

export const padRight = <Value extends (string | undefined | null)[]>(list: Value, limit: number, padUnit = '') => {
    const nextList = [...list];
    for (let cnt = list.length; cnt < limit; cnt++) {
        nextList.push(padUnit);
    }

    return nextList;
};