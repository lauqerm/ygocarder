import { InputNumber } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { ANGLE_PICKER_CLASSNAME, GuardedSlider, CircularAnglePicker, CombinedSliderContainer } from 'src/component';
import { mergeClass } from 'src/util';
import styled from 'styled-components';
import { SyncOutlined } from '@ant-design/icons';

const EmbossControlContainer = styled.div`
    display: inline-grid;
    grid-template-columns: max-content max-content;
    color: var(--color);
    .emboss-control-title {
        grid-column: -1 / 1;
        font-size: var(--fs-sm);
        text-align: center;
        padding: var(--spacing-sm);
        padding-bottom: 0;
    }
    .emboss-control-left h2 {
        padding: var(--spacing-sm) 0;
    }
    .angle-picker-container {
        text-align: center;
    }
    .emboss-control-right {
        padding: var(--spacing-sm) 0;
    }
    .emboss-control-left {
        padding: var(--spacing-sm);
        padding-top: 0;
    }
    .slider-label {
        padding: 0;
        border: none;
    }
    .vertical-angle-control {
        grid-template-columns: max-content 60px 85px 12px;
    }
    .reset-button {
        cursor: pointer;
        &:hover {
            color: var(--color-heavy);
        }
    }
`;

const VECTOR_VALUE_EPSILON = 0.01;
const DEFAULT_PITCH = 90;
const DEFAULT_YAW = 90;
function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return (result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ]
        : [0, 0, 0]) as [number, number, number];
  }

type EmbossControllerRef = {
    setValue: (color?: string, pitch?: number, yaw?: number) => void,
};
export type EmbossController = {
    children?: React.ReactNode,
    onChange: (
        lightColorVec: [number, number, number],
        lightAngleVec: [number, number, number],
        lightAngle: [yaw: number, pitch: number],
    ) => void,
};
export const EmbossController = forwardRef<EmbossControllerRef, EmbossController>(({
    children,
    onChange,
}, ref) => {
    const [color, setColor] = useState('#ffffff');
    const [angle, setAngle] = useState(DEFAULT_YAW);
    const [verticalAngle, setVerticalAngle] = useState(DEFAULT_PITCH);
    const colorVec = useRef<[number, number, number]>([255, 255, 255]);
    const angleVec = useRef<[number, number, number]>([0, 1, 0]);
    /** Currently we only allow pure white light to avoid confusion for user. */
    const [allowPickColor] = useState(false);

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                /** We use the north pole as 0 deg for easier reference, but during calculation the east pole is 0 deg */
                const angleRadian = (angle + 90) * Math.PI / 180;
                const verticalAngleRadian = (verticalAngle + 90) * Math.PI / 180;
                const x = Math.cos(angleRadian) * Math.cos(verticalAngleRadian);
                const y = Math.sin(angleRadian) * Math.cos(verticalAngleRadian);
                const z = Math.sin(verticalAngleRadian);
                const nextAngle: [number, number, number] = [Math.round(x * 100) / 100, Math.round(y * 100) / 100, Math.round(z * 100) / 100];
                const nextColor = hexToRgb(color);

                colorVec.current = nextColor;
                angleVec.current = [Math.round(x * 100) / 100, Math.round(y * 100) / 100, Math.round(z * 100) / 100];
                if (
                    nextColor[0] !== colorVec[0]
                    || nextColor[1] !== colorVec[1]
                    || nextColor[2] !== colorVec[2]
                    || (Math.abs(nextAngle[0] - angleVec[0]) > VECTOR_VALUE_EPSILON)
                    || (Math.abs(nextAngle[1] - angleVec[1]) > VECTOR_VALUE_EPSILON)
                    || (Math.abs(nextAngle[2] - angleVec[2]) > VECTOR_VALUE_EPSILON)
                ) {
                    onChange(nextColor, nextAngle, [angle, verticalAngle]);
                }
            }
        }, 50);

        return () => {
            relevant = false;
        };
    }, [color, angle, verticalAngle]);

    useImperativeHandle(ref, () => ({
        setValue: (color, pitch, yaw) => {
            if (color) setColor(color);
            if (pitch) setVerticalAngle(pitch);
            if (yaw) setAngle(yaw);
        }
    }));

    return <EmbossControlContainer className={mergeClass(ANGLE_PICKER_CLASSNAME, 'emboss-control')}>
        <div className="emboss-control-title">
            {children}
        </div>
        <div className="emboss-control-left">
            <h2>Pitch&nbsp;&nbsp;<SyncOutlined className="reset-button" onClick={() => setVerticalAngle(DEFAULT_PITCH)} /></h2>
            <CombinedSliderContainer className="vertical-angle-control">
                <div className="slider-label" />
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
                <div className="slider-padding" />
            </CombinedSliderContainer>
            <h2>Yaw&nbsp;&nbsp;<SyncOutlined className="reset-button" onClick={() => setAngle(DEFAULT_YAW)} /></h2>
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
        {allowPickColor && <div className="emboss-control-right">
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
        </div>}
    </EmbossControlContainer>;
});