import { useLanguage, useSetting } from 'src/service';
import { SettingFilled } from '@ant-design/icons';
import styled, { css, keyframes } from 'styled-components';
import { Checkbox, Popover, Tooltip } from 'antd';

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
const StyledSettingPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    padding: var(--spacing-sm);
    border: var(--bw) solid var(--sub-level-1);
    border-radius: var(--br-lg);
    color: var(--color);
`;
const StyledSettingButtonContainer = styled.div<{ $softMode?: boolean }>`
    cursor: pointer;
    .setting-button-label {
        display: grid;
        label {
            cursor: pointer;
            line-height: 1;
            font-size: var(--fs-xs);
            margin-top: var(--spacing-xs);
        }
    }
    .anticon-setting {
        font-size: var(--fs-xl);
        justify-self: center;
        > svg {
            ${({ $softMode }) => $softMode ? '' : css`animation: ${rotate} 12s linear infinite;`}
        }
    }
    &:hover {
        color: var(--main-active);
        .anticon-setting {
            color: var(--sub-active);
        }
    }
`;
export const SettingButton = () => {
    const language = useLanguage();
    const {
        setting,
        updateSetting,
    } = useSetting(({ setting, updateSetting }) => ({ setting, updateSetting }));
    const {
        allowHotkey,
        reduceMotionColor,
        showCreativeOption,
        showExtraDecorativeOption,
    } = setting;

    return <StyledSettingButtonContainer className="setting-button" $softMode={reduceMotionColor}>
        <Popover
            trigger={['click']}
            overlayClassName="setting-button-overlay"
            content={<StyledSettingPanel>
                <div>
                    <Checkbox
                        checked={reduceMotionColor}
                        onChange={e => updateSetting({ reduceMotionColor: e.target.checked })}
                    >{language['setting.option.soft-mode.label']}</Checkbox>
                </div>
                <div>
                    <Checkbox
                        checked={showExtraDecorativeOption}
                        onChange={e => updateSetting({ showExtraDecorativeOption: e.target.checked })}
                    >{language['setting.option.extra-decorative.label']}</Checkbox>
                </div>
                <div>
                    <Checkbox
                        checked={showCreativeOption}
                        onChange={e => updateSetting({ showCreativeOption: e.target.checked })}
                    >{language['setting.option.creative.label']}</Checkbox>
                </div>
                <div>
                    <Tooltip title={language['setting.option.hotkey.tooltip']} placement="left">
                        <Checkbox
                            checked={allowHotkey}
                            onChange={e => updateSetting({ allowHotkey: e.target.checked })}
                        >{language['setting.option.hotkey.label']}</Checkbox>
                    </Tooltip>
                </div>
                <div>
                    <small>{language['setting.alert']}</small>
                </div>
            </StyledSettingPanel>}
        >
            <div className="setting-button-label">
                <SettingFilled />
                <label>{language['setting.button.label']}</label>
            </div>
        </Popover>
    </StyledSettingButtonContainer>;
};