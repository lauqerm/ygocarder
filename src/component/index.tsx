import styled from 'styled-components';

export const StyledDropdownOption = styled.div`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: #2badea;
    }
    &.menu-active {
        background-color: #1890ff;
        &:hover {
            background-color: #2badea;
        }
    }
`;
export const StyledDropdownContainer = styled.div`
    border: 1px solid #222;
    border-radius: 4px;
    background-color: #4e4e53;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    padding: 5px 0;
    color: var(--color);
`;
export const StyledDropdown = {
    Container: StyledDropdownContainer,
    Option: StyledDropdownOption,
};

export { ImageCropper } from './card-picture';
export { LinkMarkChooser } from './link-marker';
export { Loading } from './loading';
export * from './explanation';
export * from './frame-info-block';
export * from './icon-button';