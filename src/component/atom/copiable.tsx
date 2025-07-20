import copy from 'copy-to-clipboard';
import { CheckOutlined } from '@ant-design/icons';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';

export const StyledCode = styled.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

export const CopiableOverlayStyle = css`
    position: relative;
    .copiable-overlay {
        align-items: center;
        background-color: var(--color-contrast);
        font-size: var(--fs);
        font-weight: bold;
        border-radius: var(--br);
        color: var(--color);
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
    }
`;
export const StyledMono = styled(StyledCode)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
    ${CopiableOverlayStyle}
`;

export type Copiable = {
    data: string | number,
    children?: React.ReactNode,
    disabled?: boolean,
    overlay?: React.ReactNode,
    container: React.ComponentType<{
        children?: React.ReactNode,
        disabled?: boolean,
        onClick?: (e: { stopPropagation: () => void }) => void,
    }>,
}
export const Copiable = ({
    data,
    children,
    disabled,
    overlay = <CheckOutlined />,
    container: Container,
}: Copiable) => {
    const [showFlashOverlay, setFlashOverlay] = useState(false);
    const callFlashNotification = (copyingContent: string | number) => {
        copy(typeof copyingContent === 'number' ? `${copyingContent}` : copyingContent);
        setFlashOverlay(true);
        setTimeout(() => {
            setFlashOverlay(false);
        }, 1000);
    };

    return <Container
        disabled={disabled}
        onClick={e => {
            e.stopPropagation();
            callFlashNotification(data);
        }}
    >
        {showFlashOverlay ? <div className="copiable-overlay">{overlay}</div> : null}
        {children}
    </Container>;
};

export type CopiableCode = {
    data: string | number,
    children?: React.ReactNode,
}
export const CopiableCode = ({
    data,
    children,
}: CopiableCode) => {
    return <Copiable data={data} container={StyledMono}>{children}</Copiable>;
};