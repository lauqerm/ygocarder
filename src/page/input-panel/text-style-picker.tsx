import { Checkbox, Popover } from 'antd';
import { CompactPicker } from 'react-color';
import { ShadowMap, useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { RadioTrain } from './input-train';

const StyledTextStyleContainer = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: var(--spacing-xxs);
    padding: var(--spacing-px);
    margin-right: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br);
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
                    const [custom, fillStyle, shadow] = value;

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
                            <RadioTrain
                                optionList={[
                                    { label: language['input.text-style.shadow.none.label'], value: 'none' },
                                    { label: language['input.text-style.shadow.light.label'], value: 'light' },
                                    { label: language['input.text-style.shadow.dark.label'], value: 'dark' },
                                ]}
                                value={shadow}
                                onChange={shadowValue => setCard(currentCard => {
                                    return {
                                        ...currentCard,
                                        [keyName]: [...value.slice(0, 2), shadowValue],
                                    };
                                })}
                            >
                                {language['input.text-style.shadow.label']}
                            </RadioTrain>
                            <CompactPicker
                                color={fillStyle ?? ''}
                                onChangeComplete={color => {
                                    setCard(currentCard => {
                                        return {
                                            ...currentCard,
                                            [keyName]: [value[0], color.hex, value[1]],
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
                const [, fillStyle, shadow] = value;

                return <div key={keyName}
                    className="text-style-preview-section"
                    style={{
                        backgroundColor: (fillStyle ?? '').length === 0 ? '#000000' : fillStyle,
                        boxShadow: shadow !== 'none' ? `0 0 0 1px ${ShadowMap[shadow]}` : ''
                    }}
                />;
            })}
        </StyledTextStyleContainer>
    </Popover>;
};