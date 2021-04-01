import { Radio } from 'antd';
import { frameType, iconList, attributeList, stickerList, foilList } from '../../model';
import './input-panel.scss';

const { Button: RadioButton } = Radio;

export const foilButton = foilList.map(({ color, name }) => {
    return <RadioButton key={name} value={name} style={{
        color,
        fontWeight: 'bold',
    }}>
        {name.toLocaleUpperCase()}
    </RadioButton>;
});
export const frameButton = frameType.map(({ color, name, backgroundColor }) => {
    return <RadioButton key={name} value={name} style={{
        backgroundColor,
        color,
    }}>
        {name}
    </RadioButton>;
});
export const attributeButton = attributeList.map(({ name }) => <RadioButton key={name} value={name}>
    <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/attribute/attr-${name.toLowerCase()}.png`} />
</RadioButton>);
export const iconButton = iconList.map(entry => <RadioButton key={entry} value={entry}>{entry}</RadioButton>);
export const starButton = [...Array(14)].map((e, index) => <RadioButton key={`${index}`} value={`${index}`}>{`${index}`}</RadioButton>);
export const stickerButton = stickerList.map(name => <RadioButton key={name} value={name}>
    <img alt={name} src={`${process.env.PUBLIC_URL}/asset/image/sticker/sticker-${name.toLowerCase()}.png`} />
</RadioButton>);