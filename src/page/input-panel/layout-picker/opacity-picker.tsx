import { Popover, InputNumber } from 'antd';
import { CombinedSliderContainer, GuardedSlider, PopoverButton } from 'src/component';
import { CardOpacity, OpacityList } from 'src/model';
import { useCard, useLanguage, useSetting } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

const OpacityInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: var(--spacing-sm);
    gap: var(--spacing-sm);
`;

export type OpacityPicker = {
    value: Partial<CardOpacity>,
    onChange: React.Dispatch<React.SetStateAction<CardOpacity>>,
};
export const OpacityPicker = ({
    value,
    onChange,
}: OpacityPicker) => {
    const language = useLanguage();
    const reduceMotionColor = useSetting(state => state.setting.reduceMotionColor);
    const {
        isPendulum,
    } = useCard(useShallow(({
        card: {
            isPendulum,
        },
    }) => ({
        isPendulum,
    })));

    const { name, text, pendulum, body } = value;
    const isActive = (typeof name === 'number' && name < 100)
        || (typeof text === 'number' && text < 100)
        || (typeof pendulum === 'number' && pendulum < 100)
        || (typeof body === 'number' && body < 100);
    return <Popover
        overlayClassName={[
            'global-input-overlay global-style-picker-overlay',
        ].join(' ')}
        content={<div className="overlay-event-absorber">
            <OpacityInputContainer className="opacity-input-container">
                {OpacityList.map(({ labelKey, type }) => {
                    if (type === 'pendulum' && !isPendulum) return null;
                    return <CombinedSliderContainer key={type}
                        className={[
                            'card-opacity-slider',
                        ].join(' ')}
                    >
                        <div className="slider-label">
                            {language[labelKey]}
                        </div>
                        <InputNumber
                            size="small"
                            min={0}
                            max={100}
                            onChange={value => onChange(cur => ({ ...cur, [type]: typeof value === 'number' ? value : 100 }))}
                            value={value[type] ?? 100}
                        />
                        <GuardedSlider
                            min={0}
                            max={100}
                            step={5}
                            onChange={value => onChange(cur => ({ ...cur, [type]: value }))}
                            value={value[type] ?? 100}
                        />
                        <div className="slider-padding" />
                    </CombinedSliderContainer>;
                })}
            </OpacityInputContainer>
        </div>}
        placement="bottom"
    >
        <PopoverButton className="opacity-label" $softMode={reduceMotionColor} $active={isActive}>
            {language['input.opacity.label']}
        </PopoverButton>
    </Popover>;
};