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
import { AttributeIcon, CardFrame, CardPicture, ImageCropper, Star, TextBox } from './component';
import { quoteConvert, scaleCalc } from './util';
import { ExtractProps } from './type';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = TextBox;
type SelectValue = Parameters<NonNullable<ExtractProps<typeof Select>['onChange']>>[0];
type RadioChangeEvent = Parameters<NonNullable<ExtractProps<typeof Radio>['onChange']>>[0];



const TypeAbilitySpace = ({ type }: { type?: string }) => <span className={`type-ability-space ${type}-space`}> </span>;
const TypeAbilitySlash = ({ type }: { type?: string }) => <span className={`type-ability-slash ${type}-slash`}>/</span>;
const TypeAbilityBracket = ({
    type,
    children,
}: { type?: string, children: React.ReactNode }) => <span className={`type-ability-bracket ${type}-bracket`}>{children}</span>;

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
    const onEffectLineChange = (lineCount: number) => cardRef.current.effectLine = lineCount;

    useEffect(() => {
        $onZoomChange(defaultZoomScaleRatio);
    }, []);

    const {
        scaleRatio
    } = zoomValue;
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
    } = currentCardPage[selectedPage];
    const {
        effectLine,
    } = cardRef.current;
    const typeAbilitySize = effectLine > 6 ? 'small' : 'normal';
    const {
        attribute: familyAttributeList,
        name: familyName,
        subFamily: subFamilyList,
    } = defaultCardFamily[family];
    const isXyz = type_ability.includes('Xyz');
    const isLink = type_ability.includes('Link');
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
                <Radio.Group key="attribute" value={attribute} onChange={onAttributeChange}>
                    {familyAttributeList.map(entry => <Radio key={entry} value={entry}>{entry}</Radio>)}
                </Radio.Group>
                <hr />
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
                <div key="pic">
                    <ImageCropper defaultExternalSource={picture} onSourceChange={onPictureChange} previewCanvasRef={previewCanvasRef.current} />
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
                <TextArea key="effect"
                    placeholder="Card effect"
                    value={effect}
                    onChange={onEffectChange}
                    rows={6}
                />
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
                        : <div className="preview preview-sub-family">
                            {subFamily}
                        </div>}
                    <div className="preview preview-picture">
                        {/* <CardPicture src={picture} /> */}
                        <canvas className="card-frame" ref={previewCanvasRef}
                        />
                    </div>
                    <div className="effect-box">
                        <div className={`preview preview-type-ability preview-type-ability-${typeAbilitySize}`}>
                            <Title name="type-ability" zoom={scaleRatio} value={`[ ${type_ability.join(' / ')} ]`}
                                defaultMaxScaleRatio={1.075}
                                font={typeAbilitySize === 'normal'
                                    ? {
                                        fontSize: 17.72,
                                        lineHeight: 17.72 * 1.2,
                                    }: {
                                        fontSize: 16.41,
                                        lineHeight: 16.41 * 1.2,
                                    }}
                            >
                                <TypeAbilityBracket type={typeAbilitySize}>[</TypeAbilityBracket>
                                <TypeAbilitySpace type="small" />
                                {type_ability
                                    .reduce<string[]>((acc, cur) => {
                                        if (acc.length === 0) acc.push(cur);
                                        else {
                                            acc.push('/');
                                            acc.push(cur);
                                        }
                                        return acc;
                                    }, [])
                                    .map(entry => {
                                        if (entry === '/') return <>
                                            <TypeAbilitySpace type={typeAbilitySize} />
                                            <TypeAbilitySlash type={typeAbilitySize} />
                                            <TypeAbilitySpace type={typeAbilitySize} />
                                        </>;
                                        const firstChar = entry[0];
                                        const restChars = entry.slice(1);

                                        return <span>
                                            <span style={{
                                                fontSize: typeAbilitySize === 'normal' ? '21pt' : '19.69pt',
                                            }}>
                                                {firstChar}
                                            </span>
                                            <span style={{
                                                textTransform: 'uppercase',
                                            }}>{restChars}</span>
                                        </span>;
                                    })}
                                <TypeAbilitySpace type="small" />
                                <TypeAbilityBracket type={typeAbilitySize}>]</TypeAbilityBracket>
                            </Title>
                        </div>
                        <TextBox name="effect" zoom={scaleRatio} value={effect} onLineChange={onEffectLineChange} />
                    </div>
                    <div className="preview preview-atk">
                        <Title name="atk" zoom={scaleRatio} value={atk} alignment="right" font={{
                            fontSize: 24.61,
                            lineHeight: 29.532,
                        }} />
                    </div>
                    <div className="preview preview-def">
                        <Title name="def" zoom={scaleRatio} value={def} alignment="right" font={{
                            fontSize: 24.61,
                            lineHeight: 29.532,
                        }} />
                    </div>
                    <div className="preview preview-frame">
                        <CardFrame family={family} subFamily={subFamily} typeAbility={type_ability} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
