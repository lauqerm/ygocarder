import { CloseCircleOutlined } from '@ant-design/icons';
import { WithLanguage } from 'src/service';

export const NO_ATTRIBUTE = 'NONE';
export const AttributeList = [
    {
        name: NO_ATTRIBUTE,
        nameKey: 'input.attribute.none',
        color: '#000000',
        isCreative: false,
        isOption: false,
    },
    {
        name: 'DARK',
        nameKey: 'input.attribute.dark',
        label: 'Dark',
        color: '#b41dda',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'EARTH',
        nameKey: 'input.attribute.earth',
        label: 'Earth',
        color: '#8d8e8e',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'FIRE',
        nameKey: 'input.attribute.fire',
        label: 'Fire',
        color: '#e51b23',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'LIGHT',
        nameKey: 'input.attribute.light',
        label: 'Light',
        color: '#bfae32',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'WATER',
        nameKey: 'input.attribute.water',
        label: 'Water',
        color: '#008ecd',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'WIND',
        nameKey: 'input.attribute.wind',
        label: 'Wind',
        color: '#28ab35',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'DIVINE',
        nameKey: 'input.attribute.divine',
        label: 'Divine',
        color: '#ef6300',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'SPELL',
        nameKey: 'input.attribute.spell',
        label: 'Spell',
        color: '#1b8f83',
        isCreative: false,
        isOption: true,
    },
    {
        name: 'TRAP',
        nameKey: 'input.attribute.trap',
        label: 'Trap',
        color: '#c32a8c',
        isCreative: false,
        isOption: true,
    },
];
export const ExtraAttributeList = [
    {
        name: 'LAUGH',
        nameKey: 'input.attribute.laugh',
        label: 'Laugh',
        color: '#f78f27',
        isCreative: true,
        isOption: true,
    },
    {
        name: 'MAGIC',
        nameKey: 'input.attribute.magic',
        label: 'Laugh',
        color: '#1b8f83',
        isCreative: true,
        isOption: true,
    },
    {
        name: 'BOSS-1',
        nameKey: 'input.attribute.boss-1',
        label: 'Boss 1',
        color: '#9b325d',
        isCreative: true,
        isOption: true,
    },
    {
        name: 'BOSS-2',
        nameKey: 'input.attribute.boss-2',
        label: 'Boss 2',
        color: '#942a56',
        isCreative: true,
        isOption: true,
    },
    {
        name: 'BOSS-3',
        nameKey: 'input.attribute.boss-3',
        label: 'Boss 3',
        color: '#86214b',
        isCreative: true,
        isOption: true,
    },
    {
        name: 'BOSS-START',
        nameKey: 'input.attribute.boss-start',
        label: 'Boss Start',
        color: '#a13864',
        isCreative: true,
        isOption: true,
    },
];
export const AttributeSetMap: Record<string, { key: string, category: 'tcg' | 'ocg', fileKey: string }> = {
    'jp': { key: 'jp', category: 'ocg', fileKey: 'ocg' },
    'ch': { key: 'ch', category: 'ocg', fileKey: 'ch' },
    'en': { key: 'en', category: 'tcg', fileKey: 'tcg' },
    'fr': { key: 'fr', category: 'tcg', fileKey: 'fr' },
    'de': { key: 'de', category: 'tcg', fileKey: 'de' },
    'it': { key: 'it', category: 'tcg', fileKey: 'it' },
    'sp': { key: 'sp', category: 'tcg', fileKey: 'sp' },
};
export const DefaultFormatAttribute: Record<string, string> = {
    tcg: AttributeSetMap.en.key,
    ocg: AttributeSetMap.jp.key,
};

export const NO_ICON = 'NO ICON';
export const IconList = [
    {
        label: <CloseCircleOutlined />,
        value: NO_ICON,
        nameKey: 'input.icon.none',
        isOption: false,
    },
    {
        label: 'Field',
        value: 'FIELD',
        nameKey: 'input.icon.field',
        isOption: true,
    },
    {
        label: 'Continuous',
        value: 'CONTINUOUS',
        nameKey: 'input.icon.continuous',
        isOption: true,
    },
    {
        label: 'Quick-Play',
        value: 'QUICK-PLAY',
        nameKey: 'input.icon.quick-play',
        isOption: true,
    },
    {
        label: 'Ritual',
        value: 'RITUAL',
        nameKey: 'input.icon.ritual',
        isOption: true,
    },
    {
        label: 'Equip',
        value: 'EQUIP',
        nameKey: 'input.icon.equip',
        isOption: true,
    },
    {
        label: 'Counter',
        value: 'COUNTER',
        nameKey: 'input.icon.counter',
        isOption: true,
    },
];

export const NO_STICKER = 'no-sticker';
export const StickerList = [
    {
        value: NO_STICKER,
        isOption: false,
    },
    {
        value: 'gold',
        isOption: true,
    },
    {
        value: 'silver',
        isOption: true,
    },
    {
        value: 'beta',
        isOption: true,
    },
    {
        value: 'holo5',
        isOption: true,
    },
    {
        value: 'holo4',
        isOption: true,
    },
    {
        value: 'holo3',
        isOption: true,
    },
    {
        value: 'holo2',
        isOption: true,
    },
    {
        value: 'holo1',
        isOption: true,
    },
    {
        value: 'limited',
        isOption: true,
    },
    {
        value: 'unlimited',
        isOption: true,
    },
];

export type IconTypeInfo = {
    value: string,
    labelKey: string | ((language: WithLanguage) => React.ReactNode),
    fullLabelKey: string,
    icon: React.ReactNode,
    isOption: boolean,
    isMixable: boolean,
    showIcon: boolean,
}
export const IconTypeMap: Record<string, IconTypeInfo> = {
    'auto': {
        value: 'auto',
        labelKey: 'input.icon-type.auto.label',
        fullLabelKey: 'input.icon-type.auto.full.label',
        icon: null,
        isOption: false,
        isMixable: false,
        showIcon: false,
    },
    'custom': {
        value: 'custom',
        labelKey: 'input.icon-type.custom.label',
        fullLabelKey: 'input.icon-type.custom.full.label',
        icon: null,
        isOption: false,
        isMixable: false,
        showIcon: false,
    },
    'st': {
        value: 'st',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon-type.icon.full.label',
        icon: <img
            className="icon-image"
            alt="s/t-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-icon-list.png`}
        />,
        isOption: true,
        isMixable: false,
        showIcon: false,
    },
    'level': {
        value: 'level',
        labelKey: 'input.icon-type.level.label',
        fullLabelKey: 'input.icon-type.level.full.label',
        icon: <img
            className="icon-image"
            alt="level-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-level.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: false,
    },
    'negative-level': {
        value: 'negative-level',
        labelKey: 'input.icon-type.negative-level.label',
        fullLabelKey: 'input.icon-type.negative-level.full.label',
        icon: <img
            className="icon-image"
            alt="negative-level-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-negative-level.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: false,
    },
    'rank': {
        value: 'rank',
        labelKey: 'input.icon-type.rank.label',
        fullLabelKey: 'input.icon-type.rank.full.label',
        icon: <img
            className="icon-image"
            alt="rank-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-rank.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: false,
    },
    'level-rank': {
        value: 'level-rank',
        labelKey: 'input.icon-type.level-rank.label',
        fullLabelKey: 'input.icon-type.level-rank.full.label',
        icon: <img
            className="icon-image"
            alt="level-rank-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-level-rank.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: false,
    },
};
export const IconTypeList = Object.values(IconTypeMap);

export const IconTypeAttributeMap: Record<string, IconTypeInfo> = {
    'dark': {
        value: 'dark',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.dark',
        icon: <img
            className="icon-image"
            alt="dark-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-dark.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'earth': {
        value: 'earth',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.earth',
        icon: <img
            className="icon-image"
            alt="earth-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-earth.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'fire': {
        value: 'fire',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.fire',
        icon: <img
            className="icon-image"
            alt="fire-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-fire.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'light': {
        value: 'light',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.light',
        icon: <img
            className="icon-image"
            alt="light-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-light.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'water': {
        value: 'water',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.water',
        icon: <img
            className="icon-image"
            alt="water-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-water.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'wind': {
        value: 'wind',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.wind',
        icon: <img
            className="icon-image"
            alt="wind-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-wind.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'divine': {
        value: 'divine',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.divine',
        icon: <img
            className="icon-image"
            alt="divine-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-divine.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'spell': {
        value: 'spell',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.spell',
        icon: <img
            className="icon-image"
            alt="spell-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-spell.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'trap': {
        value: 'trap',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.attribute.trap',
        icon: <img
            className="icon-image"
            alt="trap-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-trap.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
};
export const IconTypeAttributeList = Object.values(IconTypeAttributeMap);

export const IconTypeStMap: Record<string, IconTypeInfo> = {
    'continuous-l': {
        value: 'continuous-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.continuous',
        icon: <img
            className="icon-image"
            alt="continuous-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-continuous-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'counter-l': {
        value: 'counter-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.counter',
        icon: <img
            className="icon-image"
            alt="counter-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-counter-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'equip-l': {
        value: 'equip-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.equip',
        icon: <img
            className="icon-image"
            alt="equip-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-equip-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'field-l': {
        value: 'field-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.field',
        icon: <img
            className="icon-image"
            alt="field-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-field-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'quick-play-l': {
        value: 'quick-play-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.quick-play',
        icon: <img
            className="icon-image"
            alt="quick-play-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-quick-play-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
    'ritual-l': {
        value: 'ritual-l',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon.ritual',
        icon: <img
            className="icon-image"
            alt="ritual-large-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-ritual-l.png`}
        />,
        isOption: true,
        isMixable: true,
        showIcon: true,
    },
};
export const IconTypeStList = Object.values(IconTypeStMap);

export const TotalIconTypeMap = {
    ...IconTypeMap,
    ...IconTypeAttributeMap,
    ...IconTypeStMap,
};
export const MAX_SUBFAMILY_LENGTH = 13;