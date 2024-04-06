import { CondenseTolerantLabelMap } from 'src/const';
import { frameList, iconList, attributeList, stickerList, foilList } from '../../model';
import { ArtFinishMap, FinishMap } from 'src/model/finish';
import { CloseCircleOutlined } from '@ant-design/icons';
import './input-panel.scss';

export const foilButtonList = foilList.map(({ color, name }) => ({
    label: name.toLocaleUpperCase(),
    value: name,
    props: {
        style: {
            color,
            fontWeight: 'bold',
        } as React.CSSProperties,
    }
}));

export const finishButtonList = Object.values(FinishMap).map(({ value, label }) => ({
    label,
    value,
}));

export const artFinishButtonList = [
    { value: 'normal', label: <CloseCircleOutlined /> },
    ...Object.values(ArtFinishMap).map(({ value, label }) => ({
        label,
        value,
    })),
];

export const frameButtonList = frameList.map(({ labelColor, name, labelBackgroundColor, labelBackgroundImage }) => ({
    label: name.replaceAll('-', ' '),
    value: name,
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

export const stIconButtonList = iconList.map(entry => ({
    label: entry,
    value: entry,
}));

export const starButtonList = [...Array(14)].map((e, index) => ({ label: index, value: index }));

export const stickerButtonList = stickerList.map(name => ({
    label: name === 'no-sticker'
        ? <CloseCircleOutlined />
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${name.toLowerCase()}.png`} />,
    value: name,
}));

export const condenseButtonList = Object
    .entries(CondenseTolerantLabelMap)
    .map(([key, { label, order }]) => {
        return {
            label,
            value: key,
            order
        };
    })
    .sort((l, r) => l.order - r.order);