import { GlobalMemory, useCard, useCarderDb, useGlobal, usePresetManager, WithLanguage } from 'src/service';
import { useShallow } from 'zustand/react/shallow';
import { ManagerDrawer } from '../atom';
import { ImagePresetOption, NameStylePresetOption } from '../preset-option';
import { CanvasConst, FrameInfo, FrameInfoMap } from 'src/model';
import styled from 'styled-components';
import { LayoutPresetOption } from '../card-layout-preview';
import { downloadBlob, mergeClass, resolveFrameStyle } from 'src/util';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Modal, notification } from 'antd';
import { useMemo, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ImagePresetForm, ImagePresetFormRef } from './image-preset-form';

const {
    width,
    height,
} = CanvasConst;

const PresetImportReviewModalContainer = styled(Modal)`
    .import-review-title {
        margin-bottom: var(--spacing-xs);
    }
    .import-action-table {
        width: 100%;
        table-layout: fixed;
        background-color: #494949;
        th,
        td {
            border: var(--bw) solid var(--sub-level-4);
            padding: var(--spacing-xs);
            &:nth-child(1) {
                width: 150px;
            }
            &:nth-child(2) {
                width: 150px;
            }
        }
        .action-panel {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: var(--spacing-xs);
        }
        .import-action-row {
            &.keep-old {
                td:nth-child(1) {
                    background-color: var(--main-level-4);
                }
            }
            &.keep-new {
                td:nth-child(2) {
                    background-color: var(--main-level-4);
                }
            }
            &.keep-both {
                td:nth-child(1),
                td:nth-child(2) {
                    background-color: var(--main-level-4);
                }
            }
        }
    }
`;
type MergeEntry<Value> = Value & { verdict: 'keep-old' | 'keep-new' | 'keep-both' };
type NameStylePreset = GlobalMemory['nameStylePresetList'][0];
type LayoutPreset = GlobalMemory['layoutPresetList'][0];
type PresetImportReviewModal = {
    frameInfo: FrameInfo,
    isPendulum: boolean,
    importData: Pick<GlobalMemory, 'layoutPresetList' | 'nameStylePresetList'>,
    onCancel: () => void,
} & WithLanguage;
const PresetImportReviewModal = ({
    language,
    isPendulum,
    frameInfo,
    importData,
    onCancel,
}: PresetImportReviewModal) => {
    const { db } = useCarderDb();
    const [nameStylePresetList, setNameStylePresetList] = useGlobal('nameStylePresetList');
    const [layoutPresetList, setLayoutPresetList] = useGlobal('layoutPresetList');
    const {
        layoutPresetMap,
        nameStylePresetMap,
    } = useMemo(() => {
        const nameStylePresetMap = nameStylePresetList.reduce<Record<string, NameStylePreset>>((acc, cur) => {
            acc[cur.key] = cur;
            return acc;
        }, {});
        const layoutPresetMap = layoutPresetList.reduce<Record<string, LayoutPreset>>((acc, cur) => {
            acc[cur.key] = cur;
            return acc;
        }, {});

        return {
            nameStylePresetMap,
            layoutPresetMap,
        };
    }, [layoutPresetList, nameStylePresetList]);
    const {
        layoutPresetList: nextLayoutPresetList = [],
        nameStylePresetList: nextNameStylePresetList = [],
    } = importData;
    const [decisionMap, setDecisionMap] = useState(() => {
        const layoutPresetMap = nextLayoutPresetList.reduce<Record<string, MergeEntry<LayoutPreset>>>((acc, cur) => {
            acc[cur.key] = { ...cur, verdict: 'keep-new' };
            return acc;
        }, {});
        const nameStylePresetMap = nextNameStylePresetList.reduce<Record<string, MergeEntry<NameStylePreset>>>((acc, cur) => {
            acc[cur.key] = { ...cur, verdict: 'keep-new' };
            return acc;
        }, {});

        return { layoutPresetMap, nameStylePresetMap };
    });

    return <PresetImportReviewModalContainer
        visible={true}
        width={700}
        maskClosable={false}
        okText={language['preset.button.import.label']}
        cancelText={language['preset.button.discard.label']}
        onCancel={onCancel}
        onOk={async () => {
            const layoutVerdictList = Object.values(decisionMap.layoutPresetMap);
            const nameStyleVerdictList = Object.values(decisionMap.nameStylePresetMap);

            const layoutReplaceMap: Record<string, LayoutPreset> = {};
            const layoutFullList: LayoutPreset[] = [];
            const layoutNewList: LayoutPreset[] = [];
            layoutVerdictList
                .filter(({ verdict }) => verdict !== 'keep-old')
                .forEach(entry => {
                    const { key, content, verdict } = entry;
                    layoutFullList.push({ key, content });
                    /** If choose to keep new and there is no existing entry => push new entry */
                    if (layoutPresetMap[key] == null && verdict === 'keep-new') {
                        layoutNewList.push({ key, content });
                    }
                    /** If choose to keep both => push new entry regardless of the existing one */
                    else if (verdict === 'keep-both') {
                        const newKey = uuid();
                        layoutNewList.push({ key: newKey, content });
                    }
                    /** => Otherwise, replace the existing entry */
                    else {
                        layoutReplaceMap[key] = { key, content };
                    }
                });
            if (db) {
                const layoutPresetTx = db.transaction('presetLayoutStore', 'readwrite');
                for (const { key, content } of layoutFullList) {
                    await db.put('presetLayoutStore', { key, content: JSON.stringify(content) });
                }
                await layoutPresetTx.done;
            }
            setLayoutPresetList(cur => {
                const newList = [
                    ...cur.map(entry => {
                        if (layoutReplaceMap[entry.key]) return layoutReplaceMap[entry.key];
                        return entry;
                    }),
                    ...layoutNewList,
                ];

                return newList;
            });

            const nameStyleReplaceMap: Record<string, NameStylePreset> = {};
            const nameStyleFullList: NameStylePreset[] = [];
            const nameStyleNewList: NameStylePreset[] = [];
            nameStyleVerdictList
                .filter(({ verdict }) => verdict !== 'keep-old')
                .forEach(entry => {
                    const { key, content, verdict } = entry;
                    nameStyleFullList.push({ key, content });
                    /** If choose to keep new and there is no existing entry => push new entry */
                    if (nameStylePresetMap[key] == null && verdict === 'keep-new') {
                        nameStyleNewList.push({ key, content });
                    }
                    /** If choose to keep both => push new entry regardless of the existing one */
                    else if (verdict === 'keep-both') {
                        const newKey = uuid();
                        nameStyleNewList.push({ key: newKey, content });
                    }
                    /** => Otherwise, replace the existing entry */
                    else {
                        nameStyleReplaceMap[key] = { key, content };
                    }
                });
            if (db) {
                const nameStylePresetTx = db.transaction('presetNameStyleStore', 'readwrite');
                for (const { key, content } of nameStyleFullList) {
                    await db.put('presetNameStyleStore', { key, content: JSON.stringify(content) });
                }
                await nameStylePresetTx.done;
            }
            setNameStylePresetList(cur => {
                const newList = [
                    ...cur.map(entry => {
                        if (nameStyleReplaceMap[entry.key]) return nameStyleReplaceMap[entry.key];
                        return entry;
                    }),
                    ...nameStyleNewList,
                ];

                return newList;
            });
            onCancel();
        }}
    >
        <div className="import-review-title">
            <h2>{language['preset.review-title.label']}</h2>
            {language['preset.review-description']}
        </div>
        <table className="import-action-table">
            <tbody>
                <tr className="import-action-row import-header-row">
                    <th className="header-row">{language['preset.review-table.current.label']}</th>
                    <th className="header-row">{language['preset.review-table.new.label']}</th>
                    <th className="header-row">{language['preset.review-table.action.label']}</th>
                </tr>
                {nextNameStylePresetList.map(({ key, content }) => {
                    const commonProps = { language, frameInfo };
                    const currentContent = nameStylePresetMap[key]?.content;
                    const verdict = decisionMap.nameStylePresetMap[key].verdict;

                    return <tr key={key} className={mergeClass('import-action-row', verdict)}>
                        <td className="current-version">
                            {currentContent && <NameStylePresetOption {...commonProps} presetContent={currentContent}>
                                {currentContent.preset}
                            </NameStylePresetOption>}
                        </td>
                        <td className="new-version">
                            <NameStylePresetOption {...commonProps} presetContent={content}>
                                {content.preset}
                            </NameStylePresetOption>
                        </td>
                        <td className="action-list">
                            <div className="action-panel">
                                <Button
                                    size="small"
                                    type={verdict === 'keep-old' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<NameStylePreset>> = { ...cur.nameStylePresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-old' };

                                        return { ...cur, nameStylePresetMap: nextMap };
                                    })}
                                >
                                    {language[currentContent
                                        ? 'preset.review-table.action.keep-old.label'
                                        : 'preset.review-table.action.discard.label'
                                    ]}
                                </Button>
                                <Button
                                    size="small"
                                    type={verdict === 'keep-new' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<NameStylePreset>> = { ...cur.nameStylePresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-new' };

                                        return { ...cur, nameStylePresetMap: nextMap };
                                    })}
                                >
                                    {language[currentContent
                                        ? 'preset.review-table.action.keep-new.label'
                                        : 'preset.review-table.action.import.label'
                                    ]}
                                </Button>
                                {currentContent && <Button
                                    size="small"
                                    type={verdict === 'keep-both' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<NameStylePreset>> = { ...cur.nameStylePresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-both' };

                                        return { ...cur, nameStylePresetMap: nextMap };
                                    })}
                                >
                                    {language['preset.review-table.action.keep-both.label']}
                                </Button>}
                            </div>
                        </td>
                    </tr>;
                })}
                {nextLayoutPresetList.map(({ key, content }) => {
                    const commonProps = {
                        width: Math.round(40 * width / height),
                        height: 40,
                        isPendulum,
                        tabIndex: -1,
                        language: language,
                    };
                    const currentContent = layoutPresetMap[key]?.content;
                    const verdict = decisionMap.layoutPresetMap[key].verdict;

                    return <tr key={key} className={mergeClass('import-action-row', verdict)}>
                        <td className="current-version">
                            {currentContent && <LayoutPresetOption
                                resolvedLayoutState={resolveFrameStyle({
                                    frame: currentContent.frame,
                                    topLeftFrame: currentContent.leftFrame,
                                    topRightFrame: currentContent.rightFrame,
                                    bottomLeftFrame: currentContent.pendulumFrame,
                                    bottomRightFrame: currentContent.pendulumRightFrame,
                                    effectBackground: currentContent.effectStyle?.background,
                                    pendulumEffectBackground: currentContent.pendulumStyle?.background,
                                }, isPendulum)}
                                dyeList={currentContent.dyeList}
                                foil={currentContent.foil}
                                {...commonProps}
                            />}
                        </td>
                        <td className="new-version">
                            <LayoutPresetOption
                                resolvedLayoutState={resolveFrameStyle({
                                    frame: content.frame,
                                    topLeftFrame: content.leftFrame,
                                    topRightFrame: content.rightFrame,
                                    bottomLeftFrame: content.pendulumFrame,
                                    bottomRightFrame: content.pendulumRightFrame,
                                    effectBackground: content.effectStyle?.background,
                                    pendulumEffectBackground: content.pendulumStyle?.background,
                                }, isPendulum)}
                                dyeList={content.dyeList}
                                foil={content.foil}
                                {...commonProps}
                            />
                        </td>
                        <td className="action-list">
                            <div className="action-panel">
                                <Button
                                    size="small"
                                    type={verdict === 'keep-old' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<LayoutPreset>> = { ...cur.layoutPresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-old' };

                                        return { ...cur, layoutPresetMap: nextMap };
                                    })}
                                >
                                    {language[currentContent
                                        ? 'preset.review-table.action.keep-old.label'
                                        : 'preset.review-table.action.discard.label'
                                    ]}
                                </Button>
                                <Button
                                    size="small"
                                    type={verdict === 'keep-new' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<LayoutPreset>> = { ...cur.layoutPresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-new' };

                                        return { ...cur, layoutPresetMap: nextMap };
                                    })}
                                >
                                    {language[currentContent
                                        ? 'preset.review-table.action.keep-new.label'
                                        : 'preset.review-table.action.import.label'
                                    ]}
                                </Button>
                                {currentContent && <Button
                                    size="small"
                                    type={verdict === 'keep-both' ? 'primary' : 'default'}
                                    onClick={() => setDecisionMap(cur => {
                                        const nextMap: Record<string, MergeEntry<LayoutPreset>> = { ...cur.layoutPresetMap };
                                        nextMap[key] = { ...nextMap[key], verdict: 'keep-both' };

                                        return { ...cur, layoutPresetMap: nextMap };
                                    })}
                                >
                                    {language['preset.review-table.action.keep-both.label']}
                                </Button>}
                            </div>
                        </td>
                    </tr>;
                })}
            </tbody>
        </table>
    </PresetImportReviewModalContainer>;
};

const PresetManagerContainer = styled(ManagerDrawer)`
    .ant-drawer-body {
        padding: var(--spacing);
    }
    .preset-list {
        margin-top: var(--spacing);
        padding-top: var(--spacing);
        border-top: var(--bw) solid var(--main-level-1);
    }
    .image-preset-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-sm);
    }
    .overlay-title {
        display: grid;
        grid-template-columns: 1fr max-content;
        line-height: 1;
    }
    .name-style-preset-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-sm);
    }
    .layout-preset-list {
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
    label {
        display: block;
        grid-column: -1 / 1;
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
    const [imagePresetList, setImagePresetList] = useGlobal('imagePresetList');
    const [importData, setImportData] = useState<{ visible: boolean } & Pick<GlobalMemory, 'layoutPresetList' | 'nameStylePresetList' | 'imagePresetList'>>({
        visible: false,
        layoutPresetList: [],
        nameStylePresetList: [],
        imagePresetList: [],
    });
    const frameInfo = FrameInfoMap[frame as keyof typeof FrameInfoMap];
    const [inputKey, setInputKey] = useState(0);
    const presetImportDirectInputRef = useRef<HTMLInputElement>(null);
    const imagePresetFormRef = useRef<ImagePresetFormRef>(null);
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
                            imagePresetList,
                        } = JSON.parse(result) as Pick<GlobalMemory, 'layoutPresetList' | 'nameStylePresetList' | 'imagePresetList'>;

                        setImportData({
                            visible: true,
                            layoutPresetList,
                            nameStylePresetList,
                            imagePresetList,
                        });
                    } catch (e) {
                        console.error(e);
                        notification.error({
                            description: language['error.preset-import.description'],
                            message: language['error.preset-import.message'],
                        });
                    }
                };
                reader.readAsText(targetFile);
                break;
            }
        };
        setInputKey(cur => cur + 1);
    };

    return <PresetManagerContainer
        footer={null}
        width={345}
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
        <div className="preset-list name-style-preset-list">
            <label>
                {language['preset.instruction.name-style.label']}
            </label>
            {nameStylePresetList.map(({ key, content }) => {
                return <NameStylePresetOption key={key}
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
                </NameStylePresetOption>;
            })}
        </div>
        <div className="preset-list layout-preset-list">
            <label>
                {language['preset.instruction.advanced-frame.label']}
            </label>
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
        <div className="preset-list image-preset-list">
            <label>
                {language['preset.instruction.image.label']}
                &nbsp;
                <ImagePresetForm
                    ref={imagePresetFormRef}
                    language={language}
                    onSubmit={async value => {
                        const key = uuid();
                        if (db) {
                            const tx = db.transaction('presetImageStore', 'readwrite');
                            await db.put('presetImageStore', { key, content: JSON.stringify(value) });
                            await tx.done;
                        }
                        setImagePresetList(cur => {
                            return [
                                ...cur,
                                {
                                    key,
                                    content: { ...value },
                                }
                            ];
                        });
                    }}
                    onEdit={async (key, value) => {
                        if (db) {
                            const tx = db.transaction('presetImageStore', 'readwrite');
                            await db.put('presetImageStore', { key, content: JSON.stringify(value) });
                            await tx.done;
                        }
                        setImagePresetList(cur => {
                            return cur.map(entry => {
                                if (entry.key === key) return {
                                    key,
                                    content: { ...value },
                                };
                                return entry;
                            });
                        });
                    }}
                />
                <br />
                {language['preset.instruction.image.head-up.label']}
            </label>
            {imagePresetList.map(({ key, content }) => {
                return <ImagePresetOption key={key}
                    language={language}
                    imagePreset={content}
                    onDelete={async () => {
                        if (db) {
                            const tx = db.transaction('presetImageStore', 'readwrite');
                            await db.delete('presetImageStore', key);
                            await tx.done;
                        }
                        setImagePresetList(cur => cur.filter(({ key: currentKey }) => key !== currentKey));
                    }}
                    onEdit={() => {
                        imagePresetFormRef.current?.edit(key, content);
                    }}
                />;
            })}
        </div>
        {importData.visible && <PresetImportReviewModal
            onCancel={() => setImportData(cur => ({ ...cur, visible: false }))}
            importData={importData}
            frameInfo={frameInfo}
            isPendulum={isPendulum}
            language={language}
        />}
    </PresetManagerContainer>;
};