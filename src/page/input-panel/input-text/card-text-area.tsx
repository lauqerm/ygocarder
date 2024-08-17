import { availableCommand, placeCursorInInput, resolveHotkey } from './util';
import { Input } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { TextAreaProps } from 'antd/lib/input';

const { TextArea } = Input;
export type CardTextAreaRef = {
    setValue: (nextValue: string) => void,
};
export type CardTextArea = {
    allowHotkey?: boolean,
    defaultValue: string,
    onTakePicker?: (ref: {
        id: string, 
        setValue: (nextValue: string) => void;
    }) => void,
    onChange: (e: { target: { value: string } }) => void,
} & Partial<TextAreaProps>;
export const CardTextArea = forwardRef<CardTextAreaRef, CardTextArea>(({
    id,
    allowHotkey,
    defaultValue,
    onTakePicker,
    onChange,
    onKeyDown,
    className,
    ...rest
}, ref) => {
    const [value, setValue] = useState(defaultValue);
    const [cursorData, setCursorData] = useState({ id: '', placement: -1 });
    const internalOnChange = (value: string) => {
        onChange({ target: { value } });
        setValue(value);
    };

    useEffect(() => {
        placeCursorInInput(cursorData);
    }, [cursorData]);

    const externalSetValue = (nextValue: string) => {
        if (nextValue !== value) {
            internalOnChange(nextValue);
        }
    };
    useImperativeHandle(ref, () => ({
        setValue: externalSetValue,
    }));

    return <TextArea
        id={id}
        autoComplete="off"
        onFocus={() => id && onTakePicker?.({ id, setValue: externalSetValue })}
        allowClear
        spellCheck={false}
        className={`${id}-input ${className}`}
        value={value}
        onKeyDown={ev => {
            onKeyDown?.(ev);
            if (!allowHotkey) return;
            const { ctrlKey, key, metaKey } = ev;
            const selectionStart = ev.currentTarget.selectionStart ?? -1;
            const selectionEnd = ev.currentTarget.selectionEnd ?? -1;
            if ((ctrlKey || metaKey) && id && selectionEnd !== selectionStart && availableCommand.has(key)) {
                ev.preventDefault();
                resolveHotkey(
                    ev.currentTarget.value, key,
                    selectionStart, selectionEnd,
                    true,
                    (joinedText, placement) => {
                        internalOnChange(joinedText);
                        setCursorData({ id, placement });
                    }
                );
            }
        }}
        onChange={ev => internalOnChange(ev.target.value)}
        {...rest}
    />;
});