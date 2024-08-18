import { Checkbox, InputNumber, Slider } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CardOpacity, OpacityList, getDefaultCardOpacity } from 'src/model';
import styled from 'styled-components';

const StyledOpacityPickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 0.5rem;
    .slider-label,
    .ant-slider,
    .slider-padding {
        border: 1px solid var(--sub-level-1);
        background-color: var(--main-level-3);
    }
    .slider-label {
        border-right: none;
        padding: 0 5px;
        border-radius: 2px 0 0 2px;
        box-shadow: var(--bs-input);
    }
    .ant-slider {
        margin: 0;
        border-left: none;
        border-right: none;
        height: 25px;
        padding-top: 9px;
    }
    .slider-padding {
        border-left: none;
        border-radius: 0 2px 2px 0;
    }
    .ant-slider-rail,
    .ant-slider-track {
        border-radius: 0 2px 2px 0;
    }
    .card-opacity-slider {
        flex: 0 1 auto;
        display: grid;
        grid-template-columns: max-content 60px 50px 12px;
    }
    .ant-input-number {
        height: 25px; // Alignment
        width: unset;
        border-radius: 0;
        box-shadow: var(--bs-input);
    }
`;

export type OpacityPicker = {
    defaultValue: Partial<CardOpacity>,
    isPendulum: boolean,
    onChange: (opacity: CardOpacity) => void,
};
export type OpacityPickerRef = {
    setValue: (opacity: Partial<CardOpacity>) => void,
};
export const OpacityPicker = forwardRef<OpacityPickerRef, OpacityPicker>(({
    defaultValue,
    isPendulum,
    onChange,
}, ref) => {
    const [opacity, setOpacity] = useState({ ...getDefaultCardOpacity(), ...defaultValue });

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                onChange(opacity);
            }
        }, 500);

        return () => {
            relevant = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [opacity]);

    useImperativeHandle(ref, () => ({
        setValue: newValue => {
            for (const key in newValue) {
                if (newValue[key as keyof CardOpacity] !== opacity[key as keyof CardOpacity]) {
                    setOpacity(cur => ({ ...cur, ...newValue }));
                }
            }
        }
    }));

    return <StyledOpacityPickerContainer className="card-opacity-slider-container">
        <Checkbox
            className="art-frame"
            onChange={value => setOpacity(cur => ({ ...cur, artFrame: value.target.checked }))}
            checked={opacity.artFrame}
        >
            {'Frame'}
        </Checkbox>
        {OpacityList.map(({ label, value: type }) => {
            if (type === 'pendulum' && !isPendulum) return null;
            if (type === 'body' && opacity.artFrame === false) return null;
            return <div key={type} className="card-opacity-slider">
                <div className="slider-label">{label}</div>
                <InputNumber
                    size="small"
                    min={0}
                    max={100}
                    onChange={value => setOpacity(cur => ({ ...cur, [type]: typeof value === 'number' ? value : 100 }))}
                    value={opacity[type] ?? 100}
                />
                <Slider
                    min={0}
                    max={100}
                    step={5}
                    onChange={value => setOpacity(cur => ({ ...cur, [type]: value }))}
                    value={opacity[type] ?? 100}
                />
                <div className="slider-padding" />
            </div>;
        })}
    </StyledOpacityPickerContainer>;
});