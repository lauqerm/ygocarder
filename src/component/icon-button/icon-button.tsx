import { Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import React from 'react';
import { StyledIconButtonContainer } from './styled';

export type IconButton = {
    size?: 'sm' | 'md',
    Icon?: typeof SyncOutlined,
    active?: boolean,
    children?: React.ReactNode,
    onClick?: () => void,
    iconProps?: React.ComponentProps<typeof SyncOutlined>,
    tooltipProps?: React.ComponentProps<typeof Tooltip>,
    containerProps?: React.HTMLAttributes<HTMLSpanElement>,
}
export const IconButton = ({
    size = 'md',
    active = false,
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
            $active={active}
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