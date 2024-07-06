import { useSetting } from 'src/service';
import { SettingFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { Checkbox, Popover, Tooltip } from 'antd';

const StyledSettingPanel = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    background-color: var(--main-overlay);
    padding: 0.5rem;
    border: 1px solid #222;
    border-radius: 4px;
`;
const StyledSettingButtonContainer = styled.div`
    cursor: pointer;
    .setting-button-label {
        display: grid;
        label {
            cursor: pointer;
            line-height: 1;
            font-size: 0.65em;
        }
    }
    .anticon-setting {
        font-size: 1.5em;
        margin-bottom: 0.25rem;
    }
    &:hover {
        color: #58cdff;
        .anticon-setting {
            color: #58cdff;
        }
    }
`;
export const SettingButton = () => {
    const {
        setting,
        updateSetting,
    } = useSetting(({ setting, updateSetting }) => ({ setting, updateSetting }));
    const {
        allowHotkey,
        showCreativeOption,
        showExtraDecorativeOption,
    } = setting;

    return <StyledSettingButtonContainer className="setting-button">
        <Popover
            trigger={['click']}
            overlayClassName="setting-button-overlay"
            content={<StyledSettingPanel>
                <div>
                    <Checkbox
                        checked={showExtraDecorativeOption}
                        onChange={e => updateSetting({ showExtraDecorativeOption: e.target.checked })}
                    >Show Extra Decorative Options</Checkbox>
                </div>
                <div>
                    <Checkbox
                        checked={showCreativeOption}
                        onChange={e => updateSetting({ showCreativeOption: e.target.checked })}
                    >Show Creative Options</Checkbox>
                </div>
                <div>
                    <Tooltip title="Warning: Using hotkey will prevent undo and redo feature" placement="left">
                        <Checkbox
                            checked={allowHotkey}
                            onChange={e => updateSetting({ allowHotkey: e.target.checked })}
                        >Allow hotkey</Checkbox>
                    </Tooltip>
                </div>
            </StyledSettingPanel>}
        >
            <div className="setting-button-label">
                <SettingFilled />
                <label>Setting</label>
            </div>
        </Popover>
    </StyledSettingButtonContainer>;
};