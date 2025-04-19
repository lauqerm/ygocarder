export type PendulumSize = keyof typeof PendulumSizeMap;
export const PendulumSizeMap = {
    small: {
        key: 'small' as const,
        labelKey: 'input.pendulum-size.small.label',
    },
    medium: {
        key: 'medium' as const,
        labelKey: 'input.pendulum-size.medium.label',
    },
    large: {
        key: 'large' as const,
        labelKey: 'input.pendulum-size.large.label',
    },
};
export const PendulumSizeList = Object.values(PendulumSizeMap);

export const DEFAULT_PENDULUM_SIZE: PendulumSize = 'medium';