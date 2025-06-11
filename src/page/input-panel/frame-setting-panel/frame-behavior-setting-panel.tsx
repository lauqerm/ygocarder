import { Checkbox } from 'antd';
import { CardFlag, FlagInfoList } from 'src/model';
import { useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

const FrameBehaviorSettingPanelContainer = styled.div`
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border-top: var(--bw) solid var(--sub-level-3);
`;

export type FrameBehaviorSettingPanel = {
    
};
export const FrameBehaviorSettingPanel = () => {
    const language = useLanguage();
    const {
        flag,
        setCard,
    } = useCard(useShallow(({
        card: {
            flag,
        },
        setCard,
        getUpdater,
    }) => ({
        flag,
        setCard,
        getUpdater,
    })));

    const updateFlag = (value: number, index: number) => setCard(currentCard => {
        const nextFlagList: CardFlag = [...currentCard.flag];
        nextFlagList[index] = value;

        return {
            ...currentCard,
            flag: nextFlagList,
        };
    });

    return <FrameBehaviorSettingPanelContainer>
        {flag.map((entry, index) => {
            const { labelKey } = FlagInfoList[index];

            return <div key={labelKey}>
                <Checkbox
                    checked={entry !== 0}
                    onChange={e => {
                        const value = e.target.checked ? 1 : 0;

                        updateFlag(value, index);
                    }}
                >{language[labelKey]}</Checkbox>
            </div>;
        })}
    </FrameBehaviorSettingPanelContainer>;
};