import React from 'react';
import { FrameInfo } from 'src/model';
import { useLanguage } from 'src/service';
import styled from 'styled-components';

const StyledFrameContainer = styled.div<{ $withPillar: boolean }>`
    display: grid;
    ${({ $withPillar }) => $withPillar ? 'grid-template-columns: max-content 1fr;' : 'grid-template-columns: 1fr;'}
    > label {
        cursor: pointer;
        padding: 0 var(--spacing-xxs);
        text-align: center;
    }
    &:focus {
        background-color: var(--main-level-3);
    }
    &:focus-visible {
        background-color: var(--main-level-3);
    }
`;
const StyledFramePillar = styled.div`
    display: inline-block;
    width: 10px;
`;
export const FrameInfoBlock = ({
    id,
    tabIndex,
    nameKey,
    labelBackgroundColor,
    labelBackgroundColorList,
    className,
    onClick,
}: Omit<FrameInfo, 'name' | 'edition' | 'labelColor' | 'sortWeight'> & {
    id?: string,
    tabIndex?: number,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}) => {
    const language = useLanguage();

    return <StyledFrameContainer
        id={id}
        tabIndex={tabIndex}
        className={`frame-info-block ${className ?? ''}`}
        $withPillar={!!(labelBackgroundColor || labelBackgroundColorList)}
        onClick={onClick}
    >
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
        <label className="frame-info-block-label">{language[nameKey]}</label>
    </StyledFrameContainer>;
};
