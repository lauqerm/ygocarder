import { availableCommand, placeCursorInInput, resolveHotkey } from './util';
import { Input } from 'antd';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextAreaProps } from 'antd/lib/input';

const { TextArea } = Input;
export type CardTextAreaRef = {
    setValue: (nextValue: string) => void,
    getPickerRef: () => null | {
        id: string, 
        setValue: (nextValue: string) => void;
    },
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
    const immediateValue = useRef(defaultValue);
    const [value, setValue] = useState(defaultValue);
    const [cursorData, setCursorData] = useState({ id: '', placement: -1 });
    const internalOnChange = useCallback((eventOrValue: string | { target: { value: string }}) => {
        const normalizedValue = typeof eventOrValue === 'string' ? eventOrValue : eventOrValue.target.value;
        immediateValue.current = normalizedValue;
        setValue(normalizedValue);
    }, []);

    useEffect(() => {
        placeCursorInInput(cursorData);
    }, [cursorData]);

    useEffect(() => {
        onChange({ target: { value } });
    /** No need to depend on callback */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const externalSetValue = (nextValue: string) => {
        if (nextValue !== immediateValue.current) {
            internalOnChange(nextValue);
        }
    };
    useImperativeHandle(ref, () => ({
        setValue: externalSetValue,
        getPickerRef: () => id ? ({ id, setValue: externalSetValue }) : null,
    }));

    return <TextArea
        id={id}
        autoComplete="off"
        onFocus={() => id && onTakePicker?.({ id, setValue: externalSetValue })}
        allowClear
        spellCheck={false}
        className={`card-textarea ${id}-input ${className}`}
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
        onChange={internalOnChange}
        {...rest}
    />;
});