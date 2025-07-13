import { InputNumber } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { ANGLE_PICKER_CLASSNAME, GuardedSlider, CircularAnglePicker, CombinedSliderContainer } from 'src/component';
import { angleToVector, mergeClass, useRefresh } from 'src/util';
import styled from 'styled-components';
import { SyncOutlined } from '@ant-design/icons';
import { LanguageDataDictionary } from 'src/service';
import { getDefaultNameStyle } from 'src/model';

const MaterialColor = styled.div<{ $color: string }>`
    border: var(--bw) solid var(--sub-level-2);
    display: inline-block;
    width: 2rem;
    height: 1em;
    border-radius: var(--br-sm);
    cursor: pointer;
    ${({ $color }) => `background-color: ${$color};`}
`;
const EmbossControlContainer = styled.div`
    width: 245px; // Exact same width with text color picker, for alignment
    color: var(--color);
    .emboss-control-title {
        font-size: var(--fs-sm);
        text-align: left;
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
    .navigate-button {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
    .thickness-row {
        display: grid;
        grid-template-columns: max-content 1fr;
        column-gap: var(--spacing-sm);
        align-items: center;
        .ant-slider {
            height: unset;
            margin-top: var(--spacing-xs);
            margin-bottom: var(--spacing-xs);
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

export type EmbossControllerRef = {
    setValue: (value: {
        color?: string,
        pitch?: number,
        yaw?: number,
        thickness?: number,
    }) => void,
};
export type EmbossController = {
    defaultPitch?: number,
    defaultYaw?: number,
    defaultThickness?: number,
    materialColor?: string,
    children?: React.ReactNode,
    language: LanguageDataDictionary,
    onColorTabNavigate?: () => void,
    onChange: (value: {
        lightColorVec: [number, number, number],
        lightAngleVec: [number, number, number],
        yaw: number,
        pitch: number,
        thickness: number,
    }) => void,
};
const defaultValue = getDefaultNameStyle();
export const EmbossController = forwardRef<EmbossControllerRef, EmbossController>(({
    defaultPitch = defaultValue.embossPitch,
    defaultYaw = defaultValue.embossYaw,
    defaultThickness = defaultValue.embossThickness,
    materialColor,
    children,
    language,
    onColorTabNavigate,
    onChange,
}, ref) => {
    const [requestUpdate, internalId] = useRefresh();
    const [color, setColor] = useState('#ffffff');
    const [thickness, setThickness] = useState(defaultThickness);
    const [angle, setAngle] = useState(defaultYaw);
    const [verticalAngle, setVerticalAngle] = useState(defaultPitch);
    const currentColorVec = useRef<[number, number, number]>([255, 255, 255]);
    const currentAngleVec = useRef<[number, number, number]>([0, 1, 0]);
    const currentThickness = useRef(defaultThickness);
    /** Currently we only allow pure white light to avoid confusion for user. */
    const [allowPickColor] = useState(false);

    useEffect(() => {
        let relevant = true;
        if (internalId) setTimeout(() => {
            if (relevant) {
                const nextAngle = angleToVector(angle, verticalAngle);
                const nextColor = hexToRgb(color);

                if (
                    nextColor[0] !== currentColorVec.current[0]
                    || nextColor[1] !== currentColorVec.current[1]
                    || nextColor[2] !== currentColorVec.current[2]
                    || (Math.abs(nextAngle[0] - currentAngleVec.current[0]) > VECTOR_VALUE_EPSILON)
                    || (Math.abs(nextAngle[1] - currentAngleVec.current[1]) > VECTOR_VALUE_EPSILON)
                    || (Math.abs(nextAngle[2] - currentAngleVec.current[2]) > VECTOR_VALUE_EPSILON)
                    || thickness !== currentThickness.current
                ) {
                    onChange({ lightColorVec: nextColor, lightAngleVec: nextAngle, yaw: angle, pitch: verticalAngle, thickness });
                }
                currentColorVec.current = nextColor;
                currentAngleVec.current = nextAngle;
                currentThickness.current = thickness;
            }
        }, 150);

        return () => {
            relevant = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [internalId, color, angle, verticalAngle, thickness]);

    useImperativeHandle(ref, () => ({
        setValue: ({ color, pitch, yaw, thickness }) => {
            if (color) setColor(color);
            if (pitch) setVerticalAngle(pitch);
            if (yaw) setAngle(yaw);
            if (typeof thickness === 'number') setAngle(thickness);
        }
    }));

    return <EmbossControlContainer className={mergeClass(ANGLE_PICKER_CLASSNAME, 'emboss-control')}>
        <div className="emboss-control-title">
            {children}
        </div>
        <div className="emboss-control-left">
            <h2>
                {language['input.name-style.emboss.color.label']}&nbsp;&nbsp;<MaterialColor
                    className="material-color"
                    onClick={onColorTabNavigate}
                    $color={materialColor}
                />
            </h2>
            {language['input.name-style.emboss.color.alert'](<span
                key="color-navigate"
                className={!!onColorTabNavigate ? 'navigate-button' : ''}
                onClick={onColorTabNavigate}
            >
                {language['input.name-style.color.label']}
            </span>)}
            <h2 className="thickness-row">
                <span>{language['input.name-style.emboss.thickness.label']}</span>
                <GuardedSlider
                    value={thickness}
                    min={0}
                    max={4}
                    onChange={value => {
                        if (typeof value === 'number') {
                            setThickness(value);
                            requestUpdate();
                        }
                    }}
                />
            </h2>
            <h2>
                {language['input.name-style.emboss.pitch.label']}&nbsp;&nbsp;<SyncOutlined
                    className="reset-button"
                    onClick={() => {
                        setVerticalAngle(DEFAULT_PITCH);
                        requestUpdate();
                    }}
                />
            </h2>
            <CombinedSliderContainer className="vertical-angle-control">
                <div className="slider-label" />
                <InputNumber
                    size="small"
                    min={-90}
                    max={90}
                    onChange={value => {
                        setVerticalAngle(typeof value === 'string' ? parseInt(value) : value ?? 0);
                        requestUpdate();
                    }}
                    value={verticalAngle}
                />
                <GuardedSlider
                    min={-90}
                    max={90}
                    value={verticalAngle}
                    onChange={value => {
                        setVerticalAngle(value);
                        requestUpdate();
                    }}
                />
                <div className="slider-padding" />
            </CombinedSliderContainer>
            <h2>{language['input.name-style.emboss.yaw.label']}&nbsp;&nbsp;<SyncOutlined
                className="reset-button"
                onClick={() => {
                    setAngle(DEFAULT_YAW);
                    requestUpdate();
                }}
            /></h2>
            <div className="horizontal-angle-contorl">
                <CircularAnglePicker
                    angle={angle}
                    size={120}
                    setAngle={angle => {
                        setAngle(angle);
                        requestUpdate();
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
                onChange={color => {
                    setColor(color.hex);
                    requestUpdate();
                }}
                onChangeComplete={color => {
                    setColor(color.hex);
                    requestUpdate();
                }}
            />
        </div>}
    </EmbossControlContainer>;
});