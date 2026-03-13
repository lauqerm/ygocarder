import { useCard, useLanguage, useSetting } from 'src/service';
import { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react';
import { getMasterFrameButtonList } from '../const';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { FrameInfoMap, NO_ATTRIBUTE, passwordSentenceMap, tcgToOCGTermMap } from 'src/model';
import { TrainGridStyle } from './input-train.styled';
import { PopoverButton, RadioTrain } from 'src/component';
import { BookOutlined } from '@ant-design/icons'; 
import { Popover, Tooltip } from 'antd';

const StyledPopoverButton = styled(PopoverButton)<{ $inline?: boolean }>`
    ${({ $inline }) => $inline ? 'margin-left: var(--spacing-xs);' : 'margin-top: var(--spacing);'}
`;

export type UnofficialFrameTrain = {
    inline?: boolean,
    changeFrame: (frameValue: string) => void,
    onGetFrameButtonList?: typeof getMasterFrameButtonList,
};
export const UnofficialFrameTrain = ({
    inline,
    changeFrame,
    onGetFrameButtonList = getMasterFrameButtonList,
}: UnofficialFrameTrain) => {
    const {
        setting,
    } = useSetting();
    const { reduceMotionColor } = setting;
    const language = useLanguage();
    const frameList = useMemo(() => onGetFrameButtonList('unofficial'), [onGetFrameButtonList]);
    const {
        frame,
    } = useCard(useShallow(({
        card,
    }) => ({
        frame: card.frame,
    })));

    return inline
        ? <Popover
            trigger={['click']}
            overlayClassName="global-input-overlay"
            content={<div className="overlay-event-absorber">
                <StyledFrameTrain
                    className="frame-radio"
                    value={frame}
                    onChange={changeFrame}
                    optionList={frameList}
                />
            </div>}
            placement="bottom"
        >
            <Tooltip title={language['input.frame.unofficial.label']}>
                <StyledPopoverButton
                    $softMode={reduceMotionColor}
                    $inline={inline}
                    $active={FrameInfoMap[frame]?.isOfficial === false}
                    className="picker-dropdown color-picker-dropdown"
                >
                    <BookOutlined />
                </StyledPopoverButton>
            </Tooltip>
        </Popover>
        : <StyledFrameTrain
            className="frame-radio"
            value={frame}
            onChange={changeFrame}
            optionList={frameList}
        />;
};

const StyledFrameTrain = styled(RadioTrain)`
	${TrainGridStyle}
`;

export type FrameTrainRef = {
    changeFrame: (frameValue: number | string) => void,
};
export type FrameTrain = {
    onSTFrameChange: (value: string[]) => void,
    onPasswordChange: (value: string) => void,
    onStatChange: (atk: string, def: string, linkRating: string) => void,
    onGetFrameButtonList?: typeof getMasterFrameButtonList,
};
export const FrameTrain = forwardRef<FrameTrainRef, FrameTrain>(({
    onSTFrameChange,
    onPasswordChange,
    onStatChange,
    onGetFrameButtonList = getMasterFrameButtonList,
}, ref) => {
    const {
        setting,
    } = useSetting();
    const { showExtraDecorativeOption } = setting;
    const frameList = useMemo(() => onGetFrameButtonList()
        .filter(entry => {
            return showExtraDecorativeOption || entry.edition === 'normal';
        }),
        [onGetFrameButtonList, showExtraDecorativeOption],
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
                linkRating,
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
            const nextAtk = willRemoveStat ? '' : (atk === '' ? '0' : atk);
            const nextDef = willRemoveStat ? '' : (def === '' ? '0' : def);
            const nextLinkRating = willRemoveStat ? '' : linkRating;
            const nextStar = nextFrame === 'token'
                ? 0
                : star;

            onPasswordChange(nextPassword);
            if (willBecomeST) {
                onSTFrameChange(nextTypeAbility);
            }
            onStatChange(nextAtk, nextDef, nextLinkRating);

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
                linkRating: nextLinkRating,
            };
        });
    }, [setCard, onPasswordChange, onSTFrameChange, onStatChange]);

    useImperativeHandle(ref, () => ({
        changeFrame,
    }));

    return <StyledFrameTrain
        className="frame-radio"
        value={frame}
        onChange={changeFrame}
        optionList={frameList}
        suffix={showExtraDecorativeOption && <UnofficialFrameTrain inline changeFrame={changeFrame} />}
    />;
});