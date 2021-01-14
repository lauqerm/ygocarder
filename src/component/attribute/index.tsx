import './attribute.scss';

export type AttributeIcon = {
	type: string,
}
export const AttributeIcon = ({
    type,
}: AttributeIcon) => {
    return <div className="card-attribute">
        <img src={`/asset/image/attribute/attr-${type.toLowerCase()}.png`} alt={type} />
    </div>;
};