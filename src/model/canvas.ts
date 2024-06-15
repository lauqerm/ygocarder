export const UP_RATIO = 1.48125;
/** Các thông số được làm tròn thay vì upscale để đảm bảo độ mịn */
export const CanvasConst = {
    width: 813, // 549 * UP_RATIO,
    height: 1185, // 800 * UP_RATIO,
};

export type CardOpacity = {
    body: number,
    pendulum: number,
    text: number,
    artFrame: boolean,
};
export const getDefaultCardOpacity = () => ({
    body: 100,
    pendulum: 100,
    text: 100,
    artFrame: true,
});
export const CardArtCanvasCoordinateMap = {
    normal: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 614,
        artX: 100,
        artY: 219,
        ratio: 1,
        type: 'normal',
    },
    pendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.325,
        type: 'pendulum',
    },
    extendedCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        type: 'extendedCard',
    },
    extendedPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        type: 'extendedPendulum',
    },
    truePendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.057,
        type: 'truePendulum',
    },
    fullCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        type: 'fullCard',
    },
    fullPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        type: 'fullPendulum',
    },
};
export const getArtCanvasCoordinate = (
    isPendulum: boolean,
    opacity?: Partial<CardOpacity>,
) => {
    const {
        artFrame,
        body,
        pendulum,
        text,
    } = { ...getDefaultCardOpacity(), ...opacity };

    const artType = artFrame === false || body < 100
        ? isPendulum
            ? 'fullPendulum'
            : 'fullCard'
        : isPendulum
            ? text < 100
                ? 'extendedPendulum'
                : pendulum < 100
                    ? 'truePendulum'
                    : 'pendulum'
            : text < 100
                ? 'extendedCard'
                : 'normal';

    return CardArtCanvasCoordinateMap[artType];
};
