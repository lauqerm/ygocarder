import { Popover } from 'antd';
import { RadioTrain } from '../input-train';
import { StyledDropdown } from 'src/component';
import { useCard } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { IconTypeList, IconTypeMap, StarButtonList, STIconButtonList } from '../const';
import { checkDarkSynchro, checkXyz } from 'src/util';

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
    const IconDropdownLabel = showCreativeOption
        ? <>{iconTypeData.label} <CaretDownOutlined /></>
        : iconTypeData.label;
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="input-overlay pattern-picker-overlay"
        content={<div className="overlay-event-absorber">
            <StyledDropdown.Container>
                {IconTypeList.map(({ fullLabel, value }) => {
                    return <StyledDropdown.Option key={value}
                        className={value === cardIcon ? 'menu-active' : ''}
                        onClick={() => changeCardIcon(value)}
                    >
                        {fullLabel}
                    </StyledDropdown.Option>;
                })}
            </StyledDropdown.Container>
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
            ? <RadioTrain value={subFamily} onChange={changeSubFamily} optionList={STIconButtonList}>
                {DropdownChildren}
            </RadioTrain>
            : <RadioTrain className="checkbox-star-train" value={`${star}`} onChange={changeStar} optionList={StarButtonList}>
                {DropdownChildren}
            </RadioTrain>
        : null;
});