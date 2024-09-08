import { InputNumber, Slider } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { CompactPicker } from 'react-color';
import PowerSlider from 'react-input-slider';
import { DefaultColorList, NameStyle } from 'src/model';
import { useLanguage } from 'src/service';

export type GridSliderInputRef = {
    setValue: (value: Partial<{
        x: number;
        y: number;
        width: number;
        color: string;
    }>) => void,
};
export type GridSliderInput = {
    className: string,
    defaultValue: Partial<NameStyle>,
    fieldMap: {
        x: keyof NameStyle,
        y: keyof NameStyle,
        width: keyof NameStyle,
        color: keyof NameStyle,
    },
    labelMap: Partial<Record<keyof NameStyle, React.ReactNode>>,
    onChange: (value: {
        x: number;
        y: number;
        width: number;
        color: string;
    }) => void,
}
export const GridSliderInput = forwardRef<GridSliderInputRef, GridSliderInput>(({
    className,
    defaultValue,
    fieldMap,
    labelMap,
    onChange,
}, ref) => {
    const language = useLanguage();
    const {
        x: xField,
        y: yField,
        color: colorField,
        width: widthField,
    } = fieldMap;
    const [value, setValue] = useState(() => {
        const xValue = defaultValue[xField] as number;
        const yValue = defaultValue[yField] as number;
        const colorValue = defaultValue[colorField] as string;
        const widthValue = defaultValue[widthField] as number;

        return {
            x: xValue ?? 0,
            y: yValue ?? 0,
            width: widthValue ?? 0,
            color: colorValue,
        };
    });
    const {
        x,
        y,
        color,
        width,
    } = value;
    const widthLabel = labelMap[widthField];

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                onChange(value);
            }
        }, 500);

        return () => {
            relevant = false;
        };
        /** No need to depend on handler */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useImperativeHandle(ref, () => ({
        setValue: nextValue => {
            const keyList = Object.keys(nextValue) as (keyof typeof value)[];

            for (const key in keyList) {
                if (nextValue[key as keyof typeof value] !== value[key as keyof typeof value]) {
                    setValue(cur => ({ ...cur, ...nextValue }));
                    return;
                }
            }
        },
    }));

    return <div className={className}>
        <h2>{language['input.name-style.slider.position.label']}</h2>
        <div className="line-position">
            <PowerSlider axis="xy"
                styles={{
                    track: {
                        backgroundColor: 'var(--main-slider)',
                        width: 100,
                        height: 100,
                        gridRow: 'span 3',
                        position: 'relative',
                    },
                    thumb: {
                        backgroundColor: 'var(--sub-slider)',
                        zIndex: 10,
                    },
                }}
                xmax={5} xmin={-5}
                ymax={5} ymin={-5}
                x={x ?? 0}
                y={y ?? 0}
                onChange={({ x, y }) => setValue(cur => ({ ...cur, x, y }))} />
            <div className="single-slider">
                {language['input.name-style.slider.x-offset.label']}: <InputNumber
                    size="small"
                    value={x}
                    onChange={value => setValue(cur => ({ ...cur, x: typeof value === 'number' ? value : parseInt(value ?? '0') }))}
                />
            </div>
            <div className="single-slider">
                {language['input.name-style.slider.y-offset.label']}: <InputNumber
                    size="small"
                    value={y}
                    onChange={value => setValue(cur => ({ ...cur, y: typeof value === 'number' ? value : parseInt(value ?? '0') }))}
                />
            </div>
            <div className="single-slider">
                {widthLabel}: <Slider
                    value={width}
                    min={1}
                    max={10}
                    onChange={value => {
                        if (typeof value === 'number') {
                            setValue(cur => ({ ...cur, width: value }));
                        }
                    }}
                />
            </div>
        </div>
        <h2>{language['input.name-style.slider.color.label']}</h2>
        <CompactPicker
            colors={DefaultColorList}
            color={color}
            onChangeComplete={color => setValue(cur => ({ ...cur, color: color.hex }))}
        />
    </div>;
});