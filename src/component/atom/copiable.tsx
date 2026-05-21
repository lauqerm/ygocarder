import copy from 'copy-to-clipboard';
import { CheckOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { StyledMono } from './styled';

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