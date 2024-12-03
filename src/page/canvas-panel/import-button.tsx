import { Menu, Dropdown, Tooltip } from 'antd';
import { useRef } from 'react';
import styled from 'styled-components';
import { UploadOutlined } from '@ant-design/icons';
import { LanguageDataDictionary } from 'src/service';

const StyledImportButton = styled.button`
    input {
        display: none;
    }  
`;
export type ImportButton = {
    language: LanguageDataDictionary,
    importData: (
        event?: {
            preventDefault: () => void;
        },
        fromHotkey?: boolean,
        directData?: string,
    ) => void,
};
export const ImportButton = ({
    language,
    importData,
}: ImportButton) => {
    const id = 'import-upload';
    const ygoCarderImportInputRef = useRef<HTMLInputElement>(null);

    return <Tooltip overlay={language['button.import.tooltip']}>
        <StyledImportButton
            className="secondary-button import-custom"
            onClick={() => {
                const target = document.getElementById(id);
                if (target) {
                    target.click();
                }
            }}
        >
            <input ref={ygoCarderImportInputRef}
                type="file"
                id={id}
                accept="application/json"
                className="import-upload-input"
                onChange={() => {
                    const fileList = ygoCarderImportInputRef.current?.files;
                    if (fileList) {
                        for (let cnt = 0; cnt <= fileList.length; cnt++) {
                            const targetFile = fileList.item(cnt);
                            if (!targetFile) continue;

                            const reader = new FileReader();
                            reader.onload = ({ target }) => {
                                if (!target) return;

                                const { result } = target;
                                if (typeof result !== 'string') return;
                                importData(undefined, false, result);
                            };
                            reader.readAsText(targetFile);
                        }
                    }
                }}
            />
            <UploadOutlined />
        </StyledImportButton>
    </Tooltip>;
};

export const StyledImportDropdownOverlay = styled(Menu)`
    .ant-dropdown-menu-item {
        padding: 0;
    }
    .import-upload-button {
        /** Mimic antd */
        cursor: pointer;
        padding: 5px 12px;
        background: transparent;
        border: none;
        width: 100%;
        text-align: left;
    }
    .import-upload-input {
        display: none;
    }
`;
/** Currently the importer can detect both ygocarder and other vendor data, so no need for user to pick. */
export type UnusedImportButton = ImportButton;
export const UnusedImportButton = ({
    language,
    importData,
}: UnusedImportButton) => {
    const ygoCarderImportInputRef = useRef<HTMLInputElement>(null);
    const otherVendorImportInputRef = useRef<HTMLInputElement>(null);

    return <Dropdown
        forceRender={true}
        visible={true}
        overlay={<StyledImportDropdownOverlay onClick={e => e.domEvent.stopPropagation()}>
            {[
                {
                    label: language['button.import.for-ygocarder.label'],
                    id: 'for-ygocarder',
                    ref: ygoCarderImportInputRef,
                    // converter: undefined,
                },
                {
                    label: language['button.import.for-other.label'],
                    id: 'for-other',
                    ref: otherVendorImportInputRef,
                    // converter: ygoCarderToCardMakerData,
                },
            ].map(({ label, id, ref }) => {
                return <Menu.Item key={`${id}`}>
                    <input ref={ref}
                        type="file"
                        id={id}
                        accept="application/json"
                        className="import-upload-input"
                        onChange={() => {
                            const fileList = ref.current?.files;
                            if (fileList) {
                                for (let cnt = 0; cnt <= fileList.length; cnt++) {
                                    const targetFile = fileList.item(cnt);
                                    if (!targetFile) continue;

                                    const reader = new FileReader();
                                    reader.onload = ({ target }) => {
                                        if (!target) return;

                                        const { result } = target;
                                        if (typeof result !== 'string') return;
                                        importData(undefined, false, result);
                                    };
                                    reader.readAsText(targetFile);
                                }
                            }
                        }}
                    />
                    <button
                        className="import-upload-button"
                        type="button"
                        onClick={() => {
                            const target = document.getElementById(id);
                            if (target) {
                                target.click();
                            }
                        }}
                    >
                        {label}
                    </button>
                </Menu.Item>;
            })}
        </StyledImportDropdownOverlay>}
    >
        <button className="secondary-button import-custom">
            <UploadOutlined />
        </button>
    </Dropdown>;
};