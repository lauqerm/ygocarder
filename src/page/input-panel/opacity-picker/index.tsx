import { Checkbox, InputNumber, Slider } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CardOpacity, OpacityList, getDefaultCardOpacity } from 'src/model';

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

    return <div className="card-opacity-slider-container">
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
                    onChange={value => setOpacity(cur => ({ ...cur, [type]: value }))}
                    value={opacity[type] ?? 100}
                />
                <div className="slider-padding" />
            </div>;
        })}
    </div>;
});