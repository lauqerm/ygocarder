import { Checkbox, InputNumber, Popover, Slider, Tooltip } from 'antd';
import React, { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle, ForwardedRef } from 'react';
import { CompactPicker } from 'react-color';
import { CaretDownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { PresetNameStyleList, PresetNameStyleMap, NameStyle, NameStyleType, PatternList, FrameInfo } from '../../../model';
import PowerSlider from 'react-input-slider';
import debounce from 'lodash.debounce';
import { stringifyPalette, useRefresh } from 'src/util';
import { TextGradientPicker } from './gradient-picker';
import { NameFontOptionList } from '../const';
import { StyledDropdown } from 'src/component';
import {
    StyledPredefinedContainer,
    StyledPredefinedOption,
    StyledPatternContainer,
    StyledPatternOption,
    StyledPickerButton,
} from './style-picker.styled';
import './style-picker.scss';

export type StylePickerRef = {
    setValue: (value: Partial<NameStyle>) => void,
};
export type StylePicker = {
    frameInfo?: FrameInfo,
    defaultType: NameStyleType,
    defaultValue: Partial<NameStyle>,
    showExtraDecorativeOption: boolean,
    onChange: (type: NameStyleType, style: Partial<NameStyle>) => void,
};
export const StylePicker = React.memo(forwardRef(({
    frameInfo,
    defaultType,
    defaultValue,
    showExtraDecorativeOption,
    onChange: undebouncedOnChange,
}: StylePicker, ref: ForwardedRef<StylePickerRef>) => {
    const [type, setType] = useState(defaultType);
    const [value, setValue] = useState(defaultValue);
    const [requestSendStyle, requestSendStyleSignal] = useRefresh();
    const onChange = useRef(debounce(undebouncedOnChange, 250)).current;
    const memoizedOnGradientChange = useCallback((palette, gradientAngle) => {
        setValue(cur => ({ ...cur, gradientAngle, gradientColor: stringifyPalette(palette) }));
        requestSendStyle();
    }, [requestSendStyle]);

    const setCustomValue = <ValueType extends any>(key: keyof NameStyle) => {
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

    useImperativeHandle(ref, () => ({
        setValue: nextValue => setValue(currentValue => ({ ...currentValue, ...nextValue }))
    }));

    const {
        fillStyle,
        headTextFillStyle,
        hasOutline, lineColor, lineWidth, lineOffsetX, lineOffsetY,
        hasShadow, shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY,
        hasGradient, gradientColor, gradientAngle,
        pattern,
    } = value;
    const { labelBackgroundColor, labelBackgroundImage } = frameInfo ?? {};
    const patternStyle = {
        background: labelBackgroundColor,
        backgroundImage: labelBackgroundImage,
    };
    const isStyleCustom = type === 'custom';
    const isStylePredefined = type === 'predefined';
    return <div className="ant-input-group-wrapper name-color-input">
        <span className="ant-input-wrapper ant-input-group">
            <span className="ant-input-group-addon">Name Style</span>
            <span className="name-style-input-container">
                <div className="ant-radio-group ant-radio-group-outline">
                    <label
                        className={`ant-radio-wrapper ${type === 'auto' ? 'ant-radio-wrapper-checked' : ''}`}
                        onClick={() => {
                            setType('auto');
                            if (type !== 'auto') onChange('auto', value);
                        }}
                    >
                        <span className={`ant-radio ${type === 'auto' ? 'ant-radio-checked' : ''}`}>
                            <input type="radio" className="ant-radio-input" value="auto" />
                            <span className="ant-radio-inner" />
                        </span>
                        <span className="ant-radio-label">Auto</span>
                    </label>
                    <label
                        className={`ant-radio-wrapper ${isStylePredefined ? 'ant-radio-wrapper-checked' : ''}`}
                        onClick={() => {
                            setType('predefined');
                        }}
                    >
                        <Popover
                            placement="bottomLeft"
                            overlayClassName="predefined-picker-overlay"
                            content={<div className="overlay-event-absorber">
                                <StyledPredefinedContainer>
                                    {PresetNameStyleList.map(({ key, image, label }) => {
                                        return <StyledPredefinedOption key={key}
                                            className={`preset-item ${value.preset === key && isStylePredefined ? 'menu-active' : ''}`}
                                            onClick={() => {
                                                setValue(cur => ({
                                                    ...cur,
                                                    preset: key,
                                                    ...PresetNameStyleMap[key as keyof typeof PresetNameStyleMap]?.value ?? {},
                                                }));
                                                onChange(
                                                    'predefined',
                                                    {
                                                        ...value,
                                                        preset: key,
                                                        ...PresetNameStyleMap[key as keyof typeof PresetNameStyleMap]?.value ?? {},
                                                    },
                                                );
                                            }}
                                        >
                                            <Tooltip title={label} placement="right">
                                                <img className="preset-preview" src={`${process.env.PUBLIC_URL}/${image}`} alt={label} />
                                            </Tooltip>
                                        </StyledPredefinedOption>;
                                    })}
                                </StyledPredefinedContainer>
                            </div>}
                        >
                            <span>
                                <span className={`ant-radio ${isStylePredefined ? 'ant-radio-checked' : ''}`}>
                                    <input type="radio" className="ant-radio-input" value="predefined" />
                                    <span className="ant-radio-inner" />
                                </span>
                                <span className="ant-radio-label">Predefined</span>
                            </span>
                        </Popover>
                    </label>
                    <label
                        className={`ant-radio-wrapper ${type === 'custom' ? 'ant-radio-wrapper-checked' : ''}`}
                        onClick={() => {
                            setType('custom');
                            if (type !== 'custom') onChange('custom', value);
                        }}
                    >
                        <span className={`ant-radio ${type === 'custom' ? 'ant-radio-checked' : ''}`}>
                            <input type="radio" className="ant-radio-input" value="custom" />
                            <span className="ant-radio-inner" />
                        </span>
                        <div className="style-picker">
                            <span className="ant-radio-label">Custom</span>
                            <Popover key="color-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<div className="overlay-event-absorber">
                                    <div className={'custom-style-picker'}>
                                        <div className="custom-style-text">
                                            <h3>Text Color</h3>
                                            <CompactPicker color={fillStyle} onChangeComplete={color => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, fillStyle: color.hex }));
                                                requestSendStyle();
                                            }} />
                                        </div>
                                        <hr />
                                        <div className="custom-style-text">
                                            <h3>Ruby Color (<small>Japanese Furigana</small>)</h3>
                                            <CompactPicker color={headTextFillStyle} onChangeComplete={color => {
                                                setType('custom');
                                                setValue(cur => ({ ...cur, headTextFillStyle: color.hex }));
                                                requestSendStyle();
                                            }} />
                                        </div>
                                    </div>
                                </div>}
                                placement="bottom"
                            >
                                <StyledPickerButton className="picker-dropdown color-picker-dropdown">
                                    Color <CaretDownOutlined />
                                </StyledPickerButton>
                            </Popover>
                            {showExtraDecorativeOption && <Popover key="shadow-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<div className="overlay-event-absorber">
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
                                </div>}
                                placement="bottom"
                            >
                                <StyledPickerButton
                                    $active={isStyleCustom && hasShadow}
                                    className="picker-dropdown shadow-picker-dropdown"
                                >
                                    Shadow <CaretDownOutlined />
                                </StyledPickerButton>
                            </Popover>}
                            <Popover key="outline-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<div className="overlay-event-absorber">
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
                                                    X Offset: <InputNumber
                                                        size="small"
                                                        value={lineOffsetX}
                                                        onChange={setCustomValue('lineOffsetX')}
                                                    />
                                                </div>
                                                <div className="single-slider">
                                                    Y Offset: <InputNumber
                                                        size="small"
                                                        value={lineOffsetY}
                                                        onChange={setCustomValue('lineOffsetY')}
                                                    />
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
                                </div>}
                                placement="bottom"
                            >
                                <StyledPickerButton
                                    $active={isStyleCustom && hasOutline}
                                    className="picker-dropdown outline-picker-dropdown"
                                >
                                    Outline <CaretDownOutlined />
                                </StyledPickerButton>
                            </Popover>
                            {showExtraDecorativeOption && <Popover key="gradient-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay style-picker-overlay"
                                content={<div className="overlay-event-absorber">
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
                                                palette={gradientColor}
                                                memoizedOnChange={memoizedOnGradientChange}
                                            />
                                        </div>}
                                    </div>
                                </div>}
                                placement="bottom"
                            >
                                <StyledPickerButton
                                    $active={isStyleCustom && hasGradient}
                                    className="picker-dropdown gradient-picker-dropdown"
                                >
                                    Gradient <CaretDownOutlined />
                                </StyledPickerButton>
                            </Popover>}
                            {showExtraDecorativeOption && <Popover key="pattern-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay pattern-picker-overlay"
                                content={<div className="overlay-event-absorber">
                                    <StyledPatternContainer onClick={e => e.stopPropagation()}>
                                        {PatternList.map(({ key, patternImage }) => {
                                            return <StyledPatternOption key={key}
                                                className={[
                                                    'pattern-option',
                                                    value.pattern === key ? 'menu-active' : '',
                                                    patternImage ? '' : 'menu-off',
                                                ].join(' ')}
                                                onClick={() => {
                                                    setValue(cur => ({ ...cur, pattern: key }));
                                                    requestSendStyle();
                                                }}
                                            >
                                                {patternImage
                                                    ? <img
                                                        style={patternImage ? patternStyle : {}}
                                                        className="pattern-image"
                                                        src={`${process.env.PUBLIC_URL}/asset/image/finish-name/${patternImage}.png`}
                                                        alt={key}
                                                    />
                                                    : <>
                                                        <CloseCircleOutlined /> No Pattern
                                                    </>}
                                            </StyledPatternOption>;
                                        })}
                                    </StyledPatternContainer>
                                </div>}
                                placement="bottomLeft"
                            >
                                <StyledPickerButton
                                    $active={isStyleCustom && typeof pattern === 'string' && pattern !== 'none'}
                                    className="picker-dropdown pattern-picker-dropdown"
                                >
                                    Pattern
                                </StyledPickerButton>
                            </Popover>}
                            {showExtraDecorativeOption && <Popover key="font-picker"
                                trigger={['click']}
                                overlayClassName="input-overlay font-picker-overlay"
                                content={<div className="overlay-event-absorber">
                                    <StyledDropdown.Container>
                                        {NameFontOptionList.map(({ value: fontValue, label }) => {
                                            return <StyledDropdown.Option key={fontValue}
                                                className={value.font === fontValue ? 'menu-active' : ''}
                                                onClick={() => {
                                                    setValue(cur => ({ ...cur, font: fontValue }));
                                                    requestSendStyle();
                                                }}
                                            >
                                                {label}
                                            </StyledDropdown.Option>;
                                        })}
                                    </StyledDropdown.Container>
                                </div>}
                                placement="bottomLeft"
                            >
                                <StyledPickerButton className="picker-dropdown font-picker-dropdown">
                                    Font
                                </StyledPickerButton>
                            </Popover>}
                        </div>
                    </label>
                </div>
            </span>
        </span>
    </div>;
}), (l, r) => {
    return l.frameInfo === r.frameInfo
        && l.showExtraDecorativeOption === r.showExtraDecorativeOption;
});
