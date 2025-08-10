import { Input } from 'antd';
import { CustomPicker, InjectedColorProps } from 'react-color';
import { Saturation } from 'react-color/lib/components/common';
import { UseColorPicker, useColorPicker } from 'src/service';
import { getContrastColor, rgbToHex } from 'src/util';
import styled from 'styled-components';
import { ColorBlock } from '../atom';
import { CloseOutlined } from '@ant-design/icons';
import { IconButton } from '../icon-button';

const SaturationBoardContainer = styled.div`
    position: relative;
    border-radius: var(--br);
    > div,
    .saturation-white,
    .saturation-black {
        border-radius: var(--br);
    }
`;

type UnlinkedSaturationBoard = InjectedColorProps;
const UnlinkedSaturationBoard = ({
    onChange,
    ...props
}: UnlinkedSaturationBoard) => {
    return <SaturationBoardContainer>
        <Saturation
            {...props}
            onChange={color => {
                onChange?.(color);
            }}
        />
    </SaturationBoardContainer>;
};
const SaturationBoard = CustomPicker(UnlinkedSaturationBoard);

const HorizontalSketchColorList = [
    { hex: '#B80000', rgb: [184, 0, 0] },
    { hex: '#EB9694', rgb: [235, 150, 148] },
    { hex: '#DB3E00', rgb: [219, 62, 0] },
    { hex: '#FAD0C3', rgb: [250, 208, 195] },
    { hex: '#FCCB00', rgb: [252, 203, 0] },
    { hex: '#FEF3BD', rgb: [254, 243, 189] },
    { hex: '#008B02', rgb: [0, 139, 2] },
    { hex: '#C1E1C5', rgb: [193, 225, 197] },
    { hex: '#006B76', rgb: [0, 107, 118] },
    { hex: '#BEDADC', rgb: [190, 218, 220] },
    { hex: '#1273DE', rgb: [18, 115, 222] },
    { hex: '#C4DEF6', rgb: [196, 222, 246] },
    { hex: '#004DCF', rgb: [0, 77, 207] },
    { hex: '#BED3F3', rgb: [190, 211, 243] },
    { hex: '#5300EB', rgb: [83, 0, 235] },
    { hex: '#D4C4FB', rgb: [212, 196, 251] },
];

const HorizontalSketchPickerContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.5rem 5rem 4rem max-content 1fr;
    gap: var(--spacing-sm);
    .color-input {
        .color-state {
            display: flex;
            margin-bottom: var(--spacing-xs);
        }
        ${ColorBlock} {
            display: inline-block;
            flex: 1;
            border: var(--bw) solid var(--sub-level-2);
            height: 18px;
        }
    }
    .color-list {
        display: grid;
        grid-template-columns: repeat(${HorizontalSketchColorList.length / 4}, max-content);
        border-radius: var(--br);
        overflow: hidden;
        ${ColorBlock} {
            height: 16px;
            width: 16px;
            box-shadow: none;
            border-radius: 0;
        }
    }
    .rgb-input {
        display: grid;
        grid-template-columns: 1rem 1fr;
        column-gap: var(--spacing-xs);
        font-size: var(--fs-sm);
        input {
            line-height: 1;
            font-size: var(--fs-sm);
        }
        + .rgb-input {
            margin-top: var(--spacing-xxs);
        }
    }
`;
export type HorizontalSketchPicker = {
    children?: React.ReactNode,
} & UseColorPicker;
export const HorizontalSketchPicker = ({
    children,
    onChange,
    value,
}: HorizontalSketchPicker) => {
    const { color, inputText, setColor } = useColorPicker({ value, onChange });
    const noColor = inputText === '';

    return <HorizontalSketchPickerContainer className="horizontal-sketch-picker">
        <div className="input-label">
            {children}
        </div>
        <div className="color-input">
            <div className="color-state">
                <ColorBlock
                    $empty={noColor}
                    style={noColor ? {} : { backgroundColor: color.hex }}
                />
                <IconButton
                    size="sm"
                    Icon={CloseOutlined}
                    onClick={() => {
                        onChange?.('');
                    }}
                />
            </div>
            <Input
                size="small"
                value={inputText}
                onChange={e => {
                    setColor(e.target.value);
                }}
            />
        </div>
        <div className="rgb-input-list">
            {['R', 'G', 'B'].map((entry, index) => {
                return <div key={entry} className="rgb-input">
                    <span>{entry}</span>
                    <Input size="small" value={noColor ? '' : color.rgb[index]} onChange={e => {
                        const nextColor = [...color.rgb];
                        nextColor[index] = parseInt(e.target.value);

                        setColor(rgbToHex(nextColor));
                    }} />
                </div>;
            })}
        </div>
        <div className="color-list">
            {HorizontalSketchColorList.map(({ hex, rgb }) => {
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
        <SaturationBoard color={color.hex} onChange={({ hex }) => setColor(hex)} />
    </HorizontalSketchPickerContainer>;
};