import { GlobalMemory, useCard, useCarderDb, useGlobal, usePresetManager, WithLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { ManagerDrawer } from '../atom';
import { PresetOption } from '../preset-option';
import { CanvasConst, FrameInfoMap } from 'src/model';
import styled from 'styled-components';
import { LayoutPresetOption } from '../card-layout-preview';
import { downloadBlob, resolveFrameStyle } from 'src/util';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Modal, notification } from 'antd';
import { useRef, useState } from 'react';

const {
    width,
    height,
} = CanvasConst;

const PresetManagerContainer = styled(ManagerDrawer)`
    .ant-drawer-body {
        padding: var(--spacing);
    }
    .overlay-title {
        display: grid;
        grid-template-columns: 1fr max-content;
        line-height: 1;
    }
    .name-style-preset-list {
        margin-top: var(--spacing);
        display: grid;
        grid-template-columns: max-content max-content;
        gap: var(--spacing-sm);
    }
    .layout-preset-list {
        margin-top: var(--spacing);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
        gap: var(--spacing-sm);
    }
    .action-list {
        margin-top: var(--spacing);
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: var(--spacing-sm);
        .import-upload-input {
            display: none;
        }
    }
`;

export type PresetManager = {} & WithLanguage;
export const PresetManager = ({
    language,
}: PresetManager) => {
    const {
        setVisible,
        visible,
    } = usePresetManager(useShallow(({
        setVisible,
        visible,
    }) => ({
        setVisible,
        visible,
    })));
    const {
        frame,
        isPendulum,
    } = useCard(useShallow(({
        card: {
            frame,
            isPendulum,
        },
    }) => ({
        frame,
        isPendulum,
    })));
    const { db } = useCarderDb();
    const [nameStylePresetList, setNameStylePresetList] = useGlobal('nameStylePresetList');
    const [layoutPresetList, setLayoutPresetList] = useGlobal('layoutPresetList');
    const [importData, setImportData] = useState<{ visible: boolean } & Pick<GlobalMemory, 'layoutPresetList' | 'nameStylePresetList'>>({
        visible: false,
        layoutPresetList: [],
        nameStylePresetList: [],
    });
    const frameInfo = FrameInfoMap[frame as keyof typeof FrameInfoMap];
    const [inputKey, setInputKey] = useState(0);
    const presetImportDirectInputRef = useRef<HTMLInputElement>(null);
    const directUploadId = 'preset-import-direct-upload';

    const getFileAndImport = (fileList?: FileList | null) => {
        if (fileList) {
            for (let cnt = 0; cnt <= fileList.length; cnt++) {
                const targetFile = fileList.item(cnt);
                if (!targetFile) continue;

                const reader = new FileReader();
                reader.onload = ({ target }) => {
                    if (!target) return;

                    const { result } = target;
                    if (typeof result !== 'string') return;
                    try {
                        const {
                            layoutPresetList,
                            nameStylePresetList,
                        } = JSON.parse(result) as Pick<GlobalMemory, 'layoutPresetList' | 'nameStylePresetList'>;

                        setImportData({
                            visible: true,
                            layoutPresetList,
                            nameStylePresetList,
                        });
                    } catch (e) {
                        console.error(e);
                        notification.error({
                            description: 'error.preset-import.description',
                            message: 'error.preset-import.message',
                        });
                    }
                };
                reader.readAsText(targetFile);
                break;
            }
        };
        setInputKey(cur => cur + 1);
        setVisible(false);
    };

    return <PresetManagerContainer
        footer={null}
        width={343}
        visible={visible}
        title={<div className="overlay-title">
            <span>{language['preset.manager.label']}</span>
            <CloseOutlined
                onClick={() => {
                    setVisible(false);
                }}
            />
        </div>}
        onClose={() => {
            setVisible(false);
        }}
    >
        <div>
            {language['preset.warning.label']}
        </div>
        <div className="action-list">
            <Button
                size="small"
                onClick={() => {
                    const data = JSON.stringify({
                        layoutPresetList: layoutPresetList,
                        nameStylePresetList: nameStylePresetList,
                    });
                    const blob = new Blob([data], { type: 'application/json' });
                    downloadBlob(
                        'preset.json',
                        blob,
                        'application/json',
                    );
                }}
            >
                {language['generic.export.label']}
            </Button>
            <Button
                size="small"
                onClick={() => {
                    const target = document.getElementById(directUploadId);
                    if (target) {
                        target.click();
                    }
                }}
            >
                {language['generic.import.label']}
                <input key={`direct-file-input-${inputKey}`} ref={presetImportDirectInputRef}
                    type="file"
                    id={directUploadId}
                    accept="application/json"
                    className="import-upload-input"
                    onChange={() => {
                        const fileList = presetImportDirectInputRef.current?.files;

                        getFileAndImport(fileList);
                    }}
                />
            </Button>
        </div>
        <div className="name-style-preset-list">
            {nameStylePresetList.map(({ key, content }) => {
                return <PresetOption key={key}
                    language={language}
                    frameInfo={frameInfo}
                    presetContent={content}
                    onDelete={async () => {
                        if (db) {
                            const tx = db.transaction('presetNameStyleStore', 'readwrite');
                            await db.delete('presetNameStyleStore', key);
                            await tx.done;
                        }
                        setNameStylePresetList(cur => cur.filter(entry => entry.key !== key));
                    }}
                >
                    {content.preset}
                </PresetOption>;
            })}
        </div>
        <div className="layout-preset-list">
            {layoutPresetList.map(({ content, key }) => {
                const {
                    dyeList,
                    foil,
                    frame,
                    pendulumFrame,
                    leftFrame,
                    pendulumRightFrame,
                    rightFrame,
                    effectStyle,
                    pendulumStyle,
                } = content;
                const layoutState = {
                    frame,
                    topLeftFrame: leftFrame,
                    topRightFrame: rightFrame,
                    bottomLeftFrame: pendulumFrame,
                    bottomRightFrame: pendulumRightFrame,
                    effectBackground: effectStyle?.background,
                    pendulumEffectBackground: pendulumStyle?.background,
                };

                return <LayoutPresetOption key={key}
                    width={Math.round(40 * width / height)}
                    height={40}
                    isPendulum={isPendulum}
                    resolvedLayoutState={resolveFrameStyle(layoutState, isPendulum)}
                    tabIndex={-1}
                    dyeList={dyeList}
                    foil={foil}
                    language={language}
                    onDelete={async () => {
                        if (db) {
                            const tx = db.transaction('presetLayoutStore', 'readwrite');
                            await db.delete('presetLayoutStore', key);
                            await tx.done;
                        }
                        setLayoutPresetList(cur => cur.filter(({ key: currentKey }) => key !== currentKey));
                    }}
                />;
            })}
        </div>
        {importData.visible && <Modal
            visible={true}
            onCancel={() => setImportData(cur => ({ ...cur, visible: false }))}
        >
            Hi
        </Modal>}
    </PresetManagerContainer>;
};