import { CardFamily, defaultMonsterCardType } from '../../model';
import { checkPendulum } from '../../util';
import './image.scss';

export type AttributeIcon = {
	type: string,
}
export const AttributeIcon = ({
    type,
}: AttributeIcon) => {
    return <img className="card-attribute" src={`/asset/image/attribute/attr-${type.toLowerCase()}.png`} alt={type} />;
};

export const getCardFrame = (family: string, subFamily: string, typeAbility: string[]) => {
    let type = 'Effect';
    if (family !== 'Monster') return family;
    // This list is sorted as the priority already
    defaultMonsterCardType.forEach(entry => {
        if (typeAbility.includes(entry)) type = entry;
    });
    
    return type.toLowerCase();
};

export type CardFrame = {
    family: CardFamily,
    subFamily: string,
    typeAbility: string[],
    size?: 'small' | 'medium' | 'large',
    children?: React.ReactNode,
}
export const CardFrame = ({
    family,
    subFamily,
    typeAbility,
    size = 'small',
    children,
}: CardFrame) => {
    const isPendulum = checkPendulum({ family, type_ability: typeAbility });
    const frameType = getCardFrame(family, subFamily, typeAbility);

    return <>
        <img className="card-frame" src={`/asset/image/frame/frame-${frameType}.png`} alt="card-frame" />
        {children}
        {isPendulum && <img className="pendulum-frame-overlay" src={`/asset/image/pendulum/overlay-pendulum-${frameType}.png`} alt="overlay-frame" />}
        {isPendulum && <img className="card-frame card-frame-pendulum" src={`/asset/image/frame/frame-pendulum-${size}.png`} alt="pendulum-card-frame" />}
        <img className="border-frame" src={'/asset/image/frame/frame-border.png'} alt="border" />
    </>;
};

export type CardPicture = {
	src: string,
}
export const CardPicture = ({
    src,
}: CardPicture) => {
    return <img className="card-picture" src={src} alt="Card Pic" />;
};