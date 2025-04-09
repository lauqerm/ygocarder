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
    embossPitch: 90,
    embossYaw: 90,
    embossThickness: 0,
    hasEmboss: false,
    preset: 'commonB' as PresetNameStyle,
    pattern: 'none',
});

/** Is it worth it? Store as array significantly reduces data size, but also make the code harder to read. Maybe we should only apply it to simple fields. */
export type TextStyle = [
    custom: boolean,
    fillStyle: string,
    hasShadow: boolean,
    shadow: string,
];
export const getDefaultTextStyle = (): TextStyle => [
    false,
    '#000000',
    false,
    '#000000',
];

const createPresetNameStyle = (presetValue: Partial<NameStyle>): Partial<NameStyle> => ({
    hasGradient: false,
    hasOutline: false,
    hasShadow: false,
    pattern: 'none',
    ...presetValue
});
export type PresetNameStyle = 'commonB' | 'commonW'
| 'skillDefault' | 'skillArial'
| 'rare' | 'secretGradient' | 'secret' | 'platinum2' | 'ultra' | 'ultra2' | 'platinum' | 'gold'
| 'animeRed' | 'animeSilver' | 'animeGold'
| 'promo'
| 'embossGold' | 'embossPlatinum';
export const PresetNameStyleMap: Record<PresetNameStyle, {
    key: PresetNameStyle,
    label: string,
    image: string,
    value: Partial<NameStyle>,
}> = {
    commonB: {
        key: 'commonB',
        label: 'Common (Black)',
        image: 'asset/image/other/name-common-b.png',
        value: createPresetNameStyle({
            preset: 'commonB',
            fillStyle: '#000000',
        }),
    },
    commonW: {
        key: 'commonW',
        label: 'Common (White)',
        image: 'asset/image/other/name-common-w.png',
        value: createPresetNameStyle({
            preset: 'commonW',
            fillStyle: '#ffffff',
        }),
    },
    skillDefault: {
        key: 'skillDefault',
        label: 'Skill (Default)',
        image: 'asset/image/other/name-skill-default.png',
        value: createPresetNameStyle({
            preset: 'skillDefault',
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
            preset: 'skillArial',
            font: 'Arial',
            fillStyle: '#ffffff',
            lineWidth: 6,
            lineColor: '#000',
            lineOffsetX: 1,
            hasOutline: true,
        }),
    },
    rare: {
        key: 'rare',
        label: 'Rare',
        image: 'asset/image/other/name-rare.png',
        value: createPresetNameStyle({
            preset: 'rare',
            fillStyle: '#cfc6de',
        }),
    },
    secretGradient: {
        key: 'secretGradient',
        label: 'Secret (Gradient)',
        image: 'asset/image/other/name-secret-gradient.png',
        value: createPresetNameStyle({
            preset: 'secretGradient',
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
            preset: 'secret',
            fillStyle: '#8a8381',
        }),
    },
    platinum2: {
        key: 'platinum2',
        label: 'Platinum',
        image: 'asset/image/other/name-platinum.png',
        value: createPresetNameStyle({
            preset: 'platinum2',
            fillStyle: '#a49f9e',
        }),
    },
    ultra: {
        key: 'ultra',
        label: 'Ultra',
        image: 'asset/image/other/name-ultra.png',
        value: createPresetNameStyle({
            preset: 'ultra',
            fillStyle: '#dbb473',
        }),
    },
    ultra2: {
        key: 'ultra2',
        label: 'Ultra (Type 2)',
        image: 'asset/image/other/name-ultra-2.png',
        value: createPresetNameStyle({
            preset: 'ultra2',
            fillStyle: '#fee002',
        }),
    },
    platinum: {
        key: 'platinum',
        label: 'Foil Platinum',
        image: 'asset/image/other/name-foil-platinum.png',
        value: createPresetNameStyle({
            preset: 'platinum',
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
            preset: 'gold',
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
            preset: 'animeRed',
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
            preset: 'animeSilver',
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
            preset: 'animeGold',
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
            preset: 'promo',
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
    embossGold: {
        key: 'embossGold',
        label: 'Embossed Gold',
        image: 'asset/image/other/name-emboss-gold.png',
        value: createPresetNameStyle({
            preset: 'embossGold',
            fillStyle: '#d09b0e',
            hasEmboss: true,
            embossPitch: 90,
            embossYaw: 90,
            hasShadow: true,
            shadowBlur: 2,
            shadowColor: '#333333',
            shadowOffsetX: -1,
            shadowOffsetY: 1,
        }),
    },
    embossPlatinum: {
        key: 'embossPlatinum',
        label: 'Embossed Platinum',
        image: 'asset/image/other/name-emboss-platinum.png',
        value: createPresetNameStyle({
            preset: 'embossPlatinum',
            fillStyle: '#c0c0c0',
            hasEmboss: true,
            embossPitch: 90,
            embossYaw: 90,
            hasShadow: true,
            shadowBlur: 2,
            shadowColor: '#4d4d4d',
            shadowOffsetX: -1,
            shadowOffsetY: 1,
        }),
    },
};
export const PresetNameStyleList = Object.values(PresetNameStyleMap);

export const PatternMap: Record<string, {
    key: string,
    patternImage: string,
    blendMode: GlobalCompositeOperation,
    overrideFill?: boolean,
    isOption: boolean,
}> = {
    none: {
        key: 'none',
        patternImage: '',
        blendMode: 'source-atop',
        isOption: false,
    },
    type1: {
        key: 'type1',
        patternImage: 'finish-name-type1',
        blendMode: 'source-atop',
        isOption: true,
    },
    type2: {
        key: 'type2',
        patternImage: 'finish-name-type2',
        blendMode: 'source-atop',
        isOption: true,
    },
    type3: {
        key: 'type3',
        patternImage: 'finish-name-type3',
        blendMode: 'source-atop',
        isOption: true,
    },
    type4: {
        key: 'type4',
        patternImage: 'finish-name-type4',
        blendMode: 'source-atop',
        isOption: true,
    },
    type5: {
        key: 'type5',
        patternImage: 'finish-name-type5',
        blendMode: 'multiply',
        overrideFill: true,
        isOption: true,
    },
    type6: {
        key: 'type6',
        patternImage: 'finish-name-type6',
        blendMode: 'source-atop',
        isOption: true,
    },
    type7: {
        key: 'type7',
        patternImage: 'finish-name-type7',
        blendMode: 'lighter',
        overrideFill: true,
        isOption: true,
    },
    type8: {
        key: 'type8',
        patternImage: 'finish-name-type8',
        blendMode: 'source-atop',
        isOption: true,
    },
    type9: {
        key: 'type9',
        patternImage: 'finish-name-type9',
        blendMode: 'source-atop',
        isOption: true,
    },
};
export const PatternList = Object.values(PatternMap);