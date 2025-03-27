import { Checkbox, Input, Popover } from 'antd';
import { CompactPicker } from 'react-color';
import { useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { DefaultColorList } from 'src/model';
import { useEffect, useState } from 'react';
import { HexColorRegex, hexToRGBA } from 'src/util';
import { CloseCircleOutlined } from '@ant-design/icons';
import { RadioTrain } from 'src/component';

/** Spacing in this component mimic react-color's */
const StyledInlineColorPickerContainer = styled.div`
    color: var(--color);
    text-shadow: var(--ts);
    font-weight: 500;
    padding: 5px;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3px;
    .color-list {
        display: flex;
        flex-wrap: nowrap;
        gap: 3px;
    }
    .color-block {
        height: 17px;
        width: 17px;
        cursor: pointer;
        position: relative;
        outline: none;
        border: var(--bw) solid var(--sub-level-4);
        &.static-block {
            cursor: default;
            height: 9px;
            width: 9px;
            margin: 4px 0;
            border: none;
        }
    }
    .active-dot {
        position: absolute;
        inset: var(--spacing-xs);
        background: rgb(0, 0, 0);
        border-radius: 50%;
        opacity: 1;
    }
    .color-input {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 3px;
        border-left: var(--bw-lg) solid var(--sub-level-4);
        padding-left: 3px;
        input {
            width: 58px;
            font-size: var(--fs-sm);
            line-height: 1;
            border: none;
            padding: 0 5px;
        }
    }
`;
const InlineColorList = [
    { hex: '#FFFFFF', rgb: [255, 255, 255] },
    { hex: '#000000', rgb: [0, 0, 0] },
    { hex: '#FF0000', rgb: [255, 0, 0] },
    { hex: '#FFFF00', rgb: [255, 255, 0] },
    { hex: '#00FF00', rgb: [0, 255, 0] },
    { hex: '#00FFFF', rgb: [0, 255, 255] },
    { hex: '#0000FF', rgb: [0, 0, 255] },
    { hex: '#FF00FF', rgb: [255, 0, 255] },
];
type InlineColorPicker = {
    value?: string,
    onChange?: (hexValue: string) => void,
}
const InlineColorPicker = ({
    value = '',
    onChange,
}: InlineColorPicker) => {
    const [currentText, setCurrentText] = useState(value);
    const [internalValue, setInternalValue] = useState(() => {
        return {
            hex: HexColorRegex.test(value) ? value : '#000000',
            rgb: hexToRGBA(value, false),
        };
    });

    useEffect(() => {
        const normalizedText = currentText.startsWith('#') ? currentText : `#${currentText}`;

        if (HexColorRegex.test(normalizedText)) {
            setCurrentText(normalizedText);
            setInternalValue({
                hex: normalizedText,
                rgb: hexToRGBA(normalizedText, false),
            });
            onChange?.(normalizedText);
        }
        /** No need to depend on callback */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentText]);

    useEffect(() => {
        setCurrentText(value);
        setInternalValue({
            hex: HexColorRegex.test(value) ? value : '#000000',
            rgb: hexToRGBA(value, false),
        });
    }, [value]);

    return <StyledInlineColorPickerContainer>
        <div className="color-list">
            {InlineColorList.map(({ hex, rgb }) => {
                /** Contrast formula from google \ :v / */
                const dotColor = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 >= 128
                    ? '#000000'
                    : '#FFFFFF';

                return <div key={hex} className="color-block" title={hex} style={{ backgroundColor: hex }} onClick={() => onChange?.(hex)}>
                    {internalValue.hex.toUpperCase() === hex && <div
                        className="active-dot"
                        style={{
                            backgroundColor: dotColor,
                        }}
                    />}
                </div>;
            })}
        </div>
        <div className="color-input">
            <div className="color-block static-block" style={{ backgroundColor: internalValue.hex }} />
            <Input
                size="small"
                value={currentText}
                onChange={e => {
                    setCurrentText(e.target.value);
                }}
            />
        </div>
    </StyledInlineColorPickerContainer>;
};

const StyledTextStyleContainer = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr max-content;
    column-gap: var(--spacing-xxs);
    padding: var(--spacing-px);
    margin-right: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br);
    background-color: var(--main-level-4);
    cursor: pointer;
    &:hover {
        border-color: var(--main-active);
    }
    .text-style-grid {
        display: grid;
        grid-template-columns: 25px 25px 25px;
        grid-template-rows: 13px 13px; // Alignment
        gap: var(--spacing-xxs);
        font-size: var(--fs-xs);
        text-align: center;
        line-height: 1.5;
    }
    .text-style-preview-section {
        background-color: #eaeaea;
        border-radius: var(--br-sm);
        box-shadow: 0 0 1px 1px var(--main-level-1) inset;
    }
    .text-style-label {
        padding: var(--spacing-xxs);
        line-height: 1.7;
    }
`;
const StyledTextStylePicker = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-px);
    &.custom-style-picker {
        background-color: var(--sub-level-4); // Mimic border color
    }
    .style-section {
        z-index: 1;
        position: relative;
        background-color: var(--main-level-3);
    }
    .style-picker-section {
        overflow: hidden;
        h2.size-picker,
        h2.font-style-picker {
            padding: var(--spacing-xs);
        }
        .inline-radio-train {
            display: inline-flex;
            padding-bottom: 0;
            margin-left: var(--spacing-sm);
        }
        .shadow-checkbox .ant-checkbox {
            transform: translateY(1px);
        }
        > .ant-checkbox-wrapper {
            padding: var(--spacing-xs);
        }
    }
    .custom-style-expand {
        display: grid;
        grid-template-columns: 1fr max-content;
        column-gap: var(--spacing-xs);
        .ant-checkbox-wrapper > span {
            padding-right: 0;
        }
    }
    .radio-train {
        padding: var(--spacing-xs);
        padding-top: 0;
        .standalone-addon {
            flex: 1 1 auto;
            text-align: left;
        }
        .radio-train-input-group {
            flex: 0 0 auto;
        }
        .ant-radio-button-wrapper {
            height: 26px;
            line-height: 24px;
        }
    }
`;
const TextStyleInfoMap = {
    effectTextStyle: {
        keyName: 'effectTextStyle' as const,
        extraKeyname: 'effectStyle' as const,
        labelKey: 'input.text-style.section.effect.label',
    },
    pendulumTextStyle: {
        keyName: 'pendulumTextStyle' as const,
        extraKeyname: 'pendulumStyle' as const,
        labelKey: 'input.text-style.section.pendulum.label',
    },
    statTextStyle: {
        keyName: 'statTextStyle' as const,
        extraKeyname: undefined,
        labelKey: 'input.text-style.section.stat.label',
    },
    typeTextStyle: {
        keyName: 'typeTextStyle' as const,
        extraKeyname: undefined,
        labelKey: 'input.text-style.section.type.label',
    },
    otherTextStyle: {
        keyName: 'otherTextStyle' as const,
        extraKeyname: undefined,
        labelKey: 'input.text-style.section.other.label',
    },
};
export const TextStylePicker = () => {
    const language = useLanguage();
    const {
        effectStyle,
        effectTextStyle,
        otherTextStyle,
        pendulumStyle,
        pendulumTextStyle,
        setCard,
        statTextStyle,
        typeTextStyle,
    } = useCard(useShallow(({
        card: {
            effectStyle,
            effectTextStyle,
            otherTextStyle,
            pendulumStyle,
            pendulumTextStyle,
            statTextStyle,
            typeTextStyle,
        },
        setCard,
    }) => ({
        effectStyle,
        effectTextStyle,
        otherTextStyle,
        pendulumStyle,
        pendulumTextStyle,
        setCard,
        statTextStyle,
        typeTextStyle,
    })));

    const styleList = [
        {
            info: TextStyleInfoMap.effectTextStyle,
            value: effectTextStyle,
            extraValue: effectStyle,
        },
        {
            info: TextStyleInfoMap.pendulumTextStyle,
            value: pendulumTextStyle,
            extraValue: pendulumStyle,
        },
        {
            info: TextStyleInfoMap.statTextStyle,
            value: statTextStyle,
        },
        {
            info: TextStyleInfoMap.typeTextStyle,
            value: typeTextStyle,
        },
        {
            info: TextStyleInfoMap.otherTextStyle,
            value: otherTextStyle,
        },
    ];
    return <Popover
        trigger={['click']}
        placement="bottomLeft"
        // visible={true}
        overlayClassName="global-input-overlay global-style-picker-overlay"
        content={<div className="overlay-event-absorber">
            <StyledTextStylePicker className="custom-style-picker">
                {styleList.map(({ info, value, extraValue }) => {
                    const { keyName, labelKey, extraKeyname } = info;
                    const [custom, fillStyle, hasShadow, shadow] = value;
                    const { upSize, fontStyle } = extraValue ?? {};

                    return <div key={keyName} className="style-section">
                        <h3 className={`custom-style-expand ${custom ? '' : 'inactive'}`}>
                            <span>
                                {language[labelKey]}
                            </span>
                            <Checkbox
                                checked={custom}
                                onChange={e => {
                                    setCard(currentCard => {
                                        const applyStyle = e.target.checked;

                                        return {
                                            ...currentCard,
                                            [keyName]: [applyStyle, ...value.slice(1)],
                                        };
                                    });
                                }}
                            >{language['input.text-style.custom.label']}</Checkbox>
                        </h3>
                        {custom && <div className="style-picker-section">
                            {typeof fontStyle === 'string' && <>
                                <h2 className="font-style-picker">
                                    <span className="label">{language['input.text-style.font-style.label']}</span>
                                    <RadioTrain
                                        className="inline-radio-train"
                                        value={fontStyle}
                                        optionList={[
                                            { label: <CloseCircleOutlined />, value: 'auto' },
                                            { label: language['input.text-style.font-style.normal.label'], value: 'normal' },
                                            { label: language['input.text-style.font-style.italic.label'], value: 'italic' },
                                        ]}
                                        onChange={value => {
                                            setCard(currentCard => {
                                                const newStyle = extraKeyname ? { ...currentCard[extraKeyname] } : undefined;
                                                if (!newStyle || !extraKeyname) return currentCard;

                                                newStyle.fontStyle = typeof value === 'string' ? value : 'auto';
                                                return {
                                                    ...currentCard,
                                                    [extraKeyname]: newStyle,
                                                };
                                            });
                                        }}
                                    />
                                </h2>
                            </>}
                            {typeof upSize === 'number' && <>
                                <h2 className="size-picker">
                                    <span className="label">{language['input.text-style.extra-size.label']}</span>
                                    <RadioTrain
                                        className="inline-radio-train"
                                        value={upSize}
                                        optionList={[
                                            { label: <CloseCircleOutlined />, value: 0 },
                                            { label: '+1', value: 1 },
                                            { label: '+2', value: 2 },
                                            { label: '+3', value: 3 },
                                        ]}
                                        onChange={value => {
                                            setCard(currentCard => {
                                                const newStyle = extraKeyname ? { ...currentCard[extraKeyname] } : undefined;
                                                if (!newStyle || !extraKeyname) return currentCard;

                                                newStyle.upSize = typeof value === 'number' ? value : 0;
                                                return {
                                                    ...currentCard,
                                                    [extraKeyname]: newStyle,
                                                };
                                            });
                                        }}
                                    />
                                </h2>
                            </>}
                            <h2>
                                <Checkbox
                                    className="shadow-checkbox"
                                    checked={hasShadow}
                                    onChange={e => {
                                        setCard(currentCard => {
                                            const applyShadow = e.target.checked;

                                            return {
                                                ...currentCard,
                                                [keyName]: [...value.slice(0, 2), applyShadow, value[3]],
                                            };
                                        });
                                    }}
                                >
                                    <span className="label">{language['input.text-style.shadow.label']}</span>
                                </Checkbox>
                            </h2>
                            {hasShadow && <InlineColorPicker
                                value={shadow}
                                onChange={shadowValue => setCard(currentCard => {
                                    return {
                                        ...currentCard,
                                        [keyName]: [...value.slice(0, 3), shadowValue],
                                    };
                                })}
                            />}
                            <h2>{language['input.text-style.color.label']}</h2>
                            <CompactPicker
                                colors={DefaultColorList}
                                color={fillStyle ?? ''}
                                onChangeComplete={color => {
                                    setCard(currentCard => {
                                        return {
                                            ...currentCard,
                                            [keyName]: [value[0], color.hex, ...value.slice(2, 4)],
                                        };
                                    });
                                }}
                            />
                        </div>}
                    </div>;
                })}
            </StyledTextStylePicker>
        </div>}
    >
        <StyledTextStyleContainer className="text-style-preview">
            <div className="text-style-grid">
                {styleList.map(({ info, value, extraValue }) => {
                    const { keyName } = info;
                    const [custom, fillStyle, hasShadow, shadow] = value;
                    const { upSize, fontStyle } = extraValue ?? {};

                    return <div key={keyName}
                        className="text-style-preview-section"
                        style={{
                            color: (fillStyle ?? '').length === 0 || !custom ? '#000000' : fillStyle,
                            textShadow: (custom && hasShadow) ? `0 0 2px ${shadow}` : 'none',
                            fontStyle: (custom && fontStyle === 'italic') ? 'italic' : 'normal',
                        }}
                    >
                        {(upSize && custom) ? <div>+{upSize}</div> : 'Auto'}
                    </div>;
                })}
            </div>
            <span className="text-style-label">{language['input.text-style.custom-effect.label']}</span>
        </StyledTextStyleContainer>
    </Popover>;
};