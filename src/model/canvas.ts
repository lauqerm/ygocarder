export const UP_RATIO = 1.48125;
/** Các thông số được làm tròn thay vì upscale để đảm bảo độ mịn */
export const CanvasConst = {
    width: 813, // 549 * UP_RATIO,
    height: 1185, // 800 * UP_RATIO,
};
export const CardArtCanvasConst = {
    normal: {
        x: 100, // 67 * UP_RATIO,
        y: 219, // 147* UP_RATIO,
        w: 614, // 416 * UP_RATIO,
        ratio: 1,
    },
    pendulum: {
        x: 56, // 38 * UP_RATIO,
        y: 213, // 144 * UP_RATIO,
        w: 702, // 474 * UP_RATIO,
        ratio: 1.325
    }
};