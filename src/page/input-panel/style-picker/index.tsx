import { Checkbox, InputNumber, Slider } from 'antd';
import React, { useRef, useState } from 'react';
import { CompactPicker } from 'react-color';
import { CloseOutlined } from '@ant-design/icons';
import { TextStyle, TextStyleType } from '../../../model';
import PowerSlider from 'react-input-slider';
import { debounce } from 'lodash';
import './style-picker.scss';

export type StylePicker = {
    defaultType: TextStyleType,
	defaultValue: TextStyle,
	onChange: (type: TextStyleType, style: TextStyle) => void,
}
export const StylePicker = React.memo(({
    defaultType,
    defaultValue,
    onChange: undebouncedOnChange,
}: StylePicker) => {
    const [type, setType] = useState(defaultType);
    const [value, setValue] = useState(defaultValue);
    const [isVisible, setVisible] = useState(false);
    const onChange = useRef(debounce(undebouncedOnChange, 250)).current;

    const setCustomValue = <ValueType extends any>(key: keyof TextStyle) => {
        return (inputValue: ValueType) => {
            setValue(curValue => {
                const newStyle = { ...curValue, [key]: inputValue };

                onChange('custom', newStyle);
                return newStyle;
            });
        };
    };

    return <div className="style-picker">
        <div className="style-picker-preview"
            style={type === 'auto'
                ? {}
                : { boxShadow: `${value.shadowOffsetX}px ${value.shadowOffsetY}px ${value.shadowBlur}px 0 ${value.shadowColor}` }}
            onClick={() => setVisible(cur => !cur)}
        >
            <div className="style-picker-display" style={type === 'auto' ? { background: 'white' } : { background: value.fillStyle }}>
                {type === 'auto' ? 'Auto' : <>&nbsp;</>}
            </div>
        </div>
        {isVisible
            ? <div className="style-picker-overlay" style={{ position: 'absolute', zIndex: 2 }}>
                <div className="style-picker-mask" onClick={() => setVisible(false)} />
                <div className="style-picker-auto">
                    <Checkbox value={'auto'} checked={type === 'auto'} onChange={() => {
                        const newType = type === 'auto' ? 'custom' : 'auto';
                        setType(newType);
                        onChange(newType, value);
                    }}>Auto</Checkbox>
                    <CloseOutlined className="style-picker-close" onClick={() => setVisible(false)} />
                </div>
                <div className={'custom-style-picker'}>
                    <div className="custom-style-text">
                        {/* {type === 'auto' && <div className="disable-overlay" />} */}
                        <h2>Text Color</h2>
                        <CompactPicker color={value.fillStyle} onChange={color => {
                            setType('custom');
                            setValue(cur => {
                                const newStyle = { ...cur, fillStyle: color.hex };

                                onChange('custom', newStyle);
                                return newStyle;
                            });
                        }} />
                    </div>
                    <h3 className="custom-style-expand">
                        <Checkbox value={'has-shadow'} checked={value.hasShadow} onChange={() => {
                            setType('custom');
                            setValue(cur => {
                                const newStyle = { ...cur, hasShadow: !cur.hasShadow };

                                onChange('custom', newStyle);
                                return newStyle;
                            });
                        }}>Has Shadow?</Checkbox>
                    </h3>
                    {value.hasShadow && <div className="custom-style-shadow">
                        {/* {type === 'auto' && <div className="disable-overlay" />} */}
                        <h2>Position</h2>
                        <div className="shadow-position">
                            <PowerSlider axis="xy"
                                styles={{
                                    track: {
                                        backgroundColor: '#009ce0',
                                        width: 100,
                                        height: 100,
                                        gridRow: 'span 3',
                                        position: 'relative',
                                    },
                                    thumb: {
                                        backgroundColor: '#91d5ff',
                                        zIndex: 10,
                                    },
                                }}
                                xmax={5} xmin={-5}
                                ymax={5} ymin={-5}
                                x={value.shadowOffsetX}
                                y={value.shadowOffsetY}
                                onChange={({ x, y }) => {
                                    setValue(cur => {
                                        const newStyle = { ...cur,
                                            ...cur,
                                            shadowOffsetX: x,
                                            shadowOffsetY: y,
                                        };

                                        onChange('custom', newStyle);
                                        return newStyle;
                                    });
                                }} />
                            <div className="single-slider">
                                X Offset: <InputNumber size="small" value={value.shadowOffsetX}
                                    onChange={setCustomValue('shadowOffsetX')} />
                            </div>
                            <div className="single-slider">
                                Y Offset: <InputNumber size="small" value={value.shadowOffsetY}
                                    onChange={setCustomValue('shadowOffsetY')} />
                            </div>
                            <div className="single-slider">
                                Blur: <Slider value={value.shadowBlur} min={0} max={10} onChange={(value: number) => {
                                    if (typeof value === 'number') setValue(cur => {
                                        const newStyle = { ...cur, shadowBlur: value };

                                        onChange('custom', newStyle);
                                        return newStyle;
                                    });
                                }} />
                            </div>
                            <div />
                        </div>
                        <h2>Color</h2>
                        <CompactPicker color={value.shadowColor} onChange={color => {
                            setValue(cur => {
                                const newStyle = { ...cur, shadowColor: color.hex };

                                onChange('custom', newStyle);
                                return newStyle;
                            });
                        }} />
                    </div>}
                </div>
            </div>
            : null}
    </div>;
}, () => true);