import { useCallback } from 'react';
import { Foil, FrameDyeList, ImagePreset, NameStyle } from 'src/model';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type FramePreset = {
    foil: Foil,
    frame: string,
    pendulumFrame: string,
    leftFrame: string,
    rightFrame: string,
    pendulumRightFrame: string,
    effectStyle: {
        background: string,
    },
    pendulumStyle: {
        background: string,
    },
    dyeList: FrameDyeList,
};
export type GlobalMemory = {
    activeDropzone: number,
    layoutPresetList: {
        key: string,
        content: FramePreset,
    }[],
    nameStylePresetList: {
        key: string,
        content: Partial<NameStyle>,
    }[],
    imagePresetList: {
        key: string,
        content: ImagePreset,
    }[],
    imagePresetMap: Record<string, ImagePreset>,
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
            layoutPresetList: [],
            nameStylePresetList: [],
            imagePresetList: [],
            imagePresetMap: {},
        },
        updateGlobalMemory: transformerOrPayload => {
            set(currentStore => {
                const newGlobalMemory = typeof transformerOrPayload === 'function'
                    ? transformerOrPayload(currentStore.memory)
                    : { ...currentStore.memory, ...transformerOrPayload };
                if (currentStore.memory.imagePresetList !== newGlobalMemory.imagePresetList) {
                    newGlobalMemory.imagePresetMap = newGlobalMemory.imagePresetList.reduce((acc, cur) => {
                        /** If user use duplicated name, that is on them :v */
                        acc[cur.content.name] = cur.content;
                        return acc;
                    }, {});
                }

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

    const updateTargetMemory = useCallback(
        (value: GlobalMemory[Key] | ((currentSetting: GlobalMemory[Key]) => GlobalMemory[Key])) => {
            updateGlobalMemory(cur => {
                return { ...cur, [key]: typeof value === 'function' ? value(cur[key]) : value };
            });
        },
        [key, updateGlobalMemory],
    );

    return [targetMemory, updateTargetMemory] as const;
};