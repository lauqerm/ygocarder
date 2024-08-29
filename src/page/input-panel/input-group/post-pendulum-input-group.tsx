import { Checkbox, Tooltip } from 'antd';
import { RadioTrain } from '../input-train';
import { Explanation, FormattingHelpDrawer } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { CondenseType } from 'src/model';
import { CondenseThresholdButtonList } from '../const';
import styled from 'styled-components';

const StyledPostPendulumInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-areas:
        "type-input input-helper"
        "condense-input help-button";
    gap: var(--spacing-sm);
    align-items: center;
    .formatting-help-button {
        grid-area: help-button;
        &:focus {
            box-shadow: 0 0 0 2px var(--focus);
        }
    }
    .input-kanji-helper {
        grid-area: input-helper;
    }
    .type-ability-input {
        grid-area: type-input;
    }
    .condense-input {
        grid-area: condense-input;
		.standalone-addon.ant-input-group-addon {
			width: unset;
		}
		.ant-radio-button-wrapper {
			flex: 1 1 90px;
		}
	}
    &.variant-tcg {
        .type-ability-input {
            grid-column: span 2;
        }
    }
`;

export type PostPendulumInputGroupRef = {
    setValue: (value: { typeAbility?: string[] }) => void,
}
export type PostPendulumInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const PostPendulumInputGroup = forwardRef<PostPendulumInputGroupRef, PostPendulumInputGroup>(({
    onTakePicker,
}, ref) => {
    const {
        format,
        furiganaHelper,
        condenseTolerant,
        setCard,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            format,
            furiganaHelper,
            effectStyle,
        },
        setCard,
        getUpdater,
    }) => ({
        format,
        furiganaHelper,
        condenseTolerant: effectStyle?.condenseTolerant,
        setCard,
        getUpdater,
    })));
    const typeAbilitySeparator = format === 'ocg' ? '／' : '/';
    const typeAbilityInputRef = useRef<CardTextInputRef>(null);
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

    useImperativeHandle(ref, () => ({
        setValue: ({ typeAbility }) => {
            if (typeAbility) typeAbilityInputRef.current?.setValue(typeAbility.join(typeAbilitySeparator));
        }
    }));

    const isOCG = format === 'ocg';
    return <StyledPostPendulumInputContainer className={`post-pendulum-input variant-${format}`}>
        <CardTextInput ref={typeAbilityInputRef}
            addonBefore="Type"
            id="type-ability"
            defaultValue={useCard.getState().card.typeAbility.join(typeAbilitySeparator)}
            onChange={changeTypeAbility}
            onTakePicker={onTakePicker}
        />
        {isOCG && <Tooltip
            overlay="Automatically annotates popular kanji characters with corresponding furigana."
            overlayClassName="long-tooltip-overlay"
        >
            <Checkbox
                className="input-kanji-helper"
                onChange={toggleFuriganaHelper}
                checked={furiganaHelper}
            >
                {'Furigana Helper'}
            </Checkbox>
        </Tooltip>}
        <RadioTrain className="condense-input" value={`${condenseTolerant}`}
            onChange={value => onCondenseTolerantChange(value as CondenseType)}
            optionList={CondenseThresholdButtonList}
        >
            <span>
                Condense <Explanation
                    content={'Higher condense limit will prefer compressing words instead of adding new lines.'}
                />
            </span>
        </RadioTrain>
        <FormattingHelpDrawer />
    </StyledPostPendulumInputContainer>;
});