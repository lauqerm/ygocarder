import { Popover, Slider } from 'antd';
import { ErrorBoundary } from './error-boundary';

export const GuardedSlider = (props: React.ComponentProps<typeof Slider>) => {
    return <ErrorBoundary fallback={<></>}>
        <Slider {...props} />
    </ErrorBoundary>;
};

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