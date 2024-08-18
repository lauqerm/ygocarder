import { Checkbox, Tooltip } from 'antd';
import { RadioTrain } from '../input-train';
import { Explanation, FormattingHelpDrawer } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { CondenseType } from 'src/model';
import { CondenseThresholdButtonList } from '../const';

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
    return <div className={`two-column-input-group variant-${format}`}>
        <CardTextInput ref={typeAbilityInputRef}
            addonBefore="Type"
            id="type-ability"
            defaultValue={useCard.getState().card.typeAbility.join(typeAbilitySeparator)}
            onChange={changeTypeAbility}
            onTakePicker={onTakePicker}
        />
        {isOCG && <Tooltip
            overlay="Automatically annotates popular kanji characters with furigana. Manual-input furigana are unaffected."
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
                    content={'Higher condense limit will prefer compressing words instead of adding new lines'}
                />
            </span>
        </RadioTrain>
        <FormattingHelpDrawer />
    </div>;
});