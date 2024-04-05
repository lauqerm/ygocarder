import { Tooltip } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { ExtractProps } from 'src/type';
import './icon-button.scss';

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
    return <span {...containerProps} className={['icon-button', containerProps?.className ?? ''].join(' ')}>
        <Tooltip {...tooltipProps}>
            <Icon {...iconProps} />
        </Tooltip>
    </span>;
};