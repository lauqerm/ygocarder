import { useEffect, useRef } from 'react';
import { StyledDropdown } from 'src/component';
import { drawName } from 'src/draw';
import { FrameInfo, NameStyle } from 'src/model';
import { useCard } from 'src/service';
import { resolveNameStyle } from 'src/util';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';

export const StyledPatternContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    .alert {
        grid-column: span 2;
        font-size: var(--fs-sm);
        text-align: center;
    }
`;
export const StyledPresetContainer = styled(StyledDropdown.Container)`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
    max-width: 450px; // Alignment
`;
export const StyledPatternOption = styled.div`
    line-height: 0;
    cursor: pointer;
    align-self: center;
    text-align: center;
    &:not(.menu-off) {
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

export const StyledPredefinedContainer = styled(StyledDropdown.Container)`
    display: grid;
    grid-template-columns: repeat(4, 120px);
    gap: var(--spacing-sm);
    padding: var(--spacing-xs);
    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px var(--focus) inset;
    }
`;
export const StyledPredefinedOption = styled.div`
    line-height: 0;
    cursor: pointer;
    min-height: 26.13px;
    &.menu-active {
        outline: var(--bw-lg) solid var(--main-active);
        &:hover {
            outline: var(--bw-lg) solid var(--sub-active);
        }
    }
    &.preset-item-focused {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    :hover {
        outline: var(--bw-lg) solid var(--sub-active);
    }
    img {
        max-width: 100%;
    }
`;

const OPTION_WIDTH = 140;
const OPTION_HEIGHT = 30;
const PresetOptionContainer = styled(StyledPatternOption)`
    width: ${OPTION_WIDTH}px;
    height: ${OPTION_HEIGHT}px;
`;
export type PresetOption = React.PropsWithChildren<{
    frameInfo: FrameInfo,
    presetContent: Partial<NameStyle>,
    onClick: () => void,
}>;
export const PresetOption = ({
    frameInfo,
    presetContent,
    onClick,
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
    } = frameInfo;
    const normalizedFrame = name ?? 'effect';

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, OPTION_WIDTH, OPTION_HEIGHT);
            const { font } = presetContent;
            const value = font === 'OCG' ? 'カード名' : 'Card Name';
            const top = 60;
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
        onClick={onClick}
        style={{
            background: labelBackgroundColor,
            backgroundImage: labelBackgroundImage,
        }}
    >
        <canvas ref={canvasRef} width={OPTION_WIDTH} height={OPTION_HEIGHT} />
    </PresetOptionContainer>;
};