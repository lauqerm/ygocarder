import styled from 'styled-components';

export const StandaloneLabel = styled.div`
    font-weight: 500;
    border-color: transparent;
    background-color: transparent;
    color: var(--color-vendor);
    text-shadow: 0 1px #222;
    user-select: none;
    display: inline-block;
    height: 32px;
    width: 105px;
    line-height: 30px;
    position: relative;
    min-width: 105px;
    text-align: right;
    padding-right: 11px;
`;

export const StyledDropdownOption = styled.div`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: var(--sub-active);
    }
    &.menu-active {
        background-color: var(--main-active);
        &:hover {
            background-color: var(--sub-active);
        }
    }
`;
export const StyledDropdownContainer = styled.div`
    border: 1px solid var(--sub-level-1);
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

export { ImageCropper } from './image-cropper';
export type { ImageCropperRef } from './image-cropper';
export { LinkMarkChooser } from './link-marker';
export { Loading } from './loading';
export * from './explanation';
export * from './formatting-guide';
export * from './frame-info-block';
export * from './icon-button';
export * from './setting';
export * from './app-header';