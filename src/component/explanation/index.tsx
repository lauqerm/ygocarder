import { Popover } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ExtractProps } from 'src/type';
import styled from 'styled-components';

const StyledExplanationIcon = styled(ExclamationCircleOutlined)`
    font-size: var(--fs);
    color: var(--color-heavy);
    cursor: pointer;
    display: inline-block;
`;

export type Explanation = {
    iconProps?: ExtractProps<typeof ExclamationCircleOutlined>,
} & ExtractProps<typeof Popover>;
export const Explanation = ({
    overlayClassName,
    iconProps,
    ...rest
}: Explanation) => {
    const { className, ...restIconProps } = iconProps ?? {};

    return <Popover overlayClassName={['explanation-overlay', overlayClassName ?? ''].join(' ')} {...rest}>
        <StyledExplanationIcon className={['explanation-icon', className ?? ''].join(' ')} {...restIconProps} />
    </Popover>;
};