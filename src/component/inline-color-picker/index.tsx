
import { Input } from 'antd';
import { useColorPicker } from 'src/service';
import { getContrastColor } from 'src/util';
import styled from 'styled-components';
import { ColorBlock } from '../atom';

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
    .color-input {
        display: grid;
        grid-template-columns: max-content 1fr;
        border-left: var(--bw-lg) solid var(--sub-level-4);
        gap: 3px; // Alignment
        padding-left: 3px; // Alignment
        input {
            width: 58px; // Alignment
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
    value?: string,
    onChange?: (hexValue: string) => void,
}
export const InlineColorPicker = ({
    value = '',
    onChange,
}: InlineColorPicker) => {
    const { color, inputText, setColor } = useColorPicker({ value, onChange });

    return <StyledInlineColorPickerContainer>
        <div className="color-list">
            {InlineColorList.map(({ hex, rgb }) => {
                const dotColor = getContrastColor(rgb);

                return <ColorBlock key={hex}
                    className="color-block"
                    title={hex}
                    style={{ backgroundColor: hex }}
                    onClick={() => onChange?.(hex)}
                >
                    {color.hex.toUpperCase() === hex && <div
                        className="active-dot"
                        style={{
                            backgroundColor: dotColor,
                        }}
                    />}
                </ColorBlock>;
            })}
        </div>
        <div className="color-input">
            <ColorBlock $static style={{ backgroundColor: color.hex }} />
            <Input
                size="small"
                value={inputText}
                onChange={e => {
                    setColor(e.target.value);
                }}
            />
        </div>
    </StyledInlineColorPickerContainer>;
};