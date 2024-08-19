import styled from 'styled-components';

export const StandaloneLabel = styled.div`
    font-weight: 500;
    border-color: transparent;
    background-color: transparent;
    color: var(--color-vendor);
    text-shadow: var(--ts);
    user-select: none;
    display: inline-block;
    height: 32px;
    width: var(--width-label);
    line-height: 30px;
    position: relative;
    min-width: var(--width-label);
    text-align: right;
    padding-right: var(--spacing-antd);
`;

export const StyledDropdownOption = styled.div`
    padding: var(--spacing-xs) var(--spacing);
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
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    background-color: var(--main-level-3);
    box-shadow: -2px -2px var(--spacing-xs) #000000ff;
    padding: var(--spacing-xs) 0;
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