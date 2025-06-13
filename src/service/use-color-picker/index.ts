import { useEffect, useState } from 'react';
import { HexColorRegex, hexToRGBA } from 'src/util';

export type UseColorPicker = {
    value?: string,
    onChange?: (hexValue: string) => void,
};
export const useColorPicker = ({
    value = '',
    onChange,
}: UseColorPicker) => {
    const [currentText, setCurrentText] = useState(value);
    const [internalValue, setInternalValue] = useState(() => {
        return {
            hex: HexColorRegex.test(value) ? value : '#000000',
            rgb: hexToRGBA(value, false),
        };
    });

    useEffect(() => {
        const normalizedText = currentText.startsWith('#') ? currentText : `#${currentText}`;

        if (HexColorRegex.test(normalizedText)) {
            setCurrentText(normalizedText);
            setInternalValue({
                hex: normalizedText,
                rgb: hexToRGBA(normalizedText, false),
            });
            onChange?.(normalizedText);
        }
        /** No need to depend on callback */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentText]);

    useEffect(() => {
        setCurrentText(value);
        setInternalValue({
            hex: HexColorRegex.test(value) ? value : '#000000',
            rgb: hexToRGBA(value, false),
        });
    }, [value]);

    return {
        inputText: currentText,
        color: internalValue,
        setColor: setCurrentText,
    };
};