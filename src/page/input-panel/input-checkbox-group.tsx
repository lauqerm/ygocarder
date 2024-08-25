import { useCallback } from 'react';
import { Checkbox, Tooltip } from 'antd';
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
export const CardCheckboxGroup = (_: CardCheckboxGroup) => {
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

        return { ...currentCard, isFirstEdition: nextValue };
    }), [setCard]);
    const onDuelTerminalCardChange = useCallback((e: any) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isDuelTerminalCard: nextValue,
            isSpeedCard: nextValue ? false : currentCard.isSpeedCard,
        };
    }), [setCard]);
    const onSpeedCardChange = useCallback((e: any) => setCard(currentCard => {
        const nextValue = e.target.checked;

        return {
            ...currentCard,
            isSpeedCard: e.target.checked,
            isDuelTerminalCard: nextValue ? false : currentCard.isDuelTerminalCard,
        };
    }), [setCard]);

    return <StyledCheckboxGroup className="checkbox-input">
        <Checkbox
            className="input-1st"
            onChange={onFirstEditionChange}
            checked={isFirstEdition}
        >
            {'1st Edition'}
        </Checkbox>
        <Tooltip overlayClassName="long-tooltip-overlay" overlay="Will turn off Duel Terminal mark.">
            <Checkbox
                className="input-speed"
                onChange={onSpeedCardChange}
                checked={isSpeedCard}
            >
                {'Speed'}
            </Checkbox>
        </Tooltip>
        <Tooltip overlayClassName="long-tooltip-overlay" overlay="Will turn off Speed Duel mark.">
            <Checkbox
                className="input-terminal"
                onChange={onDuelTerminalCardChange}
                checked={isDuelTerminalCard}
            >
                {'Duel Terminal'}
            </Checkbox>
        </Tooltip>
    </StyledCheckboxGroup>;
};