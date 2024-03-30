import { Checkbox, Dropdown, InputNumber, Menu, Popover, Slider, Tooltip } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { CompactPicker } from 'react-color';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { PresetList, TextStyle, TextStyleType } from '../../../model';
import PowerSlider from 'react-input-slider';
import debounce from 'lodash.debounce';
import { parsePalette, stringifyPalette, useRefresh } from 'src/util';
import { TextGradientPicker } from './gradient-picker';
import './style-picker.scss';

export type StylePicker = {
    defaultType: TextStyleType,
    defaultValue: Partial<TextStyle>,
    onChange: (type: TextStyleType, style: Partial<TextStyle>) => void,
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
    const [isOutlinePickerVisble, setOutlinePickerVisible] = useState(false);
    const [isGradientPickerVisble, setGradientPickerVisible] = useState(false);
    const [requestSendStyle, requestSendStyleSignal] = useRefresh();
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
        if (requestSendStyleSignal !== 0) onChange('custom', value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestSendStyleSignal]);

    const {
        fillStyle,
        hasOutline, lineColor, lineWidth, lineOffsetX, lineOffsetY,
        hasShadow, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY,
        hasGradient, gradientColor, gradientAngle,
    } = value;
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
                        <span className="ant-radio-label">Auto</span>
                    </label>
                    <label className={`ant-radio-wrapper ${type === 'predefined' ? 'ant-radio-wrapper-checked' : ''}`} onClick={() => {
                        setType('predefined');
                    }}>
                        <span className={`ant-radio ${type === 'predefined' ? 'ant-radio-checked' : ''}`}>
                            <input type="radio" className="ant-radio-input" value="predefined" />
                            <span className="ant-radio-inner" />
                        </span>
                        <Dropdown
                            arrow
                            placement="bottomLeft"
                            overlay={<Menu>
                                {PresetList.map(({ key, image, label }) => {
                                    return <Menu.Item key={key}
                                        className={`preset-item ${value.preset === key ? 'menu-active' : ''}`}
                                        onClick={() => {
                                            setValue(cur => ({ ...cur, preset: key }));
                                            onChange('predefined', { ...value, preset: key });
                                        }}
                                    >
                                        <Tooltip title={label} placement="right">
                                            <img className="preset-preview" src={`${process.env.PUBLIC_URL}/${image}`} alt={label} />
                                        </Tooltip>
                                    </Menu.Item>;
                                })}
                            </Menu>}
                        >
                            <span className="ant-radio-label">Predefined</span>
                        </Dropdown>
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
                            <span className="ant-radio-label">Custom</span>
                            <Popover key="color-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setColorPickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <div className="custom-style-text">
                                            <h2>Text Color</h2>
                                            <CompactPicker color={fillStyle} onChangeComplete={color => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, fillStyle: color.hex }));
                                                requestSendStyle();
                                            }} />
                                        </div>
                                    </div>
                                </>}
                                visible={isColorPickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown color-picker-dropdown" onClick={() => setColorPickerVisible(cur => !cur)}>
                                    Color {isColorPickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                            <Popover key="shadow-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setShadowPickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <h3 className="custom-style-expand">
                                            <Checkbox value={'has-shadow'} checked={hasShadow} onChange={() => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, hasShadow: !cur.hasShadow }));
                                                requestSendStyle();
                                            }}>Has Shadow?</Checkbox>
                                        </h3>
                                        {hasShadow && <div className="custom-style-shadow">
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
                                                    x={shadowOffsetX ?? 0}
                                                    y={shadowOffsetY ?? 0}
                                                    onChange={({ x, y }) => {
                                                        setValue(cur => {
                                                            const newStyle = {
                                                                ...cur,
                                                                shadowOffsetX: x,
                                                                shadowOffsetY: y,
                                                            };

                                                            return newStyle;
                                                        });
                                                        requestSendStyle();
                                                    }} />
                                                <div className="single-slider">
                                                    X Offset: <InputNumber size="small" value={shadowOffsetX} onChange={setCustomValue('shadowOffsetX')} />
                                                </div>
                                                <div className="single-slider">
                                                    Y Offset: <InputNumber size="small" value={shadowOffsetY} onChange={setCustomValue('shadowOffsetY')} />
                                                </div>
                                                <div className="single-slider">
                                                    Blur: <Slider value={shadowBlur} min={0} max={10} onChange={(value: number) => {
                                                        if (typeof value === 'number') {
                                                            setValue(cur => {
                                                                const newStyle = { ...cur, shadowBlur: value };

                                                                return newStyle;
                                                            });
                                                            requestSendStyle();
                                                        }
                                                    }} />
                                                </div>
                                                <div />
                                            </div>
                                            <h2>Color</h2>
                                            <CompactPicker color={shadowColor} onChangeComplete={color => {
                                                setValue(cur => ({ ...cur, shadowColor: color.hex }));
                                                requestSendStyle();
                                            }} />
                                        </div>}
                                    </div>
                                </>}
                                visible={isShadowPickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown shadow-picker-dropdown" onClick={() => setShadowPickerVisible(cur => !cur)}>
                                    Shadow {isShadowPickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                            <Popover key="outline-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setOutlinePickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <h3 className="custom-style-expand">
                                            <Checkbox value={'has-line'} checked={hasOutline} onChange={() => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, hasOutline: !cur.hasOutline }));
                                                requestSendStyle();
                                            }}>Has outline?</Checkbox>
                                        </h3>
                                        {hasOutline && <div className="custom-style-line">
                                            <h2>Position</h2>
                                            <div className="line-position">
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
                                                    x={lineOffsetX ?? 0}
                                                    y={lineOffsetY ?? 0}
                                                    onChange={({ x, y }) => {
                                                        setValue(cur => {
                                                            const newStyle = {
                                                                ...cur,
                                                                lineOffsetX: x,
                                                                lineOffsetY: y,
                                                            };

                                                            return newStyle;
                                                        });
                                                        requestSendStyle();
                                                    }} />
                                                <div className="single-slider">
                                                    X Offset: <InputNumber size="small" value={lineOffsetX} onChange={setCustomValue('lineOffsetX')} />
                                                </div>
                                                <div className="single-slider">
                                                    Y Offset: <InputNumber size="small" value={lineOffsetY} onChange={setCustomValue('lineOffsetY')} />
                                                </div>
                                                <div className="single-slider">
                                                    Thickness: <Slider value={lineWidth} min={1} max={10} onChange={(value: number) => {
                                                        if (typeof value === 'number') {
                                                            setValue(cur => {
                                                                const newStyle = { ...cur, lineWidth: value };

                                                                return newStyle;
                                                            });
                                                            requestSendStyle();
                                                        }
                                                    }} />
                                                </div>
                                                <div />
                                            </div>
                                            <h2>Color</h2>
                                            <CompactPicker color={lineColor} onChangeComplete={color => {
                                                setValue(cur => ({ ...cur, lineColor: color.hex }));
                                                requestSendStyle();
                                            }} />
                                        </div>}
                                    </div>
                                </>}
                                visible={isOutlinePickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown outline-picker-dropdown" onClick={() => setOutlinePickerVisible(cur => !cur)}>
                                    Outline {isOutlinePickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                            <Popover key="gradient-picker"
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<>
                                    <div className="style-picker-mask" onClick={() => setGradientPickerVisible(false)} />
                                    <div className={'custom-style-picker'}>
                                        <h3 className="custom-style-expand">
                                            <Checkbox value={'has-gradient'} checked={hasGradient} onChange={() => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, hasGradient: !cur.hasGradient }));
                                                requestSendStyle();
                                            }}>Has gradient?</Checkbox>
                                        </h3>
                                        {hasGradient && <div className="custom-style-gradient">
                                            <TextGradientPicker
                                                angle={gradientAngle}
                                                palette={parsePalette(gradientColor)}
                                                onChange={(palette, gradientAngle) => {
                                                    setValue(cur => ({ ...cur, gradientAngle, gradientColor: stringifyPalette(palette) }));
                                                    requestSendStyle();
                                                }}
                                            />
                                        </div>}
                                    </div>
                                </>}
                                visible={isGradientPickerVisble}
                                placement="bottom"
                            >
                                <div className="picker-dropdown gradient-picker-dropdown" onClick={() => setGradientPickerVisible(cur => !cur)}>
                                    Gradient {isGradientPickerVisble ? <CaretUpOutlined /> : <CaretDownOutlined />}
                                </div>
                            </Popover>
                            <Dropdown key="font-picker"
                                overlayClassName="input-overlay font-picker-overlay"
                                overlay={<Menu>
                                    {[
                                        { key: 'Default', label: 'Default' },
                                        { key: 'Arial', label: 'Arial (Bold)' },
                                    ].map(({ key, label }) => {
                                        return <Menu.Item key={key}
                                            className={value.font === key ? 'menu-active' : ''}
                                            onClick={() => {
                                                setValue(cur => ({ ...cur, font: key }));
                                                requestSendStyle();
                                            }}
                                        >
                                            {label}
                                        </Menu.Item>;
                                    })}
                                </Menu>}
                                placement="bottomLeft"
                            >
                                <div className="picker-dropdown font-picker-dropdown">
                                    Font
                                </div>
                            </Dropdown>
                        </div>
                    </label>
                </div>
            </span>
        </span>
    </div>;
}, () => true);
