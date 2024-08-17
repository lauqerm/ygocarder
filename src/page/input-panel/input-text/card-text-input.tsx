import { availableCommand, placeCursorInInput, resolveHotkey } from './util';
import { Input } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { InputProps } from 'antd/lib/input';
import { useSetting } from 'src/service';

export type CardTextInputRef = {
    setValue: (nextValue: string) => void,
};
export type CardTextInput = {
    defaultValue: string,
    onTakePicker?: (ref: {
        id: string, 
        setValue: (nextValue: string) => void;
    }) => void,
    onChange: (e: {target: { value: string }}) => void,
} & Partial<InputProps>;
export const CardTextInput = forwardRef<CardTextInputRef, CardTextInput>(({
    id,
    defaultValue,
    onTakePicker,
    onChange,
    onKeyDown,
    className,
    ...rest
}, ref) => {
    const { setting } = useSetting();
    const { allowHotkey } = setting;
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

    return <Input
        id={id}
        autoComplete="off"
        onFocus={() => id && onTakePicker?.({ id, setValue: externalSetValue })}
        allowClear
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
                    false,
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