import './star.scss';

export type Star = {
    count: number,
    type?: string,
}
export const Star = ({
    count,
    type = 'level',
}: Star) => {
    const normalizedCount = Math.min(13, count);

    return <div className={`card-star-${type} ${normalizedCount > 12 ? 'card-star-oversize' : 'card-star'}`}>
        {[...Array(normalizedCount)]
            .map((entry, index) => <img key={index} className={`card-star-icon card-star-${type}`} src={`/asset/image/sub-family/subfamily-${type}.png`} alt={type} />)}
    </div>;
};

export type STSubFamily = {
    family: string,
    subFamily: string,
}
export const STSubFamily = ({
    family,
    subFamily,
}: STSubFamily) => {
    const normalizedFamily = family.toLowerCase();
    const normalizedSubFamily = subFamily.toLowerCase();
    const hasIcon = normalizedSubFamily !== 'normal';

    return <div className="card-st-subfamily">
        <img className={`card-st-subfamily-container container-${normalizedFamily}`}
            src={`/asset/image/sub-family/subfamily-container-${normalizedFamily}${hasIcon ? '-icon' : ''}.png`} alt={normalizedFamily} />
        {hasIcon
            && <img className={`card-st-subfamily-icon icon-${normalizedSubFamily}`} alt={normalizedSubFamily}
                src={`/asset/image/sub-family/subfamily-${normalizedSubFamily}.png`} />}
    </div>;
};