export type NameStyleType = 'auto' | 'custom' | 'predefined';
export type NameStyle = ReturnType<typeof getDefaultNameStyle>;
export const getDefaultNameStyle = () => ({
    font: 'Default',
    fillStyle: '#000000',
    headTextFillStyle: '#000000',
    shadowColor: '#000000',
    shadowOffsetY: 0,
    shadowOffsetX: 0,
    shadowBlur: 0,
    hasShadow: false,
    lineColor: '#000000',
    lineWidth: 0,
    lineOffsetY: 0,
    lineOffsetX: 0,
    hasOutline: false,
    gradientAngle: 0,
    gradientColor: '0.000|#eef10b,0.5|#d78025,1.000|#7e20cf',
    hasGradient: false,
    preset: 'commonB',
    pattern: 'none',
});

const createPresetNameStyle = (presetValue: Partial<NameStyle>): Partial<NameStyle> => ({
    font: 'Default',
    hasGradient: false,
    hasOutline: false,
    hasShadow: false,
    pattern: 'none',
    ...presetValue
});
export const PresetNameStyleMap = {
    commonB: {
        key: 'commonB',
        label: 'Common (Black)',
        image: 'asset/image/other/name-common-b.png',
        value: createPresetNameStyle({
            fillStyle: '#000000',
        }),
    },
    commonW: {
        key: 'commonW',
        label: 'Common (White)',
        image: 'asset/image/other/name-common-w.png',
        value: createPresetNameStyle({
            fillStyle: '#ffffff',
        }),
    },
    skillDefault: {
        key: 'skillDefault',
        label: 'Skill (Default)',
        image: 'asset/image/other/name-skill-default.png',
        value: createPresetNameStyle({
            font: 'Default',
            fillStyle: '#ffffff',
            lineWidth: 6,
            lineColor: '#000',
            hasOutline: true,
        }),
    },
    skillArial: {
        key: 'skillArial',
        label: 'Skill (Arial)',
        image: 'asset/image/other/name-skill-arial.png',
        value: createPresetNameStyle({
            font: 'Arial',
            fillStyle: '#ffffff',
            lineWidth: 6,
            lineColor: '#000',
            hasOutline: true,
        }),
    },
    rare: {
        key: 'rare',
        label: 'Rare',
        image: 'asset/image/other/name-rare.png',
        value: createPresetNameStyle({
            fillStyle: '#cfc6de',
        }),
    },
    secretGradient: {
        key: 'secretGradient',
        label: 'Secret (Gradient)',
        image: 'asset/image/other/name-secret-gradient.png',
        value: createPresetNameStyle({
            gradientAngle: 180,
            gradientColor: '0.000|#7a71a6,1.000|#a8c1e5',
            hasGradient: true,
        }),
    },
    secret: {
        key: 'secret',
        label: 'Secret',
        image: 'asset/image/other/name-secret.png',
        value: createPresetNameStyle({
            fillStyle: '#8a8381',
        }),
    },
    platinum2: {
        key: 'platinum2',
        label: 'Platinum',
        image: 'asset/image/other/name-platinum.png',
        value: createPresetNameStyle({
            fillStyle: '#a49f9e',
        }),
    },
    ultra: {
        key: 'ultra',
        label: 'Ultra',
        image: 'asset/image/other/name-ultra.png',
        value: createPresetNameStyle({
            fillStyle: '#dbb473',
        }),
    },
    ultra2: {
        key: 'ultra2',
        label: 'Ultra (Type 2)',
        image: 'asset/image/other/name-ultra-2.png',
        value: createPresetNameStyle({
            fillStyle: '#fee002',
        }),
    },
    platinum: {
        key: 'platinum',
        label: 'Foil Platinum',
        image: 'asset/image/other/name-foil-platinum.png',
        value: createPresetNameStyle({
            fillStyle: '#CCCCCC',
            shadowColor: '#FFFFFF',
            shadowOffsetY: 1,
            shadowOffsetX: 0,
            shadowBlur: 1,
            hasShadow: true,
        }),
    },
    gold: {
        key: 'gold',
        label: 'Foil Gold',
        image: 'asset/image/other/name-foil-gold.png',
        value: createPresetNameStyle({
            fillStyle: '#b88c43',
            shadowColor: '#FCC400',
            shadowOffsetY: 1,
            shadowOffsetX: 0,
            shadowBlur: 1,
            hasShadow: true,
        }),
    },
    animeRed: {
        key: 'animeRed',
        label: 'Anime (Type Red)',
        image: 'asset/image/other/name-anime-red.png',
        value: createPresetNameStyle({
            gradientAngle: 180,
            gradientColor: '0.000|#d81961,0.220|#b81654,0.270|#9e1348,0.330|#95093e,0.380|#95093e,0.450|#ba3264,0.530|#ff5e99,0.620|#ffa0c3,0.690|#ffffff,0.770|#ff5e99,0.870|#d81961,1.000|#b81654',
            hasGradient: true,
            hasOutline: true,
            hasShadow: true,
            lineColor: '#333333',
            lineOffsetX: 1,
            lineOffsetY: 0,
            lineWidth: 3,
            shadowBlur: 2,
            shadowColor: '#383838',
            shadowOffsetX: 2,
            shadowOffsetY: 3,
        }),
    },
    animeSilver: {
        key: 'animeSilver',
        label: 'Anime (Type Silver)',
        image: 'asset/image/other/name-anime-silver.png',
        value: createPresetNameStyle({
            shadowColor: '#383838',
            shadowOffsetY: 3,
            shadowOffsetX: 2,
            shadowBlur: 2,
            hasShadow: true,
            lineColor: '#333333',
            lineWidth: 3,
            lineOffsetX: 1,
            lineOffsetY: 0,
            hasOutline: true,
            gradientAngle: 180,
            gradientColor: '0.000|#cecbb8,0.220|#b0ad9b,0.270|#94917e,0.330|#797768,0.380|#797768,0.450|#d9d9d9,0.610|#ffffff,0.700|#ffffff,0.870|#d6d7c7,1.000|#c9cbb6',
            hasGradient: true,
        }),
    },
    animeGold: {
        key: 'animeGold',
        label: 'Anime (Type Gold)',
        image: 'asset/image/other/name-anime-gold.png',
        value: createPresetNameStyle({
            shadowColor: '#383838',
            shadowOffsetY: 3,
            shadowOffsetX: 2,
            shadowBlur: 2,
            hasShadow: true,
            lineColor: '#333333',
            lineWidth: 3,
            lineOffsetX: 1,
            lineOffsetY: 0,
            hasOutline: true,
            gradientAngle: 180,
            gradientColor: '0.000|#eee317,0.220|#dbbe15,0.270|#d0920c,0.330|#b57f0b,0.380|#d0920c,0.450|#ffff6b,0.610|#ffffff,0.700|#ffffff,0.870|#e5dd2d,1.000|#e3da23',
            hasGradient: true,
        }),
    },
    promo: {
        key: 'promo',
        label: 'Promo',
        image: 'asset/image/other/name-promo.png',
        value: createPresetNameStyle({
            fillStyle: '#c7080b',
            shadowColor: '#333333',
            shadowOffsetY: 0,
            shadowOffsetX: 0,
            shadowBlur: 1,
            hasShadow: true,
            lineColor: '#8a1801',
            lineWidth: 3,
            lineOffsetX: 0,
            hasOutline: true,
            lineOffsetY: 0
        }),
    },
};
export const PresetNameStyleList = Object.values(PresetNameStyleMap);

export const PatternMap: Record<string, { key: string, patternImage: string, blendMode: GlobalCompositeOperation, overrideFill?: boolean }> = {
    none: {
        key: 'none',
        patternImage: '',
        blendMode: 'source-atop',
    },
    type1: {
        key: 'type1',
        patternImage: 'name-finish-type1',
        blendMode: 'source-atop',
    },
    type2: {
        key: 'type2',
        patternImage: 'name-finish-type2',
        blendMode: 'source-atop',
    },
    type3: {
        key: 'type3',
        patternImage: 'name-finish-type3',
        blendMode: 'source-atop',
    },
    type4: {
        key: 'type4',
        patternImage: 'name-finish-type4',
        blendMode: 'source-atop',
    },
    type5: {
        key: 'type5',
        patternImage: 'name-finish-type5',
        blendMode: 'multiply',
        overrideFill: true,
    },
    type6: {
        key: 'type6',
        patternImage: 'name-finish-type6',
        blendMode: 'source-atop',
    },
    type7: {
        key: 'type7',
        patternImage: 'name-finish-type7',
        blendMode: 'lighter',
        overrideFill: true,
    },
    type8: {
        key: 'type8',
        patternImage: 'name-finish-type8',
        blendMode: 'source-atop',
    },
    type9: {
        key: 'type9',
        patternImage: 'name-finish-type9',
        blendMode: 'source-atop',
    },
};
export const PatternList = Object.values(PatternMap);