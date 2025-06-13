import styled from 'styled-components';

export const ColorBlock = styled.div<{ $static?: boolean, $empty?: boolean }>`
    height: 17px;
    width: 17px;
    cursor: pointer;
    position: relative;
    outline: none;
    box-shadow: 0 0 1px 1px var(--main-level-3);
    border-radius: var(--br);
    ${({ $static }) => $static
        ? `
            cursor: default;
            height: 9px;
            width: 9px;
            margin: 4px 0;
            border: none;
        `
        : ''}
    ${({ $empty }) => $empty
        ? `
            background-color: var(--sub-level-4);
            background-image: var(--gradient-diagonal-stripe);
        `
        : ''}
    .active-dot {
        position: absolute;
        inset: var(--spacing-xs);
        background: rgb(0, 0, 0);
        border-radius: 50%;
        opacity: 1;
    }
`;