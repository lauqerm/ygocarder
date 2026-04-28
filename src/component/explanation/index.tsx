import { Popover } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledExplanationIcon = styled(ExclamationCircleOutlined)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`;

export type Explanation = {
    iconProps?: React.ComponentProps<typeof ExclamationCircleOutlined>,
    icon?: typeof StyledExplanationIcon,
} & React.ComponentProps<typeof Popover>;
export const Explanation = ({
    overlayClassName,
    iconProps,
    icon: Icon = StyledExplanationIcon,
    ...rest
}: Explanation) => {
    const { className, ...restIconProps } = iconProps ?? {};

    return <Popover overlayClassName={['explanation-overlay', overlayClassName ?? ''].join(' ')} {...rest}>
        <Icon className={['explanation-icon', className ?? ''].join(' ')} {...restIconProps} />
    </Popover>;
};