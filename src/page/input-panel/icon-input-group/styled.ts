import { StyledDropdown } from 'src/component';
import styled from 'styled-components';

export const StyledIconDropdown = styled(StyledDropdown.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
    > label {
        margin: 0 var(--spacing-xs);
    }
`;
export const IconDropdownContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 240px;
    gap: var(--spacing-px);
    background-color: var(--sub-level-1);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    overflow: hidden;
    position: relative;
    .container-group {
        box-shadow: none;
        border: none;
        border-radius: 0;
    }
    .card-image-cropper {
        width: 230px;
        grid-template-columns: 1fr;
        gap: var(--spacing);
        margin: 0 var(--spacing-xs);
        --max-image-height: 200px;
    }
    &.selector-disabled {
        filter: opacity(0.65) grayscale(0.85);
    }
`;