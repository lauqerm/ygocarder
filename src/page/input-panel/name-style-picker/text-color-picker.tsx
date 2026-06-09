import { lazy, Suspense, useEffect, useState } from 'react';
import { LoadingLabel } from 'src/component';
import { DefaultColorList } from 'src/model';
import styled from 'styled-components';

const CompactPicker = lazy(() => import('react-color').then(({ CompactPicker }) => ({ default: CompactPicker })));
const ChromePicker = lazy(() => import('react-color').then(({ ChromePicker }) => ({ default: ChromePicker })));
const TextColorPickerContainer = styled.div`
    .chrome-picker {
        /** Target color format swapper in picker's body */
        > div:nth-child(2) > .flexbox-fix:nth-child(2) {
            display: none !important;
        }
    }
`;
export type TextColorPicker = {
    color?: string,
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
        <Suspense fallback={<LoadingLabel margin="all" />}>
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
        </Suspense>
    </TextColorPickerContainer>;
};