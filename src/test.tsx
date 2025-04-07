import distanceTransform from 'distance-transform';
import ndarray from 'ndarray';
import React, { useEffect, useRef, useState } from 'react';
import { bilateralFilter, getDefaultHeightToNormalMapOption, HeightToNormalMap, mergeClass, SHADER_FILTER_TYPE, useRefresh } from './util';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import { InputNumber, Slider } from 'antd';
import { ANGLE_PICKER_CLASSNAME, CircularAnglePicker, GuardedSlider } from './component';
import { applyEmboss } from './util/canvas';

const EmbossControlContainer = styled.div`
    display: inline-grid;
    grid-template-columns: max-content max-content;
    .angle-picker-container {
        text-align: center;
    }
    .vertical-angle-control {
        display: grid;
        grid-template-columns: 60px 100px;
        .ant-input-number {
            width: unset;
        }
    }
    .emboss-control-right {
        padding: var(--spacing-sm) 0;
    }
    .emboss-control-left {
        padding: var(--spacing-sm);
    }
`;

const cellSize = 10;
const Cell = styled.div`
    font-size: 8px;
    line-height: ${cellSize}px;
    text-align: center;
`;
export const Test = () => {
    const [refresh, refreshCnt] = useRefresh();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRef6 = useRef<HTMLCanvasElement>(null);
    const width = 400;
    const height = 90;
    const [angle, setAngle] = useState(0);
    const [verticalAngle, setVerticalAngle] = useState(0);
    const [angleVector, setAngleVector] = useState<[number, number, number]>([0, 0, 0]);
    const [color, setColor] = useState('#000000');

    const [color2, setColor2] = useState<[number, number, number]>([0, 0, 0]);
    console.log('🚀 ~ Test ~ color2:', color2);
    useEffect(() => {
        function hexToRgb(hex: string) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return (result ? [
              parseInt(result[1], 16),
              parseInt(result[2], 16),
              parseInt(result[3], 16)
            ] : [0, 0, 0]) as [number, number, number];
          }
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                setColor2(hexToRgb(color));
                /** We use the north pole as 0 deg for easier reference, but during calculation the east pole is 0 deg */
                const angleRadian = (angle + 90) * Math.PI / 180;
                const verticalAngleRadian = (verticalAngle + 90) * Math.PI / 180;
                const x = Math.cos(angleRadian) * Math.cos(verticalAngleRadian);
                const y = Math.sin(angleRadian) * Math.cos(verticalAngleRadian);
                const z = Math.sin(verticalAngleRadian);
                console.log('🚀 ~ setTimeout ~ verticalAngle:', verticalAngle, z);
                setAngleVector([Math.round(x * 100) / 100, Math.round(y * 100) / 100, Math.round(z * 100) / 100]);
            }
        }, 500);

        return () => {
            relevant = false;
        };
    }, [color, angle, verticalAngle]);

    useEffect(() => {

        

        const ctx = canvasRef.current.getContext('2d');

        if (ctx) {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#0000ff';
            ctx.font = 'small-caps 90px MatrixBook';
            ctx.fillText('Example', 1, 87);
            const result = applyEmboss({
                inputCanvas: canvasRef.current,
                lightAngleVec: angleVector,
            });
            if (result) canvasRef6.current?.getContext('2d').putImageData(result, 0, 0);
        }
    }, [color2, refreshCnt, angleVector]);

    return <div style={{
        background: '#afafaf',
        minHeight: '100vh',
        width: '100%',
        display: 'inline-block',
    }}>
        <button onClick={refresh}>Refresh</button>
        <br />
        <canvas ref={canvasRef} width={width} height={height} />
        <canvas ref={canvasRef6} width={width} height={height} />
        <br />
        {angleVector.join(' | ')}
        <EmbossControlContainer className={mergeClass(ANGLE_PICKER_CLASSNAME, 'emboss-control')}>
            <div className="emboss-control-left">
                <h2>Pitch</h2>
                <div className="vertical-angle-control">
                    <InputNumber
                        size="small"
                        min={-90}
                        max={90}
                        onChange={value => setVerticalAngle(typeof value === 'string' ? parseInt(value) : value ?? 0)}
                        value={verticalAngle}
                    />
                    <GuardedSlider
                        min={-90}
                        max={90}
                        value={verticalAngle}
                        onChange={value => setVerticalAngle(value)}
                    />
                </div>
                <h2>Yaw</h2>
                <div className="horizontal-angle-contorl">
                    <CircularAnglePicker
                        angle={angle}
                        size={120}
                        setAngle={angle => {
                            setAngle(angle);
                        }}
                    />
                </div>
            </div>
            <div className="emboss-control-right">
                <h2>Light color</h2>
                <ChromePicker
                    styles={{
                        default: {
                            picker: {
                                color: '#000000',
                                background: 'var(--main-level-3)',
                                boxShadow: 'none',
                            },
                            body: {
                                padding: 'var(--spacing) var(--spacing)',
                            }
                        },
                    }}
                    disableAlpha={true}
                    color={color}
                    onChange={color => setColor(color.hex)}
                    onChangeComplete={color => {
                        setColor(color.hex);
                    }}
                />
            </div>
        </EmbossControlContainer>
    </div>;
};