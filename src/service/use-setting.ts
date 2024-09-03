import { CanvasConst } from 'src/model';
import { create } from 'zustand';

export type Setting = {
    resolution: [number, number],
    showCreativeOption: boolean,
    showExtraDecorativeOption: boolean,
    allowHotkey: boolean,
    reduceMotionColor: boolean,
};
export type SettingStore = {
    setting: Setting,
    updateSetting: (transformerOrPayload: Partial<Setting> | ((currentSetting: Setting) => Setting)) => void,
};
export const useSetting = create<SettingStore>((set) => {
    const {
        resolution,
        allowHotkey,
        reduceMotionColor,
        showCreativeOption,
        showExtraDecorativeOption,
    } = ((): Record<string, any> => {
        try {
            const cachedStore = JSON.parse(window.localStorage.getItem('setting') ?? '{}');

            if (cachedStore && typeof cachedStore === 'object' && !Array.isArray(cachedStore)) return cachedStore;
            return {};
        } catch (e) {
            console.error('useSetting: Error when getting cached setting', e);
            return {};
        }
    })();

    return {
        setting: {
            resolution: Array.isArray(resolution) && typeof resolution[0] === 'number' && typeof resolution[1] === 'number'
                ? resolution as [number, number]
                : [CanvasConst.width, CanvasConst.height],
            allowHotkey: typeof allowHotkey === 'boolean' ? allowHotkey : true,
            reduceMotionColor: typeof reduceMotionColor === 'boolean' ? reduceMotionColor : false,
            showCreativeOption: typeof showCreativeOption === 'boolean' ? showCreativeOption : true,
            showExtraDecorativeOption: typeof showExtraDecorativeOption === 'boolean' ? showExtraDecorativeOption : true,
        },
        updateSetting: transformerOrPayload => {
            set(currentStore => {
                const newSetting = typeof transformerOrPayload === 'function'
                    ? transformerOrPayload(currentStore.setting)
                    : { ...currentStore.setting, ...transformerOrPayload };

                window.localStorage.setItem('setting', JSON.stringify(newSetting));

                return {
                    setting: newSetting,
                };
            });
        }
    };
});