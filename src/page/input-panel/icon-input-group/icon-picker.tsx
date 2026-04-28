import { Button, Checkbox, Modal } from 'antd';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import {
    IconTypeAttributeList,
    IconTypeInfo,
    IconTypeList,
    IconTypeMap,
    IconTypeStList,
    MAX_STAR_LENGTH,
    NORMAL_STAR_LENGTH,
    TotalIconTypeMap,
} from 'src/model';
import { useCard, useCardCanvas, WithLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { CloseCircleOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { StyledDropdown } from 'src/component';
import { mergeClass, padRight } from 'src/util';

const IconDropdownOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    cursor: not-allowed;
    z-index: 2;
`;
export const StyledIconDropdown = styled(StyledDropdown.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
    > label {
        margin: 0 var(--spacing-xs);
    }
`;
export const IconDropdownContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.5fr;
    gap: var(--spacing-px);
    background-color: var(--sub-level-1);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    overflow: hidden;
    position: relative;
    .container-group {
        box-shadow: none;
        border: none;
        border-radius: 0;
    }
    .card-image-cropper {
        width: 225px;
        grid-template-columns: 1fr;
        gap: var(--spacing);
        margin: 0 var(--spacing-xs);
        --max-image-height: 200px;
    }
    &.selector-disabled {
        filter: opacity(0.65) grayscale(0.85);
    }
`;
export type IconTypePickerRef = {};
export type IconTypePicker = {
    disabled?: boolean,
    children?: React.ReactNode,
    className?: string,
    activeCardIcon: string,
    onChange: (value: string) => void,
    onRemove?: () => void,
    showMixableOnly?: boolean,
    showRemove?: boolean,
} & WithLanguage;
export const IconTypePicker = forwardRef<IconTypePickerRef, IconTypePicker>(({
    children,
    disabled = false,
    className,
    language,
    activeCardIcon,
    showMixableOnly = false,
    showRemove = false,
    onChange,
    onRemove,
}, _ref) => {
    const filterFunction = showMixableOnly ? (entry: IconTypeInfo) => entry.isMixable : () => true;

    return <IconDropdownContainer
        className={mergeClass('icon-dropdown-container overlay-event-absorber', disabled ? 'selector-disabled' : '', className)}
    >
        {disabled && <IconDropdownOverlay className="container-disable-overlay" />}
        <StyledIconDropdown className="container-group container-star">
            {showRemove && <StyledDropdown.Option
                onClick={() => onRemove?.()}
            >
                <CloseCircleOutlined />&nbsp;{language['input.icon-type.remove.label']}
            </StyledDropdown.Option>}
            {IconTypeList.filter(filterFunction).map(({ fullLabelKey, value, icon }) => {
                return <StyledDropdown.Option key={value}
                    className={value === activeCardIcon ? 'menu-active' : ''}
                    onClick={() => onChange(value)}
                >
                    {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                </StyledDropdown.Option>;
            })}
        </StyledIconDropdown>
        <StyledIconDropdown className="container-group container-attribute">
            {IconTypeAttributeList.filter(filterFunction).map(({ fullLabelKey, value, icon }) => {
                return <StyledDropdown.Option key={value}
                    className={value === activeCardIcon ? 'menu-active' : ''}
                    onClick={() => onChange(value)}
                >
                    {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                </StyledDropdown.Option>;
            })}
        </StyledIconDropdown>
        <StyledIconDropdown className="container-group container-icon">
            {IconTypeStList.filter(filterFunction).map(({ fullLabelKey, value, icon }) => {
                return <StyledDropdown.Option key={value}
                    className={value === activeCardIcon ? 'menu-active' : ''}
                    onClick={() => onChange(value)}
                >
                    {icon ? <>{icon}&nbsp;</> : null}{language[fullLabelKey]}
                </StyledDropdown.Option>;
            })}
        </StyledIconDropdown>
        <StyledIconDropdown className="container-group container-user-defined">
            {disabled && <IconDropdownOverlay className="container-disable-overlay" />}
            <Checkbox
                checked={activeCardIcon === 'user-defined'}
                onChange={e => onChange(e.target.checked ? 'user-defined' : IconTypeMap['auto'].value)}
            >
                {language['input.icon-type.user-defined.label']}
            </Checkbox>
            {children}
        </StyledIconDropdown>
    </IconDropdownContainer>;
});

const IconListSelectPanel = styled.div`
    margin-bottom: var(--spacing);
`;
const IconListControlPanel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`;
const IconListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 2rem);
    gap: var(--spacing-xs);
    align-items: center;
    text-align: center;
    margin-bottom: var(--spacing-sm);
    line-height: 0;
    .star-value {
        display: inline-flex;
        height: 2rem;
        width: 2rem;;
        align-items: center;
        justify-content: center;
        background-color: var(--main-level-1);
        border-radius: var(--br-lg);
        margin-top: var(--spacing-xs);
        cursor: pointer;
        border: var(--bw) solid transparent;
        .anticon-close-circle {
            font-size: var(--fs-lg)
        }
    }
    .icon-image {
        max-width: 1.5rem; // Alignment
        max-height: 1.5rem;; // Alignment
    }
    .entry-active {
        .star-value {
            border-color: var(--main-active);
        }
    }
    .entry-disable {
        filter: opacity(0.65) grayscale(0.85);
        * {
            cursor: not-allowed;
        }
    }
    :not(.entry-disable) .star-value:hover {
        border-color: var(--sub-active);
    }
`;
const StyledIconTypePicker = styled(IconTypePicker)`
    grid-template-columns: 1fr 1fr 1fr;
    .container-user-defined {
        min-height: 175px;
        grid-column: span 3;
    }
    .card-image-cropper {
        width: unset;
        grid-template-columns: 1fr 1fr;
    }
`;

export type IconPickerRef = {
    changeStatus: (status: 'open' | 'close' | 'toggle') => void,
};
export type IconPicker = {
    children?: React.ReactNode,
} & WithLanguage;
export const IconPicker = forwardRef<IconPickerRef, IconPicker>(({
    children,
    language,
}, ref) => {
    const {
        starList,
        setCard,
    } = useCard(useShallow(({
        card: {
            starList,
        },
        setCard,
    }) => ({
        starList,
        setCard,
    })));
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(true);
    const changeIconList = useMemo(() => (transformer: string[] | ((prev: string[]) => string[])) => {
        setCard(card => {
            const nextIconList = Array.isArray(transformer) ? transformer : transformer(card.starList);

            return {
                ...card,
                starList: nextIconList,
            };
        });
    }, [setCard]);
    const [{
        slotList,
        use12,
    }, setSlot] = useState(() => {
        const slotList: { slot: string, index: number, disabled: boolean }[] = [];
        const use12 = starList.length <= NORMAL_STAR_LENGTH ? true : false;
        for (let cnt = 0; cnt < MAX_STAR_LENGTH; cnt++) {
            slotList.push({ slot: `slot-${cnt}`, index: cnt, disabled: false });
        }
        if (use12) slotList[MAX_STAR_LENGTH - 1].disabled = true;

        return {
            slotList,
            use12,
        };
    });
    const [activeInformation, setActiveInformation] = useState({
        activeList: [] as number[],
    });
    const iconTypePickerRef = useRef<IconTypePickerRef>(null);
    const { cardIconImage } = useCardCanvas(useShallow(({
        canvasDataMap,
    }) => ({
        cardIconImage: canvasDataMap.iconImage,
    })));

    useImperativeHandle(ref, () => ({
        changeStatus: status => {
            if (status === 'open') {
                setVisible(true);
            } else if (status === 'close') {
                setVisible(false);
            } else if (status === 'toggle') {
                setVisible(cur => !cur);
            }
            setActiveInformation({ activeList: [] });
        },
    }));

    useEffect(() => {
        /** Force visible canvas so image cropper works properly. */
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 250);
        setTimeout(() => {
        }, 800);
    }, []);

    const {
        activeList
    } = activeInformation;
    return <Modal
        className={mergeClass('global-overlay global-no-close', hidden ? 'global-modal-hidden' : '')}
        mask={hidden ? false : undefined}
        visible={visible}
        width={506}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        afterClose={() => setHidden(false)}
        cancelText={language['manager.template.button.cancel.label']}
    >
        <IconListSelectPanel className="star-list-control-panel">
            <Checkbox
                checked={use12}
                onChange={e => {
                    if (e.target.checked) {
                        setSlot(({ slotList }) => {
                            const nextSlotList: typeof slotList = [
                                ...slotList.slice(0, NORMAL_STAR_LENGTH),
                                { disabled: true, index: MAX_STAR_LENGTH - 1, slot: `slot-${MAX_STAR_LENGTH - 1}` }
                            ];

                            return { slotList: nextSlotList, use12: true };
                        });
                        changeIconList(currentIconList => currentIconList.slice(0, NORMAL_STAR_LENGTH));
                        setActiveInformation(({ activeList }) => ({ activeList: activeList.filter(entry => entry !== MAX_STAR_LENGTH - 1) }));
                    } else {
                        setSlot(({ slotList }) => {
                            const nextSlotList: typeof slotList = [
                                ...slotList.slice(0, NORMAL_STAR_LENGTH),
                                { disabled: false, index: MAX_STAR_LENGTH - 1, slot: `slot-${MAX_STAR_LENGTH - 1}` }
                            ];

                            return { slotList: nextSlotList, use12: false };
                        });
                        changeIconList(currentIconList => padRight(currentIconList, MAX_STAR_LENGTH));
                    }
                }}
            >{language['input.icon-type.slot.use-12.label']}</Checkbox>
            <Button size="small" onClick={() => {
                setActiveInformation(cur => {
                    const nextActiveList = slotList
                        .filter(entry => !cur.activeList.includes(entry.index) && !entry.disabled)
                        .map(entry => entry.index);

                    return { activeList: nextActiveList };
                });
            }}>
                {language['input.icon-type.slot.revert.label']}
            </Button>
            &nbsp;
            <Button size="small" onClick={() => {
                setActiveInformation({ activeList: slotList.filter(entry => !entry.disabled).map(entry => entry.index) });
            }}>
                {language['input.icon-type.slot.select-all.label']}
            </Button>
            &nbsp;
            <Button size="small" onClick={() => {
                setActiveInformation({ activeList: [] });
            }}>
                {language['input.icon-type.slot.deselect-all.label']}
            </Button>
        </IconListSelectPanel>
        <IconListContainer className="star-list-container">
            {slotList.map(({ slot, index, disabled }) => {
                const slotValue = starList[index];
                const starInfo = slotValue === 'user-defined' && cardIconImage
                    ? {
                        icon: <img className="icon-image" src={cardIconImage} alt={'User-defined icon'} />
                    }
                    : TotalIconTypeMap[slotValue ?? ''];
                const active = activeList.includes(index);

                return <div key={slot}
                    className={mergeClass(
                        'star-list-entry',
                        active ? 'entry-active' : '',
                        disabled ? 'entry-disable' : '',
                    )}
                >
                    <div className="checkbox-container">
                        <Checkbox
                            disabled={disabled}
                            checked={active}
                            onChange={e => {
                                if (disabled) return;
                                const willChecked = e.target.checked;
                                if (willChecked) {
                                    setActiveInformation(cur => {
                                        const nextActiveList = [...cur.activeList, index];

                                        return { activeList: nextActiveList };
                                    });
                                } else {
                                    setActiveInformation(cur => {
                                        const nextActiveList = cur.activeList.filter(entry => entry !== index);

                                        return { activeList: nextActiveList };
                                    });
                                }
                            }}
                        />
                    </div>
                    <div
                        className="star-value"
                        onClick={() => {
                            if (disabled) return;
                            setActiveInformation({ activeList: [index] });
                        }}
                    >
                        {!starInfo ? <CloseCircleOutlined /> : starInfo.icon}
                    </div>
                </div>;
            })}
        </IconListContainer>
        <IconListControlPanel>
            <Button
                size="small"
                onClick={() => {
                    changeIconList(currentIconList => {
                        return [...currentIconList.slice(1, currentIconList.length), ''];
                    });
                    setActiveInformation({ activeList: [] });
                }}
            >
                <DoubleLeftOutlined />&nbsp;{language['input.icon-type.slot.shift-left.label']}
            </Button>
            <Button
                size="small"
                onClick={() => {
                    changeIconList(currentIconList => {
                        return ['', ...currentIconList.slice(0, currentIconList.length - 1)];
                    });
                    setActiveInformation({ activeList: [] });
                }}
            >
                {language['input.icon-type.slot.shift-right.label']}&nbsp;<DoubleRightOutlined />
            </Button>
        </IconListControlPanel>
        <StyledIconTypePicker
            ref={iconTypePickerRef}
            disabled={activeList.length === 0}
            language={language}
            activeCardIcon={activeList.length > 1 ? '' : starList[activeList[0]]}
            showMixableOnly={true}
            showRemove={true}
            onRemove={() => {
                changeIconList(currentIconList => {
                    return slotList.filter(entry => !entry.disabled).map((_, index) => {
                        if (activeList.includes(index)) return '';
                        return currentIconList[index];
                    });
                });
            }}
            onChange={value => {
                changeIconList(currentIconList => {
                    return slotList.filter(entry => !entry.disabled).map((_, index) => {
                        if (activeList.includes(index)) return value;
                        return currentIconList[index];
                    });
                });
            }}
        >
            {children}
        </StyledIconTypePicker>
    </Modal>;
});