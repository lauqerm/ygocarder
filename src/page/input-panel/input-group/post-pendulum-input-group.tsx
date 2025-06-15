import { Checkbox, InputNumber, Tooltip } from 'antd';
import { Explanation, FormattingHelpDrawer, RadioTrain, StyledPopMarkdown } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard, useLanguage } from 'src/service';
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
        flex-wrap: wrap;
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
    .line-input {
        flex: 0 0 auto;
        display: inline-grid;
        grid-template-columns: var(--width-label) max-content max-content;
        gap: var(--spacing-sm);
        align-items: center;
        .ant-input-number {
            width: 65px;
        }
    }
    .formatting-help-button,
    .input-kanji-helper {
        flex: 0 0 auto;
    }
    .formatting-help-button {
        grid-area: help-button;
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

export type PostPendulumInputGroupRef = {
    setValue: (value: {
        typeAbility?: string[],
        effectMinLine?: number,
        pendulumEffectMinLine?: number,
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
    const typeAbilitySeparator = format === 'ocg' ? '／' : '/';
    const typeAbilityInputRef = useRef<CardTextInputRef>(null);
    const [effectMinLine, setEffectMinLine] = useState(() => useCard.getState().card.effectStyle.minLine);
    const [pendulumEffectMinLine, setPendulumEffectMinLine] = useState(() => useCard.getState().card.pendulumStyle.minLine);

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
        /** Changing min line force render effect, so we should do so sparingly */
        let relevant = true;
        setTimeout(() => {
            if (relevant) setCard(currentCard => {
                const newEffectStyle = { ...currentCard.effectStyle, minLine: effectMinLine };
                const newPendulumEffectStyle = { ...currentCard.pendulumStyle, minLine: pendulumEffectMinLine };

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
    }, [effectMinLine, pendulumEffectMinLine, setCard]);

    useImperativeHandle(ref, () => ({
        setValue: ({ typeAbility, effectMinLine, pendulumEffectMinLine }) => {
            if (typeAbility) typeAbilityInputRef.current?.setValue(typeAbility.join(typeAbilitySeparator));
            if (typeof effectMinLine === 'number') setEffectMinLine(effectMinLine);
            if (typeof pendulumEffectMinLine === 'number') setPendulumEffectMinLine(pendulumEffectMinLine);
        }
    }));

    const typeLabel = cardIcon === 'auto'
        ? checkMonster({ frame })
            ? 'input.type.monster.label'
            : 'input.type.st.label'
        : IconTypeMap[cardIcon].value === 'st'
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
        </PostPendulumFirstLineContainer>
        <PostPendulumFirstLineContainer className={`post-pendulum-input second-line variant-${format}`}>
            <RadioTrain className="condense-input" value={`${condenseTolerant}`}
                onChange={value => onCondenseTolerantChange(value as CondenseType)}
                optionList={CondenseThresholdButtonList}
            >
                <span>
                    {language['input.condense.label']} <Explanation
                        content={<StyledPopMarkdown>{language['input.condense.tooltip']}</StyledPopMarkdown>}
                    />
                </span>
            </RadioTrain>
            <div className="line-input">
                <div>
                    {language['input.text-style.min-line.label']}
                </div>
                <InputNumber
                    id="effect-line"
                    value={effectMinLine}
                    placeholder={language['input.text-style.min-line.effect.placeholder']}
                    onChange={value => setEffectMinLine(typeof value === 'number' ? value : 0)}
                    min={0}
                    max={50}
                />
                <InputNumber
                    id="pendulum-effect-line"
                    value={pendulumEffectMinLine}
                    placeholder={language['input.text-style.min-line.pendulum-effect.placeholder']}
                    onChange={value => setPendulumEffectMinLine(typeof value === 'number' ? value : 0)}
                    min={0}
                    max={50}
                />
            </div>
        </PostPendulumFirstLineContainer>
    </>;
});