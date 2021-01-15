import React, { useEffect, useRef, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import { Col, Input, InputNumber, Radio, Row, Select, Slider } from 'antd';
import {
    Card,
    CardFamily,
    defaultCard,
    defaultCardFamily,
    defaultMonster,
    defaultMonsterCardType,
    defaultSpell,
    defaultTrap,
    defaultTypeAbilityList,
    ScaleValue,
    sequentialTypeAbility,
} from './model';
import { debounce } from 'lodash';
import { AttributeIcon, CardFrame, CardPicture, defaultMonsterFontList, defaultSTFontList, ImageCropper, Star, STSubFamily, TextBox, TypeAbilityLine } from './component';
import { checkLink, checkMonster, checkXyz, quoteConvert, scaleCalc } from './util';
import { ExtractProps } from './type';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = TextBox;
type SelectValue = Parameters<NonNullable<ExtractProps<typeof Select>['onChange']>>[0];
type RadioChangeEvent = Parameters<NonNullable<ExtractProps<typeof Radio>['onChange']>>[0];




const defaultZoomScaleRatio = 50;
const defaultScale: Record<string, ScaleValue> = {
    zoom: {
        scaleRatio: 1,
        translatePercent: '0%',
    },
    effect: {
        scaleRatio: 1,
        translatePercent: '0%',
    },
};
const onChangeFactory = (
    key: string,
    mutateFunction: (func: (card: Card) => Card) => void,
    valueTransform: (value: any) => any = (value) => value,
) => {
    return (e: any) => {
        mutateFunction(current => ({
            ...current,
            [key]: valueTransform(typeof e === 'string' ? e : e?.target?.value),
        }));
    };
};
function App() {
    const [, setRefresh] = useState(0);
    const refresh = (message?: string | number) => {
        if (message !== undefined) console.log(message);
        setRefresh(cur => cur + 1);
    };
    const [selectedPage, setPage] = useState<CardFamily>('Monster');
    const [currentCardPage, setCardPage] = useState<Record<string, Card>>({
        Monster: defaultMonster,
        Spell: defaultSpell,
        Trap: defaultTrap,
    });
    const setCard = (mutateFunc: (card: Card) => Card) => setCardPage(cur => {
        return {
            ...cur,
            [selectedPage]: mutateFunc(cur[selectedPage]),
        };
    });
    const [zoomValue, setZoom] = useState({
        scaleRatio: 1,
        translatePercent: '0%',
    });
    const [scaleValue, setScaleValue] = useState({
        effect: defaultScale,
    });
    const cardRef = useRef({
        effectLine: 0,
    });
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);

    const $onZoomChange = (value: number) => setZoom(scaleCalc(value, 100));
    const onZoomChange = debounce($onZoomChange, 100);

    const onFamilyChange = (e: RadioChangeEvent) => setPage(e.target.value as CardFamily);
    const onAttributeChange = onChangeFactory('attribute', setCard);
    const onSubFamilyChange = onChangeFactory('subFamily', setCard);
    const onNameChange = onChangeFactory('name', setCard, quoteConvert);
    const onStarChange = (value: string | number | undefined) => setCardPage(cur => {
        return {
            ...cur,
            [selectedPage]: { ...cur[selectedPage], star: parseInt(`${value ?? 0}`) },
        };
    });
    const onPictureChange = onChangeFactory('picture', setCard);
    const onEffectChange = onChangeFactory('effect', setCard, quoteConvert);
    const onATKChange = onChangeFactory('atk', setCard);
    const onDEFChange = onChangeFactory('def', setCard);
    const onTypeAbilityChange = (value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            type_ability: value.map(entry => `${entry}`),
        }));
    };
    const onEffectLineChange = (lineCount: number) => {
        cardRef.current.effectLine = lineCount;
        refresh();
    };

    useEffect(() => {
        $onZoomChange(defaultZoomScaleRatio);
    }, []);

    const {
        scaleRatio
    } = zoomValue;
    const currentCard = currentCardPage[selectedPage];
    const {
        family,
        name,
        picture,
        effect,
        type_ability,
        atk, def, link_count,
        attribute,
        subFamily,
        star,
    } = currentCard;
    const {
        effectLine,
    } = cardRef.current;
    const typeAbilitySize = effectLine > 6 ? 'small' : 'normal';
    const {
        attribute: familyAttributeList,
        name: familyName,
        subFamily: subFamilyList,
    } = defaultCardFamily[family];
    const isXyz = checkXyz(currentCard);
    const isLink = checkLink(currentCard);
    const isMonster = checkMonster(currentCard);
    return (
        <div className="app-container" style={{
            '--zoom-ratio': zoomValue.scaleRatio,
            '--translate-percent': zoomValue.translatePercent,
        } as any}>
            <div id="portal" />
            <div className="card-filter-panel">
        Card filter here
            </div>
            <div className="card-info-panel">
                <Radio.Group key="family" value={family} onChange={onFamilyChange}>
                    {Object.keys(defaultCardFamily).map(entry => <Radio key={entry} value={entry}>{entry}</Radio>)}
                </Radio.Group>
                <hr />
                <Input key="name" placeholder="Card Name" value={name} onChange={onNameChange} />
                <div className="card-info-line2">
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
                <div key="pic">
                    <ImageCropper noRedrawNumber={scaleRatio} defaultExternalSource={picture} onSourceChange={onPictureChange} previewCanvasRef={previewCanvasRef.current} />
                </div>
                <Input key="set-id" />
                <InputNumber key="pendulum-scale" />
                <TextArea key="pendulum-effect" />
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
                <div>
                    <TextArea key="effect"
                        placeholder="Card effect"
                        value={effect}
                        onChange={onEffectChange}
                        rows={6}
                    />
                </div>
                <Row>
                    <Col span={4}>
                        <Input key="atk" placeholder="ATK" value={atk} onChange={onATKChange} />
                    </Col>
                    <Col span={4}>
                        <Input key="def" placeholder="DEF" value={def} onChange={onDEFChange} />
                    </Col>
                    <Col span={4}>
                        <InputNumber key="link-number" value={link_count} />
                    </Col>
                </Row>
                <Input key="passcode" />
            </div>
            <div className="card-preview-panel">
                <div className="control-board">
                    <div className="control-zoom">
                        <Slider
                            min={1}
                            max={100}
                            defaultValue={defaultZoomScaleRatio}
                            onChange={onZoomChange}
                        />
                        <span>{Math.round(zoomValue.scaleRatio * 100)}%</span>
                    </div>
                </div>
                <div className="card-preview">
                    <div className="preview preview-name">
                        <Title name="name" zoom={scaleRatio} value={name} font={{
                            fontSize: 64.58,
                            lineHeight: 46.44,
                        }} />
                    </div>
                    <div className="preview preview-attribute">
                        <AttributeIcon type={attribute} />
                    </div>
                    {family === 'Monster'
                        ? <div className={`preview preview-star ${star > 12 ? 'preview-star-oversize' : ''}`}>
                            {!isLink && <Star count={star} type={isXyz ? 'rank' : 'level'} />}
                        </div>
                        : <div className="preview preview-st-sub-family">
                            <STSubFamily family={family} subFamily={subFamily} />
                        </div>}
                    <div className="preview preview-picture">
                        {/* <CardPicture src={picture} /> */}
                        <canvas className="card-frame" ref={previewCanvasRef}
                        />
                    </div>
                    <div className="effect-box">
                        {isMonster && <div className={`preview preview-type-ability preview-type-ability-${typeAbilitySize}`}>
                            <TypeAbilityLine scaleRatio={scaleRatio} typeAbility={type_ability} size={typeAbilitySize} />
                        </div>}
                        <TextBox className="preview" zoom={scaleRatio} value={effect} onLineChange={onEffectLineChange}
                            name={isMonster ? 'monster-effect' : 'st-effect'}
                            fontList={isMonster ? defaultMonsterFontList : defaultSTFontList}
                            size={isMonster
                                ? {
                                    width: 464.29,
                                    height: 103.35,
                                }
                                : {
                                    width: 464.37,
                                    height: 145.73,
                                }} />
                    </div>
                    {isMonster && <div className="preview preview-atk">
                        <Title name="atk" zoom={scaleRatio} value={atk} alignment="right" font={{
                            fontSize: 24.61,
                            lineHeight: 29.532,
                        }} />
                    </div>}
                    {isMonster && <div className="preview preview-def">
                        <Title name="def" zoom={scaleRatio} value={def} alignment="right" font={{
                            fontSize: 24.61,
                            lineHeight: 29.532,
                        }} />
                    </div>}
                    <div className="preview preview-frame">
                        <CardFrame family={family} subFamily={subFamily} typeAbility={type_ability} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
