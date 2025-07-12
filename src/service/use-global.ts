import { useCallback } from 'react';
import { createPresetNameStyle, NameStyle } from 'src/model';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type GlobalMemory = {
    activeDropzone: number,
    nameStylePresetList: {
        id: string,
        content: Partial<NameStyle>,
    }[],
};
export type GlobalStore = {
    memory: GlobalMemory,
    updateGlobalMemory: (transformerOrPayload: Partial<GlobalMemory>
        | ((currentMemory: GlobalMemory) => GlobalMemory)) => void,
};
export const useGlobalMemory = create<GlobalStore>((set) => {
    return {
        memory: {
            activeDropzone: 0,
            nameStylePresetList: [
                {
                    id: 'abc',
                    content: createPresetNameStyle({
                        preset: 'animeGold',
                        shadowColor: '#f8f8f8',
                        shadowOffsetY: 3,
                        shadowOffsetX: 2,
                        shadowBlur: 2,
                        hasShadow: true,
                        lineColor: '#664444',
                        lineWidth: 3,
                        lineOffsetX: 1,
                        lineOffsetY: 0,
                        hasOutline: true,
                        gradientAngle: 180,
                        gradientColor: '0.000|#4ee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#45dd2d,1.000|#43da23',
                        hasGradient: true,
                    })
                },
                {
                    id: 'cde',
                    content: createPresetNameStyle({
                        preset: 'promo',
                        fillStyle: '#c7080b',
                        shadowColor: '#333333',
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        shadowBlur: 1,
                        hasShadow: true,
                        lineColor: '#8a1801',
                        lineWidth: 3,
                        lineOffsetX: 0,
                        hasOutline: true,
                        lineOffsetY: 0,
                        font: 'OCG',
                    })
                },
                {
                    id: 'efg',
                    content: createPresetNameStyle({
                        preset: 'promo',
                        fillStyle: '#080bc7',
                        shadowColor: '#333333',
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,
                        shadowBlur: 1,
                        hasShadow: true,
                        lineColor: '#18018a',
                        lineWidth: 3,
                        lineOffsetX: 0,
                        hasOutline: true,
                        lineOffsetY: 0,
                        font: 'OCG',
                    })
                },
                {
                    id: 'ghi',
                    content: createPresetNameStyle({
                        preset: 'animeGold',
                        shadowColor: '#f8f8f8',
                        shadowOffsetY: 3,
                        shadowOffsetX: 2,
                        shadowBlur: 2,
                        hasShadow: true,
                        lineColor: '#664444',
                        lineWidth: 3,
                        lineOffsetX: 1,
                        lineOffsetY: 0,
                        hasOutline: true,
                        gradientAngle: 180,
                        gradientColor: '0.000|#4e17e3,0.220|#db15be,0.270|#20cd09,0.330|#b57f0b,0.380|#d0920c,0.450|#f6bfff,0.610|#ffffff,0.700|#ffffff,0.870|#45dd2d,1.000|#43da23',
                        hasGradient: true,
                    })
                },
            ],
        },
        updateGlobalMemory: transformerOrPayload => {
            set(currentStore => {
                const newGlobalMemory = typeof transformerOrPayload === 'function'
                    ? transformerOrPayload(currentStore.memory)
                    : { ...currentStore.memory, ...transformerOrPayload };

                return {
                    memory: newGlobalMemory,
                };
            });
        }
    };
});

export const useGlobal = <Key extends keyof GlobalMemory>(key: Key) => {
    const {
        targetMemory,
        updateGlobalMemory,
    } = useGlobalMemory(useShallow(({
        memory,
        updateGlobalMemory,
    }) => ({
        targetMemory: memory[key],
        updateGlobalMemory,
    })));

    const updateTargetNotification = useCallback(
        (value: GlobalMemory[Key] | ((currentSetting: GlobalMemory[Key]) => GlobalMemory[Key])) => {
            updateGlobalMemory(cur => {
                return { ...cur, [key]: typeof value === 'function' ? value(cur[key]) : value };
            });
        },
        [key, updateGlobalMemory],
    );

    return [targetMemory, updateTargetNotification] as const;
};