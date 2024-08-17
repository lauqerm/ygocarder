import { useCard, useSetting } from 'src/service';
import { RadioTrain } from './radio-train';
import { memo, useCallback, useMemo } from 'react';
import { getFrameButtonList } from '../const';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { tcgToOCGTermMap } from 'src/model';
import { TrainGridStyle } from './input-train.styled';

const StyledFrameTrain = styled(RadioTrain)`
	${TrainGridStyle}
`;

export type FrameTrain = {
    setDisplayTypeAbility: (value: React.SetStateAction<string>) => void,
};
export const FrameTrain = memo(({
    setDisplayTypeAbility,
}: FrameTrain) => {
    const {
        setting,
    } = useSetting();
    const { showExtraDecorativeOption } = setting;
    const frameList = useMemo(() => getFrameButtonList()
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [showExtraDecorativeOption],
    );

    const {
        frame,
        setCard,
    } = useCard(useShallow(({
        card,
        setCard,
    }) => ({
        frame: card.frame,
        setCard,
    })));
    const changeFrame = useCallback((frameValue: number | string) => {
        setCard(currentCard => {
            const {
                typeAbility,
                isPendulum,
                attribute,
                format,
            } = currentCard;
            const nextFrame = `${frameValue}`;
            const isST = nextFrame === 'spell' || nextFrame === 'trap';
            const termMap = format === 'tcg'
                ? {
                    'Spell Card': 'Spell Card',
                    'Trap Card': 'Trap Card',
                }
                : tcgToOCGTermMap;
            const newTypeAbility = nextFrame === 'spell'
                ? [termMap['Spell Card']]
                : nextFrame === 'trap' ? [termMap['Trap Card']] : typeAbility;
            if (isST) setDisplayTypeAbility(newTypeAbility[0]);

            return {
                ...currentCard,
                frame: nextFrame,
                isPendulum: nextFrame === 'link' ? false : isPendulum,
                attribute: isST
                    ? `${nextFrame}`.toUpperCase()
                    : attribute,
                typeAbility: newTypeAbility,
            };
        });
    }, [setCard, setDisplayTypeAbility]);

    return <StyledFrameTrain className="frame-radio" value={frame} onChange={changeFrame} optionList={frameList} />;
});