import styled from 'styled-components';
import { Slider } from 'antd';
import { ErrorBoundary } from './error-boundary';

export const GuardedSlider = (props: React.ComponentProps<typeof Slider>) => {
    return <ErrorBoundary fallback={<></>}>
        <Slider {...props} />
    </ErrorBoundary>;
};

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
    display: flex;
    align-items: center;
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
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05); // Mimic antd
    padding: var(--spacing-xs) 0;
    color: var(--color);
`;
export const StyledDropdownLabel = styled.div`
    color: var(--color);
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    padding: 0 var(--spacing);
    padding-bottom: var(--spacing-xs);
    line-height: 1;
    cursor: default;
    &:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`;
export const StyledDropdown = {
    Container: StyledDropdownContainer,
    Option: StyledDropdownOption,
};

export * from './angle-picker';
export * from './app-header';
export * from './atom';
export * from './error-boundary';
export * from './explanation';
export * from './formatting-guide';
export * from './frame-info-block';
export * from './icon-button';
export * from './image-cropper';
export * from './inline-color-picker';
export * from './inline-sketch-picker';
export * from './input-train';
export * from './lightbox';
export * from './link-marker';
export * from './setting';
export * from './setting-panel';
export { Loading } from './loading';