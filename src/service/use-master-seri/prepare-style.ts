import { TextStyle } from 'src/model';

export type CanvasTextStyle = {
    x?: number,
    y?: number,
    blur?: number,
    color?: string,
    shadowColor?: string,
};

export const prepareStyle = ({
    // lightFooter,
    lightHeader,
    requireShadow,
    effectTextStyle,
    pendulumTextStyle,
    otherTextStyle,
    statTextStyle,
    typeTextStyle,
}: {
    requireShadow: boolean,
    lightHeader: boolean,
    lightFooter: boolean,
    effectTextStyle: TextStyle,
    pendulumTextStyle: TextStyle,
    otherTextStyle: TextStyle,
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

    const [customEffectText, effectTextFillStyle, effectHasShadow, effectTextShadow] = effectTextStyle;
    const resolvedEffectTextStyle: CanvasTextStyle = customEffectText
        ? {
            ...(effectHasShadow ? { y: 0, blur: 4, shadowColor: effectTextShadow } : {}),
            color: effectTextFillStyle,
        }
        : {};

    const [customPendulumEffectText, pendulumEffectTextFillStyle, pendulumEffectHasShadow, pendulumEffectTextShadow] = pendulumTextStyle;
    const resolvedPendulumEffectTextStyle: CanvasTextStyle = customPendulumEffectText
        ? {
            ...(pendulumEffectHasShadow ? { y: 0, blur: 4, shadowColor: pendulumEffectTextShadow } : {}),
            color: pendulumEffectTextFillStyle,
        }
        : {};

    const [customTypeText, typeTextFillStyle, typeHasShadow, typeTextShadow] = typeTextStyle;
    const resolvedTypeTextStyle: CanvasTextStyle = customTypeText
        ? {
            ...(typeHasShadow ? { y: 1, blur: 1, shadowColor: typeTextShadow } : {}),
            color: typeTextFillStyle,
        }
        : {};

    const [customStatText, statTextFillStyle, statHasShadow, statTextShadow] = statTextStyle;
    const resolvedStatTextStyle: CanvasTextStyle = customStatText
        ? {
            ...(statHasShadow ? { y: 1, blur: 1, shadowColor: statTextShadow } : {}),
            color: statTextFillStyle,
        }
        : {};

    const [customOtherEffectText, otherEffectTextFillStyle, otherEffectHasShadow, otherEffectTextShadow] = otherTextStyle;
    const resolvedOtherEffectTextStyle: CanvasTextStyle = customOtherEffectText
        ? {
            ...(otherEffectHasShadow ? { y: 0, blur: 0, shadowColor: otherEffectTextShadow } : {}),
            color: otherEffectTextFillStyle,
        }
        : {};

    return {
        levelStyle,
        resolvedEffectTextStyle,
        resolvedOtherEffectTextStyle,
        resolvedPendulumEffectTextStyle,
        resolvedStatTextStyle,
        resolvedTypeTextStyle,
    };
};