import { Button, InputNumber } from 'antd';
import { ForwardedRef, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ChromePicker } from 'react-color';
import { AnglePicker, ColorPoint, GradientPicker } from 'react-linear-gradient-picker';
import { getDefaultGradientPalette, parsePalette, stringifyPalette } from 'src/util';
import debounce from 'lodash.debounce';
import 'react-linear-gradient-picker/dist/index.css';
import './gradient-picker.scss';
import { useLanguage } from 'src/service';

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
    const language = useLanguage();
    const [internalColor, setInternalColor] = useState(color);
    const [internalOffset, setInternalOffset] = useState(0);
    const [internalId, setInternalId] = useState(-1);
    const debouncedOnChange = useRef(debounce(setInternalOffset, 250)).current;

    useImperativeHandle(ref, () => ({
        setColor: colorInfo => {
            if (colorInfo) {
                const { color, offset, id } = colorInfo;
                const { min, max, round } = Math;
    
                setInternalColor(color);
                setInternalOffset(max(0, min(100, round(parseFloat(offset) * 100))));
                setInternalId(id);
            }
        },
        setCurrentOffset: (id, offset) => {
            const { min, max, round } = Math;

            if (id === internalId) setInternalOffset(max(0, min(100, round(parseFloat(offset) * 100))));
        }
    }));

    useEffect(() => {
        if (internalId > 0) onOffsetChange?.(internalId, `${internalOffset / 100}`);
    }, [internalId, internalOffset, onOffsetChange]);

    return <div className="stop-point-control-panel">
        <div className="stop-point-offset-input">
            <div>
                {language['input.name-style.gradient.color-stop.label']}: <InputNumber
                    value={internalOffset}
                    size="small"
                    max={100} min={0}
                    onChange={value => debouncedOnChange(typeof value === 'string' ? parseInt(value) : value ?? 0)}
                />
            </div>
            <Button className="remove-stop-color" size="small" onClick={() => onRemove?.(internalId)}>
                {language['input.name-style.gradient.color-remove.label']}
            </Button>
        </div>
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
            color={internalColor}
            onChange={color => setInternalColor(color.hex)}
            onChangeComplete={color => {
                setInternalColor(color.hex);
                onSelect?.(color.hex);
            }}
        />
    </div>;
});

const MAX_STOP_POINT = 20;
const getPaletteInfo = (newColorList: ColorPoint[]) => {
    return {
        colorList: newColorList,
        raw: stringifyPalette(newColorList),
    };
};
export type TextGradientPicker = {
    palette?: string,
    angle?: number,
    memoizedOnChange: (palette: ColorPoint[], angle: number) => void,
};
export const TextGradientPicker = ({
    palette: externalPalette = stringifyPalette(getDefaultGradientPalette()),
    angle: externalAngle = 180,
    memoizedOnChange,
}: TextGradientPicker) => {
    const language = useLanguage();
    const pickerRef = useRef<WrappedColorPickerRef>(null);
    const [angle, setAngle] = useState(externalAngle);
    const [palette, setPalette] = useState(() => {
        const intialPalette = parsePalette(externalPalette);

        return {
            raw: externalPalette,
            colorList: intialPalette,
            currentControlId: intialPalette[0]?.id ?? -1,
        };
    });

    const changePalette = useCallback((id: number, offset: string) => setPalette(cur => {
        const nextColorList = cur.colorList.map(entry => entry.id === id ? { ...entry, offset } : entry);

        return { ...cur, ...getPaletteInfo(nextColorList) };
    }), []);

    useEffect(() => {
        setAngle(externalAngle);
    }, [externalAngle]);

    useEffect(() => {
        const newPalette = parsePalette(externalPalette);

        setPalette({
            raw: externalPalette,
            colorList: newPalette,
            currentControlId: newPalette[0]?.id ?? -1,
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

    /** @todo REMEMBER to memorize the callback (`memoizedOnChange`) before passing into this component */
    useEffect(() => {
        let relevant = true;
        setTimeout(() => {
            if (relevant) {
                memoizedOnChange(palette.colorList, angle);
            }
        }, 200);

        return () => {
            relevant = false;
        };
    }, [palette, angle, memoizedOnChange]);

    return <div className="controls-wrapper gradient-picker-container">
        <div className="gradient-angle-control">
            <h2>
                {language['input.name-style.gradient.color-point.label']}
            </h2>
            <Button
                size="small"
                className="add-stop-color"
                disabled={(palette.colorList?.length ?? 10000) > MAX_STOP_POINT}
                onClick={() => {
                    setPalette(cur => {
                        const nextColorList = [
                            ...cur.colorList,
                            { offset: '0.5', color: '#ffffff', id: cur.colorList.length + 1 },
                        ].sort((l, r) => Number(l.offset) - Number(r.offset));

                        return {
                            ...cur,
                            ...getPaletteInfo(nextColorList)
                        };
                    });
                }}
            >{language['input.name-style.gradient.add-point.label']} ({palette.colorList.length}/{MAX_STOP_POINT})</Button>
            <div className="angle-picker-container">
                <h2>{language['input.name-style.gradient.gradient-direction.label']}</h2>
                <AnglePicker angle={angle} size={120} setAngle={setAngle} />
            </div>
        </div>
        <div className="stop-color-picker-container">
            <GradientPicker {...{
                width: 370,
                paletteHeight: 32,
                maxStops: MAX_STOP_POINT,
                minStops: 2,
                stopRemovalDrop: 99999,
                palette: palette.colorList,
                onPaletteChange: colorList => setPalette(cur => ({ ...cur, ...getPaletteInfo(colorList) })),
                onColorStopSelect: stopColor => {
                    setPalette(cur => ({ ...cur, currentControlId: stopColor.id }));
                    pickerRef.current?.setColor(stopColor);
                },
            }}>
                {/** Under the hood this children will be cloned with pre-populate props, so it seemingly work even though we do not pass anything here. */}
                <WrappedColorPicker ref={pickerRef}
                    onOffsetChange={changePalette}
                    onRemove={id => {
                        setPalette(cur => {
                            const nextColorList = cur.colorList.filter(entry => entry.id !== id);
                            const nextId = nextColorList?.[0].id ?? -1;
                            if (nextId > 0 && palette.colorList[nextId]) {
                                pickerRef.current?.setColor(palette.colorList[nextId]);
                            }

                            return {
                                ...getPaletteInfo(nextColorList),
                                currentControlId: nextId,
                            };
                        });
                    }}
                />
            </GradientPicker>
        </div>
    </div>;
};