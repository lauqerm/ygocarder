import { Popover } from 'antd';
import styled from 'styled-components';

export const StyledCode = styled.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

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