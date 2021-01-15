import { defaultMonsterCardType } from '../../model';
import './image.scss';

export type AttributeIcon = {
	type: string,
}
export const AttributeIcon = ({
    type,
}: AttributeIcon) => {
    return <img className="card-attribute" src={`/asset/image/attribute/attr-${type.toLowerCase()}.png`} alt={type} />;
};

const getCardFrame = (family: string, subFamily: string, typeAbility: string[]) => {
    let type = 'Effect';
    if (family !== 'Monster') return family;
    // This list is sorted as the priority already
    defaultMonsterCardType.forEach(entry => {
        if (typeAbility.includes(entry)) type = entry;
    });

    return type.toLowerCase();
};
export type CardFrame = {
    family: string,
    subFamily: string,
    typeAbility: string[],
}
export const CardFrame = ({
    family,
    subFamily,
    typeAbility,
}: CardFrame) => {
    return <img className="card-frame" src={`/asset/image/frame/frame-${getCardFrame(family, subFamily, typeAbility)}.png`} alt="" />;
};

export type CardPicture = {
	src: string,
}
export const CardPicture = ({
    src,
}: CardPicture) => {
    return <img className="card-picture" src={src} alt="Card Pic" />;
};