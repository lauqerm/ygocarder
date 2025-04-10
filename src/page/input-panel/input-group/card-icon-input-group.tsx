import { Input, Popover } from 'antd';
import { RadioTrain, StyledDropdown } from 'src/component';
import { useCard, useLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { CaretDownOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { StarButtonList, getSTIconButtonList } from '../const';
import { getCardIconFromFrame } from 'src/util';
import styled from 'styled-components';
import { IconTypeList, IconTypeMap } from 'src/model';

const StyledIconDropdown = styled(StyledDropdown.Container)`
    img.icon-image {
        width: var(--fs-lg);
    }
`;
const StyledCheckboxStarTrain = styled(RadioTrain)`
    .custom-star-input {
        width: 7rem;
    }
    .checkbox-star-suffix {
        display: flex;
        flex-wrap: wrap;
        column-gap: var(--spacing-sm);
        row-gap: var(--spacing-xxs);
        margin-left: var(--spacing-sm);
    }
`;

export type CardIconInputGroupRef = {}
export type CardIconInputGroup = {
    showCreativeOption: boolean,
};
export const CardIconInputGroup = forwardRef<CardIconInputGroupRef, CardIconInputGroup>(({
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

    const changeCardIcon = useMemo(() => getUpdater('cardIcon'), [getUpdater]);
    const changeSubFamily = useMemo(() => getUpdater('subFamily'), [getUpdater]);
    const changeStar = useMemo(() => getUpdater('star'), [getUpdater]);
    const changeStarAlignment = useMemo(() => getUpdater('starAlignment'), [getUpdater]);

    useImperativeHandle(ref, () => ({}));

    const autoIconType = getCardIconFromFrame(frame);
    const iconTypeData = cardIcon === 'auto'
        ? IconTypeMap[autoIconType === 'none' ? 'auto' : autoIconType]
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
    return cardIcon === 'auto' && autoIconType === 'none'
        ? showCreativeOption
            ? <RadioTrain
                className="fill-input-train"
                value={cardIcon}
                onChange={changeCardIcon}
                optionList={IconTypeList.map(({ icon, value, fullLabelKey }) => {
                    return {
                        label: icon ?? <CloseCircleOutlined />,
                        value,
                        tooltipProps: {
                            title: language[fullLabelKey],
                        },
                    };
                })}
            >
                {DropdownChildren}
            </RadioTrain>
            : null
        : iconTypeData.value === 'st'
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
            </StyledCheckboxStarTrain>;
});