import { Popconfirm } from 'antd';
import { DyeIndexMap, Foil, FoilMap, FrameInfoMap } from 'src/model';
import { WithLanguage } from 'src/service';
import { HexColorRegex, mergeClass } from 'src/util';
import styled from 'styled-components';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';

const CardLayoutContainer = styled.div<{ $width: number, $height: number, $layoutHoverable: boolean, $hoverable: boolean }>`
    /** Ensure even width */
    --layout-width: ${props => Math.round(props.$width / 2) * 2}px;
    --layout-height: ${props => props.$height}px;
    display: inline-block;
    width: var(--layout-width);
    height: var(--layout-height);
    box-shadow: 0 0 2px 0 #202020;
    position: relative;
    background: var(--main-level-2);
    ${props => props.$hoverable ? 'cursor: pointer;' : ''}
    &.is-vertical {
        margin-bottom: var(--spacing-3xl);
        .float-layout.foil {
            width: 100%;
            left: 0;
            bottom: -22.5%;
            font-size: var(--fs-sm);
            background-color: var(--main-level-1);
        }
    }
    &.is-horizontal {
        margin-right: var(--spacing-lg);
        .float-layout.foil {
            width: 50%;
            height: 80%;
            top: 10%;
            right: -60%;
            font-size: 0;
            background-color: var(--main-level-1);
        }
    }
    button {
        border: none;
    }
    .overlay-patch {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .dye-patch {
        position: absolute;
        z-index: 1;
        top: 10%;
        left: 50%;
        min-width: 6px;
        min-height: 6px;
        width: ${props => props.$width / 6}px;
        height: ${props => props.$width / 6}px;
        border-radius: var(--br-lg);
        transform: translateX(-50%);
    }
    .card-layout {
        position: absolute;
        ${props => props.$layoutHoverable ? 'cursor: pointer;' : ''}
        padding: 0;
        &.unmodified .overlay-patch {
            background: var(--gradient-diagonal-stripe);
        }
    }
    .partial-layout {
        background-clip: padding-box;
        ${props => props.$layoutHoverable
        ? `
                border: var(--bw) solid var(--main-level-1);
                &.active {
                    border: var(--bw) dashed var(--main-level-1);
                }
                &:hover {
                    border: var(--bw) dashed var(--main-level-2);
                }
            `
        : ''}
    }
    .float-layout {
        ${props => props.$layoutHoverable
        ? `
                border: var(--bw) solid var(--main-level-1);
                &.active {
                    border: var(--bw) dashed var(--main-level-2);
                    box-shadow: 0 0 1px 0 var(--main-level-1);
                }
                &:hover {
                    border: var(--bw) solid var(--main-level-2);
                    box-shadow: 0 0 1px 0 var(--main-level-1);
                }
            `
        : ''}
    }
    /** For Zarc's gradient */
    .partial-layout {
        background-size: 200%;
    }
    .top-left {
        width: 50%; height: 50%;
        top: 0; left: 0;
    }
    .top-right {
        width: 50%; height: 50%;
        top: 0; left: 50%;
        background-position-x: 100%;
    }
    .bottom-left {
        width: 50%; height: 50%;
        top: 50%; left: 0;
    }
    .bottom-right {
        width: 50%; height: 50%;
        top: 50%; left: 50%;
        background-position-x: 100%;
    }
    /** Background width is slightly reduced to help active bottom frames easier */
    .effect-background {
        width: 80%;
        height: 20%;
        bottom: 5%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
    .pendulum-effect-background {
        width: 80%;
        height: 13%;
        bottom: 28%;
        left: 10%;
        background-size: 125%;
        background-position-x: 50%;
    }
`;
export type CardLayoutPreview = {
    tabIndex?: number,
    width: number,
    height: number,
    baseLayoutState?: Record<string, string | undefined>,
    resolvedLayoutState: Record<string, string | undefined>,
    isPendulum: boolean,
    activeLayout?: string,
    dyeList: string[],
    foil: Foil,
    onClick?: () => void,
    onLayoutSelect?: (key: string) => void,
    vertical?: boolean,
} & WithLanguage;
export const CardLayoutPreview = ({
    tabIndex = 0,
    width,
    height,
    baseLayoutState,
    resolvedLayoutState,
    isPendulum,
    activeLayout,
    dyeList,
    foil,
    onClick,
    onLayoutSelect,
    language,
    vertical = false,
}: CardLayoutPreview) => {
    return <CardLayoutContainer
        $width={width}
        $height={height}
        $layoutHoverable={!!onLayoutSelect}
        $hoverable={!!onClick}
        onClick={onClick}
        className={mergeClass('card-layout-container', vertical ? 'is-vertical' : 'is-horizontal')}
    >
        {[
            { key: 'topLeftFrame', className: 'card-layout partial-layout top-left' },
            { key: 'topRightFrame', className: 'card-layout partial-layout top-right' },
            { key: 'bottomLeftFrame', className: 'card-layout partial-layout bottom-left' },
            { key: 'bottomRightFrame', className: 'card-layout partial-layout bottom-right' },
            { key: 'effectBackground', className: 'card-layout float-layout effect-background' },
            { key: 'pendulumEffectBackground', className: 'card-layout float-layout pendulum-effect-background' },
        ].map(({ className, key }) => {
            const frame = resolvedLayoutState[key];
            const dyeIndex = DyeIndexMap[key];
            const dyeColor = dyeIndex == null ? undefined : dyeList[DyeIndexMap[key]];

            if (!frame) return null;
            if (!isPendulum && key === 'pendulumEffectBackground') return null;
            const {
                labelBackgroundColor,
                labelBackgroundImage,
            } = FrameInfoMap[frame] ?? {};
            return <button key={key}
                {...tabIndex < 0 ? {} : { tabIndex }}
                className={mergeClass(
                    className,
                    key === activeLayout ? 'active' : '',
                    baseLayoutState?.[key] === 'auto' ? 'unmodified' : '',
                )}
                onClick={() => onLayoutSelect?.(key)}
                style={labelBackgroundImage
                    ? { backgroundImage: labelBackgroundImage }
                    : { backgroundColor: labelBackgroundColor }
                }
            >
                <div
                    className="overlay-patch"
                    style={dyeColor
                        ? {
                            boxShadow: `0 0 0 ${Math.round(width / 16)}px ${dyeColor} inset`,
                        }
                        : {}}
                />
            </button>;
        })}
        <button
            {...tabIndex < 0 ? {} : { tabIndex }}
            className={mergeClass(
                'card-layout float-layout foil',
                'foil' === activeLayout ? 'active' : '',
            )}
            onClick={() => onLayoutSelect?.('foil')}
            style={{
                boxShadow: `0 0 0 2px ${HexColorRegex.test(dyeList[DyeIndexMap.foil])
                    ? dyeList[DyeIndexMap.foil]
                    : FoilMap[foil].color} inset`
            }}
        >
            {language['input.foil.label']}
        </button>
    </CardLayoutContainer>;
};

const LayoutPresetOptionContainer = styled.div`
    text-align: center;
    .layout-preset-option-action {
        line-height: 1.25;
        text-align: center;
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-save:hover {
                color: var(--sub-info);
            }
            + .anticon {
                margin-left: var(--spacing-xs);
            }
        }
    }
`;
export type LayoutPresetOption = {
    onActive?: () => void,
    onOverwrite?: () => Promise<void>,
    onDelete?: () => Promise<void>,
} & CardLayoutPreview;
export const LayoutPresetOption = ({
    onActive,
    onDelete,
    onOverwrite,
    language,
    ...rest
}: LayoutPresetOption) => {
    return <LayoutPresetOptionContainer className="frame-preset-option">
        <div className="preview-container" onClick={onActive}>
            <CardLayoutPreview {...rest} language={language} />
        </div>
        <div className="layout-preset-option-action">
            <Popconfirm
                title={language['generic.delete.label']}
                okText={language['generic.yes.label']}
                cancelText={language['generic.no.label']}
                onConfirm={onDelete}
            >
                <CloseOutlined />
            </Popconfirm>
            {onOverwrite && <Popconfirm
                title={language['generic.overwrite.label']}
                okText={language['generic.yes.label']}
                cancelText={language['generic.no.label']}
                onConfirm={() => onOverwrite()}
            >
                <SaveOutlined />
            </Popconfirm>}
        </div>
    </LayoutPresetOptionContainer>;
};