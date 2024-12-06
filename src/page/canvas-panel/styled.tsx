import styled from 'styled-components';

export const StyledActionIconButton = styled.button`
    align-content: center;
    font-size: var(--fs-lg);
    border: var(--bw) solid var(--sub-tertiary);
    border-radius: 0 var(--br-lg) var(--br-lg) 0;
    background-color: var(--main-primary);
    border: var(--bw) solid var(--main-primary);
    border-left: var(--bw) solid var(--sub-level-3);
    &:hover {
        background-color: var(--sub-primary);
    }
    input {
        display: none;
    }  
`;