import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { CardTextArea, CardTextAreaRef } from '../input-text';
import { useCard } from 'src/service';

export type EffectInputGroupRef = {
    setValue: (value: string) => void,
};
export type EffectInputGroup = {} & Pick<CardTextArea, 'onTakePicker'>;
export const EffectInputGroup = forwardRef<EffectInputGroupRef, EffectInputGroup>(({
    onTakePicker,
}, ref) => {
    const getUpdater = useCard(state => state.getUpdater);
    const effectInputRef = useRef<CardTextAreaRef>(null);

    const changeEffect = useMemo(() => getUpdater('effect', undefined, 'debounce'), [getUpdater]);

    useEffect(() => {
        const pickerRef = effectInputRef.current?.getPickerRef();

        if (pickerRef) onTakePicker?.(pickerRef);
    /** No need to depend on handler */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        autoSize={{
            minRows: 9,
        }}
    />;
});