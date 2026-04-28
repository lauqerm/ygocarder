import { MasterSeriesCanvas } from 'src/model';
import { create } from 'zustand';

type CanvasUpdateMap = {
    iconImage: number,
};
type CanvasDataMap = {
    iconImage: string | null,
}
export type CardCanvasStore = {
    canvasMap: null | MasterSeriesCanvas,
    canvasRenderCountMap: CanvasUpdateMap,
    canvasDataMap: CanvasDataMap,
    updateCanvasMap: (canvasMap: MasterSeriesCanvas) => void,
    updateCanvasRenderCount: (canvasRenderCountMap: Array<keyof CanvasUpdateMap>) => void,
    updateCanvasData: (canvasDataMap: Array<keyof CanvasUpdateMap>) => void,
};
export const useCardCanvas = create<CardCanvasStore>((set) => {
    return {
        canvasMap: null,
        canvasRenderCountMap: {
            iconImage: 0,
        },
        canvasDataMap: {
            iconImage: null,
        },
        updateCanvasMap: canvasMap => {
            set({ canvasMap});
        },
        updateCanvasRenderCount: updateList => {
            set(current => {
                const willUpdateImage = updateList.includes('iconImage');
                const newCanvasRenderMap = willUpdateImage
                    ? {
                        ...current.canvasRenderCountMap,
                        iconImage: current.canvasRenderCountMap.iconImage + 1,
                    }
                    : current.canvasRenderCountMap;

                return {
                    ...current,
                    canvasRenderCountMap: newCanvasRenderMap,
                };
            });
        },
        updateCanvasData: targetList => {
            set(current => {
                const willUpdateImage = targetList.includes('iconImage');
                const canvasData = current.canvasMap?.iconImageCanvasRef.current?.toDataURL() || null;

                return {
                    ...current,
                    canvasDataMap: willUpdateImage
                        ? {
                            ...current.canvasDataMap,
                            iconImage: willUpdateImage ? canvasData : current.canvasDataMap.iconImage,
                        }
                        : current.canvasDataMap,
                };
            });
        }
    };
});