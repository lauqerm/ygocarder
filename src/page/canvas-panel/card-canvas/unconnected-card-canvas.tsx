import { LightboxRef } from 'src/component';
import { SeriesCanvasInfo } from 'src/model';

export type CardCanvasRef = {
    prepare: () => void,
};
export type CardCanvas = {
    children?: React.ReactNode,
    lightBoxCanvasKey: number,
    lightboxRef: React.RefObject<LightboxRef>,
    onMount: (canvasInfo: SeriesCanvasInfo) => void,
};