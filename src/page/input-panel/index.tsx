import React, { useRef, useState } from 'react';
import { Radio, Input, Row, Col, Checkbox } from 'antd';
import { Card, frameType, iconList, attributeList } from '../../model';
import { ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster } from '../../util';
import { ExtractProps } from '../../type';
import { debounce } from 'lodash';
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

export type CardInputPanelRef = {
    getCroppedImageCanvasRef: () => HTMLCanvasElement | null
}
export type CardInputPanel = {
	currentCard: Card,
    receivingCanvasRef: HTMLCanvasElement | null,
	onCardChange: React.Dispatch<React.SetStateAction<Card>>,
    onImageChange?: () => void,
}
export const CardInputPanel = ({
    currentCard,
    receivingCanvasRef,
    onCardChange,
    onImageChange,
}: CardInputPanel) => {
    const [isMirrorScale, setMirrorScale] = useState(true);
    const setCard = (mutateFunc: (card: Card) => Card) => {
        onCardChange(currentCard => mutateFunc(currentCard));
    };
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
    const onNameChange = onChangeFactory('name', setCard);
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
    const onTypeAbilityChange = (value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            type_ability: value.map(entry => `${entry}`),
        }));
    };
    const onSetIDChange = onChangeFactory('set_id', setCard);
    const onPasscodeChange = onChangeFactory('passcode', setCard);
    const onCreatorChange = onChangeFactory('creator', setCard);
    const onFirstEditionChange = (e: any) => onCardChange(currentCard => {
        return { ...currentCard, isFirstEdition: e.target.checked };
    });

    const {
        frame,
        name,
        picture,
        effect,
        type_ability,
        isPendulum, pendulum_effect, red_scale, blue_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
        set_id,
        passcode, isFirstEdition, creator,
    } = currentCard;
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const [displayTypeAbility, setDisplayTypeAbility] = useState(type_ability.join('/'));
    const [displayEffect, setDisplayEffect] = useState(effect);
    const [displayPendulumEffect, setDisplayPendulumEffect] = useState(pendulum_effect);
    const [onlineCharPicker, setOnlineCharPicker] = useState('');
    const ref = useRef();

    return <div className="card-info-panel">
        <CharPicker
            targetId={onlineCharPicker}
            onPick={value => {
                if (ref.current) (ref.current as any).props.onChange({
                    target: { value }
                });
            }}
        />
        <Radio.Group key="frame" className="frame-radio" value={frame} onChange={onFrameChange}>
            {frameType.map(({ color, name, backgroundColor }) => {
                return <Radio.Button key={name} value={name} style={{
                    backgroundColor,
                    color,
                }}>
                    {name}
                </Radio.Button>;
            })}
        </Radio.Group>
        <hr />
        <div className="card-header custom-gap">
            <Input key="name"
                id="name"
                ref={onlineCharPicker === 'name' ? ref as any : null}
                onFocus={() => setOnlineCharPicker('name')}
                allowClear
                addonBefore="Name"
                placeholder="Card Name"
                value={name}
                onChange={onNameChange}
            />
            {(isMonster && !isLink)
                ? <Radio.Group key="star" className="checkbox-train" value={`${star}`} onChange={onStarChange}>
                    <label className="standalone-addon ant-input-group-addon">
                        <span>{isXyz ? 'Rank' : 'Level'}</span>
                    </label>
                    {[...Array(14)].map((e, index) => <Radio.Button key={`${index}`} value={`${index}`}>{`${index}`}</Radio.Button>)}
                </Radio.Group>
                : <Radio.Group key="subFamily" className="checkbox-train" value={subFamily} onChange={onSubFamilyChange}>
                    <label className="standalone-addon ant-input-group-addon">
                        <span>Icon</span>
                    </label>
                    {iconList.map(entry => <Radio.Button key={entry} value={entry}>{entry}</Radio.Button>)}
                </Radio.Group>}
            <Radio.Group key="attribute" className="checkbox-train" value={attribute} onChange={onAttributeChange}>
                <label className="standalone-addon ant-input-group-addon">
                    <span>Attribute</span>
                </label>
                {attributeList.map(({ color, name }) => <Radio.Button key={name} value={name}>
                    <span style={{ color, fontWeight: 'bold' }}>{name}</span>
                </Radio.Button>)}
            </Radio.Group>
        </div>
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <Input addonBefore="Set ID"
                    id="set-id"
                    ref={onlineCharPicker === 'set-id' ? ref as any : null}
                    onFocus={() => setOnlineCharPicker('set-id')}
                    allowClear
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
                                        rows={4}
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
                <Row gutter={[10, 10]} >
                    {isMonster && <>
                        <Col span={12}>
                            <Input key="atk"
                                id="atk"
                                ref={onlineCharPicker === 'atk' ? ref as any : null}
                                onFocus={() => setOnlineCharPicker('atk')}
                                addonBefore="ATK" allowClear value={atk} onChange={onATKChange} />
                        </Col>
                        <Col span={12}>
                            <Input key="def"
                                id="def"
                                ref={onlineCharPicker === 'def' ? ref as any : null}
                                onFocus={() => setOnlineCharPicker('def')}
                                addonBefore="DEF" allowClear value={def} onChange={onDEFChange} />
                        </Col>
                    </>}
                    <Col span={12}>
                        <Input addonBefore="Password"
                            id="password"
                            ref={onlineCharPicker === 'password' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('password')}
                            allowClear
                            onChange={onPasscodeChange}
                            placeholder="Password"
                            value={passcode}
                        />
                    </Col>
                    <Col span={12} style={{ alignSelf: 'center' }}>
                        <Checkbox onChange={onFirstEditionChange} checked={isFirstEdition}>Is 1st Edition?</Checkbox>
                    </Col>
                    <Col span={24}>
                        <Input addonBefore="Creator"
                            id="creator"
                            ref={onlineCharPicker === 'creator' ? ref as any : null}
                            onFocus={() => setOnlineCharPicker('creator')}
                            allowClear
                            onChange={onCreatorChange}
                            placeholder="Creator"
                            value={creator}
                        />
                    </Col>
                </Row>
            </div>
            <div className="main-info-second">
                <ImageCropper
                    noRedrawNumber={1}
                    defaultExternalSource={picture}
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