import { frameList, IconList, AttributeList, StickerList, FoilList, CondenseTolerantLabelMap, NameFontDataMap } from '../../model';
import { ArtFinishMap, FinishMap } from 'src/model/finish';
import { FrameInfoBlock } from 'src/component';
import { CloseCircleOutlined } from '@ant-design/icons';

export const FormatButtonList = [
    {
        label: 'OCG',
        value: 'ocg',
        props: {
            className: 'ocg-button',
            style: { fontWeight: 'bold' } as React.CSSProperties
        },
    },
    {
        label: 'TCG',
        value: 'tcg',
        props: {
            className: 'tcg-button',
            style: { fontWeight: 'bold' } as React.CSSProperties
        },
    },
];

export const FoilButtonList = FoilList.map(({ color, name, label }) => ({
    label,
    value: name,
    props: {
        style: {
            color,
            fontWeight: 'bold',
        } as React.CSSProperties,
    }
}));

export const FinishButtonList = Object.values(FinishMap).map(({ value, label }) => ({
    label,
    value,
}));

export const NameFontOptionList = Object.values(NameFontDataMap).map(({ value, label }) => ({
    label,
    value,
}));

export const ArtFinishButtonList = [
    { value: 'normal', label: <CloseCircleOutlined /> },
    ...Object.values(ArtFinishMap).map(({ value, label }) => ({
        label,
        value,
    })),
];

export const getFrameButtonList = () => frameList.map(({ name, labelBackgroundColor, labelBackgroundColorList, edition }) => ({
    label: <FrameInfoBlock
        labelBackgroundColor={labelBackgroundColor}
        labelBackgroundColorList={labelBackgroundColorList}
        name={name}
    />,
    value: name,
    edition,
}));

export const getAttributeList = (format: string) => AttributeList.map(({ name }) => ({
    label: name === 'NONE'
        ? <CloseCircleOutlined />
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${name.toLowerCase()}.png`} />,
    value: name,
}));

export const STIconButtonList = IconList.map(({ label, value }) => ({
    label,
    value,
}));

export const StarButtonList = [...Array(14)].map((e, index) => ({ label: index, value: index }));
export const IconTypeMap: Record<string, { value: string, label: React.ReactNode, fullLabel: React.ReactNode }> = {
    'auto': {
        value: 'auto',
        label: 'Auto',
        fullLabel: 'Auto',
    },
    'st': {
        value: 'st',
        label: 'Icon',
        fullLabel: 'Spell/Trap Icon',
    },
    'level': {
        value: 'level',
        label: 'Level',
        fullLabel: 'Level',
    },
    'negative-level': {
        value: 'negative-level',
        label: 'Neg. Level',
        fullLabel: 'Negative Level',
    },
    'rank': {
        value: 'rank',
        label: 'Rank',
        fullLabel: 'Rank',
    },
};
export const IconTypeList = Object.values(IconTypeMap);

export const StickerButtonList = StickerList.map(name => ({
    label: name === 'no-sticker'
        ? <CloseCircleOutlined />
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${name.toLowerCase()}.png`} />,
    value: name,
}));

export const CondenseThresholdButtonList = Object
    .entries(CondenseTolerantLabelMap)
    .map(([key, { label, order }]) => {
        return {
            label,
            value: key,
            order
        };
    })
    .sort((l, r) => l.order - r.order);