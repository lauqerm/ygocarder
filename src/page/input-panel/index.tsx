import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Input, Checkbox, Dropdown } from 'antd';
import { Card, CardArtCanvasConst, CondenseType, NameStyle, NameStyleType, frameMap } from '../../model';
import { FrameInfoBlock, IconButton, ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster, randomPassword, randomSetID, checkDarkSynchro } from '../../util';
import debounce from 'lodash.debounce';
import { CaretDownOutlined, SyncOutlined } from '@ant-design/icons';
import {
    FoilButtonList,
    FrameButtonList,
    StarButtonList,
    STIconButtonList,
    getAttributeList,
    StickerButtonList,
    CondenseThresholdButtonList,
    FinishButtonList,
    ArtFinishButtonList,
    FormatButtonList
} from './const';
import { CharPicker } from './char-picker';
import { StylePicker, StylePickerRef } from './style-picker';
import { CheckboxTrain, RadioTrain } from './input-train';
import { ImageCropperRef } from '../../component/card-picture';
import { Explanation } from 'src/component/explanation';
import { changeCardFormat } from '../../service';
import './input-panel.scss';

const { TextArea } = Input;

const onChangeFactory = (
    key: string,
    mutateFunction: (func: (card: Card) => Card) => void,
    valueTransform: (value: any) => any = (value) => value,
) => {
    return (e: any) => {
        mutateFunction(current => ({
            ...current,
            [key]: valueTransform(typeof e === 'string' || typeof e === 'number' || Array.isArray(e) ? e : e?.target?.value),
        }));
    };
};

export type CardInputPanelRef = {
    forceCardData: (card: Card) => void,
}
export type CardInputPanel = {
    currentCard: Card,
    receivingCanvasRef: HTMLCanvasElement | null,
    defaultCropInfo: Partial<ReactCrop.Crop>,
    onCardChange: React.Dispatch<React.SetStateAction<Card>>,
    onImageChange?: (cropInfo: Partial<ReactCrop.Crop>, sourceType: 'internal' | 'external') => void,
    children?: React.ReactNode,
} & {
    onTainted: ImageCropper['onTainted']
}
export const CardInputPanel = React.forwardRef<CardInputPanelRef, CardInputPanel>(({
    currentCard,
    receivingCanvasRef,
    defaultCropInfo,
    onCardChange,
    onImageChange,
    onTainted,
    children,
}: CardInputPanel, forwardedRef) => {
    const [isMirrorScale, setMirrorScale] = useState(true);
    const stylePickerRef = useRef<StylePickerRef>(null);
    const imageCropperRef = useRef<ImageCropperRef>(null);
    const setCard = (mutateFunc: (card: Card) => Card) => {
        onCardChange(currentCard => mutateFunc(currentCard));
    };
    const onFormatChange = (formatValue: string | number) => {
        onCardChange(currentCard => changeCardFormat(currentCard, `${formatValue}`));
    };
    const onFoilChange = onChangeFactory('foil', setCard);
    const onFinishChange = onChangeFactory('finish', setCard);
    const onArtFinishChange = onChangeFactory('artFinish', setCard);
    const onFrameChange = (frameValue: number | string) => {
        onCardChange(currentCard => {
            const value = `${frameValue}`;
            const isST = value === 'spell' || value === 'trap';
            const newTypeAbility = value === 'spell'
                ? ['Spell Card']
                : value === 'trap' ? ['Trap Card'] : currentCard.typeAbility;
            if (isST) setDisplayTypeAbility(newTypeAbility[0]);

            return {
                ...currentCard,
                frame: value,
                isPendulum: value === 'link' || value === 'token' || isST ? false : currentCard.isPendulum,
                subFamily: isST ? 'NO ICON' : currentCard.subFamily,
                attribute: isST
                    ? `${value}`.toUpperCase()
                    : currentCard.attribute,
                typeAbility: value === 'spell'
                    ? ['Spell Card']
                    : value === 'trap' ? ['Trap Card'] : currentCard.typeAbility,
            };
        });
    };
    const onAttributeChange = onChangeFactory('attribute', setCard);
    const onSubFamilyChange = onChangeFactory('subFamily', setCard);
    const onNameChange = debounce(onChangeFactory('name', setCard), 350);
    const onNameColorChange = (type: NameStyleType, value: Partial<NameStyle>) => {
        onCardChange(currentCard => {
            return {
                ...currentCard,
                nameStyleType: type,
                nameStyle: value,
            };
        });
    };
    const onCondenseTolerantChange = (value: CondenseType) => {
        onCardChange(currentCard => {
            return {
                ...currentCard,
                effectStyle: {
                    ...currentCard.effectStyle,
                    condenseTolerant: value,
                }
            };
        });
    };
    const onStarChange = onChangeFactory('star', setCard);
    const onIsPendulumChange = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, isPendulum: e.target.checked };
    });
    const onPictureChange = onChangeFactory('picture', setCard);
    const onLinkMapChange = onChangeFactory('linkMap', setCard);
    const onPendulumFrameChange = onChangeFactory('pendulumFrame', setCard);
    const onRedScaleChange = onChangeFactory('pendulumScaleRed', setCard);
    const onBlueScaleChange = onChangeFactory('pendulumScaleBlue', setCard);
    const onPendulumEffectChange = debounce(onChangeFactory('pendulumEffect', setCard), 350);
    const onEffectChange = debounce(onChangeFactory('effect', setCard), 350);
    const onATKChange = onChangeFactory('atk', setCard);
    const onDEFChange = onChangeFactory('def', setCard);
    const onTypeAbilityChange = debounce((value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            typeAbility: value.map(entry => `${entry}`),
        }));
    }, 350);
    const onSetIDChange = onChangeFactory('setId', setCard);
    const onPasscodeChange = onChangeFactory('passcode', setCard);
    const onStickerChange = onChangeFactory('sticker', setCard);
    const onCreatorChange = onChangeFactory('creator', setCard);
    const onFirstEditionChange = (e: any) => onCardChange(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isFirstEdition: nextValue,
            isDuelTerminalCard: nextValue ? false : currentCard.isDuelTerminalCard,
        };
    });
    const onDuelTerminalCardChange = (e: any) => onCardChange(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isDuelTerminalCard: nextValue,
            isFirstEdition: nextValue ? false : currentCard.isFirstEdition,
        };
    });
    const onSpeedCardChange = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, isSpeedCard: e.target.checked };
    });

    const {
        format,
        frame, foil, finish, artFinish,
        name, nameStyleType, nameStyle,
        picture,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumFrame, pendulumEffect, pendulumScaleRed, pendulumScaleBlue,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, creator, sticker,
        isSpeedCard, isDuelTerminalCard, isFirstEdition,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const isDarkSynchro = checkDarkSynchro(currentCard);
    const [displayTypeAbility, setDisplayTypeAbility] = useState(typeAbility.join('/'));
    const [displayName, setDisplayName] = useState(name);
    const [displayEffect, setDisplayEffect] = useState(effect);
    const [displayPendulumEffect, setDisplayPendulumEffect] = useState(pendulumEffect);
    const [onlineCharPicker, setOnlineCharPicker] = useState('');
    const ref = useRef();

    const attributeList = useMemo(() => getAttributeList(format), [format]);

    useImperativeHandle(forwardedRef, () => ({
        forceCardData: (card) => {
            setDisplayTypeAbility(card.typeAbility.join('/'));
            setDisplayName(card.name);
            setDisplayEffect(card.effect);
            setDisplayPendulumEffect(card.pendulumEffect);
            imageCropperRef.current?.forceExternalSource(card.picture, card.pictureCrop);
        }
    }));

    const currentPendulumFrame = frameMap[pendulumFrame];
    return <div className="card-info-panel">
        {children}
        <CharPicker
            targetId={onlineCharPicker}
            onPick={value => {
                if (ref.current) (ref.current as any)?.props?.onChange?.({
                    target: { value }
                });
            }}
        />
        <div className="card-overlay-input">
            <RadioTrain className="format-radio" value={format} onChange={onFormatChange} optionList={FormatButtonList}>
                <span>Format</span>
            </RadioTrain>
            <RadioTrain className="foil-radio" value={foil} onChange={onFoilChange} optionList={FoilButtonList}>
                <span>Foil</span>
            </RadioTrain>
            <CheckboxTrain className="finish-checkbox" value={finish} onChange={onFinishChange} optionList={FinishButtonList}>
                <span>Finish Type</span>
            </CheckboxTrain>
        </div>
        <RadioTrain className="frame-radio" value={frame} onChange={onFrameChange} optionList={FrameButtonList} />
        <div className="card-header custom-gap">
            <Input
                id="name"
                ref={onlineCharPicker === 'name' ? ref as any : null}
                onFocus={() => setOnlineCharPicker('name')}
                allowClear
                addonBefore={'Name'}
                placeholder="Card Name"
                value={displayName}
                className="name-input"
                onChange={ev => {
                    onNameChange(ev);
                    setDisplayName(ev.target.value);
                }}
            />
            <StylePicker ref={stylePickerRef} defaultType={nameStyleType} defaultValue={nameStyle} onChange={onNameColorChange} />
            {isMonster
                ? !isLink
                    ? <RadioTrain className="checkbox-star-train" value={`${star}`} onChange={onStarChange} optionList={StarButtonList}>
                        <span>{isXyz ? 'Rank' : isDarkSynchro ? 'Neg. Level' : 'Level'}</span>
                    </RadioTrain>
                    : null
                : <RadioTrain value={subFamily} onChange={onSubFamilyChange} optionList={STIconButtonList}>
                    <span>Icon</span>
                </RadioTrain>
            }
        </div>
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <RadioTrain
                    className="image-input-train attribute-input"
                    value={attribute}
                    onChange={onAttributeChange}
                    optionList={attributeList}
                >
                    <span>Attribute</span>
                </RadioTrain>
                <Input
                    id="set-id"
                    ref={onlineCharPicker === 'set-id' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('set-id')}
                    allowClear
                    className="set-id-input"
                    addonBefore={<div className="input-label-with-button">
                        <div className="input-label">Set ID</div>
                        <IconButton
                            iconProps={{ onClick: () => onPasscodeChange(randomSetID()) }}
                            Icon={SyncOutlined}
                            tooltipProps={{ overlay: 'Randomize' }}
                        />
                    </div>}
                    onChange={onSetIDChange}
                    placeholder="Set ID"
                    value={setId}
                />
                {(isMonster && frame !== 'link' && frame !== 'token') && <div className="pendulum-container">
                    <div className="joined-row pendulum-option">
                        <Checkbox onChange={onIsPendulumChange} checked={isPendulum}>Is Pendulum</Checkbox>
                        {isPendulum && <Checkbox onChange={e => setMirrorScale(e.target.checked)} checked={isMirrorScale}>Mirror Scale</Checkbox>}
                        {isPendulum && <Dropdown
                            arrow
                            overlayClassName="pendulum-frame-picker-overlay"
                            overlay={<div className="pendulum-frame-picker">
                                <RadioTrain
                                    className="frame-radio"
                                    value={pendulumFrame}
                                    onChange={onPendulumFrameChange}
                                    optionList={FrameButtonList}
                                />
                            </div>}
                        >
                            <div className="pendulum-frame-input">
                                Pendulum Frame <CaretDownOutlined /> {currentPendulumFrame ? <FrameInfoBlock {...currentPendulumFrame} /> : null}
                            </div>
                        </Dropdown>}
                    </div>
                    {isPendulum && <>
                        <div>
                            <Input key="blue-scale"
                                addonBefore={<span>
                                    <span style={{ color: '#3b9dff' }}>Blue</span> Scale
                                </span>}
                                value={pendulumScaleBlue}
                                onChange={e => {
                                    onBlueScaleChange(e);
                                    if (isMirrorScale) onRedScaleChange(e);
                                }} />
                        </div>
                        <div>
                            <Input key="red-scale"
                                addonBefore={<span>
                                    <span style={{ color: '#ff6f6f' }}>Red</span> Scale
                                </span>}
                                value={pendulumScaleRed}
                                onChange={e => {
                                    if (isMirrorScale) onBlueScaleChange(e);
                                    onRedScaleChange(e);
                                }} />
                        </div>
                        <div className="joined-row" style={{ position: 'relative' }}>
                            <TextArea key="pendulum-effect"
                                id="pendulum-effect"
                                ref={onlineCharPicker === 'pendulum-effect' ? ref as any : null}
                                onFocus={() => setOnlineCharPicker('pendulum-effect')}
                                allowClear
                                placeholder="Pendulum effect"
                                value={displayPendulumEffect}
                                onChange={ev => {
                                    onPendulumEffectChange(ev);
                                    setDisplayPendulumEffect(ev.target.value);
                                }}
                                rows={6}
                            />
                        </div>
                    </>}
                </div>}
                <Input addonBefore="Type"
                    id="type"
                    ref={onlineCharPicker === 'type' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('type')}
                    allowClear
                    onChange={ev => {
                        const value = ev.target.value;

                        setDisplayTypeAbility(value);
                        onTypeAbilityChange(value
                            .split('/')
                            .map(entry => entry.trim())
                            .filter(entry => typeof entry === 'string' && entry.length > 0));
                    }}
                    placeholder="Type / Ability"
                    style={{ width: '100%' }}
                    value={displayTypeAbility}
                />
                <RadioTrain className="condense-input" value={`${effectStyle?.condenseTolerant}`}
                    onChange={value => onCondenseTolerantChange(value as CondenseType)}
                    optionList={CondenseThresholdButtonList}
                >
                    <span>
                        Condense <Explanation
                            content={'Higher condense limit will favor compressing words instead of adding new lines'}
                        />
                    </span>
                </RadioTrain>
                <TextArea key="effect"
                    id="card-effect"
                    ref={onlineCharPicker === 'card-effect' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('card-effect')}
                    allowClear
                    placeholder="Card effect"
                    value={displayEffect}
                    rows={9}
                    onChange={ev => {
                        onEffectChange(ev);
                        setDisplayEffect(ev.target.value);
                    }}
                />
                <div className="card-footer-input">
                    {isMonster
                        ? <Input key="atk"
                            id="atk"
                            ref={onlineCharPicker === 'atk' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('atk')}
                            addonBefore="ATK" allowClear value={atk} onChange={onATKChange} />
                        : <div />}
                    {isMonster
                        ? <Input key="def"
                            id="def"
                            ref={onlineCharPicker === 'def' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('def')}
                            addonBefore="DEF" allowClear value={def} onChange={onDEFChange} />
                        : <div />
                    }
                    <Input
                        id="password"
                        ref={onlineCharPicker === 'password' ? ref as any : null}
                        onFocus={() => setOnlineCharPicker('password')}
                        allowClear
                        className="password-input"
                        addonBefore={<div className="input-label-with-button">
                            <div className="input-label">Password</div>
                            <IconButton
                                iconProps={{ onClick: () => onPasscodeChange(randomPassword()) }}
                                Icon={SyncOutlined}
                                tooltipProps={{ overlay: 'Randomize' }}
                            />
                        </div>}
                        onChange={onPasscodeChange}
                        placeholder="Password"
                        value={passcode}
                    />
                    <div className="checkbox-input">
                        <Checkbox
                            className="input-1st"
                            onChange={onFirstEditionChange}
                            checked={isFirstEdition}
                        >
                            {'1st Edition'}
                        </Checkbox>
                        <Checkbox
                            className="input-speed"
                            onChange={onSpeedCardChange}
                            checked={isSpeedCard}
                        >
                            {'Speed'}
                        </Checkbox>
                        <Checkbox
                            className="input-terminal"
                            onChange={onDuelTerminalCardChange}
                            checked={isDuelTerminalCard}
                        >
                            {'Duel Terminal'}
                        </Checkbox>
                    </div>
                    <Input addonBefore="Creator"
                        id="creator-text"
                        ref={onlineCharPicker === 'creator-text' ? ref as any : null}
                        onFocus={() => setOnlineCharPicker('creator-text')}
                        allowClear
                        className="creator-input"
                        onChange={onCreatorChange}
                        placeholder="Creator"
                        value={creator}
                    />
                    <RadioTrain
                        className="sticker-input image-input-train"
                        value={sticker}
                        onChange={onStickerChange}
                        optionList={StickerButtonList}
                    >
                        <span>Sticker</span>
                    </RadioTrain>
                </div>
            </div>
            <div className="main-info-second">
                <ImageCropper
                    ref={imageCropperRef}
                    noRedrawNumber={1}
                    defaultExternalSource={picture}
                    defaultCropInfo={defaultCropInfo}
                    previewCanvasRef={receivingCanvasRef}
                    onSourceChange={onPictureChange}
                    onImageChange={onImageChange}
                    onTainted={onTainted}
                    ratio={CardArtCanvasConst[isPendulum ? 'pendulum' : 'normal'].ratio}
                    beforeCropper={
                        <RadioTrain
                            className="art-finish-checkbox image-input-train"
                            value={artFinish}
                            onChange={onArtFinishChange}
                            optionList={ArtFinishButtonList}
                        >
                            <span>Art Finish Type</span>
                        </RadioTrain>
                    }
                >
                    {isLink
                        ? <LinkMarkChooser defaultValue={linkMap} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
});