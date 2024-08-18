export const availableCommand = new Set(['1', '2', '3', '4', '5']);
export const resolveHotkey = (
    value: string,
    key: string,
    selectionStart: number,
    selectionEnd: number,
    allowNewLine: boolean,
    onResult: (joinedText: string, newCursorPlacement: number) => void,
) => {
    const selectedText = value.substring(selectionStart, selectionEnd);
    const nextLetter = value[selectionEnd];
    const keepInline = nextLetter === '\n' || !allowNewLine;
    let wrappedText = selectedText;
    let cursorOffset = 2;
    switch (key) {
        case '1': wrappedText = `[${selectedText}]${keepInline ? '' : '\n'}`;
            cursorOffset = keepInline ? 2 : 3;
            break;
        case '2': wrappedText = `{${selectedText}}`; break;
        case '3': wrappedText = `{${selectedText}|}`; break;
        case '4': wrappedText = `{${selectedText}||}`; cursorOffset = 3; break;
        case '5': wrappedText = `{{${selectedText}}}`; cursorOffset = 4; break;
    }
    const joinedText = value.substring(0, selectionStart)
        + `${wrappedText}`
        + value.substring(selectionEnd, value.length);

    onResult(joinedText, selectionEnd + cursorOffset);
};

export const placeCursorInInput = ({
    id,
    placement,
}: {
    id: string;
    placement: number;
}) => {
    if (id && placement >= 0) {
        const target = document.querySelector(`#${id}`) as HTMLInputElement | null;

        if (target && (target.selectionEnd ?? -1) >= 0) {
            target.selectionEnd = placement;
        }
    }
};