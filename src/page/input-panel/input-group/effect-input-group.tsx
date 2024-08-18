import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { CardTextArea, CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';

export type EffectInputGroupRef = {
    setValue: (value: string) => void,
};
export type EffectInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const EffectInputGroup = forwardRef<EffectInputGroupRef, EffectInputGroup>(({
    onTakePicker,
}, ref) => {
    const getUpdater = useCard(state => state.getUpdater);
    const effectInputRef = useRef<CardTextInputRef>(null);

    const changeEffect = useMemo(() => getUpdater('effect', undefined, 'debounce'), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: (value) => {
            effectInputRef.current?.setValue(value);
        }
    }));

    return <CardTextArea ref={effectInputRef}
        id="effect"
        allowHotkey
        defaultValue={useCard.getState().card.effect}
        onChange={changeEffect}
        onTakePicker={onTakePicker}
        rows={9}
    />;
});