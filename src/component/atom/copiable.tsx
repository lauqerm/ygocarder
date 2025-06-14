import copy from 'copy-to-clipboard';
import { CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useState } from 'react';

export const StyledCode = styled.span`
    background: var(--main-level-1);
    padding: var(--spacing-px) var(--spacing-xxs);
    border: var(--bw) solid #4e84a4;
    border-radius: var(--br);
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

export const StyledMono = styled(StyledCode)`
    display: inline-block;
    font-size: var(--fs-sm);
    border-color: var(--sub-level-1);
    line-height: 1;
    cursor: pointer;
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

export type CopiableCode = {
    data: string | number,
    children?: React.ReactNode,
}
export const CopiableCode = ({
    data,
    children,
}: CopiableCode) => {
    const [showFlashOverlay, setFlashOverlay] = useState(false);
    const callFlashNotification = (copyingContent: string | number) => {
        copy(typeof copyingContent === 'number' ? `${copyingContent}` : copyingContent);
        setFlashOverlay(true);
        setTimeout(() => {
            setFlashOverlay(false);
        }, 1000);
    };

    return <StyledMono
        onClick={e => {
            e.stopPropagation();
            callFlashNotification(data);
        }}
    >
        {showFlashOverlay ? <div className="copiable-overlay"><CheckOutlined /></div> : null}
        {children}
    </StyledMono>;
};