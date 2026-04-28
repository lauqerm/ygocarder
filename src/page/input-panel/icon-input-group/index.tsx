import { Button, Input, Popover } from 'antd';
import { PopoverButton, RadioTrain, StyledDropdown } from 'src/component';
import { useCard, useCardCanvas, useLanguage, useSetting, WithLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { CaretDownOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { StarButtonList, getSTIconButtonList } from '../const';
import { getCardIconFromFrame } from 'src/util';
import styled from 'styled-components';
import { IconTypeAttributeList, IconTypeList, IconTypeStList, TotalIconTypeMap } from 'src/model';
import { IconPicker, IconPickerRef, IconTypePicker, StyledIconDropdown } from './icon-picker';
import { IconImageInput, IconImageInputRef } from './icon-image-input';

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
            width: 22px; // Alignment
            height: 22px; // Alignment
            .icon-image {
                max-width: 22px; // Alignment
                max-height: 22px; // Alignment
            }
            .anticon-close-circle {
                font-size: var(--fs-xl);
                margin-top: 1px; // Alignment
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

export type IconInputGroupRef = Pick<IconImageInputRef, 'isLoading' | 'setValue'>;
export type IconInputGroup = {
    showCreativeOption: boolean,
} & Pick<IconImageInput, 'receivingCanvas' | 'onSourceLoaded' | 'onTainted'>;
export const IconInputGroup = forwardRef<IconInputGroupRef, IconInputGroup>(({
    showCreativeOption,
    receivingCanvas,
    onTainted,
    onSourceLoaded,
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
    const reduceMotionColor = useSetting(state => state.setting.reduceMotionColor);
    const iconPickerRef = useRef<IconPickerRef>(null);
    const iconImageInputInDropdownRef = useRef<IconImageInputRef>(null);
    const iconImageInputInModalRef = useRef<IconImageInputRef>(null);
    const { cardIconImage } = useCardCanvas(useShallow(({
        canvasDataMap,
    }) => ({
        cardIconImage: canvasDataMap.iconImage,
    })));

    const changeCardIcon = useMemo(() => getUpdater('cardIcon'), [getUpdater]);
    const changeSubFamily = useMemo(() => getUpdater('subFamily'), [getUpdater]);
    const changeStar = useMemo(() => getUpdater('star'), [getUpdater]);
    const changeStarAlignment = useMemo(() => getUpdater('starAlignment'), [getUpdater]);

    useImperativeHandle(ref, () => ({
        setValue: ({ iconImage, iconImageCrop, iconImageData, iconImageSource }) => {
            iconImageInputInDropdownRef.current?.setValue({ iconImage, iconImageCrop, iconImageData, iconImageSource });
            iconImageInputInModalRef.current?.setValue({ iconImage, iconImageCrop, iconImageData, iconImageSource });
        },
        isLoading: () => {
            return (iconImageInputInDropdownRef.current?.isLoading() ?? false)
                || (iconImageInputInModalRef.current?.isLoading() ?? false);
        },
    }));

    const onUserChange: NonNullable<IconImageInput['onUserChange']> = useCallback(() => {
        changeCardIcon('user-defined');
    }, [changeCardIcon]);
    const triggerCustomIcon = () => {
        changeCardIcon('custom');
        iconPickerRef.current?.changeStatus('open');
        iconImageInputInModalRef.current?.syncValue();
    };
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
        content={<IconTypePicker
            language={language}
            activeCardIcon={cardIcon}
            onChange={value => {
                if (value === 'custom') {
                    triggerCustomIcon();
                } else {
                    changeCardIcon(value);
                }
            }}
        >
            <IconImageInput
                ref={iconImageInputInDropdownRef}
                receivingCanvas={receivingCanvas}
                onTainted={onTainted}
                onUserChange={onUserChange}
                onSourceLoaded={onSourceLoaded}
            />
        </IconTypePicker>}
        onVisibleChange={visible => {
            if (visible) iconImageInputInDropdownRef.current?.syncValue();
        }}
        placement="bottom"
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
        <IconPicker
            ref={iconPickerRef}
            language={language}
        >
            <IconImageInput
                ref={iconImageInputInModalRef}
                receivingCanvas={receivingCanvas}
                onTainted={onTainted}
                onUserChange={onUserChange}
                onSourceLoaded={onSourceLoaded}
            />
        </IconPicker>
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
                            $softMode={reduceMotionColor}
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
                            $softMode={reduceMotionColor}
                            className={showCreativeOption ? '' : 'disabled'}
                        >
                            {language['input.attribute.spell']}&nbsp;/&nbsp;{language['input.attribute.trap']}
                        </PopoverButtonInCardIconInput>
                    </Popover>
                    <PopoverButtonInCardIconInput
                        $softMode={reduceMotionColor}
                        className={showCreativeOption ? '' : 'disabled'}
                        onClick={triggerCustomIcon}
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
                                        const iconEntry = entry === 'user-defined' && cardIconImage
                                            ? {
                                                icon: <img className="icon-image" src={cardIconImage} alt={'User-defined icon'} />
                                            }
                                            : TotalIconTypeMap[entry];

                                        return <span key={`${entry}-${index}`} className="star-preview-entry">
                                            {iconEntry ? iconEntry.icon : <CloseCircleOutlined />}
                                        </span>;
                                    })}
                                </div>
                                : null}
                            <Button
                                size="small" 
                                onClick={triggerCustomIcon}
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