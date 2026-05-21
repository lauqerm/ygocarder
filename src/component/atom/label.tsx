import styled from 'styled-components';

const ResolutionLabelContainer = styled.div<{ $warning: boolean }>`
    display: grid;
    grid-template-columns: 3em max-content 3em;
    gap: var(--spacing-xs);
    .left-part {
        text-align: right;
    }
    .right-part {
        text-align: left;
    }
    ${({ $warning }) => $warning
        ? `
            color: var(--main-warning);
        `
        : ''}
`;
export type ResolutionLabel = {
    warning?: boolean,
    width: number,
    height: number,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ResolutionLabel = ({ width, height, warning = false, ...rest }: ResolutionLabel) => {
    return <ResolutionLabelContainer $warning={warning} {...rest}>
        <span className="left-part">{width}</span>
        <span>×</span>
        <span className="right-part">{height}</span>
    </ResolutionLabelContainer>;
};