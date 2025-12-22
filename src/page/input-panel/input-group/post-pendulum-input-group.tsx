import { Checkbox, InputNumber, Popover, Tooltip } from 'antd';
import { Explanation, FormattingHelpDrawer, RadioTrain, SingleSliderContainer, StyledPopMarkdown } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { CondenseType, IconTypeMap } from 'src/model';
import { CondenseThresholdButtonList } from '../const';
import styled from 'styled-components';
import { checkMonster } from 'src/util';

const PostPendulumFirstLineContainer = styled.div`
    &.first-line,
    &.second-line {
        display: flex;
        gap: var(--spacing-sm);
        align-items: center;
        justify-content: right;
    }
    .type-ability-input {
        flex: 1 1 auto;
        width: unset;
        max-width: 40rem;
    }
    .condense-input {
        flex: 1 1 auto;
    }
    .formatting-help-button,
    .input-kanji-helper {
        flex: 0 0 auto;
    }
    .input-kanji-helper {
        span {
            padding-right: 0;
        }
    }
    .formatting-help-button {
        grid-area: help-button;
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
        &:focus {
            box-shadow: 0 0 0 2px var(--focus);
        }
    }
    .condense-input {
		.standalone-addon.ant-input-group-addon {
			width: unset;
		}
		.ant-radio-button-wrapper {
			flex: 1 1 90px;
		}
	}
`;
const AdvancedParagraphButton = styled.div`
    display: inline-flex;
    cursor: pointer;
    box-shadow: var(--bs-input);
    vertical-align: bottom;
    box-shadow: var(--bs-button);
    border-radius: var(--br-lg);
    background-color: var(--main-level-4);
    flex: 0 0 auto;
    .button-label {
        line-height: 2;
        padding: var(--spacing-px) var(--spacing-xs);
    }
`;
const AdvancedParagraphPanel = styled.div`
    .line-input,
    .justify-ratio-input {
        padding: var(--spacing-xs);
    }
    .single-slider {
        .ant-input-number {
            width: 75px;
        }
    }
`;

export type PostPendulumInputGroupRef = {
    setValue: (value: {
        typeAbility?: string[],
        effectMinLine?: number,
        pendulumEffectMinLine?: number,
        effectJustifyRatio?: number,
        pendulumEffectJustifyRatio?: number,
    }) => void,
}
export type PostPendulumInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const PostPendulumInputGroup = forwardRef<PostPendulumInputGroupRef, PostPendulumInputGroup>(({
    onTakePicker,
}, ref) => {
    const language = useLanguage();
    const {
        frame,
        cardIcon,
        format,
        furiganaHelper,
        condenseTolerant,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            frame,
            cardIcon,
            format,
            furiganaHelper,
            effectStyle,
        },
        setCard,
        getUpdater,
    }) => ({
        frame,
        cardIcon,
        format,
        furiganaHelper,
        condenseTolerant: effectStyle?.condenseTolerant,
        setCard,
        getUpdater,
    })));
    const showExtraDecorativeOption = useSetting(state => state.setting.showExtraDecorativeOption);
    const typeAbilitySeparator = format === 'ocg' ? '／' : '/';
    const typeAbilityInputRef = useRef<CardTextInputRef>(null);
    const [effectMinLine, setEffectMinLine] = useState(() => useCard.getState().card.effectStyle.minLine);
    const [pendulumEffectMinLine, setPendulumEffectMinLine] = useState(() => useCard.getState().card.pendulumStyle.minLine);
    const [effectJustifyRatio, setEffectJustifyRatio] = useState(() => {
        return useCard.getState().card.effectStyle.justifyRatio;
    });
    const [pendulumEffectJustifyRatio, setPendulumEffectJustifyRatio] = useState(() => {
        return useCard.getState().card.pendulumStyle.justifyRatio;
    });

    const changeTypeAbility = useMemo(() => {
        return getUpdater(
            'typeAbility',
            value => {
                return typeof value !== 'string' ? [] : value.split(/／|\//)
                    .map(entry => `${entry}`.trim())
                    .filter(entry => typeof entry === 'string' && entry.length > 0);
            },
            'debounce',
        );
    }, [getUpdater]);
    const toggleFuriganaHelper = useCallback((e: any) => setCard(currentCard => {
        return { ...currentCard, furiganaHelper: e.target.checked };
    }), [setCard]);
    const onCondenseTolerantChange = (value: CondenseType) => {
        setCard(currentCard => {
            return {
                ...currentCard,
                effectStyle: {
                    ...currentCard.effectStyle,
                    condenseTolerant: value,
                }
            };
        });
    };

    useEffect(() => {
        /** Changing min line / justify ratio force render effect, so we should do so sparingly */
        let relevant = true;
        setTimeout(() => {
            if (relevant) setCard(currentCard => {
                const newEffectStyle = {
                    ...currentCard.effectStyle,
                    minLine: effectMinLine,
                    justifyRatio: effectJustifyRatio,
                };
                const newPendulumEffectStyle = {
                    ...currentCard.pendulumStyle,
                    minLine: pendulumEffectMinLine,
                    justifyRatio: pendulumEffectJustifyRatio,
                };

                return {
                    ...currentCard,
                    effectStyle: newEffectStyle,
                    pendulumStyle: newPendulumEffectStyle,
                };
            });
        }, 500);

        return () => {
            relevant = false;
        };
    }, [effectJustifyRatio, effectMinLine, pendulumEffectJustifyRatio, pendulumEffectMinLine, setCard]);

    useImperativeHandle(ref, () => ({
        setValue: ({
            typeAbility,
            effectMinLine, pendulumEffectMinLine,
            effectJustifyRatio, pendulumEffectJustifyRatio,
        }) => {
            if (typeAbility) typeAbilityInputRef.current?.setValue(typeAbility.join(typeAbilitySeparator));
            if (typeof effectMinLine === 'number') setEffectMinLine(effectMinLine);
            if (typeof pendulumEffectMinLine === 'number') setPendulumEffectMinLine(pendulumEffectMinLine);
            if (typeof effectJustifyRatio === 'number') setEffectJustifyRatio(effectJustifyRatio);
            if (typeof pendulumEffectJustifyRatio === 'number') setPendulumEffectJustifyRatio(pendulumEffectJustifyRatio);
        }
    }));

    const typeLabel = cardIcon === 'auto'
        ? checkMonster({ frame })
            ? 'input.type.monster.label'
            : 'input.type.st.label'
        : IconTypeMap[cardIcon]?.value === 'st'
            ? 'input.type.st.label'
            : 'input.type.monster.label';
    const isOCG = format === 'ocg';
    return <>
        <PostPendulumFirstLineContainer className={`post-pendulum-input first-line variant-${format}`}>
            <CardTextInput ref={typeAbilityInputRef}
                addonBefore={language[typeLabel]}
                id="type-ability"
                defaultValue={useCard.getState().card.typeAbility.join(typeAbilitySeparator)}
                onChange={changeTypeAbility}
                onTakePicker={onTakePicker}
            />
            {isOCG && <Tooltip
                overlay={language['input.furigana-helper.tooltip']}
                overlayClassName="long-tooltip-overlay"
            >
                <Checkbox
                    className="input-kanji-helper"
                    onChange={toggleFuriganaHelper}
                    checked={furiganaHelper}
                >
                    {language['input.furigana-helper.label']}
                </Checkbox>
            </Tooltip>}
            <FormattingHelpDrawer />
            {showExtraDecorativeOption && <Popover
                overlayClassName="global-input-overlay global-style-picker-overlay"
                content={<div className="overlay-event-absorber">
                    <AdvancedParagraphPanel className="custom-style-picker">
                        <h2>
                            {language['input.condense.label']} <Explanation
                                content={<StyledPopMarkdown>{language['input.condense.tooltip']}</StyledPopMarkdown>}
                            />
                        </h2>
                        <div className="line-input">
                            <RadioTrain className="condense-input" value={`${condenseTolerant}`}
                                onChange={value => onCondenseTolerantChange(value as CondenseType)}
                                optionList={CondenseThresholdButtonList}
                            />
                        </div>
                        <h2>
                            {language['input.text-style.min-line.label']}
                        </h2>
                        <div className="line-input">
                            <SingleSliderContainer className="single-slider">
                                <span>{language['input.text-style.min-line.effect.placeholder']}:</span>
                                <InputNumber
                                    id="effect-line"
                                    size="small"
                                    value={effectMinLine}
                                    placeholder={language['input.text-style.min-line.effect.placeholder']}
                                    onChange={value => setEffectMinLine(typeof value === 'number' ? value : 0)}
                                    min={0}
                                    max={50}
                                />
                                <span>{language['input.text-style.min-line.pendulum-effect.placeholder']}:</span>
                                <InputNumber
                                    id="pendulum-effect-line"
                                    size="small"
                                    value={pendulumEffectMinLine}
                                    placeholder={language['input.text-style.min-line.pendulum-effect.placeholder']}
                                    onChange={value => setPendulumEffectMinLine(typeof value === 'number' ? value : 0)}
                                    min={0}
                                    max={50}
                                />
                            </SingleSliderContainer>
                        </div>
                        <h2>
                            {language['input.text-style.justify-ratio.label']} <Explanation
                                content={<StyledPopMarkdown>
                                    {language['input.text-style.justify-ratio.tooltip']}
                                </StyledPopMarkdown>}
                            />
                        </h2>
                        <div className="justify-ratio-input">
                            <SingleSliderContainer className="single-slider">
                                <span>{language['input.text-style.min-line.effect.placeholder']}:</span>
                                <InputNumber
                                    id="effect-justify-ratio"
                                    size="small"
                                    value={effectJustifyRatio}
                                    placeholder={language['input.text-style.min-line.effect.placeholder']}
                                    onChange={value => setEffectJustifyRatio(typeof value === 'number' ? value : 0)}
                                    min={0}
                                    max={5000}
                                    step={100}
                                />
                                <span>{language['input.text-style.min-line.pendulum-effect.placeholder']}:</span>
                                <InputNumber
                                    id="pendulum-effect-justify-ratio"
                                    size="small"
                                    value={pendulumEffectJustifyRatio}
                                    placeholder={language['input.text-style.min-line.pendulum-effect.placeholder']}
                                    onChange={value => setPendulumEffectJustifyRatio(typeof value === 'number' ? value : 0)}
                                    min={0}
                                    max={5000}
                                    step={100}
                                />
                            </SingleSliderContainer>
                        </div>
                    </AdvancedParagraphPanel>
                </div>}
            >
                <AdvancedParagraphButton>
                    <div className="button-label">
                        {language['input.text-style.paragraph-style.label']}
                    </div>
                </AdvancedParagraphButton>
            </Popover>}
        </PostPendulumFirstLineContainer>
    </>;
});