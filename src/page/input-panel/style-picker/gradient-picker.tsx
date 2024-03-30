import { Button, InputNumber } from 'antd';
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { AnglePicker, ColorPoint, GradientPicker } from 'react-linear-gradient-picker';
import { getDefaultGradientPalette } from 'src/util';
import debounce from 'lodash.debounce';
import 'react-linear-gradient-picker/dist/index.css';
import './gradient-picker.scss';

type WrappedColorPicker = {
    color?: string,
    onSelect?: (color: string, opacity?: number) => void,
    onOffsetChange?: (id: number, offset: string) => void,
    onRemove?: (id: number) => void,
    opacity?: number,
};
type WrappedColorPickerRef = {
    setColor: (stopColor: ColorPoint) => void,
    setCurrentOffset: (id: number, offset: string) => void,
}
const WrappedColorPicker = forwardRef(({
    color,
    onSelect,
    onOffsetChange,
    onRemove,
}: WrappedColorPicker, ref: ForwardedRef<WrappedColorPickerRef>) => {
    const [internalColor, setInternalColor] = useState(color);
    const [internalOffset, setInternalOffset] = useState(0);
    const [internalId, setInternalId] = useState(-1);
    const debouncedOnChange = useRef(debounce(setInternalOffset, 250)).current;

    useImperativeHandle(ref, () => ({
        setColor: ({ color, offset, id }) => {
            const { min, max, round } = Math;

            setInternalColor(color);
            setInternalOffset(max(0, min(100, round(parseFloat(offset) * 100))));
            setInternalId(id);
        },
        setCurrentOffset: (id, offset) => {
            const { min, max, round } = Math;

            if (id === internalId) setInternalOffset(max(0, min(100, round(parseFloat(offset) * 100))));
        }
    }));

    useEffect(() => {
        if (internalId > 0) onOffsetChange?.(internalId, `${internalOffset / 100}`);
    /** @todo Kiểm tra và loại bỏ warning */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [internalOffset]);

    return <div className="stop-point-control-panel">
        <div className="stop-point-offset-input">
            Stop At: <InputNumber
                value={internalOffset}
                size="small"
                max={100} min={0}
                onChange={value => debouncedOnChange(typeof value === 'string' ? parseInt(value) : value ?? 0)}
            />
            <Button className="remove-stop-color" size="small" onClick={() => onRemove?.(internalId)}>Remove</Button>
        </div>
        <ChromePicker
            styles={{
                default: {
                    picker: {
                        color: '#000000',
                        background: '#48484b',
                        boxShadow: 'none',
                    },
                    body: {
                        padding: '10px 10px',
                    }
                },
            }}
            disableAlpha={true}
            color={internalColor}
            onChange={color => setInternalColor(color.hex)}
            onChangeComplete={color => {
                setInternalColor(color.hex);
                onSelect?.(color.hex);
            }}
        />
    </div>;
});

const MAX_STOP_POINT = 12;
export type TextGradientPicker = {
    palette?: ColorPoint[],
    angle?: number,
    onChange: (palette: ColorPoint[], angle: number) => void,
};
export const TextGradientPicker = ({
    palette: externalPalette = getDefaultGradientPalette(),
    angle: externalAngle = 180,
    onChange,
}: TextGradientPicker) => {
    const pickerRef = useRef<WrappedColorPickerRef>(null);
    const [angle, setAngle] = useState(externalAngle);
    const [palette, setPalette] = useState({
        colorList: externalPalette,
        currentControlId: externalPalette[0]?.id ?? -1,
    });

    useEffect(() => {
        setAngle(externalAngle);
    }, [externalAngle]);

    useEffect(() => {
        setPalette({
            colorList: externalPalette,
            currentControlId: externalPalette[0]?.id ?? -1,
        });
    }, [externalPalette]);

    const setPickerOnMount = useRef(false);
    useEffect(() => {
        if (palette.colorList[0] && setPickerOnMount.current) {
            setPickerOnMount.current = true;
            pickerRef.current?.setColor(palette.colorList[0]);
        }
    }, [palette.colorList]);

    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            const { colorList, currentControlId } = palette;
            if (relevant && currentControlId >= 0) {
                const targetColor = colorList.find(entry => entry.id === currentControlId);

                if (targetColor) pickerRef.current?.setCurrentOffset(currentControlId, targetColor.offset);
            }
        }, 100);

        return () => {
            relevant = false;
        };
    }, [palette]);

    /** "controls-wrapper" là class định danh của GradientPicker, không được bỏ */
    return <div className="controls-wrapper gradient-picker-container">
        <div className="angle-picker-container">
            <h2>Angle</h2>
            <AnglePicker angle={angle} setAngle={setAngle} />
        </div>
        <h2>
            Gradient <Button
                size="small"
                className="add-stop-color"
                disabled={(palette.colorList?.length ?? 10000) > MAX_STOP_POINT}
                onClick={() => {
                    setPalette(cur => {
                        return {
                            ...cur,
                            colorList: [
                                ...cur.colorList,
                                { offset: '0.5', color: '#ffffff', id: cur.colorList.length + 1 },
                            ].sort((l, r) => Number(l.offset) - Number(r.offset))
                        };
                    });
                }}
            >Add Stop Point ({palette.colorList.length}/{MAX_STOP_POINT})</Button>
        </h2>
        <div className="stop-color-picker-container">
            <GradientPicker {...{
                width: 230,
                paletteHeight: 32,
                maxStops: MAX_STOP_POINT,
                minStops: 2,
                stopRemovalDrop: 99999,
                palette: palette.colorList,
                onPaletteChange: colorList => setPalette(cur => ({ ...cur, colorList })),
                onColorStopSelect: stopColor => {
                    setPalette(cur => ({ ...cur, currentControlId: stopColor.id}));
                    pickerRef.current?.setColor(stopColor);
                },
            }}>
                {/** Children được clone để populate props, vậy nên không cần pass props ở đây */}
                <WrappedColorPicker ref={pickerRef}
                    onOffsetChange={(id, offset) => setPalette(cur => {
                        return { ...cur, colorList: cur.colorList.map(entry => entry.id === id ? { ...entry, offset } : entry) };
                    })}
                    onRemove={id => {
                        setPalette(cur => {
                            const nextColorList = cur.colorList.filter(entry => entry.id !== id);
                            const nextId = nextColorList?.[0].id ?? -1;
                            if (nextId > 0) pickerRef.current?.setColor(palette.colorList[nextId]);

                            return {
                                colorList: nextColorList,
                                currentControlId: nextId,
                            };
                        });
                    }}
                />
            </GradientPicker>
            <Button type="primary" onClick={() => onChange(palette.colorList, angle)}>Submit</Button>
        </div>
    </div>;
};