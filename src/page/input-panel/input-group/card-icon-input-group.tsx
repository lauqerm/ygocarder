import { Input, Popover } from 'antd';
import { RadioTrain } from '../input-train';
import { StyledDropdown } from 'src/component';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { IconTypeList, IconTypeMap, StarButtonList, getSTIconButtonList } from '../const';
import { checkDarkSynchro, checkXyz } from 'src/util';
import styled from 'styled-components';

const StyledIconDropdown = styled(StyledDropdown.Container)`
    img {
        max-height: 1.3em;
    }
`;
const StyledCheckboxStarTrain = styled(RadioTrain)`
    .custom-star-input {
        margin-left: var(--spacing-sm);
        width: 5rem;
    }
`;

export type CardIconInputGroupRef = {}
export type CardIconInputGroup = {
    isLink: boolean,
    isMonster: boolean,
    showCreativeOption: boolean,
};
export const CardIconInputGroup = forwardRef<CardIconInputGroupRef, CardIconInputGroup>(({
    isLink,
    isMonster,
    showCreativeOption,
}, ref) => {
    const language = useLanguage();
    const {
        frame,
        subFamily,
        cardIcon,
        star,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            frame,
            subFamily,
            cardIcon,
            star,
        },
        getUpdater,
    }) => ({
        frame,
        subFamily,
        cardIcon,
        star,
        getUpdater,
    })));
    const isDarkSynchro = checkDarkSynchro({ frame });
    const isXyz = checkXyz({ frame });

    const changeCardIcon = useMemo(() => getUpdater('cardIcon'), [getUpdater]);
    const changeSubFamily = useMemo(() => getUpdater('subFamily'), [getUpdater]);
    const changeStar = useMemo(() => getUpdater('star'), [getUpdater]);

    useImperativeHandle(ref, () => ({}));

    const iconTypeData = cardIcon === 'auto'
        ? IconTypeMap[isMonster
            ? isXyz ? 'rank' : isDarkSynchro ? 'negative-level' : 'level'
            : 'st'
        ]
        : IconTypeMap[cardIcon];
    const iconDropdownText = language[iconTypeData.labelKey];
    const IconDropdownLabel = showCreativeOption
        ? <>{iconDropdownText} <CaretDownOutlined /></>
        : iconDropdownText;
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="input-overlay pattern-picker-overlay"
        content={<div className="overlay-event-absorber">
            <StyledIconDropdown>
                {IconTypeList.map(({ fullLabelKey, value, icon }) => {
                    return <StyledDropdown.Option key={value}
                        className={value === cardIcon ? 'menu-active' : ''}
                        onClick={() => changeCardIcon(value)}
                    >
                        {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                    </StyledDropdown.Option>;
                })}
            </StyledIconDropdown>
        </div>}
        placement="bottomRight"
    >
        <span
            className={`card-icon-dropdown ${cardIcon === 'auto' ? '' : 'active'} ${showCreativeOption ? '' : 'disabled'}`}
        >
            {IconDropdownLabel}
        </span>
    </Popover>;
    const DropdownChildren = showCreativeOption
        ? IconDropdown
        : IconDropdownLabel;
    return !isLink
        ? iconTypeData.value === 'st'
            ? <RadioTrain className="fill-input-train" value={subFamily} onChange={changeSubFamily} optionList={getSTIconButtonList(language)}>
                {DropdownChildren}
            </RadioTrain>
            : <StyledCheckboxStarTrain
                className="checkbox-star-train"
                value={star}
                onChange={changeStar}
                optionList={StarButtonList}
                strict={true}
                suffix={showCreativeOption && <Input
                    className="custom-star-input"
                    value={typeof star === 'number' ? '' : star}
                    onChange={changeStar}
                />}
            >
                {DropdownChildren}
            </StyledCheckboxStarTrain>
        : null;
});