import { Button, Input, Popover } from 'antd';
import { PopoverButton, RadioTrain, StyledDropdown } from 'src/component';
import { useCard, useLanguage, useSetting, WithLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { CaretDownOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { StarButtonList, getSTIconButtonList } from '../const';
import { getCardIconFromFrame } from 'src/util';
import styled from 'styled-components';
import { IconTypeAttributeList, IconTypeList, IconTypeStList, TotalIconTypeMap } from 'src/model';
import { StarPicker, StarPickerRef, StarTypeSelector, StyledIconDropdown } from '../star-picker';

const TypeWithIconContainer = styled.div`
    .icon-image {
        width: 26px;
        height: 26px;
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
const CustomStarContainer = styled.div`
    display: flex;
    align-items: center;
    .custom-star-preview {
        display: inline-flex;
        line-height: 0;
        align-items: center;
        background-color: var(--main-level-1);
        padding: var(--spacing-xs);
        border-radius: var(--br);
        .star-preview-entry {
            margin-right: var(--spacing-xs);
            .icon-image {
                max-width: 22px; // Alignment
                max-height: 22px; // Alignment
            }
            .anticon-close-circle {
                font-size: var(--fs-xl);
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
    .custom-star-content {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-sm);
        margin-right: var(--spacing-sm);
    }
`;

type CardIconAlignmentPicker = {
    value: string,
    onChange: (value: string) => void,
} & WithLanguage;
const CardIconAlignmentPicker = ({
    language,
    value,
    onChange,
}: CardIconAlignmentPicker) => {
    return <RadioTrain
        value={value}
        onChange={onChange}
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
    />;
};

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
        starList,
        starAlignment,
        getUpdater,
    } = useCard(useShallow(({
        card: {
            frame,
            subFamily,
            cardIcon,
            star,
            starList,
            starAlignment,
        },
        getUpdater,
    }) => ({
        frame,
        subFamily,
        cardIcon,
        star,
        starList,
        starAlignment,
        getUpdater,
    })));
    const reduceColorMotion = useSetting(state => state.setting.reduceMotionColor);
    const starPickerRef = useRef<StarPickerRef>(null);

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
        value: iconType,
    } = iconTypeData ?? TotalIconTypeMap['level'];
    const iconDropdownText = typeof labelKey === 'string'
        ? language[labelKey]
        : labelKey({ language });
    const IconDropdownLabel = showCreativeOption
        ? <TypeWithIconContainer>{showIcon ? icon : null} {iconDropdownText} <CaretDownOutlined /></TypeWithIconContainer>
        : iconDropdownText;
    const IconDropdown = <Popover key="icon-type-picker"
        trigger={['click']}
        overlayClassName="global-input-overlay"
        content={<StarTypeSelector
            language={language}
            activeCardIcon={cardIcon}
            onChange={value => {
                changeCardIcon(value);
                if (value === 'custom') starPickerRef.current?.changeStatus('open');
            }}
        />}
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
    return <>
        <StarPicker ref={starPickerRef} language={language} />
        {cardIcon === 'auto' && autoIconType === 'none'
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
                    <PopoverButtonInCardIconInput
                        $softMode={reduceColorMotion}
                        className={showCreativeOption ? '' : 'disabled'}
                        onClick={() => {
                            changeCardIcon('custom');
                            starPickerRef.current?.changeStatus('open');
                        }}
                    >
                        {language['input.icon-type.custom.label']}
                    </PopoverButtonInCardIconInput>
                </>
                : null
            : iconType === 'st'
                ? <RadioTrain className="fill-input-train" value={subFamily} onChange={changeSubFamily} optionList={getSTIconButtonList(language)}>
                    {DropdownChildren}
                </RadioTrain>
                : iconType === 'custom'
                    ? <CustomStarContainer className="custom-star-picker">
                        <label className="standalone-addon ant-input-group-addon">{DropdownChildren}</label>
                        <div className="custom-star-content">
                            {starList.length > 0
                                ? <div className="custom-star-preview">
                                    {starList.map((entry, index) => {
                                        const iconEntry = TotalIconTypeMap[entry];

                                        return <span key={`${entry}-${index}`} className="star-preview-entry">
                                            {iconEntry ? iconEntry.icon : <CloseCircleOutlined />}
                                        </span>;
                                    })}
                                </div>
                                : null}
                            <Button
                                size="small" 
                                onClick={() => {
                                    changeCardIcon('custom');
                                    starPickerRef.current?.changeStatus('open');
                                }}
                            >{language['generic.edit.label']}</Button>
                        </div>
                    </CustomStarContainer>
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
                            <CardIconAlignmentPicker
                                language={language}
                                value={starAlignment}
                                onChange={changeStarAlignment}
                            />
                        </div>}
                    >
                        {DropdownChildren}
                    </StyledCheckboxStarTrain>}
    </>;
});