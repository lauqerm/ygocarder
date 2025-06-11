import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { CardTextInput, CardTextInputRef } from '../input-text';
import { useCard, useLanguage } from 'src/service';
import { IconButton, RadioTrain } from 'src/component';
import { CardCheckboxGroup } from '../input-checkbox-group';
import { randomPassword } from 'src/util';
import { SyncOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useShallow } from 'zustand/react/shallow';
import { StickerButtonList } from '../const';
import styled from 'styled-components';
import { StyledInputLabelWithButton } from '../input-panel.styled';
import { Checkbox, Dropdown, Menu, Tooltip } from 'antd';
import { copyrightMap, FlagIndexMap } from 'src/model';

const StyledFooterInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-sm);
    .checkbox-input {
        align-self: center;
        .ant-checkbox + span {
            user-select: none;
        }
    }
    .sticker-input,
    .checkbox-input {
        grid-column: span 2;
    }
    .sticker-input .ant-radio-button-wrapper {
        padding-left: var(--spacing-sm);
        padding-right: var(--spacing-sm);
    }
`;
const StyledLinkRatingInputContainer = styled(StyledInputLabelWithButton)`
    .auto-link-rating-input {
        margin-left: var(--spacing-sm);
    }
    .auto-link-rating {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 1;
        text-align: center;
        padding: var(--spacing-xs);
        background: var(--main-level-4);
        border-radius: var(--br-lg);
        font-family: 'RoGSanSrfStd-Bd';
        box-shadow: var(--bs-button);
    }
`;

export type FooterInputGroupRef = {
    setValue: (value: { password?: string, creator?: string, atk?: string, def?: string, linkRating?: string }) => void,
};
export type FooterInputGroup = {
    isMonster: boolean,
    showCreativeOption: boolean,
} & Pick<CardTextInput, 'onTakePicker'>;
export const FooterInputGroup = forwardRef<FooterInputGroupRef, FooterInputGroup>(({
    isMonster,
    showCreativeOption,
    onTakePicker,
}, ref) => {
    const language = useLanguage();
    const {
        isLink,
        linkRating,
        autoLinkRating,
        showDefAndLink,
        sticker,
        format,
        getUpdater,
    } = useCard(useShallow(({
        card: { sticker, format, flag, isLink, linkRating, linkMap },
        getUpdater,
    }) => ({
        linkRating,
        autoLinkRating: linkMap.length,
        isLink,
        sticker,
        format,
        showDefAndLink: flag[FlagIndexMap['showDefAndLink']] === 1,
        getUpdater,
    })));
    const passwordInputRef = useRef<CardTextInputRef>(null);
    const creatorInputRef = useRef<CardTextInputRef>(null);
    const atkInputRef = useRef<CardTextInputRef>(null);
    const defInputRef = useRef<CardTextInputRef>(null);
    const linkRatingInputRef = useRef<CardTextInputRef>(null);

    const copyrightList = (format && copyrightMap[format as keyof typeof copyrightMap])
        ? copyrightMap[format as keyof typeof copyrightMap]
        : copyrightMap.tcg;

    const changeATK = useMemo(() => getUpdater('atk', value => typeof value === 'string' ? value : value), [getUpdater]);
    const changeDEF = useMemo(() => getUpdater('def', value => typeof value === 'string' ? value : value), [getUpdater]);
    const changeLinkRating = useMemo(() => getUpdater('linkRating', value => typeof value === 'string' ? value : value), [getUpdater]);
    const changePassword = useMemo(() => getUpdater('password', undefined, 'debounce'), [getUpdater]);
    const onStickerChange = useMemo(() => getUpdater('sticker'), [getUpdater]);
    const changeCreator = useMemo(() => getUpdater('creator', undefined, 'debounce'), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: ({ password, creator, atk, def, linkRating }) => {
            if (typeof atk === 'string') atkInputRef.current?.setValue(atk);
            if (typeof def === 'string') defInputRef.current?.setValue(def);
            if (typeof password === 'string') passwordInputRef.current?.setValue(password);
            if (typeof creator === 'string') creatorInputRef.current?.setValue(creator);
            if (typeof linkRating === 'string') linkRatingInputRef.current?.setValue(linkRating);
        }
    }));

    return <StyledFooterInputContainer className="card-footer-input">
        {(isMonster || showCreativeOption) && <>
            <CardTextInput ref={atkInputRef}
                id="atk"
                addonBefore={language['input.atk.label']}
                defaultValue={useCard.getState().card.atk}
                onChange={changeATK}
                onTakePicker={onTakePicker}
            />
            {(!isLink || (isLink && showDefAndLink)) && <CardTextInput ref={defInputRef}
                id="def"
                addonBefore={language['input.def.label']}
                defaultValue={useCard.getState().card.def}
                onChange={changeDEF}
                onTakePicker={onTakePicker}
            />}
            {(isLink && showDefAndLink) && <div />}
            {isLink && <CardTextInput ref={linkRatingInputRef}
                id="link"
                addonBefore={<StyledLinkRatingInputContainer className="input-label-with-button">
                    <div className="input-label">{language['input.link.label']}</div>
                    <Tooltip title={language['input.link.auto.tooltip']}>
                        <div className="auto-link-rating-input">
                            {(typeof linkRating === 'string' && linkRating.length > 0)
                                ? <Checkbox
                                    onChange={e => {
                                        if (e.target.checked) {
                                            changeLinkRating('');
                                            linkRatingInputRef.current.setValue('');
                                        }
                                    }}
                                />
                                : <div className="auto-link-rating">
                                    {isLink ? autoLinkRating : '-'}
                                </div>}
                        </div>
                    </Tooltip>
                </StyledLinkRatingInputContainer>}
                defaultValue={`${useCard.getState().card.linkRating}`}
                onChange={changeLinkRating}
                onTakePicker={onTakePicker}
                placeholder={language['input.link.custom.placeholder']}
            />}
        </>}
        <CardTextInput ref={passwordInputRef}
            id="password"
            addonBefore={<StyledInputLabelWithButton className="input-label-with-button">
                <div className="input-label">{language['input.password.label']}</div>
                <IconButton
                    onClick={() => passwordInputRef.current?.setValue(randomPassword())}
                    Icon={SyncOutlined}
                    tooltipProps={{ overlay: language['button.randomize.label'] }}
                />
            </StyledInputLabelWithButton>}
            defaultValue={useCard.getState().card.password}
            onChange={changePassword}
            onTakePicker={onTakePicker}
        />
        <CardTextInput ref={creatorInputRef}
            id="creator"
            addonBefore={<StyledInputLabelWithButton className="input-label-with-button">
                <div className="input-label">{language['input.copyright.label']}</div>
                <Dropdown
                    className="save-button-dropdown"
                    placement="topLeft"
                    arrow
                    overlay={<Menu onClick={e => e.domEvent.stopPropagation()}>
                        {copyrightList.map((text, index) => {
                            return <Menu.Item key={`${index}`}
                                onClick={() => {
                                    creatorInputRef.current?.setValue(text);
                                }}
                            >
                                {text}
                            </Menu.Item>;
                        })}
                    </Menu>}
                >
                    <div>
                        <IconButton
                            onClick={() => {}}
                            Icon={UnorderedListOutlined}
                        />
                    </div>
                </Dropdown>
            </StyledInputLabelWithButton>}
            defaultValue={useCard.getState().card.creator}
            onChange={changeCreator}
            onTakePicker={onTakePicker}
        />
        <CardCheckboxGroup />
        <RadioTrain
            className="sticker-input fill-input-train"
            value={sticker}
            onChange={onStickerChange}
            optionList={StickerButtonList}
        >
            <span>{language['input.sticker.label']}</span>
        </RadioTrain>
    </StyledFooterInputContainer>;
});