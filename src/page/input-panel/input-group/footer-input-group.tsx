import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard } from 'src/service';
import { IconButton } from 'src/component';
import { RadioTrain } from '../input-train';
import { CardCheckboxGroup } from '../input-checkbox-group';
import { randomPassword } from 'src/util';
import { SyncOutlined } from '@ant-design/icons';
import { useShallow } from 'zustand/react/shallow';
import { StickerButtonList } from '../const';

export type FooterInputGroupRef = {
    setValue: (value: { password?: string, creator?: string }) => void,
};
export type FooterInputGroup = {} & Pick<CardTextInput, 'onTakePicker'>;
export const FooterInputGroup = forwardRef<FooterInputGroupRef, FooterInputGroup>(({
    onTakePicker,
}, ref) => {
    const {
        sticker,
        getUpdater,
    } = useCard(useShallow(({
        card: { sticker },
        getUpdater,
    }) => ({
        sticker,
        getUpdater,
    })));
    const passwordInputRef = useRef<CardTextInputRef>(null);
    const creatorInputRef = useRef<CardTextInputRef>(null);

    const changePassword = useMemo(() => getUpdater('password', undefined, 'debounce'), [getUpdater]);
    const onStickerChange = useMemo(() => getUpdater('sticker'), [getUpdater]);
    const changeCreator = useMemo(() => getUpdater('creator', undefined, 'debounce'), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: ({ password, creator }) => {
            if (password) passwordInputRef.current?.setValue(password);
            if (creator) creatorInputRef.current?.setValue(creator);
        }
    }));

    return <>
        <CardTextInput ref={passwordInputRef}
            id="password"
            addonBefore={<div className="input-label-with-button">
                <div className="input-label">Password</div>
                <IconButton
                    containerProps={{
                        onClick: () => passwordInputRef.current?.setValue(randomPassword())
                    }}
                    Icon={SyncOutlined}
                    tooltipProps={{ overlay: 'Randomize' }}
                />
            </div>}
            defaultValue={useCard.getState().card.password}
            onChange={changePassword}
            onTakePicker={onTakePicker}
        />
        <CardCheckboxGroup />
        <CardTextInput ref={creatorInputRef}
            id="creator"
            addonBefore="Creator Text"
            defaultValue={useCard.getState().card.creator}
            onChange={changeCreator}
            onTakePicker={onTakePicker}
        />
        <RadioTrain
            className="sticker-input image-input-train"
            value={sticker}
            onChange={onStickerChange}
            optionList={StickerButtonList}
        >
            <span>Sticker</span>
        </RadioTrain>
    </>;
});