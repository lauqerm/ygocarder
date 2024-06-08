export const UP_RATIO = 1.48125;
/** Các thông số được làm tròn thay vì upscale để đảm bảo độ mịn */
export const CanvasConst = {
    width: 813, // 549 * UP_RATIO,
    height: 1185, // 800 * UP_RATIO,
};
export const CardArtCanvasCoordinateMap = {
    normal: {
        x: 100,
        y: 219,
        w: 614,
        ratio: 1,
    },
    pendulum: {
        x: 56,
        y: 213,
        w: 702,
        ratio: 1.325,
    },
    extendedPendulum: {
        x: 56,
        y: 213,
        w: 702,
        ratio: 1.057,
    },
    extendedCard: {
        x: 56,
        y: 213,
        w: 702,
        ratio: 0.775,
    },
    fullCard: {
        x: 28,
        y: 28,
        w: 758,
        ratio: 0.670,
    },
};
export const getArtCanvasCoordinate = (
    isPendulum: boolean,
    opacity: {
        body: number,
        text: number,
        pendulum: number,
    }
): keyof typeof CardArtCanvasCoordinateMap => {
    const {
        body,
        pendulum,
        text,
    } = opacity;

    return body < 100
        ? 'fullCard'
        : isPendulum
            ? text < 100
                ? 'extendedCard'
                : pendulum < 100
                    ? 'extendedPendulum'
                    : 'pendulum'
            : text < 100
                ? 'extendedCard'
                : 'normal';
};