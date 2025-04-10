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
    onStatChange: (atk: string, def: string) => void,
};
export const FrameTrain = ({
    onSTFrameChange,
    onPasswordChange,
    onStatChange,
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
                attribute,
                format,
                password,
                star,
                atk,
                def,
            } = currentCard;
            const nextFrame = `${frameValue}`;
            const willBecomeST = nextFrame === 'spell' || nextFrame === 'trap';
            const willRemoveStat = willBecomeST || nextFrame === 'speed-skill';
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
            const nextAtk = willRemoveStat ? '' : atk;
            const nextDef = willRemoveStat ? '' : def;
            const nextStar = nextFrame === 'token'
                ? 0
                : star;

            onPasswordChange(nextPassword);
            if (willBecomeST) {
                onSTFrameChange(nextTypeAbility);
            }
            if (willRemoveStat) {
                onStatChange(nextAtk, nextDef);
            }

            return {
                ...currentCard,
                frame: nextFrame,
                isLink: nextFrame === 'link' ? true : false,
                attribute: nextFrame === 'token'
                    ? NO_ATTRIBUTE
                    : willBecomeST
                        ? `${nextFrame}`.toUpperCase()
                        : attribute,
                star: nextStar,
                typeAbility: nextTypeAbility,
                password: nextPassword,
                atk: nextAtk,
                def: nextDef,
            };
        });
    }, [setCard, onPasswordChange, onSTFrameChange, onStatChange]);

    return <StyledFrameTrain className="frame-radio" value={frame} onChange={changeFrame} optionList={frameList} />;
};