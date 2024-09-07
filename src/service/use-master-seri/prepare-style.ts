import { TextStyle } from 'src/model';

export type CanvasTextStyle = {
    x?: number,
    y?: number,
    blur?: number,
    color?: string,
    shadowColor?: string,
};

export const ShadowMap: Record<string, string> = {
    light: '#efefef',
    dark: '#000000',
};
export const prepareStyle = ({
    lightFooter,
    lightHeader,
    requireShadow,
    effectTextStyle,
    pendulumTextStyle,
    statTextStyle,
    typeTextStyle,
}: {
    requireShadow: boolean,
    lightHeader: boolean,
    lightFooter: boolean,
    effectTextStyle: TextStyle,
    pendulumTextStyle: TextStyle,
    statTextStyle: TextStyle,
    typeTextStyle: TextStyle,
}) => {
    const levelColor = { color: lightHeader ? '#ffffff' : '#000000' };
    const levelStyle = requireShadow
        ? {
            blur: 2,
            y: 1,
            shadowColor: lightHeader ? '#000000' : '#ffffff',
            ...levelColor,
        }
        : levelColor;

    const [customEffectText, effectTextFillStyle, effectTextShadow] = effectTextStyle;
    const resolvedEffectTextStyle: CanvasTextStyle = customEffectText
        ? {
            ...(effectTextShadow !== 'none' ? { y: 1, blur: 1, shadowColor: ShadowMap[effectTextShadow] } : {}),
            color: effectTextFillStyle,
        }
        : {};

        const [customPendulumEffectText, pendulumEffectTextFillStyle, pendulumEffectTextShadow] = pendulumTextStyle;
        const resolvedPendulumEffectTextStyle: CanvasTextStyle = customPendulumEffectText
            ? {
                ...(pendulumEffectTextShadow !== 'none' ? { y: 1, blur: 1, shadowColor: ShadowMap[pendulumEffectTextShadow] } : {}),
                color: pendulumEffectTextFillStyle,
            }
            : {};

            const [customTypeText, typeTextFillStyle, typeTextShadow] = typeTextStyle;
            const resolvedTypeTextStyle: CanvasTextStyle = customTypeText
                ? {
                    ...(typeTextShadow !== 'none' ? { y: 1, blur: 1, shadowColor: ShadowMap[typeTextShadow] } : {}),
                    color: typeTextFillStyle,
                }
                : {};

                const [customStatText, statTextFillStyle, statTextShadow] = statTextStyle;
                const resolvedStatTextStyle: CanvasTextStyle = customStatText
                    ? {
                        ...(statTextShadow !== 'none' ? { y: 1, blur: 1, shadowColor: ShadowMap[statTextShadow] } : {}),
                        color: statTextFillStyle,
                    }
                    : {};

    return {
        levelStyle,
        resolvedEffectTextStyle,
        resolvedPendulumEffectTextStyle,
        resolvedTypeTextStyle,
        resolvedStatTextStyle,
    };
};