import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { LanguageDataDictionary } from 'src/service';
import styled from 'styled-components';

const StyledCardManagerPanel = styled.div`
    position: absolute;
    right: 0;
    top: var(--spacing);
`;
export type CardManagerPanel = {
    language: LanguageDataDictionary,
    onVisibleChange: (status: boolean) => void,
};
export const CardManagerPanel = ({
    language,
    onVisibleChange,
}: CardManagerPanel) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        onVisibleChange(visible);
    }, [onVisibleChange, visible]);

    return <StyledCardManagerPanel>
        <button onClick={() => setVisible(true)}>
            {language['manager.icon.title']}
        </button>
        <Drawer
            title={language['manager.title']}
            visible={visible}
            maskClosable={false}
            mask={false}
            onClose={() => setVisible(false)}
        >
            Drawer
        </Drawer>
    </StyledCardManagerPanel>;
};