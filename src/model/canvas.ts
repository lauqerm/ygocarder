export const UpscaleRatio = 1.48125;
/** Các thông số được làm tròn thay vì upscale để đảm bảo độ mịn */
export const CanvasConst = {
    width: 813, // 549 * UpscaleRatio,
    height: 1185, // 800 * UpscaleRatio,
};
export const CardArtCanvasConst = {
    normal: {
        x: 99, // 67 * UpScaleRatio,
        y: 218, // 147* UpScaleRatio,
        w: 616, // 416 * UpScaleRatio,
        h: 616, // 416 * UpScaleRatio,
    },
    pendulum: {
        x: 56, // 38 * UpScaleRatio,
        y: 213, // 144 * UpScaleRatio,
        w: 702, // 474 * UpScaleRatio,
        h: 696, // 470 * UpScaleRatio,
    }
};