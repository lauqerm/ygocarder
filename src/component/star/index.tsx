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
            .map((entry, index) => <img key={index} className={`card-star-icon card-star-${type}`} src={`/asset/image/sub-family/${type}.png`} alt={type} />)}
    </div>;
};