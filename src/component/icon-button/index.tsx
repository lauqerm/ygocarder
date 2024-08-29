import { Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { ExtractProps } from 'src/type';
import styled from 'styled-components';

const StyledIconButtonContainer = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--spacing-xs);
    width: 24px;
    height: 24px;
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
    Icon: typeof SyncOutlined,
    onClick: () => void,
    iconProps?: ExtractProps<typeof SyncOutlined>,
    tooltipProps: ExtractProps<typeof Tooltip>,
    containerProps?: React.HTMLAttributes<HTMLSpanElement>,
}
export const IconButton = ({
    Icon,
    onClick,
    iconProps,
    tooltipProps,
    containerProps,
}: IconButton) => {
    const { className, onClick: customOnClick, onKeyDown, ...restContainerProps } = containerProps ?? {};

    return <Tooltip {...tooltipProps}>
        <StyledIconButtonContainer
            tabIndex={0}
            {...restContainerProps}
            onClick={e => {
                onClick();
                customOnClick?.(e);
            }}
            onKeyDown={e => {
                onKeyDown?.(e);
                if (e.key === 'Enter') {
                    onClick();
                }
            }}
            className={['icon-button', className ?? ''].join(' ')}
        >
            <Icon {...iconProps} />
        </StyledIconButtonContainer>
    </Tooltip>;
};