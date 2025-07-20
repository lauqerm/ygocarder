import { Button, Checkbox, Empty, Popover } from 'antd';
import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle, ForwardedRef, useMemo } from 'react';
import { CompactPicker } from 'react-color';
import { CaretDownOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    PresetNameStyleMap,
    NameStyle,
    NameStyleType,
    PatternList,
    FrameInfo,
    DefaultColorList,
} from '../../../model';
import debounce from 'lodash.debounce';
import { getNavigationProps, mergeClass, stringifyPalette, useRefresh } from 'src/util';
import { TextGradientPicker } from './gradient-picker';
import { getNameFontOptionList } from '../const';
import { StyledDropdown, PopoverButton, StyledPatternOption, PresetOption } from 'src/component';
import {
    StyledPatternContainer,
    StyledPresetContainer,
} from './style-picker.styled';
import { useCarderDb, useGlobal, useLanguage, usePresetManager, useSetting } from 'src/service';
import { GridSliderInput, GridSliderInputRef } from './grid-slider-input';
import { PredefinedOptionGrid, PredefinedOptionGridRef } from './predefined-option-grid';
import { EmbossController, EmbossControllerRef } from './emboss-controller';
import { TextColorPicker } from './text-color-picker';
import { v4 as uuid } from 'uuid';
import './style-picker.scss';

export type NameStylePickerRef = {
    setValue: (value: Partial<NameStyle>) => void,
};
export type NameStylePicker = {
    frameInfo?: FrameInfo,
    defaultType: NameStyleType,
    defaultValue: Partial<NameStyle>,
    showExtraDecorativeOption: boolean,
    onChange: (type: NameStyleType, style: Partial<NameStyle>) => void,
};
export const NameStylePicker = forwardRef(({
    frameInfo,
    defaultType,
    defaultValue,
    showExtraDecorativeOption,
    onChange: undebouncedOnChange,
}: NameStylePicker, ref: ForwardedRef<NameStylePickerRef>) => {
    const language = useLanguage();
    const optionGridRef = useRef<PredefinedOptionGridRef>(null);
    const [nameStylePresetList, setNameStylePresetList] = useGlobal('nameStylePresetList');
    const [focus, setFocus] = useState(-1);
    const [predefinedDropdownVisible, setPredefinedDropdownVisible] = useState(false);
    const [type, setType] = useState(defaultType);
    const [value, setValue] = useState(defaultValue);
    const [requestUpdateCustomStyle, sendCustomStyleSignal] = useRefresh();
    const { db } = useCarderDb();
    const onChange = useRef(debounce(undebouncedOnChange, 250)).current;
    const setVisible = usePresetManager(state => state.setVisible);
    const memoizedOnGradientChange = useCallback((palette, gradientAngle) => {
        setValue(cur => ({ ...cur, gradientAngle, gradientColor: stringifyPalette(palette) }));
        requestUpdateCustomStyle();
    }, [requestUpdateCustomStyle]);
    const reduceColorMotion = useSetting(state => state.setting.reduceMotionColor);

    const fontList = useMemo(() => getNameFontOptionList(language), [language]);

    useEffect(() => {
        if (sendCustomStyleSignal !== 0) {
            setType('custom');
            onChange('custom', value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendCustomStyleSignal]);

    const shadowPickeRef = useRef<GridSliderInputRef>(null);
    const outlinePickeRef = useRef<GridSliderInputRef>(null);
    const embossControllerRef = useRef<EmbossControllerRef>(null);

    useImperativeHandle(ref, () => ({
        setValue: nextValue => {
            setValue(currentValue => ({ ...currentValue, ...nextValue }));

            const {
                lineColor, lineWidth, lineOffsetX, lineOffsetY,
                shadowBlur, shadowColor, shadowOffsetX, shadowOffsetY,
                embossPitch, embossYaw, embossThickness,
            } = nextValue;
            shadowPickeRef.current?.setValue({
                x: shadowOffsetX, y: shadowOffsetY,
                width: shadowBlur, color: shadowColor,
            });
            outlinePickeRef.current?.setValue({
                x: lineOffsetX, y: lineOffsetY,
                width: lineWidth, color: lineColor,
            });
            embossControllerRef.current?.setValue({
                pitch: embossPitch,
                yaw: embossYaw,
                thickness: embossThickness,
            });
        },
    }));
    const {
        fillStyle,
        headTextFillStyle,
        hasOutline,
        hasShadow,
        hasGradient, gradientColor, gradientAngle,
        hasEmboss, embossPitch, embossYaw, embossThickness,
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

    const colorPickerButtonId = 'color-picker';
    return <div className="ant-input-group-wrapper text-style-input">
        <span className="ant-input-wrapper ant-input-group">
            <span className="ant-input-group-addon">{language['input.name-style.label']}</span>
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
                        <span className="ant-radio-label">
                            {language['input.name-style.type.auto.label']}
                        </span>
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
                                <span className="ant-radio-label">
                                    {language['input.name-style.type.predefined.label']}
                                </span>
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
                            <span className="ant-radio-label ant-radio-label-custom">
                                {language['input.name-style.type.custom.label']}
                            </span>
                        </span>
                    </label>
                </div>
                <div className="style-picker">
                    <Popover key="color-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay global-style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <div className={'custom-style-picker'}>
                                <div className="custom-style-text">
                                    <h3>
                                        {language['input.name-style.color.text.label']}
                                    </h3>
                                    <TextColorPicker
                                        color={fillStyle}
                                        onChange={hexColor => {
                                            setType('custom');
                                            setValue(cur => ({ ...cur, fillStyle: hexColor }));
                                            requestUpdateCustomStyle();
                                        }}
                                    />
                                </div>
                                <hr />
                                <div className="custom-style-text">
                                    <h3>
                                        {language['input.name-style.color.ruby.label']}
                                    </h3>
                                    <CompactPicker
                                        colors={DefaultColorList}
                                        color={headTextFillStyle}
                                        onChangeComplete={color => {
                                            setType('custom');
                                            setValue(cur => ({ ...cur, headTextFillStyle: color.hex }));
                                            requestUpdateCustomStyle();
                                        }}
                                    />
                                </div>
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <PopoverButton
                            id={colorPickerButtonId}
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom}
                            className="picker-dropdown color-picker-dropdown"
                        >
                            {language['input.name-style.color.label']} <CaretDownOutlined />
                        </PopoverButton>
                    </Popover>
                    {showExtraDecorativeOption && <Popover key="shadow-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay global-style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <div className={'custom-style-picker'}>
                                <h3 className="custom-style-expand">
                                    <Checkbox value={'has-shadow'} checked={hasShadow} onChange={() => {
                                        setType('custom');
                                        setValue(cur => ({ ...cur, hasShadow: !cur.hasShadow }));
                                        requestUpdateCustomStyle();
                                    }}>
                                        {language['input.name-style.shadow.toggle.label']}
                                    </Checkbox>
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
                                        shadowBlur: language['input.name-style.slider.blur.label'],
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
                                        requestUpdateCustomStyle();
                                    }}
                                />}
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && hasShadow}
                            className="picker-dropdown shadow-picker-dropdown"
                        >
                            {language['input.name-style.shadow.label']} <CaretDownOutlined />
                        </PopoverButton>
                    </Popover>}
                    <Popover key="outline-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay global-style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <div className={'custom-style-picker'}>
                                <h3 className="custom-style-expand">
                                    <Checkbox value={'has-line'} checked={hasOutline} onChange={() => {
                                        setType('custom');
                                        setValue(cur => ({ ...cur, hasOutline: !cur.hasOutline }));
                                        requestUpdateCustomStyle();
                                    }}>
                                        {language['input.name-style.outline.toggle.label']}
                                    </Checkbox>
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
                                        lineWidth: language['input.name-style.slider.thickness.label'],
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
                                        requestUpdateCustomStyle();
                                    }}
                                />}
                            </div>
                        </div>}
                        placement="bottom"
                    >
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && hasOutline}
                            className="picker-dropdown outline-picker-dropdown"
                        >
                            {language['input.name-style.outline.label']} <CaretDownOutlined />
                        </PopoverButton>
                    </Popover>
                    {showExtraDecorativeOption && <Popover key="gradient-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay global-style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <div className={'custom-style-picker'}>
                                <h3 className="custom-style-expand">
                                    <Checkbox value={'has-gradient'} checked={hasGradient} onChange={() => {
                                        setType('custom');
                                        setValue(cur => ({ ...cur, hasGradient: !cur.hasGradient }));
                                        requestUpdateCustomStyle();
                                    }}>
                                        {language['input.name-style.gradient.toggle.label']}
                                    </Checkbox>
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
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && hasGradient}
                            className="picker-dropdown gradient-picker-dropdown"
                        >
                            {language['input.name-style.gradient.label']} <CaretDownOutlined />
                        </PopoverButton>
                    </Popover>}
                    {showExtraDecorativeOption && <Popover key="pattern-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay pattern-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <StyledPatternContainer onClick={e => e.stopPropagation()}>
                                <div className="alert">
                                    {language['input.name-style.pattern.alert']}
                                </div>
                                {PatternList.map(({ key, patternImage }) => {
                                    return <StyledPatternOption key={key}
                                        className={[
                                            'pattern-option',
                                            value.pattern === key ? 'menu-active' : '',
                                            patternImage ? '' : 'menu-off',
                                        ].join(' ')}
                                        onClick={() => {
                                            setValue(cur => ({ ...cur, pattern: key }));
                                            requestUpdateCustomStyle();
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
                                                <CloseCircleOutlined /> {language['input.name-style.pattern.no-pattern.label']}
                                            </>}
                                    </StyledPatternOption>;
                                })}
                            </StyledPatternContainer>
                        </div>}
                        placement="bottomLeft"
                    >
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && typeof pattern === 'string' && pattern !== 'none'}
                            className="picker-dropdown pattern-picker-dropdown"
                        >
                            {language['input.name-style.pattern.label']}
                        </PopoverButton>
                    </Popover>}
                    <Popover key="font-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay font-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <StyledDropdown.Container>
                                {fontList.map(({ value: fontValue, label }) => {
                                    return <StyledDropdown.Option key={fontValue}
                                        className={font === fontValue ? 'menu-active' : ''}
                                        onClick={() => {
                                            setValue(cur => ({ ...cur, font: fontValue }));
                                            requestUpdateCustomStyle();
                                        }}
                                    >
                                        {label}
                                    </StyledDropdown.Option>;
                                })}
                            </StyledDropdown.Container>
                        </div>}
                        placement="bottomLeft"
                    >
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && font !== 'Auto'}
                            className="picker-dropdown font-picker-dropdown"
                        >
                            {language['input.name-style.font.label']}
                        </PopoverButton>
                    </Popover>
                    {showExtraDecorativeOption && <Popover key="emboss-picker"
                        trigger={['click']}
                        overlayClassName="global-input-overlay global-style-picker-overlay"
                        content={<div className="overlay-event-absorber">
                            <div className="custom-style-picker">
                                <h3 className="custom-style-expand">
                                    <Checkbox value={'has-emboss'} checked={hasEmboss} onChange={() => {
                                        setType('custom');
                                        setValue(cur => ({ ...cur, hasEmboss: !cur.hasEmboss }));
                                        requestUpdateCustomStyle();
                                    }}>
                                        {language['input.name-style.emboss.toggle.label']}
                                    </Checkbox>
                                </h3>
                                {hasEmboss && <EmbossController ref={embossControllerRef}
                                    language={language}
                                    defaultPitch={embossPitch}
                                    defaultYaw={embossYaw}
                                    defaultThickness={embossThickness}
                                    materialColor={fillStyle}
                                    onColorTabNavigate={() => {
                                        document.getElementById(colorPickerButtonId)?.click();
                                    }}
                                    onChange={({ thickness, yaw, pitch }) => {
                                        setValue(cur => ({
                                            ...cur,
                                            embossPitch: pitch,
                                            embossYaw: yaw,
                                            embossThickness: thickness,
                                        }));
                                        requestUpdateCustomStyle();
                                    }}
                                >
                                    <div className="alert">{language['input.name-style.emboss.alert']}</div>
                                </EmbossController>}
                            </div>
                        </div>}
                        placement="bottomLeft"
                    >
                        <PopoverButton
                            $softMode={reduceColorMotion}
                            $active={isStyleCustom && hasEmboss}
                            className="picker-dropdown emboss-picker-dropdown"
                        >
                            {language['input.name-style.emboss.label']}
                        </PopoverButton>
                    </Popover>}
                    <div className="save-preset-button-group">
                        <Button
                            size="small"
                            className="picker-dropdown preset-picker-dropdown"
                            type="primary"
                            onClick={async () => {
                                const key = uuid();
                                if (db) {
                                    const tx = db.transaction('presetNameStyleStore', 'readwrite');
                                    await db.put('presetNameStyleStore', { key, content: JSON.stringify(value) });
                                    await tx.done;
                                }
                                setNameStylePresetList(cur => {
                                    return [
                                        ...cur,
                                        {
                                            key,
                                            content: { ...value },
                                        }
                                    ];
                                });
                            }}
                        >
                            {language['input.name-style.preset.label']}
                        </Button>
                        <Popover key="preset-picker"
                            trigger={['click']}
                            overlayClassName="global-input-overlay global-style-picker-overlay low-index"
                            content={<div className="overlay-event-absorber">
                                <StyledPresetContainer onClick={e => e.stopPropagation()}>
                                    {nameStylePresetList.length > 0 && <div className="preset-warning">
                                        {language['preset.warning.label']}
                                        &nbsp;
                                        <span className="open-preset-manager"
                                            onClick={() => setVisible(true)}
                                        >{language['preset.manager.check.label']}</span>
                                    </div>}
                                    {nameStylePresetList.length === 0 && <Empty
                                        description={language['generic.empty.label']}
                                    />}
                                    {nameStylePresetList.map(({ key, content }) => {
                                        return <PresetOption key={key}
                                            language={language}
                                            frameInfo={frameInfo}
                                            presetContent={content}
                                            onActive={() => {
                                                setValue({ ...content });
                                                requestUpdateCustomStyle();
                                            }}
                                            onOverwrite={async () => {
                                                if (db) {
                                                    const tx = db.transaction('presetNameStyleStore', 'readwrite');
                                                    await db.put('presetNameStyleStore', { key, content: JSON.stringify(value) });
                                                    await tx.done;
                                                }
                                                setNameStylePresetList(cur => {
                                                    return cur.map(entry => {
                                                        if (entry.key === key) return {
                                                            key,
                                                            content: { ...value },
                                                        };
                                                        return entry;
                                                    });
                                                });
                                            }}
                                            onDelete={async () => {
                                                if (db) {
                                                    const tx = db.transaction('presetNameStyleStore', 'readwrite');
                                                    await db.delete('presetNameStyleStore', key);
                                                    await tx.done;
                                                }
                                                setNameStylePresetList(cur => cur.filter(entry => entry.key !== key));
                                            }}
                                        >
                                            {content.preset}
                                        </PresetOption>;
                                    })}
                                </StyledPresetContainer>
                            </div>}
                            placement="bottomRight"
                        >
                            <div className="custom-preset-button">
                                <CaretDownOutlined />
                            </div>
                        </Popover>
                    </div>
                </div>
            </span>
        </span>
    </div>;
});
