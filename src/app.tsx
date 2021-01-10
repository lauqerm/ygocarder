import React, { useEffect, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import { Col, Input, InputNumber, Row, Select, Slider } from 'antd';
import { Card, defaultCard, defaultTypeAbilityList, ScaleValue, sequentialTypeAbility } from './model';
import { debounce } from 'lodash';
import { TextBox } from './component';
import { scaleCalc } from './util';
import { ExtractProps } from './type';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = TextBox;
type SelectValue = Parameters<NonNullable<ExtractProps<typeof Select>['onChange']>>[0];

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
const onChangeFactory = <Element extends any = HTMLInputElement>(key: string, func: React.Dispatch<React.SetStateAction<Card>>) => {
    return (e: React.ChangeEvent<Element>) => {
        func(current => ({
            ...current,
            [key]: `${(e.target as any).value}`,
        }));
    };
};
function App() {
    const [currentCard, setCard] = useState<Card>(defaultCard);
    const [zoomValue, setZoom] = useState({
        scaleRatio: 1,
        translatePercent: '0%',
    });
    const [scaleValue, setScaleValue] = useState({
        effect: defaultScale,
    });

    const $onZoomChange = (value: number) => setZoom(scaleCalc(value, 100));
    const onZoomChange = debounce($onZoomChange, 100);

    const onEffectChange = onChangeFactory<HTMLTextAreaElement>('effect', setCard);
    const onATKChange = onChangeFactory('atk', setCard);
    const onDEFChange = onChangeFactory('def', setCard);
    const onNameChange = onChangeFactory('name', setCard);
    const onTypeAbilityChange = (value: (string | number)[]) => {
        setCard(current => ({
            ...current,
            type_ability: value.map(entry => `${entry}`),
        }));
    };

    useEffect(() => {
        $onZoomChange(defaultZoomScaleRatio);
    }, []);

    const {
        scaleRatio
    } = zoomValue;
    const {
        name,
        effect,
        type_ability,
        atk, def, link_count,
    } = currentCard;
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
                <Input key="name" placeholder="Card Name" onChange={onNameChange} />
                <Select key="attribute">

                </Select>
                <InputNumber key="level-rank" />
                <Select key="st-icon">

                </Select>
                <div key="pic">
          Pic?
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
                        <Title name="name" zoom={scaleRatio} value={name} size={{
                            fontSize: 64.58,
                            lineHeight: 46.44,
                        }} />
                    </div>
                    <TextBox name="effect" zoom={scaleRatio} value={effect} />
                    <div className="preview preview-atk">
                        <Title name="atk" zoom={scaleRatio} value={atk} size={{
                            fontSize: 24.61,
                            lineHeight: 23.67,
                        }} hiddenPad={{
                            char: '0',
                            length: 4,
                        }} />
                    </div>
                    <div className="preview preview-def">
                        <Title name="def" zoom={scaleRatio} value={def} size={{
                            fontSize: 24.61,
                            lineHeight: 23.67,
                        }} hiddenPad={{
                            char: '0',
                            length: 4,
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
