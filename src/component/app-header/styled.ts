import styled, { css, keyframes } from 'styled-components';

const titlShaking = keyframes`
    0% { transform: rotate(0deg); }
    3% { transform: rotate(5deg); }
    6% { transform: rotate(0eg); }
    9% { transform: rotate(-5deg); }
    12% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`;
export const VersionLogButtonLabel = styled.div<{ $animating: boolean }>`
    text-align: center;
    border: var(--bw) solid var(--main-level-3);
    background-color: var(--main-level-1);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    cursor: pointer;
    box-shadow: 0 0 2px 1px #222222 inset;
    transition: background-color 250ms linear;
    ${({ $animating }) => $animating ? css`animation: 2s linear 350ms 4 ${titlShaking};` : ''}
    ${({ $animating }) => $animating
        ? `
            background: var(--main-warning);
            color: var(--color-contrast);
            text-shadow: none;
            box-shadow: 0 0 2px 0 #333333;
        `
        : ''}
    &:hover {
        background-color: var(--main-level-3);
    }
`;
export const FaqButtonLabel = styled(VersionLogButtonLabel)`
    box-shadow: none;
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    padding: 0 var(--spacing-xs);
    ${({ $animating }) => $animating
        ? `
            background: var(--main-info);
            color: var(--color-contrast);
            text-shadow: none;
            box-shadow: 0 0 2px 0 #333333;
        `
        : ''}
    &:hover {
        background: var(--sub-info);
    }
`;

export const QuoteContainer = styled.div`
    label {
        font-weight: bold;
        font-style: italic;
        &:after {
            content: ":";
        }
    }
    .question {
        margin-left: var(--spacing);
    }
    .answer {
        margin: var(--spacing) 0;
    }
    &:last-child {
        .answer {
            margin-bottom: 0;
        }
    }
`;