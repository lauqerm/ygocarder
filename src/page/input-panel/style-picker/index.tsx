import { Checkbox, InputNumber, Popover, Slider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { CompactPicker } from 'react-color';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { defaultTextStyle, TextStyle, TextStyleType } from '../../../model';
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
    const [isColorPickerVisble, setColorPickerVisible] = useState(false);
    const [isShadowPickerVisble, setShadowPickerVisible] = useState(false);
    const [changeSignal, setChangeSignal] = useState(0);
    const updateSignal = () => setChangeSignal(cnt => cnt + 1);
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

    useEffect(() => {
        if (changeSignal !== 0) onChange('custom', value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeSignal]);

    return <div className="ant-input-group-wrapper name-color-input">
        <span className="ant-input-wrapper ant-input-group">
            <span className="ant-input-group-addon">Name Color</span>
            <span className="ant-input-affix-wrapper">
                <div className="ant-radio-group ant-radio-group-outline">
                    <label className={`ant-radio-wrapper ${type === 'auto' ? 'ant-radio-wrapper-checked' : ''}`} onClick={() => {
                        setType('auto');
                        onChange('auto', value);
                    }}>
                        <span className={`ant-radio ${type === 'auto' ? 'ant-radio-checked' : ''}`}>
                            <input type="radio" className="ant-radio-input" value="auto" />
                            <span className="ant-radio-inner" />
                        </span>
                        <span>Auto</span>
                    </label>
                    <label className={`ant-radio-wrapper ${type === 'custom' ? 'ant-radio-wrapper-checked' : ''}`} onClick={() => {
                        setType('custom');
                        onChange('custom', value);
                    }}>
                        <span className={`ant-radio ${type === 'custom' ? 'ant-radio-checked' : ''}`}>
                            <input type="radio" className="ant-radio-input" value="custom" />
                            <span className="ant-radio-inner" />
                        </span>
                        <div className="style-picker">
                            Custom
                            <Popover key="color-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setColorPickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <div className="custom-style-text">
                                            <h2>Text Color</h2>
                                            <CompactPicker color={value.fillStyle} onChange={color => {
                                                setType('custom');
                                                setValue(cur => {
                                                    const newStyle = { ...cur, fillStyle: color.hex };

                                                    return newStyle;
                                                });
                                                updateSignal();
                                            }} />
                                        </div>
                                    </div>
                                </>}
                                visible={isColorPickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown color-picker-dropdown" onClick={() => setColorPickerVisible(cur => !cur)}>
                                    Change Color {isColorPickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                            <Popover key="shadow-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setShadowPickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <h3 className="custom-style-expand">
                                            <Checkbox value={'has-shadow'} checked={value.hasShadow} onChange={() => {
                                                setType('custom');
                                                setValue(cur => {
                                                    const newStyle = { ...cur, hasShadow: !cur.hasShadow };
                    
                                                    return newStyle;
                                                });
                                                updateSignal();
                                            }}>Has Shadow?</Checkbox>
                                        </h3>
                                        {value.hasShadow && <div className="custom-style-shadow">
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

                                                            return newStyle;
                                                        });
                                                        updateSignal();
                                                    }} />
                                                <div className="single-slider">
                                                    X Offset: <InputNumber size="small" value={value.shadowOffsetX} onChange={setCustomValue('shadowOffsetX')} />
                                                </div>
                                                <div className="single-slider">
                                                    Y Offset: <InputNumber size="small" value={value.shadowOffsetY} onChange={setCustomValue('shadowOffsetY')} />
                                                </div>
                                                <div className="single-slider">
                                                    Blur: <Slider value={value.shadowBlur} min={0} max={10} onChange={(value: number) => {
                                                        if (typeof value === 'number') {
                                                            setValue(cur => {
                                                                const newStyle = { ...cur, shadowBlur: value };

                                                                return newStyle;
                                                            });
                                                            updateSignal();
                                                        }
                                                    }} />
                                                </div>
                                                <div />
                                            </div>
                                            <h2>Color</h2>
                                            <CompactPicker color={value.shadowColor} onChange={color => {
                                                let newStyle: TextStyle = defaultTextStyle;
                                                setValue(cur => {
                                                    newStyle = { ...cur, shadowColor: color.hex };

                                                    return newStyle;
                                                });
                                                updateSignal();
                                            }} />
                                        </div>}
                                    </div>
                                </>}
                                visible={isShadowPickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown shadow-picker-dropdown" onClick={() => setShadowPickerVisible(cur => !cur)}>
                                    Change Shadow {isShadowPickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                        </div>
                    </label>
                </div>
            </span>
        </span>
    </div>;
}, () => true);
