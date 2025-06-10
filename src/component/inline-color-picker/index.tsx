
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { HexColorRegex, hexToRGBA } from 'src/util';
import styled from 'styled-components';

/** Spacing in this component mimic react-color's */
const StyledInlineColorPickerContainer = styled.div`
    color: var(--color);
    text-shadow: var(--ts);
    font-weight: 500;
    padding: 5px;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3px;
    .color-list {
        display: flex;
        flex-wrap: nowrap;
        gap: 3px;
    }
    .color-block {
        height: 17px;
        width: 17px;
        cursor: pointer;
        position: relative;
        outline: none;
        border: var(--bw) solid var(--sub-level-4);
        &.static-block {
            cursor: default;
            height: 9px;
            width: 9px;
            margin: 4px 0;
            border: none;
        }
    }
    .active-dot {
        position: absolute;
        inset: var(--spacing-xs);
        background: rgb(0, 0, 0);
        border-radius: 50%;
        opacity: 1;
    }
    .color-input {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 3px;
        border-left: var(--bw-lg) solid var(--sub-level-4);
        padding-left: 3px;
        input {
            width: 58px;
            font-size: var(--fs-sm);
            line-height: 1;
            border: none;
            padding: 0 5px;
        }
    }
`;
const InlineColorList = [
    { hex: '#FFFFFF', rgb: [255, 255, 255] },
    { hex: '#000000', rgb: [0, 0, 0] },
    { hex: '#FF0000', rgb: [255, 0, 0] },
    { hex: '#FFFF00', rgb: [255, 255, 0] },
    { hex: '#00FF00', rgb: [0, 255, 0] },
    { hex: '#00FFFF', rgb: [0, 255, 255] },
    { hex: '#0000FF', rgb: [0, 0, 255] },
    { hex: '#FF00FF', rgb: [255, 0, 255] },
];

export type InlineColorPicker = {
    disabled?: boolean,
    value?: string,
    onChange?: (hexValue: string) => void,
}
export const InlineColorPicker = ({
    disabled,
    value = '',
    onChange,
}: InlineColorPicker) => {
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

    return <StyledInlineColorPickerContainer>
        <div className="color-list">
            {InlineColorList.map(({ hex, rgb }) => {
                /** Contrast formula from google \ :v / */
                const dotColor = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 >= 128
                    ? '#000000'
                    : '#FFFFFF';

                return <div key={hex}
                    className="color-block"
                    title={hex}
                    style={{ backgroundColor: hex }}
                    onClick={() => onChange?.(hex)}
                >
                    {internalValue.hex.toUpperCase() === hex && <div
                        className="active-dot"
                        style={{
                            backgroundColor: dotColor,
                        }}
                    />}
                </div>;
            })}
        </div>
        <div className="color-input">
            <div className="color-block static-block" style={{ backgroundColor: internalValue.hex }} />
            <Input
                size="small"
                value={currentText}
                onChange={e => {
                    setCurrentText(e.target.value);
                }}
            />
        </div>
    </StyledInlineColorPickerContainer>;
};