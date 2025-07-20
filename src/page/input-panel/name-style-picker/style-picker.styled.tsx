import styled from 'styled-components';
import { StyledDropdown } from 'src/component';

export const StyledPatternContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`;
export const StyledPresetContainer = styled(StyledDropdown.Container)`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    max-width: 507px; // Alignment
    .preset-warning {
        flex: 0 0 100%;
    }
    .panel-action {
        flex: 0 0 100%;
    }
    .open-preset-manager {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
`;

export const StyledPredefinedContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`;
export const StyledPredefinedOption = styled.div`
    line-height: 0;
    cursor: pointer;
    min-height: 26.13px;
    &.menu-active {
        outline: var(--bw-lg) solid var(--main-active);
        &:hover {
            outline: var(--bw-lg) solid var(--sub-active);
        }
    }
    &.preset-item-focused {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    :hover {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    img {
        max-width: 100%;
    }
`;