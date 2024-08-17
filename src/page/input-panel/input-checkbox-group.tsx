import { memo, useCallback } from 'react';
import { Checkbox } from 'antd';
import { useCard } from '../../service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

const StyledCheckboxGroup = styled.div`
    align-self: center;
    text-align: right;
    .ant-checkbox + span {
        user-select: none;
    }
`;

export type CardCheckboxGroup = {};
export const CardCheckboxGroup = memo((_: CardCheckboxGroup) => {
    const {
        isDuelTerminalCard,
        isFirstEdition,
        isSpeedCard,
        setCard,
    } = useCard(useShallow(({
        card,
        setCard,
    }) => ({
        isSpeedCard: card.isSpeedCard,
        isDuelTerminalCard: card.isDuelTerminalCard,
        isFirstEdition: card.isFirstEdition,
        setCard,
    })));

    const onFirstEditionChange = useCallback((e: any) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isFirstEdition: nextValue,
            isDuelTerminalCard: nextValue ? false : currentCard.isDuelTerminalCard,
        };
    }), [setCard]);
    const onDuelTerminalCardChange = useCallback((e: any) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isDuelTerminalCard: nextValue,
            isFirstEdition: nextValue ? false : currentCard.isFirstEdition,
        };
    }), [setCard]);
    const onSpeedCardChange = useCallback((e: any) => setCard(currentCard => {
        return { ...currentCard, isSpeedCard: e.target.checked };
    }), [setCard]);

    return <StyledCheckboxGroup className="checkbox-input">
        <Checkbox
            className="input-1st"
            onChange={onFirstEditionChange}
            checked={isFirstEdition}
        >
            {'1st Edition'}
        </Checkbox>
        <Checkbox
            className="input-speed"
            onChange={onSpeedCardChange}
            checked={isSpeedCard}
        >
            {'Speed'}
        </Checkbox>
        <Checkbox
            className="input-terminal"
            onChange={onDuelTerminalCardChange}
            checked={isDuelTerminalCard}
        >
            {'Duel Terminal'}
        </Checkbox>
    </StyledCheckboxGroup>;
});