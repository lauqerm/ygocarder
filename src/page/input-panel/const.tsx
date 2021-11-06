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
export const frameButton = frameType.map(({ labelColor, name, labelBackgroundColor }) => ({
    label: name,
    value: name,
    props: {
        style: {
            backgroundColor: labelBackgroundColor,
            color: labelColor,
        } as React.CSSProperties,
    }
}));
export const attributeButton = attributeList.map(({ name }) => ({
    label: <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${name.toLowerCase()}.png`} />,
    value: name,
}));
export const iconButton = iconList.map(entry => ({
    label: entry,
    value: entry,
}));
export const starButton = [...Array(14)].map((e, index) => ({ label: index, value: index }));
export const stickerButton = stickerList.map(name => ({
    label: name === 'no-sticker'
        ? <span>NONE</span>
        : <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${name.toLowerCase()}.png`} />,
    value: name,
}));
export const condenseButton = [
    { label: 'Strict', value: 'strict' },
    { label: 'Loose', value: 'loose' },
    { label: 'Very Loose', value: 'veryLoose' },
];