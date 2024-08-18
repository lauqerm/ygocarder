import { Tooltip } from 'antd';
import { IconButton } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { normalizedCardName, randomSetID } from 'src/util';

export type NameSetInputGroupRef = {
    setValue: (value: { name?: string, setId?: string }) => void,
}
export type NameSetInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const NameSetInputGroup = forwardRef<NameSetInputGroupRef, NameSetInputGroup>(({
    onTakePicker,
}, ref) => {
    const {
        name,
        format,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            name,
            format,
        },
        getUpdater,
    }) => ({
        name,
        format,
        getUpdater,
    })));
    const nameInputRef = useRef<CardTextInputRef>(null);
    const setIdInputRef = useRef<CardTextInputRef>(null);

    const changeSetId = useMemo(() => getUpdater('setId'), [getUpdater]);
    const changeName = useMemo(() => getUpdater('name', undefined, 'debounce'), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: ({ name, setId }) => {
            if (name) nameInputRef.current?.setValue(name);
            if (setId) setIdInputRef.current?.setValue(setId);
        }
    }));

    return <div className="name-id-input">
        <CardTextInput ref={nameInputRef}
            id="name"
            defaultValue={name}
            addonBefore={<Tooltip title="Copy">
                <span style={{ cursor: 'pointer' }} onClick={() => {
                    navigator.clipboard.writeText(normalizedCardName(name));
                }}>
                    Name
                </span>
            </Tooltip>}
            onChange={changeName}
            onTakePicker={onTakePicker}
        />
        <CardTextInput ref={setIdInputRef}
            id="set-id"
            defaultValue={useCard.getState().card.setId}
            addonBefore={<div className="input-label-with-button">
                <div className="input-label">Set ID</div>
                <IconButton
                    containerProps={{
                        onClick: () => setIdInputRef.current?.setValue(randomSetID(format))
                    }}
                    Icon={SyncOutlined}
                    tooltipProps={{ overlay: 'Randomize' }}
                />
            </div>}
            onChange={changeSetId}
            onTakePicker={onTakePicker}
        />
    </div>;
});