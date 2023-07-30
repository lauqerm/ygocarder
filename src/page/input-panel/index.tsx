import React, { useImperativeHandle, useRef, useState } from 'react';
import { Input, Checkbox, Tooltip } from 'antd';
import { Card, CondenseType, TextStyle, TextStyleType } from '../../model';
import { ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster, randomPassword, randomSetID } from '../../util';
import { debounce } from 'lodash';
import { SyncOutlined } from '@ant-design/icons';
import { foilButton, frameButton, starButton, iconButton, attributeButton, stickerButton, condenseButton } from './const';
import { CharPicker } from './char-picker';
import { StylePicker } from './style-picker';
import { CheckboxTrain } from './input-train';
import { ImageCropperRef } from '../../component/card-picture';
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

type RandomButton = {
    seeder: () => string,
    onGenerate: (value: string) => void,
}
const RandomButton = ({
    seeder,
    onGenerate,
}: RandomButton) => {
    return <span style={{ marginLeft: 10, paddingLeft: 10, borderLeft: '1px solid #222' }}>
        <Tooltip overlay="Randomize">
            <SyncOutlined onClick={() => onGenerate(seeder())} />
        </Tooltip>
    </span>;
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
    const imageCropperRef = useRef<ImageCropperRef>(null);
    const setCard = (mutateFunc: (card: Card) => Card) => {
        onCardChange(currentCard => mutateFunc(currentCard));
    };
    const onFoilChange = onChangeFactory('foil', setCard);
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
    const onNameColorChange = (type: TextStyleType, value: TextStyle) => {
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
        return { ...currentCard, isFirstEdition: e.target.checked };
    });

    const {
        frame, foil,
        name, nameStyleType, nameStyle,
        picture,
        effect,
        effectStyle,
        typeAbility,
        isPendulum, pendulumEffect, pendulumScaleRed, pendulumScaleBlue,
        atk, def, linkMap,
        attribute,
        subFamily,
        star,
        setId,
        passcode, isFirstEdition, creator, sticker,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const [displayTypeAbility, setDisplayTypeAbility] = useState(typeAbility.join('/'));
    const [displayName, setDisplayName] = useState(name);
    const [displayEffect, setDisplayEffect] = useState(effect);
    const [displayPendulumEffect, setDisplayPendulumEffect] = useState(pendulumEffect);
    const [onlineCharPicker, setOnlineCharPicker] = useState('');
    const ref = useRef();
    
    useImperativeHandle(forwardedRef, () => ({
        forceCardData: (card) => {
            setDisplayTypeAbility(card.typeAbility.join('/'));
            setDisplayName(card.name);
            setDisplayEffect(card.effect);
            setDisplayPendulumEffect(card.pendulumEffect);
            imageCropperRef.current?.forceExternalSource(card.picture, card.pictureCrop);
        }
    }));

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
        <CheckboxTrain className="foil-radio" value={foil} onChange={onFoilChange} optionList={foilButton}>
            <span>Foil</span>
        </CheckboxTrain>
        <CheckboxTrain className="frame-radio" value={frame} onChange={onFrameChange} optionList={frameButton} />
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
            <StylePicker defaultType={nameStyleType} defaultValue={nameStyle} onChange={onNameColorChange} />
            {isMonster
                ? !isLink
                    ? <CheckboxTrain className="checkbox-star-train" value={`${star}`} onChange={onStarChange} optionList={starButton}>
                        <span>{isXyz ? 'Rank' : 'Level'}</span>
                    </CheckboxTrain>
                    : null
                : <CheckboxTrain value={subFamily} onChange={onSubFamilyChange} optionList={iconButton}>
                    <span>Icon</span>
                </CheckboxTrain>
            }
            <CheckboxTrain className="checkbox-image-train" value={attribute} onChange={onAttributeChange} optionList={attributeButton}>
                <span>Attribute</span>
            </CheckboxTrain>
        </div>
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <Input
                    id="set-id"
                    ref={onlineCharPicker === 'set-id' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('set-id')}
                    allowClear
                    className="set-id-input"
                    addonBefore={<>Set ID<RandomButton seeder={randomSetID} onGenerate={onSetIDChange} /></>}
                    onChange={onSetIDChange}
                    placeholder="Set ID"
                    value={setId}
                />
                {(isMonster && frame !== 'link' && frame !== 'token') && <div className="pendulum-container">
                    <div className="joined-row">
                        <Checkbox onChange={onIsPendulumChange} checked={isPendulum}>Is Pendulum?</Checkbox>
                        {isPendulum && <Checkbox onChange={e => setMirrorScale(e.target.checked)} checked={isMirrorScale}>Mirror Scale?</Checkbox>}
                    </div>
                    {isPendulum && <>
                        <div>
                            <Input key="blue-scale" addonBefore={<span>
                                <span style={{ color: '#3b9dff' }}>Blue</span> Scale
                            </span>}
                            value={pendulumScaleBlue}
                            onChange={e => {
                                onBlueScaleChange(e);
                                if (isMirrorScale) onRedScaleChange(e);
                            }} />
                        </div>
                        <div>
                            <Input key="red-scale" addonBefore={<span>
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
                <CheckboxTrain className="checkbox-condense-train" value={`${effectStyle?.condenseTolerant}`}
                    onChange={value => onCondenseTolerantChange(value as CondenseType)}
                    optionList={condenseButton}
                >
                    <span>Condense Threshold</span>
                </CheckboxTrain>
                <TextArea key="effect"
                    id="card-effect"
                    ref={onlineCharPicker === 'card-effect' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('card-effect')}
                    allowClear
                    placeholder="Card effect"
                    value={displayEffect}
                    rows={10}
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
                        addonBefore={<>Password<RandomButton seeder={randomPassword} onGenerate={onPasscodeChange} /></>}
                        onChange={onPasscodeChange}
                        placeholder="Password"
                        value={passcode}
                    />
                    <Checkbox
                        className="input-1st"
                        onChange={onFirstEditionChange}
                        checked={isFirstEdition}
                    >
                        Is 1st Edition?
                    </Checkbox>
                    <Input addonBefore="Creator"
                        id="creator"
                        ref={onlineCharPicker === 'creator' ? ref as any : null}
                        onFocus={() => setOnlineCharPicker('creator')}
                        allowClear
                        className="creator-input"
                        onChange={onCreatorChange}
                        placeholder="Creator"
                        value={creator}
                    />
                    <CheckboxTrain className="sticker-input checkbox-image-train" value={sticker} onChange={onStickerChange} optionList={stickerButton}>
                        <span>Sticker</span>
                    </CheckboxTrain>
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
                    ratio={isPendulum ? 1.325 : 1}
                >
                    {isLink
                        ? <LinkMarkChooser defaultValue={linkMap} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
});