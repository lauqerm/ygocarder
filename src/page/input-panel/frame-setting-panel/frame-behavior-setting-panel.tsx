import { Checkbox } from 'antd';
import { RadioTrain } from 'src/component';
import {
    CardFlag,
    FlagInfoList,
    LINK_RATING_ALWAYS_AUTO,
    LINK_RATING_ALWAYS_HIDE,
    LINK_RATING_ALWAYS_SHOW,
} from 'src/model';
import { useCard, useLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

const FrameBehaviorSettingPanelContainer = styled.div`
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border-top: var(--bw) solid var(--sub-level-3);
    > * + * {
        margin-top: var(--spacing-sm);
    }
    .link-rating-behavior-panel {
        .radio-train-input-group {
            flex: 0 0 auto;
            margin-right: var(--spacing-sm);
        }
        label {
            flex: 1 1 auto;
            text-align: left;
            font-size: var(--fs);
            color: var(--color);
        }
    }
`;

export type FrameBehaviorSettingPanel = {};
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
            const { labelKey, type } = FlagInfoList[index] ?? {};

            if (type === 'checkbox') {
                return <div key={labelKey}>
                    <Checkbox
                        checked={entry !== 0}
                        onChange={e => {
                            const value = e.target.checked ? 1 : 0;

                            updateFlag(value, index);
                        }}
                    >{language[labelKey]}</Checkbox>
                </div>;
            }
            if (type === 'link-rating-behavior') {
                return <RadioTrain key={labelKey}
                    className="link-rating-behavior-panel"
                    onChange={(value) => updateFlag(Number(value), index)}
                    optionList={[
                        { label: language['input.flag.link-rating-behavior.auto'], value: LINK_RATING_ALWAYS_AUTO },
                        { label: language['input.flag.link-rating-behavior.show'], value: LINK_RATING_ALWAYS_SHOW },
                        { label: language['input.flag.link-rating-behavior.hide'], value: LINK_RATING_ALWAYS_HIDE },
                    ]}
                    value={entry}
                    suffix={<label>
                        {language[labelKey]}
                    </label>}
                />;
            }
            return null;
        })}
    </FrameBehaviorSettingPanelContainer>;
};