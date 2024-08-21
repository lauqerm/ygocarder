import { Checkbox, InputNumber, Popover, Slider, Tooltip } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CompactPicker } from 'react-color';
import { CardOpacity, OpacityList, getDefaultCardOpacity } from 'src/model';
import styled from 'styled-components';

const StyledOpacityPickerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: var(--spacing-sm);
    row-gap: var(--spacing-sm);
    .slider-label,
    .ant-slider,
    .slider-padding {
        border: var(--bw) solid var(--sub-level-1);
        background-color: var(--main-level-4);
    }
    .slider-label {
        display: inline-flex;
        column-gap: var(--spacing-xs);
        border-right: none;
        padding: 0 var(--spacing-xs);
        border-radius: var(--br) 0 0 var(--br);
        box-shadow: var(--bs-input);
    }
    .ant-slider {
        margin: 0;
        border-left: none;
        border-right: none;
        height: 25px;
        padding-top: 9px; // Alignment
    }
    .slider-padding {
        border-left: none;
        border-radius: 0 var(--br) var(--br) 0;
    }
    .ant-slider-rail,
    .ant-slider-track {
        border-radius: 0 var(--br) var(--br) 0;
    }
    .card-opacity-slider {
        flex: 0 1 auto;
        display: grid;
        grid-template-columns: max-content 60px 45px 12px;
        &.inactive {
            .slider-label,
            .ant-slider,
            .slider-padding {
                background-color: var(--main-level-3);
            }
        }
    }
    .ant-input-number {
        height: 25px; // Alignment
        width: unset;
        border-radius: 0;
        box-shadow: var(--bs-input);
    }
    .base-fill-button {
        display: inline-block;
        line-height: 0;
        width: 17px;
        height: 17px; // Alignment
        align-self: center;
        box-shadow: 0 0 0 1px #333333 inset;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 0 1px #333333 inset, 0 0 2px 0 #222222;
        }
    }
`;
const StyledBaseFillPickerContainer = styled.div`
    i {
        display: inline-block;
        padding: var(--spacing-xs);
        font-size: var(--fs-sm);
        color: var(--color);
        max-width: 245px;   // Alignment
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
        <Tooltip
            overlayClassName="long-tooltip-overlay"
            title={<>
                If turned off, allow card art to extend beyond artwork boundary.
                <br />
                Also stop applying art finish.
            </>}
        >
            <Checkbox
                className="art-frame"
                onChange={value => setOpacity(cur => ({ ...cur, artFrame: value.target.checked }))}
                checked={opacity.artFrame}
            >
                {'Rigid Frame'}
            </Checkbox>
        </Tooltip>
        {OpacityList.map(({ label, type, subType, tooltip }) => {
            if (type === 'pendulum' && !isPendulum) return null;
            const activable = !!subType;
            const isActive = subType && opacity[subType];
            // if (type === 'body' && opacity.artFrame === false) return null;
            return <div key={type}
                className={[
                    'card-opacity-slider', 
                    isActive ? '' : 'inactive',
                ].join(' ')}
            >
                <div className="slider-label">
                    {type === 'body' && <Popover
                        trigger={['click']}
                        overlayClassName="input-overlay style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <StyledBaseFillPickerContainer className={'custom-style-picker'}>
                                <h3>Background Color</h3>
                                <i>If you use a transparent image, this will be the background color.</i>
                                <br />
                                <CompactPicker color={opacity.baseFill} onChangeComplete={color => {
                                    setOpacity(cur => ({ ...cur, baseFill: color.hex }));
                                }} />
                            </StyledBaseFillPickerContainer>
                        </div>}
                        placement="bottom"
                    >
                        <div className="base-fill-button" style={{ backgroundColor: opacity.baseFill }} />
                    </Popover>}
                    {activable && <Tooltip title={tooltip} overlayClassName="long-tooltip-overlay">
                        <Checkbox
                            checked={isActive}
                            onChange={e => subType && setOpacity(cur => ({ ...cur, [subType]: e.target.checked }))}
                        />
                    </Tooltip>}
                    {label}
                </div>
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