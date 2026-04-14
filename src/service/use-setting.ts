import { CanvasConst, ExportFormat, SlindingType } from 'src/model';
import { create } from 'zustand';

export type Setting = {
    allowHotkey: boolean,
    exportFormat: ExportFormat,
    exportScheme: string,
    globalScale: number,
    mirrorPendulumScale: boolean,
    reduceMotionColor: boolean,
    resolution: [number, number],
    showCreativeOption: boolean,
    showExtraAttribute: boolean,
    showExtraDecorativeOption: boolean,
    slidingType: SlindingType,
};
export type SettingStore = {
    setting: Setting,
    updateSetting: (transformerOrPayload: Partial<Setting> | ((currentSetting: Setting) => Setting)) => void,
};
export const useSetting = create<SettingStore>((set) => {
    const {
        allowHotkey,
        exportFormat,
        exportScheme,
        globalScale,
        mirrorPendulumScale,
        reduceMotionColor,
        resolution,
        showCreativeOption,
        showExtraAttribute,
        showExtraDecorativeOption,
        slidingType,
    } = ((): Record<string, any> => {
        try {
            const cachedStore = JSON.parse(localStorage.getItem('setting') ?? '{}');

            if (cachedStore && typeof cachedStore === 'object' && !Array.isArray(cachedStore)) return cachedStore;
            return {};
        } catch (e) {
            console.error('useSetting: Error when getting cached setting', e);
            return {};
        }
    })();

    return {
        setting: {
            exportScheme: typeof exportScheme === 'string' ? exportScheme : 'with-name',
            globalScale: typeof globalScale === 'number' && globalScale <= CanvasConst.maximumScale
                ? globalScale
                : 1,
            exportFormat: typeof exportFormat === 'string' ? exportFormat as ExportFormat : 'csv',
            slidingType: typeof slidingType === 'string' ? slidingType as SlindingType : 'auto',
            resolution: Array.isArray(resolution) && typeof resolution[0] === 'number' && typeof resolution[1] === 'number'
                ? resolution as [number, number]
                : [CanvasConst.width, CanvasConst.height],
            allowHotkey: typeof allowHotkey === 'boolean' ? allowHotkey : true,
            reduceMotionColor: typeof reduceMotionColor === 'boolean' ? reduceMotionColor : false,
            showCreativeOption: typeof showCreativeOption === 'boolean' ? showCreativeOption : true,
            showExtraAttribute: typeof showExtraAttribute === 'boolean' ? showExtraAttribute : true,
            showExtraDecorativeOption: typeof showExtraDecorativeOption === 'boolean' ? showExtraDecorativeOption : true,
            mirrorPendulumScale: typeof mirrorPendulumScale === 'boolean' ? mirrorPendulumScale : false,
        },
        updateSetting: transformerOrPayload => {
            set(currentStore => {
                const newSetting = typeof transformerOrPayload === 'function'
                    ? transformerOrPayload(currentStore.setting)
                    : { ...currentStore.setting, ...transformerOrPayload };

                localStorage.setItem('setting', JSON.stringify(newSetting));

                return {
                    setting: newSetting,
                };
            });
        }
    };
});