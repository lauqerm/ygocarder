import { useEffect, useRef } from 'react';
import { drawName } from 'src/draw';
import { FrameInfo, NameStyle } from 'src/model';
import { useCard, WithLanguage } from 'src/service';
import { mergeClass, resolveNameStyle } from 'src/util';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';

export const StyledPatternOption = styled.div`
    line-height: 0;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
        cursor: pointer;
        min-height: 23.2px;
        &.menu-active {
            outline: var(--bw-lg) solid var(--main-active);
            &:hover {
                outline: var(--bw-lg) solid var(--sub-active);
            }
        }
        :hover {
            outline: var(--bw-lg) solid var(--sub-active);
        }
    }
    &.menu-off {
        &:hover {
            color: var(--main-link);
            .anticon {
                color: var(--main-link);
            }
        }
    }
    img {
        max-width: 100%;
        border: var(--bw) solid var(--sub-level-1);
    }
`;

const OPTION_WIDTH = 140;
const OPTION_HEIGHT = 30;
const PresetOptionContainer = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    gap: var(--spacing-xs);
    align-items: center;
    .canvas-container {
        width: ${OPTION_WIDTH}px;
        height: ${OPTION_HEIGHT}px;
    }
    .preset-option-action {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-xxs);
        .anticon {
            cursor: pointer;
            &.anticon-close:hover {
                color: var(--sub-danger);
            }
            &.anticon-save:hover {
                color: var(--sub-info);
            }
        }
    }
`;
export type PresetOption = React.PropsWithChildren<{
    frameInfo?: FrameInfo,
    presetContent: Partial<NameStyle>,
    active?: boolean,
    onOverwrite?: () => void,
    onActive?: () => void,
    onDelete?: () => void,
} & WithLanguage>;
export const PresetOption = ({
    frameInfo,
    presetContent,
    active = false,
    language,
    onOverwrite,
    onActive,
    onDelete,
}: PresetOption) => {
    const {
        format, foil,
    } = useCard(useShallow(({
        card: { format, foil },
    }) => ({
        format, foil,
    })));
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {
        name,
        labelBackgroundColor,
        labelBackgroundImage,
    } = frameInfo ?? {};
    const normalizedFrame = name ?? 'effect';

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, OPTION_WIDTH, OPTION_HEIGHT);
            const { font } = presetContent;
            const value = font === 'OCG' ? '{カード名|かーどめい}' : 'Card Name';
            const top = font === 'OCG' ? 65 : 60;
            const left = font === 'OCG' ? 65 : 12;
            drawName(
                canvas,
                ctx,
                value,
                left,
                top,
                OPTION_WIDTH / 0.4,
                resolveNameStyle({
                    foil,
                    format,
                    frame: normalizedFrame,
                    nameStyle: presetContent,
                    nameStyleType: 'custom',
                }),
                {
                    frame: normalizedFrame,
                    format,
                    furiganaHelper: false,
                    globalScale: 0.4,
                    isSpeedSkill: true,
                }
            );
        }
    }, [foil, format, normalizedFrame, presetContent]);

    return <PresetOptionContainer
        className={mergeClass('preset-option', active ? 'menu-active' : '')}
    >
        <StyledPatternOption
            className={mergeClass('canvas-container', !!onActive ? '' : 'menu-off')}
            onClick={onActive}
            style={{
                background: labelBackgroundColor,
                backgroundImage: labelBackgroundImage,
            }}
        >
            <canvas ref={canvasRef} width={OPTION_WIDTH} height={OPTION_HEIGHT} />
        </StyledPatternOption>
        <div className="preset-option-action">
            {onDelete && <Popconfirm
                title={language['generic.delete.label']}
                okText={language['generic.yes.label']}
                cancelText={language['generic.no.label']}
                onConfirm={() => onDelete()}
            >
                <CloseOutlined />
            </Popconfirm>}
            {onOverwrite && <Popconfirm
                title={language['generic.overwrite.label']}
                okText={language['generic.yes.label']}
                cancelText={language['generic.no.label']}
                onConfirm={() => onOverwrite()}
            >
                <SaveOutlined />
            </Popconfirm>}
        </div>
    </PresetOptionContainer>;
};