export type PendulumSize = keyof typeof PendulumSizeMap;
export const PendulumSizeMap = {
    small: {
        key: 'small' as const,
        frameType: 'pendulum',
        labelKey: 'input.pendulum-size.small.label',
        pendulumBoxX: 55,
        pendulumBoxY: 738,
        pendulumBoxWidth: 705,
        pendulumBoxHeight: 95,
        pendulumBoxOffsetY: 50,
    },
    medium: {
        key: 'medium' as const,
        frameType: 'pendulum',
        labelKey: 'input.pendulum-size.medium.label',
        pendulumBoxX: 55,
        pendulumBoxY: 738,
        pendulumBoxWidth: 705,
        pendulumBoxHeight: 147,
        pendulumBoxOffsetY: 0,
    },
    large: {
        key: 'large' as const,
        frameType: 'text',
        labelKey: 'input.pendulum-size.large.label',
        pendulumBoxX: 55,
        pendulumBoxY: 738,
        pendulumBoxWidth: 705,
        pendulumBoxHeight: 180,
        pendulumBoxOffsetY: 0,
    },
};
export const PendulumSizeList = Object.values(PendulumSizeMap);

export const PendulumSizeMapException: Record<PendulumSize, Record<string, {
    exceptionPendulumBoxOffsetHeight?: number,
    exceptionFrameType?: string,
}>> = {
    small: {
        'speed-skill': {
            exceptionPendulumBoxOffsetHeight: -13,
        },
    },
    medium: {},
    large: {
        'speed-skill': {
            exceptionPendulumBoxOffsetHeight: 15,
        },
        zarc: {
            exceptionFrameType: 'pendulum-large',
        }
    },
};

export const DEFAULT_PENDULUM_SIZE: PendulumSize = 'medium';