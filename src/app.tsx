import React, { useEffect, useState } from 'react';
import './app.scss';
import 'antd/dist/antd.css';
import { Input, InputNumber, Select, Slider } from 'antd';
import { Card, defaultCard, ScaleValue } from './model';
import { debounce } from 'lodash';
import { EffectTextBox } from './component';
import { scaleCalc } from './util';

const { TextArea } = Input;

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
    const onEffectChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCard(current => ({
            ...current,
            effect: e.target.value,
        }));
    };

    useEffect(() => {
        $onZoomChange(defaultZoomScaleRatio);
    }, []);

    const {
        scaleRatio
    } = zoomValue;
    return (
        <div className="app-container">
            <div className="card-filter-panel">
        Card filter here
            </div>
            <div className="card-info-panel">
                <Input key="name" />
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
                <div key="type">
                    <Select key="type-box-1">

                    </Select>
                    <Select key="type-box-2">

                    </Select>
                    <Select key="type-box-3">

                    </Select>
                    <Select key="type-box-4">

                    </Select>
                </div>
                <TextArea key="effect"
                    placeholder="Card effect"
                    onChange={onEffectChange}
                    rows={6}
                />
                <Input key="atk" />
                <Input key="def" />
                <InputNumber key="link-number" />
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
                <div className="card-preview" style={{
                    '--zoom-ratio': zoomValue.scaleRatio,
                    '--translate-percent': zoomValue.translatePercent,
                } as any}>
                    <EffectTextBox name="effect" value={currentCard.effect} zoom={scaleRatio} />
                </div>
            </div>
        </div>
    );
}

export default App;
