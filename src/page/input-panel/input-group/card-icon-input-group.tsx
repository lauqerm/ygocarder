import { Input, Popover } from 'antd';
import { RadioTrain } from '../input-train';
import { StyledDropdown } from 'src/component';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { CaretDownOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
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
        width: 6.5rem;
    }
    .checkbox-star-suffix {
        display: grid;
        grid-template-columns: max-content max-content;
        column-gap: var(--spacing-sm);
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
        starAlignment,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            frame,
            subFamily,
            cardIcon,
            star,
            starAlignment,
        },
        getUpdater,
    }) => ({
        frame,
        subFamily,
        cardIcon,
        star,
        starAlignment,
        getUpdater,
    })));
    const isDarkSynchro = checkDarkSynchro({ frame });
    const isXyz = checkXyz({ frame });

    const changeCardIcon = useMemo(() => getUpdater('cardIcon'), [getUpdater]);
    const changeSubFamily = useMemo(() => getUpdater('subFamily'), [getUpdater]);
    const changeStar = useMemo(() => getUpdater('star'), [getUpdater]);
    const changeStarAlignment = useMemo(() => getUpdater('starAlignment'), [getUpdater]);

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
        overlayClassName="global-input-overlay pattern-picker-overlay"
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
                suffix={showCreativeOption && <div className="checkbox-star-suffix">
                    <Input
                        className="custom-star-input"
                        value={typeof star === 'number' ? '' : star}
                        allowClear
                        onChange={changeStar}
                        placeholder={language['input.icon-type.custom.placeholder']}
                    />
                    <RadioTrain
                        value={starAlignment}
                        onChange={changeStarAlignment}
                        optionList={[
                            {
                                value: 'auto',
                                tooltipProps: { overlay: language['input.icon-type.alignment.auto'] },
                                label: <CloseCircleOutlined />,
                            },
                            {
                                value: 'left',
                                tooltipProps: { overlay: language['input.icon-type.alignment.left'] },
                                label: <AlignLeftOutlined />,
                            },
                            {
                                value: 'center',
                                tooltipProps: { overlay: language['input.icon-type.alignment.center'] },
                                label: <AlignCenterOutlined />,
                            },
                            {
                                value: 'right',
                                tooltipProps: { overlay: language['input.icon-type.alignment.right'] },
                                label: <AlignRightOutlined />,
                            },
                        ]}
                    />
                </div>}
            >
                {DropdownChildren}
            </StyledCheckboxStarTrain>
        : null;
});