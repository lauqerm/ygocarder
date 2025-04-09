import { useEffect, useState } from 'react';
import { ChromePicker, CompactPicker } from 'react-color';
import { DefaultColorList } from 'src/model';
import styled from 'styled-components';

const TextColorPickerContainer = styled.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`;
export type TextColorPicker = {
    color: string,
    onChange: (color: string) => void,
};
export const TextColorPicker = ({
    color,
    onChange,
}: TextColorPicker) => {
    const [internalColor, setInternalColor] = useState(color);

    useEffect(() => {
        setInternalColor(color);
    }, [color]);

    return <TextColorPickerContainer>
        <ChromePicker
            styles={{
                default: {
                    picker: {
                        color: '#000000',
                        background: 'var(--main-level-3)',
                        boxShadow: 'none',
                        padding: 'var(--spacing-sm) var(--spacing)',
                    },
                    body: {
                        padding: 'var(--spacing) var(--spacing)',
                    },
                },
            }}
            disableAlpha={true}
            color={internalColor}
            onChange={color => setInternalColor(color.hex)}
            onChangeComplete={color => {
                setInternalColor(color.hex);
                onChange(color.hex);
            }}
        />
        <CompactPicker
            colors={DefaultColorList}
            color={color}
            onChangeComplete={color => {
                onChange(color.hex);
            }}
        />
    </TextColorPickerContainer>;
};