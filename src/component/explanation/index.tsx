import { Popover } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ExtractProps } from 'src/type';
import './explanation.scss';

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
        <ExclamationCircleOutlined className={['explanation-icon', className ?? ''].join(' ')} {...restIconProps} />
    </Popover>;
};