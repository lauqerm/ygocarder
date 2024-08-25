export const BackgroundTypeList = [
    {
        value: 'fit' as const,
        label: 'Fit to art border',
    },
    {
        value: 'full' as const,
        label: 'Span all the card',
    },
];
export type BackgroundType = typeof BackgroundTypeList[0]['value'];

export type MasterDuelCanvas = {
    artworkCanvasRef: React.RefObject<HTMLCanvasElement>,
    backgroundCanvasRef: React.RefObject<HTMLCanvasElement>,
    drawCanvasRef: React.RefObject<HTMLCanvasElement>,
    // artCanvas: React.RefObject<HTMLCanvasElement>,
    specialFrameCanvasRef: React.RefObject<HTMLCanvasElement>,
    cardIconCanvasRef: React.RefObject<HTMLCanvasElement>,
    pendulumScaleCanvasRef: React.RefObject<HTMLCanvasElement>,
    pendulumEffectCanvasRef: React.RefObject<HTMLCanvasElement>,
    typeCanvasRef: React.RefObject<HTMLCanvasElement>,
    effectCanvasRef: React.RefObject<HTMLCanvasElement>,
    nameCanvasRef: React.RefObject<HTMLCanvasElement>,
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

export const DEFAULT_BASE_FILL_COLOR = '#404040';
export const getDefaultCardOpacity = () => ({
    body: 100,
    pendulum: 100,
    text: 100,
    name: 100,
    baseFill: DEFAULT_BASE_FILL_COLOR,
    artBorder: true,
    nameBorder: true,
    boundless: false,
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
        type: 'normal' as const,
    },
    pendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.325,
        type: 'pendulum' as const,
    },
    extendedCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        type: 'extendedCard' as const,
    },
    extendedPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        type: 'extendedPendulum' as const,
    },
    truePendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.057,
        type: 'truePendulum' as const,
    },
    fullCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        type: 'fullCard' as const,
    },
    fullPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        type: 'fullPendulum' as const,
    },
};
export const getArtCanvasCoordinate = (
    isPendulum: boolean,
    opacity?: Partial<CardOpacity>,
    backgroundType?: BackgroundType,
) => {
    const {
        boundless,
        body,
        pendulum,
        text,
    } = { ...getDefaultCardOpacity(), ...opacity };
    const normalizedBoundless = backgroundType === 'fit'
        ? false
        : boundless;

    if (backgroundType === 'full') return CardArtCanvasCoordinateMap.fullCard;
    const artType = normalizedBoundless || body < 100
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
