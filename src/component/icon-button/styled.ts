import styled from 'styled-components';

export const StyledIconButtonContainer = styled.span<{ $freeSize: boolean, $size: 'sm' | 'md', $active: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:not(:first-child) {
        margin-left: var(--spacing-xs);
    }
    ${({ $freeSize, $size }) => $freeSize
        ? 'padding: 0 var(--spacing-xxs);'
        : $size === 'sm' ? 'width: 18px;' : 'width: 24px;'
    };
    ${({ $size }) => $size === 'sm'
        ? `
            height: 18px;
            font-size: var(--fs-sm);
        `
        : `
            height: 24px;
            font-size: var(--fs);
        `}
    ${({ $active }) => $active
        ? `
            background-color: var(--main-active);
            &:hover {
                background-color: var(--sub-active);
            }
        `
        : `
            background-color: var(--main-level-4);
            &:hover {
                background-color: var(--sub-level-4);
            }
        `}
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
    cursor: pointer;
`;

export const StyledHeaderButtonContainer = styled.div<{ $softMode?: boolean }>`
    cursor: pointer;
    .button-label {
        display: grid;
        label {
            cursor: pointer;
            line-height: 1;
            font-size: var(--fs-xs);
            margin-top: var(--spacing-xs);
        }
    }
    .anticon {
        font-size: var(--fs-xl);
        justify-self: center;
    }
    &:hover {
        color: var(--main-active);
        .anticon {
            color: var(--sub-active);
        }
    }
`;