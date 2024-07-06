import { frameList, iconList, attributeList, stickerList, foilList, CondenseTolerantLabelMap, NameFontDataMap } from '../../model';
import { ArtFinishMap, FinishMap } from 'src/model/finish';
import { CloseCircleOutlined } from '@ant-design/icons';
import './input-panel.scss';

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

export const FoilButtonList = foilList.map(({ color, name, label }) => ({
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

export const getFrameButtonList = () => frameList.map(({ labelColor, name, labelBackgroundColor, labelBackgroundImage, edition }) => ({
    label: name.replaceAll('-', ' '),
    value: name,
    edition,
    props: {
        style: {
            background: labelBackgroundColor,
            backgroundImage: labelBackgroundImage,
            color: labelColor,
        } as React.CSSProperties,
    }
}));

export const getAttributeList = (format: string) => attributeList.map(({ name }) => ({
    label: name === 'NONE'
        ? <CloseCircleOutlined />
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${name.toLowerCase()}.png`} />,
    value: name,
}));

export const STIconButtonList = iconList.map(entry => ({
    label: entry,
    value: entry,
}));

export const StarButtonList = [...Array(14)].map((e, index) => ({ label: index, value: index }));

export const StickerButtonList = stickerList.map(name => ({
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