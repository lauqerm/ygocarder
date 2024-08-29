import { Checkbox, Popover } from 'antd';
import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle, ForwardedRef } from 'react';
import { CompactPicker } from 'react-color';
import { CaretDownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    PresetNameStyleMap,
    NameStyle,
    NameStyleType,
    PatternList,
    FrameInfo,
} from '../../../model';
import debounce from 'lodash.debounce';
import { getNavigationProps, mergeClass, stringifyPalette, useRefresh } from 'src/util';
import { TextGradientPicker } from './gradient-picker';
import { NameFontOptionList } from '../const';
import { StyledDropdown } from 'src/component';
import {
    StyledPatternContainer,
    StyledPatternOption,
    StyledPickerButton,
} from './style-picker.styled';
import { useSetting } from 'src/service';
import { GridSliderInput, GridSliderInputRef } from './grid-slider-input';
import { PredefinedOptionGrid, PredefinedOptionGridRef } from './predefined-option-grid';
import './style-picker.scss';

export type TextStylePickerRef = {
    setValue: (value: Partial<NameStyle>) => void,
};
export type TextStylePicker = {
    frameInfo?: FrameInfo,
    defaultType: NameStyleType,
    defaultValue: Partial<NameStyle>,
    showExtraDecorativeOption: boolean,
    onChange: (type: NameStyleType, style: Partial<NameStyle>) => void,
};
export const TextStylePicker = forwardRef(({
    frameInfo,
    defaultType,
    defaultValue,
    showExtraDecorativeOption,
    onChange: undebouncedOnChange,
}: TextStylePicker, ref: ForwardedRef<TextStylePickerRef>) => {
    const optionGridRef = useRef<PredefinedOptionGridRef>(null);
    const [focus, setFocus] = useState(-1);
    const [predefinedDropdownVisible, setPredefinedDropdownVisible] = useState(false);
    const [type, setType] = useState(defaultType);
    const [value, setValue] = useState(defaultValue);
    const [customStyleSignal, sendCustomStyleSignal] = useRefresh();
    const onChange = useRef(debounce(undebouncedOnChange, 250)).current;
    const memoizedOnGradientChange = useCallback((palette, gradientAngle) => {
        setValue(cur => ({ ...cur, gradientAngle, gradientColor: stringifyPalette(palette) }));
        customStyleSignal();
    }, [customStyleSignal]);
    const reduceColorMotion = useSetting(state => state.setting.reduceMotionColor);

    useEffect(() => {
        if (sendCustomStyleSignal !== 0) {
            setType('custom');
            onChange('custom', value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendCustomStyleSignal]);

    const shadowPickeRef = useRef<GridSliderInputRef>(null);
    const outlinePickeRef = useRef<GridSliderInputRef>(null);

    useImperativeHandle(ref, () => ({
        setValue: nextValue => {
            setValue(currentValue => ({ ...currentValue, ...nextValue }));

            const {
                lineColor, lineWidth, lineOffsetX, lineOffsetY,
                shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY,
            } = nextValue;
            shadowPickeRef.current?.setValue({
                x: shadowOffsetX, y: shadowOffsetY,
                width: shadowBlur, color: shadowColor,
            });
            outlinePickeRef.current?.setValue({
                x: lineOffsetX, y: lineOffsetY,
                width: lineWidth, color: lineColor,
            });
        },
    }));
    const {
        fillStyle,
        headTextFillStyle,
        hasOutline,
        hasShadow,
        hasGradient, gradientColor, gradientAngle,
        pattern,
        font,
    } = value;
    const { labelBackgroundColor, labelBackgroundImage } = frameInfo ?? {};
    const patternStyle = {
        background: labelBackgroundColor,
        backgroundImage: labelBackgroundImage,
    };
    const isStyleCustom = type === 'custom';
    const isStylePredefined = type === 'predefined';
    const optionInputContainerId = 'name-style-option-input-container';
    const applyAutoStyle = () => {
        setType('auto');
        if (type !== 'auto') onChange('auto', value);
    };
    const applyPredefinedStyle = () => {
        const presetValue = value.preset
            ? PresetNameStyleMap[value.preset]?.value
            : {};
        setType('predefined');
        setValue(cur => ({ ...cur, ...presetValue }));
        onChange('predefined', { ...value, ...presetValue });
    };
    const applyCustomStyle = () => {
        setType('custom');
        if (type !== 'custom') onChange('custom', value);
    };
    return <div className="ant-input-group-wrapper text-style-input">
        <span className="ant-input-wrapper ant-input-group">
            <span className="ant-input-group-addon">Name Style</span>
            <span className="name-style-input-container">
                <div
                    id={optionInputContainerId}
                    className="ant-radio-group ant-radio-group-outline name-style-option-input-container"
                    {...getNavigationProps({
                        setFocus,
                        optionLength: 3,
                        onKeyPress: e => {
                            if (focus === 1 && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === '  ')) {
                                e.preventDefault();
                                setFocus(1);
                                setPredefinedDropdownVisible(true);
                                /** Popover takes time to mount / become visible */
                                setTimeout(() => {
                                    if (focus === 1) optionGridRef.current?.focus();
                                }, 200);

                                return false;
                            }
                        },
                        onTrigger() {
                            if (focus === 0) applyAutoStyle();
                            if (focus === 1) applyPredefinedStyle();
                            if (focus === 2) applyCustomStyle();
                        },
                    })}
                >
                    <label
                        className={mergeClass(
                            'ant-radio-wrapper',
                            type === 'auto' && 'ant-radio-wrapper-checked',
                            focus === 0 && 'ant-radio-focused',
                        )}
                        onClick={() => applyAutoStyle()}
                    >
                        <span className={`ant-radio ${type === 'auto' ? 'ant-radio-checked' : ''}`}>
                            <input tabIndex={-1} type="radio" className="ant-radio-input" value="auto" />
                            <span className="ant-radio-inner" />
                        </span>
                        <span className="ant-radio-label">Auto</span>
                    </label>
                    <span className="name-style-option-break" />
                    <label
                        className={mergeClass(
                            'ant-radio-wrapper',
                            isStylePredefined && 'ant-radio-wrapper-checked',
                            focus === 1 && 'ant-radio-focused',
                        )}
                        onClick={() => applyPredefinedStyle()}
                    >
                        <Popover
                            visible={predefinedDropdownVisible}
                            onVisibleChange={setPredefinedDropdownVisible}
                            trigger={['hover', 'click']}
                            placement="bottomLeft"
                            overlayClassName="predefined-picker-overlay"
                            content={<div className="overlay-event-absorber">
                                <PredefinedOptionGrid ref={optionGridRef}
                                    active={isStylePredefined}
                                    value={value}
                                    onCancel={() => {
                                        setPredefinedDropdownVisible(false);
                                        document.getElementById(optionInputContainerId)?.focus();
                                    }}
                                    onClick={({ key }) => {
                                        const presetValue = key
                                            ? PresetNameStyleMap[key]?.value
                                            : {};
                                        setType('predefined');
                                        setValue(cur => ({ ...cur, ...presetValue }));
                                        onChange('predefined', { ...value, ...presetValue });
                                    }}
                                />
                            </div>}
                        >
                            <span className="name-style-option-label">
                                <span className={`ant-radio ${isStylePredefined ? 'ant-radio-checked' : ''}`}>
                                    <input tabIndex={-1} type="radio" className="ant-radio-input" value="predefined" />
                                    <span className="ant-radio-inner" />
                                </span>
                                <span className="ant-radio-label">Predefined</span>
                            </span>
                        </Popover>
                    </label>
                    <span className="name-style-option-break" />
                    <label
                        className={mergeClass(
                            'ant-radio-wrapper',
                            isStyleCustom && 'ant-radio-wrapper-checked',
                            focus === 2 && 'ant-radio-focused',
                        )}
                        onClick={() => applyCustomStyle()}
                    >
                        <span>
                            <span className={`ant-radio ${isStyleCustom ? 'ant-radio-checked' : ''}`}>
                                <input tabIndex={-1} type="radio" className="ant-radio-input" value="custom" />
                                <span className="ant-radio-inner" />
                            </span>
                            <span className="ant-radio-label ant-radio-label-custom">Custom</span>
                        </span>
                    </label>
                </div>
                <div className="style-picker">
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
                                        customStyleSignal();
                                    }} />
                                </div>
                                <hr />
                                <div className="custom-style-text">
                                    <h3>Ruby Color (<small>Japanese Furigana</small>)</h3>
                                    <CompactPicker color={headTextFillStyle} onChangeComplete={color => {
                                        setType('custom');
                                        setValue(cur => ({ ...cur, headTextFillStyle: color.hex }));
                                        customStyleSignal();
                                    }} />
                                </div>
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <StyledPickerButton $softMode={reduceColorMotion} className="picker-dropdown color-picker-dropdown">
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
                                        customStyleSignal();
                                    }}>Has Shadow?</Checkbox>
                                </h3>
                                {hasShadow && <GridSliderInput ref={shadowPickeRef}
                                    className="custom-style-shadow"
                                    fieldMap={{
                                        color: 'shadowColor',
                                        width: 'shadowBlur',
                                        x: 'shadowOffsetX',
                                        y: 'shadowOffsetY',
                                    }}
                                    labelMap={{
                                        shadowBlur: 'Blur',
                                    }}
                                    defaultValue={value}
                                    onChange={({ color, width, x, y }) => {
                                        setValue(cur => ({
                                            ...cur,
                                            shadowBlur: width,
                                            shadowColor: color,
                                            shadowOffsetX: x,
                                            shadowOffsetY: y,
                                        }));
                                        customStyleSignal();
                                    }}
                                />}
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <StyledPickerButton
                            $softMode={reduceColorMotion}
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
                                        customStyleSignal();
                                    }}>Has outline?</Checkbox>
                                </h3>
                                {hasOutline && <GridSliderInput ref={outlinePickeRef}
                                    className="custom-style-line"
                                    fieldMap={{
                                        color: 'lineColor',
                                        width: 'lineWidth',
                                        x: 'lineOffsetX',
                                        y: 'lineOffsetY',
                                    }}
                                    labelMap={{
                                        lineWidth: 'Thickness',
                                    }}
                                    defaultValue={value}
                                    onChange={({ color, width, x, y }) => {
                                        setValue(cur => ({
                                            ...cur,
                                            lineWidth: width,
                                            lineColor: color,
                                            lineOffsetX: x,
                                            lineOffsetY: y,
                                        }));
                                        customStyleSignal();
                                    }}
                                />}
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <StyledPickerButton
                            $softMode={reduceColorMotion}
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
                                        customStyleSignal();
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
                            $softMode={reduceColorMotion}
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
                                <div className="alert">Pattern will disable shadow and gradient</div>
                                {PatternList.map(({ key, patternImage }) => {
                                    return <StyledPatternOption key={key}
                                        className={[
                                            'pattern-option',
                                            value.pattern === key ? 'menu-active' : '',
                                            patternImage ? '' : 'menu-off',
                                        ].join(' ')}
                                        onClick={() => {
                                            setValue(cur => ({ ...cur, pattern: key }));
                                            customStyleSignal();
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
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && typeof pattern === 'string' && pattern !== 'none'}
                            className="picker-dropdown pattern-picker-dropdown"
                        >
                            Pattern
                        </StyledPickerButton>
                    </Popover>}
                    <Popover key="font-picker"
                        trigger={['click']}
                        overlayClassName="input-overlay font-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <StyledDropdown.Container>
                                {NameFontOptionList.map(({ value: fontValue, label }) => {
                                    return <StyledDropdown.Option key={fontValue}
                                        className={font === fontValue ? 'menu-active' : ''}
                                        onClick={() => {
                                            setValue(cur => ({ ...cur, font: fontValue }));
                                            customStyleSignal();
                                        }}
                                    >
                                        {label}
                                    </StyledDropdown.Option>;
                                })}
                            </StyledDropdown.Container>
                        </div>}
                        placement="bottomLeft"
                    >
                        <StyledPickerButton $softMode={reduceColorMotion} className="picker-dropdown font-picker-dropdown">
                            Font
                        </StyledPickerButton>
                    </Popover>
                </div>
            </span>
        </span>
    </div>;
});
