import { PendulumSize } from './pendulum';

export const getBackgroundTypeList = (dictionary?: {
    fit: string,
    full: string,
    frame: string,
}) => [
        {
            value: 'fit' as const,
            label: dictionary?.fit,
        },
        {
            value: 'full' as const,
            label: dictionary?.full,
        },
        {
            value: 'frame' as const,
            label: dictionary?.frame,
        },
    ];
export type BackgroundType = ReturnType<typeof getBackgroundTypeList>[0]['value'];

/**
 * @summary About x y headache.
 * 
 * * Normal (True): Actual position / size on the card. If the coordinate / size is multiplied by a ratio, it is likely a normal value.
 * * Scaled: Position or size on a hypothesis (scaled) canvas. For example a 1000px wide canvas with scaleX of 0.5 can be treated as a 2000px wide canvas with scaleX of 1. So draw a point at x 50 in this hypothesis canvas will result an actual point at x = 25. If the coordinate / size is divided by a ratio, it is likely a scaled value.
 * * Inverse-scaled: Position or size on a hypothesis canvas. For example a letter that much has exactly 50px wide on every scale. So in a 1000px wide canvas with scaleX of 0.5 the letter actually has 100px width, and vice versa in a 1000px wide canvas with scaleX of 2.0, the letter will have 25px width only.
 */
export type MasterSeriesCanvas = {
    artworkCanvasRef: React.RefObject<HTMLCanvasElement>,
    backgroundCanvasRef: React.RefObject<HTMLCanvasElement>,
    exportCanvasRef: React.RefObject<HTMLCanvasElement>,
    frameCanvasRef: React.RefObject<HTMLCanvasElement>,
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
    previewCanvasRef: React.RefObject<HTMLCanvasElement>,
    lightboxRef: React.RefObject<{
        draw: (exportCanvas: HTMLCanvasElement) => void,
    }>,
};

/** Some coordination data must be rounded into nearest integer so it does not create those janky ghost pixels. */
export const CanvasConst = {
    width: 813,
    height: 1185,
    maximumScale: 2,
    topToPendulumStructure: 210,
    /** Pure structure is visible frame on the card, the frame of that structure has a bit padding for shadow around it. */
    topToPendulumStructureFrame: 185,
    topToArtFrame: 213,
    pendulumStructureHeight: 912,
    pendulumIconFrameWidth: 813,
    pendulumIconFrameHeight: 100,
    pendulumFrameWidth: 753,
    pendulumFrameHeight: 955,
    leftToPendulumStructure: 52,
    cardBorder: 28,
    topToEffectBox: 885,
    leftToEffectBox: 54,
    effectBoxWidth: 705,
    effectBoxHeight: 231,
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
export type CardArtCanvasCoordinate = typeof CardArtCanvasCoordinateMap[keyof typeof CardArtCanvasCoordinateMap];
export const CardArtCanvasCoordinateMap = {
    normal: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 614,
        artX: 100,
        artY: 219,
        ratio: 1,
        backgroundRatio: 1,
        /** Actual size of the art frame on the card, does not affected by creative art position such as boundless art. */
        artFrameWidth: 614,
        artFrameHeight: 614,
        artFrameY: 219,
        artRatio: 1,
        type: 'normal' as const,
    },
    pendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.325,
        backgroundRatio: 1.325,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.325,
        type: 'pendulum' as const,
    },
    /**
     * Pendulum distribution, but the pendulum box size is smaller. This results a taller visible image.
     * It is only used for series 9 Pendulum cards, which is deprecated.
     * */
    pendulumSmall: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.236,
        backgroundRatio: 1.236,
        artFrameWidth: 702,
        artFrameHeight: 568,
        artFrameY: 213,
        artRatio: 1.236,
        type: 'pendulumSmall' as const,
    },
    /** Normal distribution, with artwork extends under effect's box. */
    extendedCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        backgroundRatio: 0.775,
        artFrameWidth: 614,
        artFrameHeight: 614,
        artFrameY: 219,
        artRatio: 1,
        type: 'extendedCard' as const,
    },
    /** Pendulum distribution, with artwork extends under pendulum effect's box and effect's box. */
    extendedPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        backgroundRatio: 0.775,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.325,
        type: 'extendedPendulum' as const,
    },
    /**
     * Pendulum distribution, with artwork extends under pendulum effect's box and effect's box, but the pendulum box size is smaller.
     * Even though the image size does not change, the image frame does become larger.
     * It is only used for series 9 Pendulum cards, which is deprecated.
     *  */
    extendedPendulumSmall: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 0.775,
        backgroundRatio: 0.775,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.236,
        type: 'extendedPendulumSmall' as const,
    },
    /** Pendulum distribution, with artwork extends under pendulum effect's box. It is actually the "default" mode of pendulum cards in practices. But most of the time the artwork only cut the visible image part because it is very hard to find the full image of a card unless an official source provide it. */
    truePendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.055,
        backgroundRatio: 1.055,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.325,
        type: 'truePendulum' as const,
    },
    /**
     * Pendulum distribution, with artwork extends under pendulum effect's box, but the pendulum box size is smaller.
     * This results a taller visible image, but shorter image behind the box.
     * It is only used for series 9 Pendulum cards, which is deprecated.
     * */
    truePendulumSmall: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1.055,
        backgroundRatio: 1.055,
        artFrameWidth: 702,
        artFrameHeight: 568,
        artFrameY: 213,
        artRatio: 1.236,
        type: 'truePendulumSmall' as const,
    },
    /**
     * Pendulum distribution, with artwork extends under pendulum effect's box, but the pendulum box size is larger.
     * This results the same visible image as `truePendulum` distribution type, but taller image behind the box.
     * It is only used for series 9 Pendulum cards, which is deprecated.
     * */
    truePendulumLarge: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 702,
        artX: 56,
        artY: 213,
        ratio: 1,
        backgroundRatio: 1,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.325,
        type: 'truePendulumLarge' as const,
    },
    /** Normal distribution with artwork span the entire card over the frame, use boundless mode to show frame above it. */
    fullCard: {
        artFinishX: 100,
        artFinishY: 219,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        backgroundRatio: 0.670,
        artFrameWidth: 614,
        artFrameHeight: 614,
        artFrameY: 219,
        artRatio: 1,
        type: 'fullCard' as const,
    },
    /** Pendulum distribution with artwork span the entire card over the frame, use boundless mode to show frame above it. Pendulum size is irrelevant here */
    fullPendulum: {
        artFinishX: 56,
        artFinishY: 213,
        artWidth: 758,
        artX: 28,
        artY: 28,
        ratio: 0.670,
        backgroundRatio: 0.670,
        artFrameWidth: 702,
        artFrameHeight: 530,
        artFrameY: 213,
        artRatio: 1.325,
        type: 'fullPendulum' as const,
    },
};
export const getArtCanvasCoordinate = (
    isPendulum: boolean,
    opacity?: Partial<CardOpacity>,
    backgroundType?: BackgroundType,
    pendulumSize?: PendulumSize,
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
    let distributionMode: keyof typeof CardArtCanvasCoordinateMap = 'normal';

    /** The only different between boundless mode and transparent body is card art in boundless mode will be put higher than art frame */
    if (normalizedBoundless || body < 100) {
        distributionMode = isPendulum
            ? 'fullPendulum'
            : 'fullCard';
    } else {
        if (isPendulum) {
            if (text < 100) {
                distributionMode = pendulumSize === 'small'
                    ? 'extendedPendulumSmall'
                    : 'extendedPendulum';
            } else {
                if (pendulum < 100) {
                    if (pendulumSize === 'large') distributionMode = 'truePendulumLarge';
                    if (pendulumSize === 'small') distributionMode = 'truePendulumSmall';
                    if (pendulumSize === 'medium') distributionMode = 'truePendulum';
                } else {
                    distributionMode = pendulumSize === 'small'
                        ? 'pendulumSmall'
                        : 'pendulum';
                }
            }
        } else {
            distributionMode = text < 100
                ? 'extendedCard'
                : 'normal';
        }
    }

    const result = CardArtCanvasCoordinateMap[distributionMode];
    return {
        ...result,
        backgroundRatio: backgroundType === 'frame'
            ? 0.686
            : result.backgroundRatio,
    };
};
