import { Menu } from 'antd';
import { ResolutionList } from 'src/model';
import { useLanguage, useSetting } from 'src/service';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

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
    &.active-resolution {
        background-color: var(--main-active);
    }
`;
export type ResolutionPicker = {
    onChange?: (nextResolution: [number, number]) => void,
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
            {language['button.download.resolution.label']}
        </StyledDownloadDropdownLabel>
        {ResolutionList.map(({ width, height }) => {
            return <StyledDownloadDropdownOption key={`${width}-${height}`}
                className={resolution[0] === width && resolution[1] === height ? 'active-resolution' : ''}
                onClick={() => {
                    updateSetting({
                        resolution: [width, height],
                    });
                    onChange?.([width, height]);
                }}
            >
                {width} × {height}
            </StyledDownloadDropdownOption>;
        })}
    </Menu>;
};