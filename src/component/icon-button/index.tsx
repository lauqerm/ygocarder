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
    iconProps?: ExtractProps<typeof SyncOutlined>,
    tooltipProps: ExtractProps<typeof Tooltip>,
    containerProps?: React.HTMLAttributes<HTMLSpanElement>,
}
export const IconButton = ({
    Icon,
    iconProps,
    tooltipProps,
    containerProps,
}: IconButton) => {
    return <Tooltip {...tooltipProps}>
        <StyledIconButtonContainer {...containerProps} className={['icon-button', containerProps?.className ?? ''].join(' ')}>
            <Icon {...iconProps} />
        </StyledIconButtonContainer>
    </Tooltip>;
};