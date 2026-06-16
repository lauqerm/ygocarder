export const isImageData = (data: unknown) => typeof data === 'string' && data.startsWith('data:image/');

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
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        const newurl = window.location.protocol
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

export const isJsonObjectEqual = (payload1: unknown, payload2: unknown, loose = false) => {
    /**
     * Check `array`, `object` và `null`
     */
    if (typeof payload1 === 'object' && typeof payload2 === 'object') {
        if (payload1 === null || payload2 === null) return payload1 === payload2;

        if (Array.isArray(payload1) && Array.isArray(payload2)) {
            if (payload1.length !== payload2.length) return false;

            for (let cnt = 0; cnt < payload1.length; cnt++) {
                if (isJsonObjectEqual(payload1[cnt], payload2[cnt], loose) === false) return false;
            }
            return true;
        }

        if (payload1.toString() === '[object Object]' && payload2.toString() === '[object Object]') {
            if (Object.keys(payload1).length !== Object.keys(payload2).length) return false;

            for (const key of Object.keys(payload1)) {
                if (isJsonObjectEqual(
                    payload1[key as keyof typeof payload1],
                    payload2[key as keyof typeof payload2],
                    loose,
                ) === false) return false;
            }
            return true;
        }

        if (loose) return `${payload1}` === `${payload2}`;
        else return payload1 === payload2;
    }
    /**
     * Check `number` và `string`
     */
    return payload1 === payload2;
};

type DocumentWithOutdatedFeature = Document & {
    selection: {
        createRange: () => ({
            text: string,
        }),
    },
};
export function insertAtCursor(target: HTMLTextAreaElement, myValue: string) {
    //IE support
    if ((document as DocumentWithOutdatedFeature).selection) {
        target.focus();
        const sel = (document as DocumentWithOutdatedFeature).selection.createRange();
        sel.text = myValue;

        return {
            value: target.value,
            position: 0,
        };
    }
    //MOZILLA and others
    else if (target.selectionStart || target.selectionStart === 0) {
        const startPos = target.selectionStart;
        const endPos = target.selectionEnd;
        target.value = target.value.substring(0, startPos)
            + myValue
            + target.value.substring(endPos, target.value.length);
        target.selectionStart = startPos + myValue.length;
        target.selectionEnd = startPos + myValue.length;
        target.focus();

        return {
            value: target.value,
            position: startPos + myValue.length,
        };
    } else {
        target.value += myValue;

        return {
            value: target.value,
            position: 0,
        };
    }
};

export async function parallelLimit<T>(
    tasks: (() => Promise<T>)[],
    maxConcurrent: number
): Promise<T[]> {
    const results: T[] = new Array(tasks.length);
    let nextIndex = 0;

    async function worker(): Promise<void> {
        while (nextIndex < tasks.length) {
            const index = nextIndex++;
            results[index] = await tasks[index]();
        }
    }

    const workers = Array.from(
        { length: Math.min(maxConcurrent, tasks.length) },
        () => worker()
    );

    await Promise.all(workers);
    return results;
};

export function capitalizeFirstLetter(str: string) {
    if (!str) return ''; // Handle empty strings safely
    return str.charAt(0).toUpperCase() + str.slice(1);
};