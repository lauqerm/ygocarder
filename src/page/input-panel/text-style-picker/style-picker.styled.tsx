import { StyledDropdown } from 'src/component';
import styled from 'styled-components';

export const StyledPickerButton = styled.div<{ $active?: boolean, $softMode: boolean }>`
    background-color: var(--main-level-4);
    ${({ $active }) => $active ? 'border: 1px solid var(--main-active);' : 'border: 1px solid var(--sub-level-1);'}
	padding: 1px 4px;
	margin: -2px 0;
	margin-left: 5px;
	border-radius: 4px;
    ${({ $softMode, $active }) => {
        return $softMode
            ? `
                border: 1px solid var(--main-level-4);
                ${$active ? 'outline: 1px solid var(--main-active);' : ''}
            `
            : `
                box-shadow: 0 0 2px 0 #333;
            `;
    }}
	&:hover {
		background-color: var(--sub-level-4);
	}
`;

export const StyledPatternContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: 0.5rem;
    padding: 5px;
    .alert {
        grid-column: span 2;
        font-size: 13px;
        text-align: center;
    }
`;
export const StyledPatternOption = styled.div`
    line-height: 0;
    cursor: pointer;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
        min-height: 23.2px;
        &.menu-active {
            outline: 2px solid var(--main-active);
            &:hover {
                outline: 2px solid var(--sub-active);
            }
        }
        :hover {
            outline: 2px solid var(--sub-active);
        }
    }
    &.menu-off {
        &:hover {
            color: var(--main-link);
            .anticon {
                color: var(--main-link);
            }
        }
    }
    img {
        max-width: 100%;
        border: 1px solid #222222;
    }
`;

export const StyledPredefinedContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: 0.5rem;
    padding: 5px;
`;
export const StyledPredefinedOption = styled.div`
    line-height: 0;
    cursor: pointer;
    min-height: 26.13px;
    &.menu-active {
        outline: 2px solid var(--main-active);
        &:hover {
            outline: 2px solid var(--sub-active);
        }
    }
    :hover {
        outline: 2px solid var(--sub-active);
    }
    img {
        max-width: 100%;
    }
`;