import React, { useState } from 'react';
import { Radio, Input, InputNumber, Row, Col, Checkbox } from 'antd';
import { defaultCardFamily, Card, CardFamily, frameType } from '../../model';
import { ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster } from '../../util';
import { ExtractProps } from '../../type';
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
	currentPage: CardFamily,
	currentCard: Card,
    receivingCanvasRef: HTMLCanvasElement | null,
	onCardPageChange: (page: CardFamily) => void,
	onCardChange: (value: React.SetStateAction<Record<string, Card>>) => void,
    onImageChange?: () => void,
}
export const CardInputPanel = ({
    currentPage,
    currentCard,
    receivingCanvasRef,
    onCardPageChange,
    onCardChange,
    onImageChange,
}: CardInputPanel) => {
    const setCard = (mutateFunc: (card: Card) => Card) => onCardChange(cur => {
        return {
            ...cur,
            [currentPage]: mutateFunc(cur[currentPage]),
        };
    });
    const onFrameChange = (e: RadioChangeEvent) => onCardChange(cur => {
        const value = e?.target?.value;

        return {
            ...cur,
            [currentPage]: {
                ...cur[currentPage],
                frame: value,
                isPendulum: value === 'link' ? false : cur[currentPage].isPendulum,
            },
        };
    });
    const onFamilyChange = (e: RadioChangeEvent) => onCardPageChange(e.target.value as CardFamily);
    const onAttributeChange = onChangeFactory('attribute', setCard);
    const onSubFamilyChange = onChangeFactory('subFamily', setCard);
    const onNameChange = onChangeFactory('name', setCard);
    const onStarChange = (value: string | number | undefined) => onCardChange(cur => {
        return {
            ...cur,
            [currentPage]: { ...cur[currentPage], star: parseInt(`${value ?? 0}`) },
        };
    });
    const onIsPendulumChange = (e: any) => onCardChange(cur => {
        return {
            ...cur,
            [currentPage]: { ...cur[currentPage], isPendulum: e.target.checked },
        };
    });
    const onScaleChange = onChangeFactory('pendulum_scale', setCard);
    const onPendulumEffectChange = onChangeFactory('pendulum_effect', setCard);
    const onPictureChange = onChangeFactory('picture', setCard);
    const onLinkMapChange = onChangeFactory('link_map', setCard);
    const onEffectChange = onChangeFactory('effect', setCard);
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
    const onFirstEditionChange = (e: any) => onCardChange(cur => {
        return {
            ...cur,
            [currentPage]: { ...cur[currentPage], isFirstEdition: e.target.checked },
        };
    });

    const {
        frame,
        family,
        name,
        picture,
        effect,
        type_ability,
        isPendulum, pendulum_effect, pendulum_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
        set_id,
        passcode, isFirstEdition, creator,
    } = currentCard;
    const {
        attribute: familyAttributeList,
        subFamily: subFamilyList,
    } = defaultCardFamily[family];
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    const [displayTypeAbility, setDisplayTypeAbility] = useState(type_ability.join('/'));

    return <div className="card-info-panel">
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
        <div className="card-info-line">
            <Radio.Group key="family" className="family-radio" value={family} onChange={onFamilyChange}>
                {Object.keys(defaultCardFamily).map(entry => <Radio.Button key={entry} value={entry}>{entry}</Radio.Button>)}
            </Radio.Group>
            <Input key="name" addonBefore="Name" placeholder="Card Name" value={name} onChange={onNameChange} />
        </div>
        <hr />
        <div className="card-info-line custom-gap">
            <div className="card-info-sub-family">
                {family === 'Monster'
                    ? isLink
                        ? null
                        : <div>
                            {isXyz ? 'Rank' : 'Level'}: <InputNumber key="level-rank" min={0} max={13} value={star} onChange={onStarChange} />
                        </div>
                    : <Radio.Group key="subFamily" value={subFamily} onChange={onSubFamilyChange}>
                        {subFamilyList.map(entry => <Radio key={entry} value={entry}>{entry}</Radio>)}
                    </Radio.Group>}
            </div>
            <Radio.Group key="attribute" value={attribute} onChange={onAttributeChange}>
                {familyAttributeList.map(entry => <Radio key={entry} value={entry}>{entry}</Radio>)}
            </Radio.Group>
        </div>
        <hr />
        <div key="pic" className="main-info">
            <div className="main-info-first">
                <Input addonBefore="Set ID"
                    allowClear
                    onChange={onSetIDChange}
                    placeholder="Set ID"
                    value={set_id}
                />
                {(isMonster && frame !== 'link') && <>
                    <Checkbox onChange={onIsPendulumChange} checked={isPendulum}>Is Pendulum?</Checkbox>
                    <Input key="pendulum-scale" addonBefore="Pendulum Scale" value={pendulum_scale} onChange={onScaleChange} />
                    <TextArea key="pendulum-effect"
                        placeholder="Pendulum effect"
                        value={pendulum_effect}
                        onChange={onPendulumEffectChange}
                        rows={4}
                    />
                </>}
                <Input addonBefore="Type"
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
                <div>
                    <TextArea key="effect"
                        placeholder="Card effect"
                        value={effect}
                        onChange={onEffectChange}
                        rows={10}
                    />
                </div>
                <Row gutter={[10, 10]} >
                    <Col span={12}>
                        <Input addonBefore="Serial Number"
                            allowClear
                            onChange={onPasscodeChange}
                            placeholder="Serial Number"
                            value={passcode}
                        />
                    </Col>
                    <Col span={12} style={{ alignSelf: 'center' }}>
                        <Checkbox onChange={onFirstEditionChange} checked={isFirstEdition}>Is 1st Edition?</Checkbox>
                    </Col>
                    <Col span={24}>
                        <Input addonBefore="Creator"
                            allowClear
                            onChange={onCreatorChange}
                            placeholder="Creator"
                            value={creator}
                        />
                    </Col>
                    {isMonster && <>
                        <Col span={12}>
                            <Input key="atk" addonBefore="ATK" value={atk} onChange={onATKChange} />
                        </Col>
                        <Col span={12}>
                            <Input key="def" addonBefore="DEF" value={def} onChange={onDEFChange} />
                        </Col>
                    </>}
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
                    {isMonster
                        ? <LinkMarkChooser defaultValue={link_map} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
};