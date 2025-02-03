import { CloseCircleOutlined } from '@ant-design/icons';

export const NO_ATTRIBUTE = 'NONE';
export const AttributeList = [
    {
        name: NO_ATTRIBUTE,
        nameKey: 'input.attribute.none',
        color: '#000000',
        isCreative: false,
    },
    {
        name: 'DARK',
        nameKey: 'input.attribute.dark',
        label: 'Dark',
        color: '#b41dda',
        isCreative: false,
    },
    {
        name: 'EARTH',
        nameKey: 'input.attribute.earth',
        label: 'Earth',
        color: '#8d8e8e',
        isCreative: false,
    },
    {
        name: 'FIRE',
        nameKey: 'input.attribute.fire',
        label: 'Fire',
        color: '#e51b23',
        isCreative: false,
    },
    {
        name: 'LIGHT',
        nameKey: 'input.attribute.light',
        label: 'Light',
        color: '#bfae32',
        isCreative: false,
    },
    {
        name: 'WATER',
        nameKey: 'input.attribute.water',
        label: 'Water',
        color: '#008ecd',
        isCreative: false,
    },
    {
        name: 'WIND',
        nameKey: 'input.attribute.wind',
        label: 'Wind',
        color: '#28ab35',
        isCreative: false,
    },
    {
        name: 'DIVINE',
        nameKey: 'input.attribute.divine',
        label: 'Divine',
        color: '#ef6300',
        isCreative: false,
    },
    {
        name: 'SPELL',
        nameKey: 'input.attribute.spell',
        label: 'Spell',
        color: '#1b8f83',
        isCreative: false,
    },
    {
        name: 'TRAP',
        nameKey: 'input.attribute.trap',
        label: 'Trap',
        color: '#c32a8c',
        isCreative: false,
    },
    {
        name: 'LAUGH',
        nameKey: 'input.attribute.laugh',
        label: 'Laugh',
        color: '#f78f27',
        isCreative: true,
    },
];

export const NO_ICON = 'NO ICON';
export const IconList = [
    {
        label: <CloseCircleOutlined />,
        value: NO_ICON,
        nameKey: 'input.icon.none',
    },
    {
        label: 'Field',
        value: 'FIELD',
        nameKey: 'input.icon.field',
    },
    {
        label: 'Continuous',
        value: 'CONTINUOUS',
        nameKey: 'input.icon.continuous',
    },
    {
        label: 'Quick-Play',
        value: 'QUICK-PLAY',
        nameKey: 'input.icon.quick-play',
    },
    {
        label: 'Ritual',
        value: 'RITUAL',
        nameKey: 'input.icon.ritual',
    },
    {
        label: 'Equip',
        value: 'EQUIP',
        nameKey: 'input.icon.equip',
    },
    {
        label: 'Counter',
        value: 'COUNTER',
        nameKey: 'input.icon.counter',
    },
];

export const NO_STICKER = 'no-sticker';
export const StickerList = [
    NO_STICKER,
    'gold',
    'silver',
    'beta',
    'holo5',
    'holo4',
    'holo3',
    'holo2',
    'holo1',
    'limited',
    'unlimited',
];