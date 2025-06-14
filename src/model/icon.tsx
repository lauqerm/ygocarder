import { CloseCircleOutlined } from '@ant-design/icons';

export const NO_ATTRIBUTE = 'NONE';
export const AttributeList = [
    {
        name: NO_ATTRIBUTE,
        nameKey: 'input.attribute.none',
        color: '#000000',
        isCreative: false,
        isOption: false,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'DARK',
        nameKey: 'input.attribute.dark',
        label: 'Dark',
        color: '#b41dda',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'EARTH',
        nameKey: 'input.attribute.earth',
        label: 'Earth',
        color: '#8d8e8e',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'FIRE',
        nameKey: 'input.attribute.fire',
        label: 'Fire',
        color: '#e51b23',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'LIGHT',
        nameKey: 'input.attribute.light',
        label: 'Light',
        color: '#bfae32',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'WATER',
        nameKey: 'input.attribute.water',
        label: 'Water',
        color: '#008ecd',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'WIND',
        nameKey: 'input.attribute.wind',
        label: 'Wind',
        color: '#28ab35',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'DIVINE',
        nameKey: 'input.attribute.divine',
        label: 'Divine',
        color: '#ef6300',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'SPELL',
        nameKey: 'input.attribute.spell',
        label: 'Spell',
        color: '#1b8f83',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'TRAP',
        nameKey: 'input.attribute.trap',
        label: 'Trap',
        color: '#c32a8c',
        isCreative: false,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
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
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'MAGIC',
        nameKey: 'input.attribute.magic',
        label: 'Laugh',
        color: '#1b8f83',
        isCreative: true,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'BOSS-1',
        nameKey: 'input.attribute.boss-1',
        label: 'Boss 1',
        color: '#9b325d',
        isCreative: true,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'BOSS-2',
        nameKey: 'input.attribute.boss-2',
        label: 'Boss 2',
        color: '#942a56',
        isCreative: true,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'BOSS-3',
        nameKey: 'input.attribute.boss-3',
        label: 'Boss 3',
        color: '#86214b',
        isCreative: true,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
    {
        name: 'BOSS-START',
        nameKey: 'input.attribute.boss-start',
        label: 'Boss Start',
        color: '#a13864',
        isCreative: true,
        isOption: true,
        supportFormat: ['tcg', 'ocg'],
    },
];

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

export const IconTypeMap: Record<string, {
    value: string,
    labelKey: string,
    fullLabelKey: string,
    icon: React.ReactNode,
    isOption: boolean,
}> = {
    'auto': {
        value: 'auto',
        labelKey: 'input.icon-type.auto.label',
        fullLabelKey: 'input.icon-type.auto.full.label',
        icon: null,
        isOption: false,
    },
    'st': {
        value: 'st',
        labelKey: 'input.icon-type.icon.label',
        fullLabelKey: 'input.icon-type.icon.full.label',
        icon: <img
            className="icon-image"
            alt="s/t-icon"
            src={`${process.env.PUBLIC_URL}/asset/image/subfamily/subfamily-continuous.png`}
        />,
        isOption: true,
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
    },
};
export const IconTypeList = Object.values(IconTypeMap);