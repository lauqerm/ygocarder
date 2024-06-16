import { StyledDropdown } from 'src/component';
import styled from 'styled-components';

export const StyledPickerButton = styled.div<{ $active?: boolean }>`
    background-color: var(--bgColor-dropdown-button);
    ${({ $active }) => $active ? 'border: 1px solid #1890ff;' : 'border: 1px solid #222222;'}
	padding: 1px 4px;
	margin: -2px 0;
	margin-left: 5px;
	border-radius: 4px;
    box-shadow: 0 0 2px 0 #333;
	&:hover {
		background-color: #707681;
	}
`;

export const StyledPatternContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: 10px;
    padding: 5px;
`;
export const StyledPatternOption = styled.div`
    line-height: 0;
    cursor: pointer;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
        min-height: 23.2px;
        &.menu-active {
            outline: 2px solid #1890ff;
            &:hover {
                outline: 2px solid #2badea;
            }
        }
        :hover {
            outline: 2px solid #2badea;
        }
    }
    &.menu-off {
        &:hover {
            color: #2badea;
            .anticon {
                color: #2badea;
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
    gap: 10px;
    padding: 5px;
`;
export const StyledPredefinedOption = styled.div`
    line-height: 0;
    cursor: pointer;
    min-height: 26.13px;
    &.menu-active {
        outline: 2px solid #1890ff;
        &:hover {
            outline: 2px solid #2badea;
        }
    }
    :hover {
        outline: 2px solid #2badea;
    }
    img {
        max-width: 100%;
    }
`;