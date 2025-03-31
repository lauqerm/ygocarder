import { Menu, Popover } from 'antd';
import { ExportFormat, ExportFormatList, ResolutionList } from 'src/model';
import { useLanguage, useSetting } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { StyledPopMarkdown } from '../atom';

const StyledDownloadDropdownLabel = styled(Menu.Item)`
    color: var(--color);
    padding: 1px 12px 5px 12px; // Alignment
    font-size: var(--fs-sm);
    border-bottom: var(--bw) solid var(--sub-level-4);
    cursor: default;
    &.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover {
        cursor: default;
        background: var(--main-level-3);
    }
`;
const StyledDownloadDropdownOption = styled(Menu.Item)`
    &li.ant-dropdown-menu-item:hover {
        background-color: var(--sub-active);
    }
    &.active-setting {
        background-color: var(--main-active);
    }
`;
export type ResolutionPicker = {
    onChange?: (nextResolution: [number, number], nextScale: number) => void,
} & React.ComponentProps<typeof Menu>;
export const ResolutionPicker = ({
    onChange,
    ...rest
}: ResolutionPicker) => {
    const language = useLanguage();
    const {
        resolution,
        updateSetting,
    } = useSetting(useShallow(({
        setting: { allowHotkey, resolution },
        updateSetting,
    }) => ({
        allowHotkey,
        resolution,
        updateSetting,
    })));

    return <Menu onClick={e => e.domEvent.stopPropagation()} {...rest}>
        <StyledDownloadDropdownLabel disabled onClick={e => e.domEvent.stopPropagation()}>
            {language['setting.option.resolution.label']}
        </StyledDownloadDropdownLabel>
        {ResolutionList.map(({ width, height, label, scale }) => {
            return <StyledDownloadDropdownOption key={`${width}-${height}`}
                className={resolution[0] === width && resolution[1] === height ? 'active-setting' : ''}
                onClick={() => {
                    updateSetting({
                        resolution: [width, height],
                        globalScale: scale,
                    });
                    onChange?.([width, height], scale);
                }}
            >
                {scale > 1
                    ? <Popover
                        overlayClassName="explanation-overlay"
                        placement="left"
                        content={<StyledPopMarkdown>
                            {language['setting.option.resolution.warning']}
                        </StyledPopMarkdown>}
                    >
                        {label}
                    </Popover>
                    : label}
            </StyledDownloadDropdownOption>;
        })}
    </Menu>;
};

export type ExportFormatPicker = {
    onChange?: (nextFormat: ExportFormat) => void,
} & React.ComponentProps<typeof Menu>;
export const ExportFormatPicker = ({
    onChange,
    ...rest
}: ExportFormatPicker) => {
    const language = useLanguage();
    const {
        exportFormat,
        updateSetting,
    } = useSetting(useShallow(({
        setting: { allowHotkey, exportFormat },
        updateSetting,
    }) => ({
        allowHotkey,
        exportFormat,
        updateSetting,
    })));

    return <Menu onClick={e => e.domEvent.stopPropagation()} {...rest}>
        <StyledDownloadDropdownLabel disabled onClick={e => e.domEvent.stopPropagation()}>
            {language['setting.option.export-format.label']}
        </StyledDownloadDropdownLabel>
        {ExportFormatList.map(({ value, label }) => {
            return <StyledDownloadDropdownOption key={label}
                className={value === exportFormat ? 'active-setting' : ''}
                onClick={() => {
                    updateSetting({
                        exportFormat: value,
                    });
                    onChange?.(value);
                }}
            >
                {label}
            </StyledDownloadDropdownOption>;
        })}
    </Menu>;
};