import { FrameInfo } from 'src/model';
import './frame-info-block.scss';

export const FrameInfoBlock = ({ labelColor, name, labelBackgroundColor, labelBackgroundImage }: Omit<FrameInfo, 'edition'>) => {
    return <div
        className="frame-info-block"
        style={{
            color: labelColor,
            backgroundColor: labelBackgroundColor,
            backgroundImage: labelBackgroundImage,
        }}
    >
        {name.replaceAll('-', ' ')}
    </div>;
};