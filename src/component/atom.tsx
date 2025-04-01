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

export const CardActionButton = styled.button`
    --overlay-size: 36px;
    background: var(--main-primary);
    border-width: 0;
    border-style: solid;
    border-color: var(--main-active);
    color: var(--color-heavy);
    padding: var(--spacing-sm);
    line-height: 1;
    font-size: var(--fs-xl);
    text-align: center;
    width: var(--overlay-size);
    height: var(--overlay-size);
    border-radius: var(--br-lg);
    box-shadow: var(--bs-1);
    /* display: none; */
    &:not(:disabled) {
        cursor: pointer;
        &:hover {
            background: var(--sub-primary);
        }
    }
    &:disabled {
        cursor: not-allowed;
        filter: opacity(0.5);
    }
`;