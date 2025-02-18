import { useLanguage, useSetting } from 'src/service';
import { SettingFilled } from '@ant-design/icons';
import styled, { css, keyframes } from 'styled-components';
import { Checkbox, Popover, Tooltip } from 'antd';
import { StyledHeaderButtonContainer } from '../icon-button';
import { RadioTrain } from '../input-train';
import { ExportFormatList, ResolutionList, ResolutionMap } from 'src/model';

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
    .list-option {
        margin-bottom: var(--spacing-xs);
    }
`;
const StyledSettingButtonContainer = styled(StyledHeaderButtonContainer)`
    .anticon-setting {
        > svg {
            ${({ $softMode }) => $softMode ? '' : css`animation: ${rotate} 12s linear infinite;`}
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
        exportFormat,
        resolution,
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
                    <div className="list-option">{language['setting.option.resolution.label']}</div>
                    <RadioTrain
                        value={`${resolution[0]}x${resolution[1]}`}
                        optionList={ResolutionList.map(({ height, width, label }) => ({
                            value: `${width}x${height}`,
                            label: label,
                        }))}
                        onChange={value => {
                            if (ResolutionMap[value as keyof typeof ResolutionMap]) {
                                updateSetting({ resolution: ResolutionMap[value as keyof typeof ResolutionMap].settingValue });
                            }
                        }}
                    />
                </div>
                <div>
                    <div className="list-option">{language['setting.option.export-format.label']}</div>
                    <RadioTrain
                        value={exportFormat}
                        optionList={ExportFormatList}
                        onChange={value => {
                            updateSetting({ exportFormat: value });
                        }}
                    />
                </div>
                <div>
                    <small>{language['setting.alert']}</small>
                </div>
            </StyledSettingPanel>}
        >
            <div className="button-label">
                <SettingFilled />
                <label>{language['setting.button.label']}</label>
            </div>
        </Popover>
    </StyledSettingButtonContainer>;
};