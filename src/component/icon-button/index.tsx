import { Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { ExtractProps } from 'src/type';
import styled from 'styled-components';
import React from 'react';

export const StyledIconButtonContainer = styled.span<{ $freeSize: boolean, $size: 'sm' | 'md' }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    ${({ $freeSize, $size }) => $freeSize
        ? 'padding: 0 var(--spacing-xxs);'
        : $size === 'sm' ? 'width: 18px;' : 'width: 24px;'
    };
    ${({ $size }) => $size === 'sm'
        ? `
            height: 18px;
            font-size: var(--fs-sm);
        `
        : `
            height: 24px;
            font-size: var(--fs);
        `}
    border: var(--bw) solid var(--sub-level-1);
    background-color: var(--main-level-4);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-button);
	cursor: pointer;
	&:hover {
		background-color: var(--sub-level-4);
	}
`;

export type IconButton = {
    size?: 'sm' | 'md',
    Icon?: typeof SyncOutlined,
    children?: React.ReactNode,
    onClick?: () => void,
    iconProps?: ExtractProps<typeof SyncOutlined>,
    tooltipProps?: ExtractProps<typeof Tooltip>,
    containerProps?: React.HTMLAttributes<HTMLSpanElement>,
}
export const IconButton = ({
    size = 'md',
    Icon,
    children,
    onClick,
    iconProps,
    tooltipProps,
    containerProps,
}: IconButton) => {
    const { className, onClick: customOnClick, onKeyDown, ...restContainerProps } = containerProps ?? {};

    return <Tooltip title={null} {...tooltipProps}>
        <StyledIconButtonContainer
            $size={size}
            tabIndex={0}
            {...restContainerProps}
            onClick={e => {
                onClick?.();
                customOnClick?.(e);
            }}
            onKeyDown={e => {
                onKeyDown?.(e);
                if (e.key === 'Enter') {
                    onClick?.();
                }
            }}
            className={['icon-button', className ?? ''].join(' ')}
            $freeSize={!Icon}
        >
            <>
                {Icon && <Icon {...iconProps} />}{children}
            </>
        </StyledIconButtonContainer>
    </Tooltip>;
};

export const StyledHeaderButtonContainer = styled.div<{ $softMode?: boolean }>`
    cursor: pointer;
    .button-label {
        display: grid;
        label {
            cursor: pointer;
            line-height: 1;
            font-size: var(--fs-xs);
            margin-top: var(--spacing-xs);
        }
    }
    .anticon {
        font-size: var(--fs-xl);
        justify-self: center;
    }
    &:hover {
        color: var(--main-active);
        .anticon {
            color: var(--sub-active);
        }
    }
`;