import { Button, Checkbox, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import {
    IconTypeAttributeList,
    IconTypeInfo,
    IconTypeList,
    IconTypeStList,
    MAX_STAR_LENGTH,
    NORMAL_STAR_LENGTH,
    TotalIconTypeMap,
} from 'src/model';
import { useCard, WithLanguage } from 'src/service';
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
`;
export const StyledIconDropdown = styled(StyledDropdown.Container)`
    .anticon-close-circle {
        font-size: var(--fs-lg);
    }
    img.icon-image {
        width: var(--fs-lg);
    }
`;
export const IconDropdownContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    &.selector-disabled {
        filter: opacity(0.65) grayscale(0.85);
    }
`;
export type StarTypeSelector = {
    disabled?: boolean,
    className?: string,
    activeCardIcon: string,
    onChange: (value: string) => void,
    onRemove?: () => void,
    showMixableOnly?: boolean,
    showRemove?: boolean,
} & WithLanguage;
export const StarTypeSelector = ({
    disabled = false,
    className,
    language,
    activeCardIcon,
    showMixableOnly = false,
    showRemove = false,
    onChange,
    onRemove,
}: StarTypeSelector) => {
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
    </IconDropdownContainer>;
};

const StarListSelectPanel = styled.div`
    margin-bottom: var(--spacing);
`;
const StarListControlPanel = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--spacing);
`;
const StarListContainer = styled.div`
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

export type StarPickerRef = {
    changeStatus: (status: 'open' | 'close' | 'toggle') => void,
};
export type StarPicker = {

} & WithLanguage;
export const StarPicker = forwardRef<StarPickerRef, StarPicker>(({
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
    const changeStarList = useMemo(() => (transformer: string[] | ((prev: string[]) => string[])) => {
        setCard(card => {
            const nextStarList = Array.isArray(transformer) ? transformer : transformer(card.starList);

            return {
                ...card,
                starList: nextStarList,
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
        }
    }));

    const {
        activeList
    } = activeInformation;
    return <Modal
        className="global-overlay global-no-close"
        visible={visible}
        width={506}
        onCancel={() => setVisible(false)}
        cancelText={language['manager.template.button.cancel.label']}
        okButtonProps={{
            style: { display: 'none' },
        }}
    >
        <StarListSelectPanel className="star-list-control-panel">
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
                        changeStarList(currentStarList => currentStarList.slice(0, NORMAL_STAR_LENGTH));
                        setActiveInformation(({ activeList }) => ({ activeList: activeList.filter(entry => entry !== MAX_STAR_LENGTH - 1) }));
                    } else {
                        setSlot(({ slotList }) => {
                            const nextSlotList: typeof slotList = [
                                ...slotList.slice(0, NORMAL_STAR_LENGTH),
                                { disabled: false, index: MAX_STAR_LENGTH - 1, slot: `slot-${MAX_STAR_LENGTH - 1}` }
                            ];

                            return { slotList: nextSlotList, use12: false };
                        });
                        changeStarList(currentStarList => padRight(currentStarList, MAX_STAR_LENGTH));
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
        </StarListSelectPanel>
        <StarListContainer className="star-list-container">
            {slotList.map(({ slot, index, disabled }) => {
                const slotValue = starList[index];
                const starInfo = TotalIconTypeMap[slotValue ?? ''];
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
        </StarListContainer>
        <StarListControlPanel>
            <Button
                size="small"
                onClick={() => {
                    changeStarList(currentStarList => {
                        return [...currentStarList.slice(1, currentStarList.length), ''];
                    });
                    setActiveInformation({ activeList: [] });
                }}
            >
                <DoubleLeftOutlined />&nbsp;{language['input.icon-type.slot.shift-left.label']}
            </Button>
            <Button
                size="small"
                onClick={() => {
                    changeStarList(currentStarList => {
                        return ['', ...currentStarList.slice(0, currentStarList.length - 1)];
                    });
                    setActiveInformation({ activeList: [] });
                }}
            >
                {language['input.icon-type.slot.shift-right.label']}&nbsp;<DoubleRightOutlined />
            </Button>
        </StarListControlPanel>
        <StarTypeSelector
            disabled={activeList.length === 0}
            language={language}
            activeCardIcon={activeList.length > 1 ? '' : starList[activeList[0]]}
            showMixableOnly={true}
            showRemove={true}
            onRemove={() => {
                changeStarList(currentStarList => {
                    return slotList.filter(entry => !entry.disabled).map((_, index) => {
                        if (activeList.includes(index)) return '';
                        return currentStarList[index];
                    });
                });
            }}
            onChange={value => {
                changeStarList(currentStarList => {
                    return slotList.filter(entry => !entry.disabled).map((_, index) => {
                        if (activeList.includes(index)) return value;
                        return currentStarList[index];
                    });
                });
            }}
        />
    </Modal>;
});