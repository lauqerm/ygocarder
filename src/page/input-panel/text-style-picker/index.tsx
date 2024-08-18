import { Checkbox, Popover } from 'antd';
import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle, ForwardedRef, memo } from 'react';
import { CompactPicker } from 'react-color';
import { CaretDownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    PresetNameStyleList,
    PresetNameStyleMap,
    NameStyle,
    NameStyleType,
    PatternList,
    FrameInfo,
} from '../../../model';
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
import { useSetting } from 'src/service';
import { GridSliderInput, GridSliderInputRef } from './grid-slider-input';
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
export const TextStylePicker = memo(forwardRef(({
    frameInfo,
    defaultType,
    defaultValue,
    showExtraDecorativeOption,
    onChange: undebouncedOnChange,
}: TextStylePicker, ref: ForwardedRef<TextStylePickerRef>) => {
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
        if (sendCustomStyleSignal !== 0) onChange('custom', value);
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
                            const presetValue = value.preset
                                ? PresetNameStyleMap[value.preset]?.value
                                : {};
                            setType('predefined');
                            setValue(cur => ({ ...cur, ...presetValue }));
                            onChange('predefined', { ...value, ...presetValue });
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
                                            onClick={e => {
                                                e.stopPropagation();
                                                const presetValue = key
                                                    ? PresetNameStyleMap[key]?.value
                                                    : {};
                                                setType('predefined');
                                                setValue(cur => ({ ...cur, ...presetValue }));
                                                onChange('predefined', { ...value, ...presetValue });
                                            }}
                                        >
                                            {/** Tooltip currently is not really helpful, and gives poor UX */}
                                            {/* <Tooltip title={label} placement="right"> */}
                                            <img
                                                className="preset-preview"
                                                src={`${process.env.PUBLIC_URL}/${image}`}
                                                alt={label}
                                            />
                                            {/* </Tooltip> */}
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
                                                    lineBlur: width,
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
                    </label>
                </div>
            </span>
        </span>
    </div>;
}), (l, r) => {
    return l.frameInfo === r.frameInfo
        && l.showExtraDecorativeOption === r.showExtraDecorativeOption;
});
