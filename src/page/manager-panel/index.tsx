import { Drawer } from 'antd';
import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { LanguageDataDictionary, useCardList } from 'src/service';
import styled from 'styled-components';
import { ManagerCardList } from './card-list';
import { useShallow } from 'zustand/react/shallow';

const StyledCardManagerPanel = styled.div`
    position: absolute;
    right: 0;
    top: 125px;
`;
const StyledCardManagerDrawer = styled(Drawer)`
    .ant-drawer-content {
        box-shadow: 0 0 3px 2px #202020;
    }
    .ant-drawer-body {
        padding: 0;
    }
`;
export type CardManagerPanelRef = {};
export type CardManagerPanel = {
    language: LanguageDataDictionary,
    onVisibleChange: (status: boolean) => void,
};
export const CardManagerPanel = forwardRef(({
    language,
    onVisibleChange,
}: CardManagerPanel, ref: React.ForwardedRef<CardManagerPanelRef>) => {
    const {
        visible,
        toggleVisible,
    } = useCardList(useShallow(({
        visible,
        toggleVisible,
    }) => ({
        visible,
        toggleVisible,
    })));

    useEffect(() => {
        localStorage.setItem('manager-panel-visible', visible.toString());
        onVisibleChange(visible);
    }, [onVisibleChange, visible]);

    /** Currently no need for direct control */
    useImperativeHandle(ref, () => ({}), []);

    return <StyledCardManagerPanel>
        <StyledCardManagerDrawer
            title={language['manager.title']}
            visible={visible}
            maskClosable={false}
            mask={false}
            onClose={() => toggleVisible(false)}
            width={280}
        >
            <ManagerCardList
            />
        </StyledCardManagerDrawer>
    </StyledCardManagerPanel>;
});