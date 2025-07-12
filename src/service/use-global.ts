import { useCallback } from 'react';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type GlobalMemory = {
    activeDropzone: number,
};
export type GlobalStore = {
    memory: GlobalMemory,
    updateGlobalMemory: (transformerOrPayload: Partial<GlobalMemory>
        | ((currentSetting: GlobalMemory) => GlobalMemory)) => void,
};
export const useGlobalMemory = create<GlobalStore>((set) => {
    return {
        memory: {
            activeDropzone: 0,
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