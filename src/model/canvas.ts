export type MasterDuelCanvas = {
    previewCanvasRef: React.RefObject<HTMLCanvasElement>,
    drawCanvasRef: React.RefObject<HTMLCanvasElement>,
    // artCanvas: React.RefObject<HTMLCanvasElement>,
    specialFrameCanvasRef: React.RefObject<HTMLCanvasElement>,
    cardIconCanvasRef: React.RefObject<HTMLCanvasElement>,
    pendulumScaleCanvasRef: React.RefObject<HTMLCanvasElement>,
    pendulumEffectCanvasRef: React.RefObject<HTMLCanvasElement>,
    typeCanvasRef: React.RefObject<HTMLCanvasElement>,
    effectCanvasRef: React.RefObject<HTMLCanvasElement>,
    nameCanvasRef: React.RefObject<HTMLCanvasElement>,
    attributeCanvasRef: React.RefObject<HTMLCanvasElement>,
    statCanvasRef: React.RefObject<HTMLCanvasElement>,
    setIdCanvasRef: React.RefObject<HTMLCanvasElement>,
    passwordCanvasRef: React.RefObject<HTMLCanvasElement>,
    creatorCanvasRef: React.RefObject<HTMLCanvasElement>,
    stickerCanvasRef: React.RefObject<HTMLCanvasElement>,
    finishCanvasRef: React.RefObject<HTMLCanvasElement>,
    lightboxCanvasRef: React.RefObject<HTMLCanvasElement>,
};

/** Các thông số được làm tròn thay vì upscale để đảm bảo độ mịn */
export const CanvasConst = {
    width: 813,
    height: 1185,
    topToPendulumStructure: 210,
    pendulumStructureHeight: 912,
    leftToPendulumStructure: 52,
};

export const getDefaultCardOpacity = () => ({
    body: 100,
    pendulum: 100,
    text: 100,
    name: 100,
    baseFill: '#404040',
    artBorder: true,
    nameBorder: true,
    artFrame: true,
});
export type CardOpacity = ReturnType<typeof getDefaultCardOpacity>;
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
