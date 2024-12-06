import { Tooltip } from 'antd';
import { IconButton } from 'src/component';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import { normalizedCardName, randomSetID } from 'src/util';
import { StyledInputLabelWithButton } from '../input-panel.styled';
import styled from 'styled-components';

const StyledNameInputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    width: 100%;
    .name-input {
        flex: 3;
        min-width: 400px;
    }
    .set-id-input {
        flex: 1;
        min-width: 250px;
    }
`;
const StyledCopyButton = styled.span`
    cursor: pointer;
`;

export type NameSetInputGroupRef = {
    setValue: (value: { name?: string, setId?: string }) => void,
}
export type NameSetInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const NameSetInputGroup = forwardRef<NameSetInputGroupRef, NameSetInputGroup>(({
    onTakePicker,
}, ref) => {
    const language = useLanguage();
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
            if (typeof name === 'string') nameInputRef.current?.setValue(name);
            if (typeof setId === 'string') setIdInputRef.current?.setValue(setId);
        }
    }));

    return <StyledNameInputContainer className="name-id-input">
        <CardTextInput ref={nameInputRef}
            id="name"
            defaultValue={name}
            addonBefore={<Tooltip title={language['input.name.tooltip']}>
                <StyledCopyButton onClick={() => {
                    navigator.clipboard.writeText(normalizedCardName(name));
                }}>
                    {language['input.name.label']}
                </StyledCopyButton>
            </Tooltip>}
            onChange={changeName}
            onTakePicker={onTakePicker}
        />
        <CardTextInput ref={setIdInputRef}
            id="set-id"
            defaultValue={useCard.getState().card.setId}
            addonBefore={<StyledInputLabelWithButton className="input-label-with-button">
                <div className="input-label">
                    {language['input.set-id.label']}
                </div>
                <IconButton
                    onClick={() => setIdInputRef.current?.setValue(randomSetID(format))}
                    Icon={SyncOutlined}
                    tooltipProps={{ overlay: language['button.randomize.label'] }}
                />
            </StyledInputLabelWithButton>}
            onChange={changeSetId}
            onTakePicker={onTakePicker}
        />
    </StyledNameInputContainer>;
});