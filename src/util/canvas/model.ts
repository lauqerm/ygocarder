export const SHADER_FILTER_TYPE = {
    SOBEL: 'sobel' as const,
    SCHARR: 'scharr' as const,
};
export const getDefaultHeightToNormalMapOption = () => ({
    invertedRed: false,
    invertedGreen: false,
    invertedSource: false,
    blurSharp: 0,
    strength: 1,
    level: 8.5,
    type: SHADER_FILTER_TYPE.SOBEL,
});