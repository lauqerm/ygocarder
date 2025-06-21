import { Button, Checkbox, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { IconTypeAttributeList, IconTypeInfo, IconTypeList, IconTypeStList, MAX_SUBFAMILY_LENGTH, TotalIconTypeMap } from 'src/model';
import { useCard, WithLanguage } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { CloseCircleOutlined } from '@ant-design/icons';
import { StyledDropdown } from 'src/component';
import { mergeClass } from 'src/util';

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

const StarListControlPanel = styled.div`
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
        &:hover {
            border-color: var(--sub-active);
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
        getUpdater,
    } = useCard(useShallow(({
        card: {
            starList,
        },
        getUpdater,
    }) => ({
        starList,
        getUpdater,
    })));
    const [visible, setVisible] = useState(false);
    const changeStarList = useMemo(() => getUpdater('starList'), [getUpdater]);
    const [{
        slotList,
        fullSlotList,
    }] = useState(() => {
        const slotList = [];
        const fullSlotList = [];
        for (let cnt = 0; cnt < MAX_SUBFAMILY_LENGTH; cnt++) {
            slotList.push({ slot: `slot-${cnt}`, index: cnt });
            fullSlotList.push(cnt);
        }

        return {
            slotList,
            fullSlotList,
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
        <StarListControlPanel className="star-list-control-panel">
            <Button size="small" onClick={() => {
                setActiveInformation(cur => {
                    const nextActiveList = fullSlotList.filter(entry => !cur.activeList.includes(entry));

                    return { activeList: nextActiveList };
                });
            }}>
                {language['input.icon-type.slot.revert.label']}
            </Button>
            &nbsp;
            <Button size="small" onClick={() => {
                setActiveInformation({ activeList: [...fullSlotList] });
            }}>
                {language['input.icon-type.slot.select-all.label']}
            </Button>
            &nbsp;
            <Button size="small" onClick={() => {
                setActiveInformation({ activeList: [] });
            }}>
                {language['input.icon-type.slot.deselect-all.label']}
            </Button>
        </StarListControlPanel>
        <StarListContainer className="star-list-container">
            {slotList.map(({ slot, index }) => {
                const slotValue = starList[index];
                const starInfo = TotalIconTypeMap[slotValue ?? ''];
                const isActive = activeList.includes(index);

                return <div key={slot} className={mergeClass('star-list-entry', isActive ? 'entry-active' : '')}>
                    <div className="checkbox-container">
                        <Checkbox
                            checked={isActive}
                            onChange={e => {
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
                    <div className="star-value" onClick={() => setActiveInformation({ activeList: [index] })}>
                        {!starInfo ? <CloseCircleOutlined /> : starInfo.icon}
                    </div>
                </div>;
            })}
        </StarListContainer>
        <StarTypeSelector
            disabled={activeList.length === 0}
            language={language}
            activeCardIcon={activeList.length > 1 ? '' : starList[activeList[0]]}
            showMixableOnly={true}
            showRemove={true}
            onRemove={() => {
                const nextStarList = slotList.map((_, index) => {
                    if (activeList.includes(index)) return '';
                    return starList[index];
                });

                changeStarList(nextStarList);
            }}
            onChange={value => {
                const nextStarList = slotList.map((_, index) => {
                    if (activeList.includes(index)) return value;
                    return starList[index];
                });

                changeStarList(nextStarList);
            }}
        />
    </Modal>;
});