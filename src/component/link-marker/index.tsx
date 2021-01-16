import './link-marker.scss';

export type LinkMarker = {
	arrow: string[],
};
export const LinkMarker = ({
    arrow = [],
}: LinkMarker) => {
    return <div className="link-marker-container">
        {arrow.map(entry => <img key={entry} className={`link-marker-arrow arrow-${entry}`} alt="link marker"
            src={`/asset/image/link/link-arrow-${entry}.png`} />)}
        <img key={'overlay'} className="link-overlay" alt="link overlay" src={'/asset/image/link/link-overlay.png'} />
    </div>;
};

export type LinkMarkChooser = {

};
export const LinkMarkChooser = ({

}: LinkMarkChooser) => {

};