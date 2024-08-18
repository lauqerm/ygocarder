import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';

export type StatInputGroupRef = {
    setValue: (value: { atk?: string, def?: string }) => void,
};
export type StatInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const StatInputGroup = forwardRef<StatInputGroupRef, StatInputGroup>(({
    onTakePicker,
}, ref) => {
    const getUpdater = useCard(state => state.getUpdater);
    const atkInputRef = useRef<CardTextInputRef>(null);
    const defInputRef = useRef<CardTextInputRef>(null);

    const changeATK = useMemo(() => getUpdater('atk', value => typeof value === 'string' ? value.trim() : value), [getUpdater]);
    const changeDEF = useMemo(() => getUpdater('def', value => typeof value === 'string' ? value.trim() : value), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: ({ atk, def }) => {
            if (atk) atkInputRef.current?.setValue(atk);
            if (def) defInputRef.current?.setValue(def);
        }
    }));

    return <>
        <CardTextInput ref={atkInputRef}
            id="atk"
            addonBefore="ATK"
            defaultValue={useCard.getState().card.atk}
            onChange={changeATK}
            onTakePicker={onTakePicker}
        />
        <CardTextInput ref={defInputRef}
            id="def"
            addonBefore="DEF"
            defaultValue={useCard.getState().card.def}
            onChange={changeDEF}
            onTakePicker={onTakePicker}
        />
    </>;
});