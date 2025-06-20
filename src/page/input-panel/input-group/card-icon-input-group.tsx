import { Input, Popover } from 'antd';
import { PopoverButton, RadioTrain, StyledDropdown } from 'src/component';
import { useCard, useLanguage, useSetting } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { CaretDownOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { StarButtonList, getSTIconButtonList } from '../const';
import { getCardIconFromFrame } from 'src/util';
import styled from 'styled-components';
import { IconTypeAttributeList, IconTypeList, IconTypeStList, TotalIconTypeMap } from 'src/model';

const TypeWithIconContainer = styled.div`
    .icon-image {
        width: 26px;
        height: 26px;
    }
`;
const IconDropdownContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--spacing-px);
    background-color: var(--sub-level-1);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    .container-group {
        box-shadow: none;
        border: none;
        border-radius: 0;
    }
`;
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
const PopoverButtonInCardIconInput = styled(PopoverButton)`
    margin-left: var(--spacing-sm);
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
    const reduceColorMotion = useSetting(state => state.setting.reduceMotionColor);

    const changeCardIcon = useMemo(() => getUpdater('cardIcon'), [getUpdater]);
    const changeSubFamily = useMemo(() => getUpdater('subFamily'), [getUpdater]);
    const changeStar = useMemo(() => getUpdater('star'), [getUpdater]);
    const changeStarAlignment = useMemo(() => getUpdater('starAlignment'), [getUpdater]);

    useImperativeHandle(ref, () => ({}));

    const autoIconType = getCardIconFromFrame(frame);
    const iconTypeData = cardIcon === 'auto'
        ? TotalIconTypeMap[autoIconType === 'none' ? 'auto' : autoIconType]
        : TotalIconTypeMap[cardIcon];
    const {
        labelKey,
        icon,
        showIcon,
    } = iconTypeData;
    const iconDropdownText = typeof labelKey === 'string'
        ? language[labelKey]
        : labelKey({ language });
    const IconDropdownLabel = showCreativeOption
        ? <TypeWithIconContainer>{showIcon ? icon : null} {iconDropdownText} <CaretDownOutlined /></TypeWithIconContainer>
        : iconDropdownText;
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="global-input-overlay"
        content={<IconDropdownContainer className="overlay-event-absorber">
            <StyledIconDropdown className="container-group container-star">
                {IconTypeList.map(({ fullLabelKey, value, icon }) => {
                    return <StyledDropdown.Option key={value}
                        className={value === cardIcon ? 'menu-active' : ''}
                        onClick={() => changeCardIcon(value)}
                    >
                        {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                    </StyledDropdown.Option>;
                })}
            </StyledIconDropdown>
            <StyledIconDropdown className="container-group container-attribute">
                {IconTypeAttributeList.map(({ fullLabelKey, value, icon }) => {
                    return <StyledDropdown.Option key={value}
                        className={value === cardIcon ? 'menu-active' : ''}
                        onClick={() => changeCardIcon(value)}
                    >
                        {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                    </StyledDropdown.Option>;
                })}
            </StyledIconDropdown>
            <StyledIconDropdown className="container-group container-icon">
                {IconTypeStList.map(({ fullLabelKey, value, icon }) => {
                    return <StyledDropdown.Option key={value}
                        className={value === cardIcon ? 'menu-active' : ''}
                        onClick={() => changeCardIcon(value)}
                    >
                        {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                    </StyledDropdown.Option>;
                })}
            </StyledIconDropdown>
        </IconDropdownContainer>}
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
            ? <>
                <RadioTrain
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
                <Popover
                    trigger={['click']}
                    overlayClassName="global-input-overlay"
                    content={<div className="overlay-event-absorber">
                        <StyledIconDropdown className="container-group container-attribute">
                            {IconTypeAttributeList.map(({ fullLabelKey, value, icon }) => {
                                return <StyledDropdown.Option key={value}
                                    className={value === cardIcon ? 'menu-active' : ''}
                                    onClick={() => changeCardIcon(value)}
                                >
                                    {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                                </StyledDropdown.Option>;
                            })}
                        </StyledIconDropdown>
                    </div>}
                >
                    <PopoverButtonInCardIconInput
                        $softMode={reduceColorMotion}
                        className={showCreativeOption ? '' : 'disabled'}
                    >
                        {language['input.attribute.label']}
                    </PopoverButtonInCardIconInput>
                </Popover>
                <Popover
                    trigger={['click']}
                    overlayClassName="global-input-overlay"
                    content={<div className="overlay-event-absorber">
                        <StyledIconDropdown className="container-group container-icon">
                            {IconTypeStList.map(({ fullLabelKey, value, icon }) => {
                                return <StyledDropdown.Option key={value}
                                    className={value === cardIcon ? 'menu-active' : ''}
                                    onClick={() => changeCardIcon(value)}
                                >
                                    {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                                </StyledDropdown.Option>;
                            })}
                        </StyledIconDropdown>
                    </div>}
                >
                    <PopoverButtonInCardIconInput
                        $softMode={reduceColorMotion}
                        className={showCreativeOption ? '' : 'disabled'}
                    >
                        {language['input.attribute.spell']}&nbsp;/&nbsp;{language['input.attribute.trap']}
                    </PopoverButtonInCardIconInput>
                </Popover>
            </>
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