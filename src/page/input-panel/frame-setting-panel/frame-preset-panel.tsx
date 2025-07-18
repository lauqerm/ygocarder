import { GlobalMemory, useCarderDb, useGlobal, WithLanguage } from 'src/service';
import styled from 'styled-components';
import { CardLayoutPreview } from './card-layout-preview';
import { CanvasConst } from 'src/model';
import { resolveFrameStyle } from 'src/util';
import { CloseOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

const {
    width,
    height,
} = CanvasConst;

const FramePresetPanelContainer = styled.div`
    background-color: var(--main-level-3);
    .preview-container {
        line-height: 0;
        padding: var(--spacing-xxs) 0;
        border-radius: var(--br);
        cursor: pointer;
        border: var(--bw) solid transparent;
        .card-layout-container {
            pointer-events: none;
        }
        &:hover {
            border-color: var(--main-active);
        }
    }
`;

export type FramePresetPanel = WithLanguage & {
    isPendulum: boolean,
    onActive: (content: GlobalMemory['layoutPresetList'][0]['content']) => void,
};
export const FramePresetPanel = ({
    isPendulum,
    onActive,
    language,
}: FramePresetPanel) => {
    const { db } = useCarderDb();
    const [layoutPresetList, setFramePresetList] = useGlobal('layoutPresetList');

    if (layoutPresetList.length === 0) return <></>;
    return <FramePresetPanelContainer className="frame-preset-panel">
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

            return <div key={key} className="frame-preset-option">
                <div className="preview-container" onClick={() => onActive(content)}>
                    <CardLayoutPreview
                        width={Math.round(40 * width / height)}
                        height={40}
                        isPendulum={isPendulum}
                        resolvedLayoutState={resolveFrameStyle(layoutState, isPendulum)}
                        tabIndex={-1}
                        dyeList={dyeList}
                        foil={foil}
                        language={language}
                    />
                </div>
                <div className="preset-option-action">
                    <Popconfirm
                        title={language['generic.delete.label']}
                        okText={language['generic.yes.label']}
                        cancelText={language['generic.no.label']}
                        onConfirm={async () => {
                            if (db) {
                                const tx = db.transaction('presetLayoutStore', 'readwrite');
                                await db.delete('presetLayoutStore', key);
                                await tx.done;
                            }
                            setFramePresetList(cur => cur.filter(({ key: currentKey }) => key !== currentKey));
                        }}
                    >
                        <CloseOutlined />
                    </Popconfirm>
                </div>
            </div>;
        })}
    </FramePresetPanelContainer>;
};