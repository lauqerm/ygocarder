import { CloseCircleOutlined } from '@ant-design/icons';

export const NO_ATTRIBUTE = 'NONE';
export const AttributeList = [
    {
        name: NO_ATTRIBUTE,
        color: '#000000',
    },
    {
        name: 'DARK',
        label: 'Dark',
        color: '#b41dda',
    },
    {
        name: 'EARTH',
        label: 'Earth',
        color: '#8d8e8e',
    },
    {
        name: 'FIRE',
        label: 'Fire',
        color: '#e51b23',
    },
    {
        name: 'LIGHT',
        label: 'Light',
        color: '#bfae32',
    },
    {
        name: 'WATER',
        label: 'Water',
        color: '#008ecd',
    },
    {
        name: 'WIND',
        label: 'Wind',
        color: '#28ab35',
    },
    {
        name: 'DIVINE',
        label: 'Divine',
        color: '#ef6300',
    },
    {
        name: 'SPELL',
        label: 'Spell',
        color: '#1b8f83',
    },
    {
        name: 'TRAP',
        label: 'TRAP',
        color: '#c32a8c',
    },
];

export const NO_ICON = 'NO ICON';
export const IconList = [
    { label: <CloseCircleOutlined />, value: NO_ICON },
    { label: 'Field', value: 'FIELD' },
    { label: 'Continuous', value: 'CONTINUOUS' },
    { label: 'Quick-Play', value: 'QUICK-PLAY' },
    { label: 'Ritual', value: 'RITUAL' },
    { label: 'Equip', value: 'EQUIP' },
    { label: 'Counter', value: 'COUNTER' },
];
export const IconValueList = IconList.map(entry => entry.value);

export const StickerList = [
    'no-sticker',
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