import { Checkbox, Input, Popover } from 'antd';
import { CompactPicker } from 'react-color';
import { useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { DefaultColorList } from 'src/model';
import { useEffect, useState } from 'react';
import { HexColorRegex, hexToRGBA } from 'src/util';

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

                return <div className="color-block" title={hex} style={{ backgroundColor: hex }} onClick={() => onChange?.(hex)}>
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    .text-style-preview-section {
        width: 8px;
        height: 28px; // Alignment
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
        padding-bottom: 0;
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
        labelKey: 'input.text-style.section.effect.label',
    },
    pendulumTextStyle: {
        keyName: 'pendulumTextStyle' as const,
        labelKey: 'input.text-style.section.pendulum.label',
    },
    statTextStyle: {
        keyName: 'statTextStyle' as const,
        labelKey: 'input.text-style.section.stat.label',
    },
    typeTextStyle: {
        keyName: 'typeTextStyle' as const,
        labelKey: 'input.text-style.section.type.label',
    },
};
export const TextStylePicker = () => {
    const language = useLanguage();
    const {
        statTextStyle,
        typeTextStyle,
        effectTextStyle,
        pendulumTextStyle,
        setCard,
    } = useCard(useShallow(({
        card: {
            statTextStyle,
            typeTextStyle,
            effectTextStyle,
            pendulumTextStyle,
        },
        setCard,
        getUpdater,
    }) => ({
        statTextStyle,
        typeTextStyle,
        effectTextStyle,
        pendulumTextStyle,
        setCard,
    })));

    const styleList = [
        { info: TextStyleInfoMap.effectTextStyle, value: effectTextStyle },
        { info: TextStyleInfoMap.pendulumTextStyle, value: pendulumTextStyle },
        { info: TextStyleInfoMap.statTextStyle, value: statTextStyle },
        { info: TextStyleInfoMap.typeTextStyle, value: typeTextStyle },
    ];
    return <Popover
        trigger={['click']}
        placement="bottomLeft"
        overlayClassName="global-input-overlay global-style-picker-overlay"
        content={<div className="overlay-event-absorber">
            <StyledTextStylePicker className="custom-style-picker">
                {styleList.map(({ info, value }) => {
                    const { keyName, labelKey } = info;
                    const [custom, fillStyle, hasShadow, shadow] = value;

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
                                    {language['input.text-style.shadow.label']}
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
            {styleList.map(({ info, value }) => {
                const { keyName } = info;
                const [custom, fillStyle, hasShadow, shadow] = value;

                return <div key={keyName}
                    className="text-style-preview-section"
                    style={{
                        backgroundColor: (fillStyle ?? '').length === 0 || !custom ? '#000000' : fillStyle,
                        boxShadow: (custom && hasShadow) ? `0 0 0 2px ${shadow} inset` : ''
                    }}
                />;
            })}
        </StyledTextStyleContainer>
    </Popover>;
};