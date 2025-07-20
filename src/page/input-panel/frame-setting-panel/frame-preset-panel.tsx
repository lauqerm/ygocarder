import { GlobalMemory, useCarderDb, useGlobal, usePresetManager, WithLanguage } from 'src/service';
import styled from 'styled-components';
import { CanvasConst } from 'src/model';
import { resolveFrameStyle } from 'src/util';
import { LayoutPresetOption } from 'src/component';

const {
    width,
    height,
} = CanvasConst;

const FramePresetPanelContainer = styled.div`
    margin-top: var(--spacing-sm);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
    row-gap: var(--spacing-sm);
    background-color: var(--main-level-3);
    color: var(--color);
    .preset-panel-top {
        grid-column: -1 / 1;
    }
    .preset-warning {
        font-size: var(--fs-sm);
    }
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
    .open-preset-manager {
        cursor: pointer;
        color: var(--main-link);
        &:hover {
            color: var(--sub-link);
        }
    }
`;

export type FramePresetPanel = WithLanguage & {
    isPendulum: boolean,
    onOverwrite?: (key: string) => Promise<void>,
    onActive: (content: GlobalMemory['layoutPresetList'][0]['content']) => void,
};
export const FramePresetPanel = ({
    isPendulum,
    onOverwrite,
    onActive,
    language,
}: FramePresetPanel) => {
    const { db } = useCarderDb();
    const [layoutPresetList, setLayoutPresetList] = useGlobal('layoutPresetList');
    const setVisible = usePresetManager(state => state.setVisible);

    if (layoutPresetList.length === 0) return <></>;
    return <FramePresetPanelContainer className="frame-preset-panel">
        {layoutPresetList.length > 0 && <div className="preset-panel-top">
            <div className="preset-warning">
                {language['preset.warning.label']}
                &nbsp;
                <span className="open-preset-manager" onClick={() => setVisible(true)}>{language['preset.manager.check.label']}</span>
            </div>
        </div>}
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

            return <LayoutPresetOption
                width={Math.round(40 * width / height)}
                height={40}
                isPendulum={isPendulum}
                resolvedLayoutState={resolveFrameStyle(layoutState, isPendulum)}
                tabIndex={-1}
                dyeList={dyeList}
                foil={foil}
                language={language}
                onActive={() => onActive(content)}
                onDelete={async () => {
                    if (db) {
                        const tx = db.transaction('presetLayoutStore', 'readwrite');
                        await db.delete('presetLayoutStore', key);
                        await tx.done;
                    }
                    setLayoutPresetList(cur => cur.filter(({ key: currentKey }) => key !== currentKey));
                }}
                onOverwrite={onOverwrite ? (() => onOverwrite?.(key)) : undefined}
            />;
        })}
    </FramePresetPanelContainer>;
};