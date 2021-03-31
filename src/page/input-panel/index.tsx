import React, { useRef, useState } from 'react';
import { Radio, Input, Row, Col, Checkbox, Tooltip } from 'antd';
import { Card, TextStyle, TextStyleType } from '../../model';
import { ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster, randomPassword, randomSetID } from '../../util';
import { ExtractProps } from '../../type';
import { debounce } from 'lodash';
import { StylePicker } from './style-picker';
import { SyncOutlined } from '@ant-design/icons';
import { foilButton, frameButton, starButton, iconButton, attributeButton, stickerButton } from './const';
import { CharPicker } from './char-picker';
import './input-panel.scss';

const { TextArea } = Input;
type RadioChangeEvent = Parameters<NonNullable<ExtractProps<typeof Radio>['onChange']>>[0];

const onChangeFactory = (
    key: string,
    mutateFunction: (func: (card: Card) => Card) => void,
    valueTransform: (value: any) => any = (value) => value,
) => {
    return (e: any) => {
        mutateFunction(current => ({
            ...current,
            [key]: valueTransform(typeof e === 'string' || Array.isArray(e) ? e : e?.target?.value),
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
        <Tooltip overlay="Random">
            <SyncOutlined onClick={() => onGenerate(seeder())} />
        </Tooltip>
    </span>;
};

export type CardInputPanelRef = {
    getCroppedImageCanvasRef: () => HTMLCanvasElement | null
}
export type CardInputPanel = {
	currentCard: Card,
    receivingCanvasRef: HTMLCanvasElement | null,
    defaultCropInfo: Partial<ReactCrop.Crop>,
	onCardChange: React.Dispatch<React.SetStateAction<Card>>,
    onImageChange?: (cropInfo: Partial<ReactCrop.Crop>) => void,
    children?: React.ReactNode,
}
export const CardInputPanel = ({
    currentCard,
    receivingCanvasRef,
    defaultCropInfo,
    onCardChange,
    onImageChange,
    children,
}: CardInputPanel) => {
    const [isMirrorScale, setMirrorScale] = useState(true);
    const setCard = (mutateFunc: (card: Card) => Card) => {
        onCardChange(currentCard => mutateFunc(currentCard));
    };
    const onFoilChange = onChangeFactory('foil', setCard);
    const onFrameChange = (e: RadioChangeEvent) => {
        onCardChange(currentCard => {
            const value = e?.target?.value;
            const isST = value === 'spell' || value === 'trap';
    
            return {
                ...currentCard,
                frame: value,
                isPendulum: value === 'link' || value === 'token' || isST ? false : currentCard.isPendulum,
                subFamily: isST ? 'NO ICON' : currentCard.subFamily,
            };
        });
    };
    const onAttributeChange = onChangeFactory('attribute', setCard);
    const onSubFamilyChange = onChangeFactory('subFamily', setCard);
    const onNameChange = debounce(onChangeFactory('name', setCard), 250);
    const onNameColorChange = (type: TextStyleType, value: TextStyle) => {
        onCardChange(currentCard => {
            return {
                ...currentCard,
                nameStyleType: 'auto',
                nameStyle: value,
            };
        });
    };
    const onStarChange = onChangeFactory('star', setCard);
    const onIsPendulumChange = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, isPendulum: e.target.checked };
    });
    const onPictureChange = onChangeFactory('picture', setCard);
    const onLinkMapChange = onChangeFactory('link_map', setCard);
    const onRedScaleChange = onChangeFactory('red_scale', setCard);
    const onBlueScaleChange = onChangeFactory('blue_scale', setCard);
    const onPendulumEffectChange = debounce(onChangeFactory('pendulum_effect', setCard), 250);
    const onEffectChange = debounce(onChangeFactory('effect', setCard), 250);
    const onATKChange = onChangeFactory('atk', setCard);
    const onDEFChange = onChangeFactory('def', setCard);
    const onTypeAbilityChange = debounce((value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            type_ability: value.map(entry => `${entry}`),
        }));
    }, 250);
    const onSetIDChange = onChangeFactory('set_id', setCard);
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
        type_ability,
        isPendulum, pendulum_effect, red_scale, blue_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
        set_id,
        passcode, isFirstEdition, creator, sticker,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const [displayTypeAbility, setDisplayTypeAbility] = useState(type_ability.join('/'));
    const [displayName, setDisplayName] = useState(name);
    const [displayEffect, setDisplayEffect] = useState(effect);
    const [displayPendulumEffect, setDisplayPendulumEffect] = useState(pendulum_effect);
    const [onlineCharPicker, setOnlineCharPicker] = useState('');
    const ref = useRef();
    

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
        <Radio.Group className="foil-radio checkbox-train" value={foil} onChange={onFoilChange}>
            <label className="standalone-addon ant-input-group-addon">
                <span>Foil</span>
            </label>
            {foilButton}
        </Radio.Group>
        <Radio.Group className="frame-radio" value={frame} onChange={onFrameChange}>
            {frameButton}
        </Radio.Group>
        <hr />
        <div className="card-header custom-gap">
            <Input
                id="name"
                ref={onlineCharPicker === 'name' ? ref as any : null}
                onFocus={() => setOnlineCharPicker('name')}
                allowClear
                addonBefore={<>Name <StylePicker defaultType={nameStyleType} defaultValue={nameStyle} onChange={onNameColorChange} /></>}
                placeholder="Card Name"
                value={displayName}
                className="name-input"
                onChange={ev => {
                    onNameChange(ev);
                    setDisplayName(ev.target.value);
                }}
            />
            {isMonster
                ? !isLink
                    ? <Radio.Group className="checkbox-train" value={`${star}`} onChange={onStarChange}>
                        <label className="standalone-addon ant-input-group-addon">
                            <span>{isXyz ? 'Rank' : 'Level'}</span>
                        </label>
                        {starButton}
                    </Radio.Group>
                    : null
                : <Radio.Group className="checkbox-train" value={subFamily} onChange={onSubFamilyChange}>
                    <label className="standalone-addon ant-input-group-addon">
                        <span>Icon</span>
                    </label>
                    {iconButton}
                </Radio.Group>}
            <Radio.Group className="checkbox-image-train checkbox-train" value={attribute} onChange={onAttributeChange}>
                <label className="standalone-addon ant-input-group-addon">
                    <span>Attribute</span>
                </label>
                {attributeButton}
            </Radio.Group>
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
                    value={set_id}
                />
                {(isMonster && frame !== 'link' && frame !== 'token') && <div className="pendulum-container">
                    <Row gutter={[10, 10]}>
                        <Col span={24}>
                            <Checkbox onChange={onIsPendulumChange} checked={isPendulum}>Is Pendulum?</Checkbox>
                            {isPendulum && <Checkbox onChange={e => setMirrorScale(e.target.checked)} checked={isMirrorScale}>Mirror Scale?</Checkbox>}
                        </Col>
                        {isPendulum && <>
                            <Col span={12}>
                                <Input key="blue-scale" addonBefore={<span>
                                    <span style={{ color: '#3b9dff' }}>Blue</span> Scale
                                </span>}
                                value={blue_scale}
                                onChange={e => {
                                    onBlueScaleChange(e);
                                    if (isMirrorScale) onRedScaleChange(e);
                                }} />
                            </Col>
                            <Col span={12}>
                                <Input key="red-scale" addonBefore={<span>
                                    <span style={{ color: '#ff6f6f' }}>Red</span> Scale
                                </span>}
                                value={red_scale}
                                onChange={e => {
                                    if (isMirrorScale) onBlueScaleChange(e);
                                    onRedScaleChange(e);
                                }} />
                            </Col>
                            <Col span={24}>
                                <div style={{ position: 'relative' }}>
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
                            </Col>
                        </>}
                    </Row>
                </div>}
                <Input addonBefore="Type"
                    id="type"
                    ref={onlineCharPicker === 'type' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('type')}
                    allowClear
                    className="hide-selected"
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
                    <Radio.Group className="sticker-input checkbox-image-train checkbox-train" value={sticker} onChange={onStickerChange}>
                        <label className="standalone-addon ant-input-group-addon">
                            <span>Sticker</span>
                        </label>
                        {stickerButton}
                    </Radio.Group>
                </div>
            </div>
            <div className="main-info-second">
                <ImageCropper
                    noRedrawNumber={1}
                    defaultExternalSource={picture}
                    defaultCropInfo={defaultCropInfo}
                    previewCanvasRef={receivingCanvasRef}
                    onSourceChange={onPictureChange}
                    onImageChange={onImageChange}
                >
                    {isLink
                        ? <LinkMarkChooser defaultValue={link_map} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
};