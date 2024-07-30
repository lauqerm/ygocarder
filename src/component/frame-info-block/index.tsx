import { FrameInfo } from 'src/model';
import styled from 'styled-components';

const StyledFrameContainer = styled.div<{ $withPillar: boolean }>`
    display: grid;
    ${({ $withPillar }) => $withPillar ? 'grid-template-columns: max-content 1fr;' : 'grid-template-columns: 1fr;'}
    > label {
        cursor: pointer;
        padding: 0 2px;
        text-transform: capitalize;
        text-align: center;
    }
`;
const StyledFramePillar = styled.div`
    display: inline-block;
    width: 10px;
`;
export const FrameInfoBlock = ({
    name,
    labelBackgroundColor,
    labelBackgroundColorList,
    className,
}: Omit<FrameInfo, 'edition' | 'labelColor'> & { className?: string }) => {
    return <StyledFrameContainer className={className} $withPillar={!!(labelBackgroundColor || labelBackgroundColorList)}>
        {labelBackgroundColorList
            ? <StyledFramePillar>
                {labelBackgroundColorList.map(color => <div
                    key={color} 
                    style={{ backgroundColor: color, height: `${100 / labelBackgroundColorList.length}%` }}
                />)}
            </StyledFramePillar>
            : labelBackgroundColor
                ? <StyledFramePillar style={{ backgroundColor: labelBackgroundColor }} />
                : null}
        <label>{name.replaceAll('-', ' ')}</label>
    </StyledFrameContainer>;
};
