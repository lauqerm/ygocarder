import { CondenseTolerantLabelMap } from 'src/const';
import { frameType, iconList, attributeList, stickerList, foilList } from '../../model';
import './input-panel.scss';

export const foilButton = foilList.map(({ color, name }) => ({
    label: name.toLocaleUpperCase(),
    value: name,
    props: {
        style: {
            color,
            fontWeight: 'bold',
        } as React.CSSProperties,
    }
}));
export const frameButton = frameType.map(({ labelColor, name, labelBackgroundColor, labelBackgroundImage }) => ({
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
        ? 'NONE'
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${format}-${name.toLowerCase()}.png`} />,
    value: name,
}));
export const iconButton = iconList.map(entry => ({
    label: entry,
    value: entry,
}));
export const starButton = [...Array(14)].map((e, index) => ({ label: index, value: index }));
export const stickerButtonList = stickerList.map(name => ({
    label: name === 'no-sticker'
        ? <span className="no-sticker">NONE</span>
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