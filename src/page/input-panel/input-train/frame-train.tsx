import { useCard, useSetting } from 'src/service';
import { useCallback, useMemo } from 'react';
import { getFrameButtonList } from '../const';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { NO_ATTRIBUTE, passwordSentenceMap, tcgToOCGTermMap } from 'src/model';
import { TrainGridStyle } from './input-train.styled';
import { RadioTrain } from 'src/component';

const StyledFrameTrain = styled(RadioTrain)`
	${TrainGridStyle}
`;

export type FrameTrain = {
    onSTFrameChange: (value: string[]) => void,
    onPasswordChange: (value: string) => void,
};
export const FrameTrain = ({
    onSTFrameChange,
    onPasswordChange,
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
                password,
                star,
            } = currentCard;
            const nextFrame = `${frameValue}`;
            const isST = nextFrame === 'spell' || nextFrame === 'trap';
            const termMap = format === 'tcg'
                ? {
                    'Spell Card': 'Spell Card',
                    'Trap Card': 'Trap Card',
                }
                : tcgToOCGTermMap;
            const nextTypeAbility = nextFrame === 'spell'
                ? [termMap['Spell Card']]
                : nextFrame === 'trap' ? [termMap['Trap Card']] : typeAbility;
            const nextPassword = nextFrame === 'token'
                ? passwordSentenceMap[format]
                : password;

            onPasswordChange(nextPassword);
            if (isST) onSTFrameChange(nextTypeAbility);

            return {
                ...currentCard,
                frame: nextFrame,
                isPendulum: nextFrame === 'link' ? false : isPendulum,
                isLink: nextFrame === 'link' ? true : false,
                attribute: nextFrame === 'token'
                    ? NO_ATTRIBUTE
                    : isST
                        ? `${nextFrame}`.toUpperCase()
                        : attribute,
                star: nextFrame === 'token'
                    ? 0
                    : star,
                typeAbility: nextTypeAbility,
                password: nextPassword,
            };
        });
    }, [setCard, onPasswordChange, onSTFrameChange]);

    return <StyledFrameTrain className="frame-radio" value={frame} onChange={changeFrame} optionList={frameList} />;
};