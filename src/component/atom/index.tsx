import { Drawer, Popover } from 'antd';
import styled, { css, keyframes } from 'styled-components';

export const StyledMarkdown = styled.div`
    padding: var(--spacing-xs);
    background-color: var(--main-level-3);
    font-size: var(--fs);
    color: var(--color-heavy);
    text-shadow: var(--ts);
    p {
        white-space: pre-line;
    }
    ul {
        padding-inline-start: var(--spacing-2xl);
        margin-block-end: 0;
        li {
            line-height: 1.5;
        }
    }
    :last-child {
        margin-bottom: 0;
    }
`;

export const StyledPopMarkdown = styled(StyledMarkdown)`
    max-width: 550px;
    border-radius: var(--br-lg);
    border: var(--bw) solid var(--sub-level-1);
`;

export const InternalPopover = ({
    content,
    children,
    ...rest
}: React.ComponentProps<typeof Popover>) => {
    if (content) {
        return <Popover content={content} {...rest}>{children}</Popover>;
    }
    return <>{children}</>;
};

export const CardActionButton = styled.button`
    --overlay-size: 36px;
    background: var(--main-primary);
    border-width: 0;
    border-style: solid;
    border-color: var(--main-active);
    color: var(--color-heavy);
    padding: var(--spacing-sm);
    line-height: 1;
    font-size: var(--fs-xl);
    text-align: center;
    width: var(--overlay-size);
    height: var(--overlay-size);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-1);
    /* display: none; */
    &:not(:disabled) {
        cursor: pointer;
        &:hover {
            background: var(--sub-primary);
        }
    }
    &:disabled {
        cursor: not-allowed;
        filter: opacity(0.5);
    }
`;

export const SolidLabel = styled.div`
    display: inline-flex;
    column-gap: var(--spacing-xs);
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    padding: var(--spacing-xxs) var(--spacing-xs);
    border-radius: var(--br);
    box-shadow: var(--bs-input);
    .ant-checkbox-wrapper {
        transform: translateY(-1px); // Alignment
    }
`;
export const CombinedSliderContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 57px 39px 6px;
    &.inactive {
        .slider-label,
        .ant-slider,
        .slider-padding {
            background-color: var(--main-level-3);
        }
    }
    .slider-label,
    .ant-slider,
    .slider-padding {
        border: var(--bw) solid var(--sub-level-1);
        background-color: var(--main-level-4);
    }
    .slider-label {
        border-right: none;
        border-radius: var(--br) 0 0 var(--br);
    }
    .ant-slider {
        margin: 0;
        border-left: none;
        border-right: none;
        height: 28px; // Alignment
        padding-top: 11px; // Alignment
    }
    .slider-padding {
        border-left: none;
        border-radius: 0 var(--br) var(--br) 0;
    }
    .ant-slider-rail,
    .ant-slider-track {
        border-radius: 0 var(--br) var(--br) 0;
    }
    .ant-input-number.ant-input-number-sm {
        height: 28px; // Alignment
        width: unset;
        border-radius: 0;
        box-shadow: var(--bs-input);
        .ant-input-number-input {
            height: 26px; // Alignment
        }
    }
`;

export const PopoverButton = styled.div<{ $active?: boolean, $softMode: boolean }>`
    display: inline-block;
    background-color: var(--main-level-4);
    ${({ $active }) => $active ? 'border: var(--bw) solid var(--main-active);' : 'border: var(--bw) solid var(--sub-level-1);'}
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin: calc(-1 * var(--spacing-xxs)) 0;
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
    color: var(--color-heavy);
    cursor: pointer;
    ${({ $softMode, $active }) => {
        return $softMode
            ? `
                border: var(--bw) solid var(--main-level-4);
                ${$active ? 'outline: var(--bw) solid var(--main-active);' : ''}
            `
            : '';
    }}
    &:hover {
        background-color: var(--sub-level-4);
    }
`;

const ResolutionLabelContainer = styled.div<{ $warning: boolean }>`
    display: grid;
    grid-template-columns: 3em max-content 3em;
    gap: var(--spacing-xs);
    .left-part {
        text-align: right;
    }
    .right-part {
        text-align: left;
    }
    ${({ $warning }) => $warning
        ? `
            color: var(--main-warning);
        `
        : ''}
`;
export type ResolutionLabel = {
    warning?: boolean,
    width: number,
    height: number,
}
export const ResolutionLabel = ({ width, height, warning = false }: ResolutionLabel) => {
    return <ResolutionLabelContainer $warning={warning}>
        <span className="left-part">{width}</span>
        <span>×</span>
        <span className="right-part">{height}</span>
    </ResolutionLabelContainer>;
};

const backgroundMarch = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
export const DropZone = styled.div<{ $visible: boolean }>`
	display: ${({ $visible }) => $visible ? 'flex' : 'none'};
	width: 100%;
	height: 100%;
	background-color: #8888cc44;
	z-index: 1;
	font-size: var(--fs-3xl);
	align-items: center;
    justify-content: center;
	text-shadow: 0 0 3px #222;
    border: 5px dashed #cccccc;
    background: linear-gradient(-45deg, #ee7752aa, #e73c7e88, #23a6d588, #23d5ab88);
	background-size: 400% 400%;
    padding: 5px;
    label {
        color: var(--color-heavy);
        line-height: 1.25;
    }
    ${css`animation: ${backgroundMarch} 6s linear infinite;`}
`;


export const ManagerDrawer = styled(Drawer)`
    .ant-drawer-header {
        padding: var(--spacing);
    }
    .ant-drawer-content {
        box-shadow: 0 0 3px 2px #202020;
    }
    .ant-drawer-body {
        padding: 0;
        height: 100%;
    }
    .ant-drawer-close {
        display: none;
    }
    .ant-drawer-content {
        background-color: #484848;
    }
`;

export const SingleSliderContainer = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: var(--spacing-sm);
    align-items: center;
    color: var(--color);
    text-shadow: var(--ts);
    font-weight: 500;
    .ant-input-number {
        width: 55px;
    }
    .ant-slider {
        margin: var(--spacing-xxs);
    }
`;

export * from './color';
export * from './copiable';