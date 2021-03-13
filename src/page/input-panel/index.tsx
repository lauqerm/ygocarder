import React from 'react';
import { Radio, Input, InputNumber, Row, Col, Select } from 'antd';
import { defaultCardFamily, sequentialTypeAbility, defaultTypeAbilityList, Card, CardFamily } from '../../model';
import { ImageCropper, LinkMarkChooser } from '../../component';
import { checkXyz, checkLink, checkMonster } from '../../util';
import { ExtractProps } from '../../type';
import './input-panel.scss';

const { TextArea } = Input;
const { Option } = Select;
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
	zoomValue: {
		scaleRatio: number,
		translatePercent: string,
	},
	onCardPageChange: (page: CardFamily) => void,
	onCardChange: (value: React.SetStateAction<Record<string, Card>>) => void,
}
export const CardInputPanel = ({
    currentPage,
    currentCard,
    receivingCanvasRef,
    zoomValue,
    onCardPageChange,
    onCardChange,
}: CardInputPanel) => {
    const setCard = (mutateFunc: (card: Card) => Card) => onCardChange(cur => {
        return {
            ...cur,
            [currentPage]: mutateFunc(cur[currentPage]),
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

    const {
        scaleRatio
    } = zoomValue;
    const {
        family,
        name,
        picture,
        effect,
        type_ability,
        pendulum_effect,
        pendulum_scale,
        atk, def, link_map,
        attribute,
        subFamily,
        star,
    } = currentCard;
    const {
        attribute: familyAttributeList,
        subFamily: subFamilyList,
    } = defaultCardFamily[family];
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);

    return <div className="card-info-panel">
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
                <Input key="set-id" />
                {isMonster && <>
                    <Input key="pendulum-scale" addonBefore="Pendulum Scale" value={pendulum_scale} onChange={onScaleChange} />
                    <TextArea key="pendulum-effect"
                        placeholder="Pendulum effect"
                        value={pendulum_effect}
                        onChange={onPendulumEffectChange}
                        rows={4}
                    />
                    <Select
                        allowClear
                        className="hide-selected"
                        mode="tags"
                        onChange={onTypeAbilityChange}
                        placeholder="Type / Ability"
                        style={{ width: '100%' }}
                        value={type_ability}
                    >
                        {(sequentialTypeAbility[type_ability.length] ?? defaultTypeAbilityList)
                            .filter(entry => !type_ability.includes(entry))
                            .map(entry => <Option key={entry} value={entry}>{entry}</Option>)}
                    </Select>
                </>}
                <div>
                    <TextArea key="effect"
                        placeholder="Card effect"
                        value={effect}
                        onChange={onEffectChange}
                        rows={10}
                    />
                </div>
                {isMonster && <Row>
                    <Col span={8}>
                        <Input key="atk" addonBefore="ATK" value={atk} onChange={onATKChange} />
                    </Col>
                    <Col span={8}>
                        <Input key="def" addonBefore="DEF" value={def} onChange={onDEFChange} />
                    </Col>
                </Row>}
                <Input key="passcode" />
            </div>
            <div className="main-info-second">
                <ImageCropper
                    noRedrawNumber={scaleRatio}
                    defaultExternalSource={picture}
                    onSourceChange={onPictureChange}
                    previewCanvasRef={receivingCanvasRef}
                >
                    {isMonster
                        ? <LinkMarkChooser defaultValue={link_map} onChange={onLinkMapChange} />
                        : <div />}
                </ImageCropper>
            </div>
        </div>
    </div>;
};