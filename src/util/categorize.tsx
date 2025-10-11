import {
    AUTO_FONT,
    Card,
    Foil,
    frameList,
    LINK_RATING_ALWAYS_AUTO,
    LINK_RATING_ALWAYS_HIDE,
    LINK_RATING_ALWAYS_SHOW,
    NameStyle,
    NameStyleType,
    PresetNameStyleMap,
} from '../model';

export const checkNormal = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'normal' && checkMonster(card);
};
export const checkXyz = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'xyz';
};
export const checkDarkSynchro = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'dark-synchro';
};
export const checkLink = (card: Pick<Card, 'isLink'>) => {
    return card.isLink === true;
};
export const checkSpeedSkill = (card: Pick<Card, 'frame'>) => {
    return card.frame === 'speed-skill' && !checkMonster(card);
};
export const checkMonster = (card: Pick<Card, 'frame'>) => {
    return card.frame !== 'spell' && card.frame !== 'trap' && card.frame !== 'speed-skill';
};
export const checkExtraDeckMonster = (card: Pick<Card, 'frame'>) => {
    return [
        'fusion',
        'synchro',
        'xyz',
        'link',
        'dark-synchro',
        'zarc',
    ].includes(card.frame);
};

export const getCardFrame = (frame: string) => {
    return frameList.find(entry => entry.name === frame.toLowerCase())?.name ?? 'effect';
};
export const getCardIconFromFrame = (frame: string) => {
    if (frame === 'spell' || frame === 'trap') return 'st';
    if (frame === 'xyz') return 'rank';
    if (frame === 'dark-synchro') return 'negative-level';
    if (frame === 'speed-skill' || frame === 'link' || frame === 'lg-dragon') return 'none';
    return 'level';
};

export const checkLightHeader = (frame: string) => {
    return !checkMonster({ frame }) || checkLightFrame(frame);
};

export const checkLightFooter = (frame: string) => {
    return ['xyz', 'dark-synchro', 'speed-skill', 'hamon', 'uria', 'raviel'].includes(frame);
};

export const checkLightFrame = (frame: string) => {
    return ['link'].includes(frame) || checkLightFooter(frame);
};

export const checkDiplayLinkRating = (displayMode: number, isLink: boolean) => {
    let showLinkRating = false;
    switch (displayMode) {
        case LINK_RATING_ALWAYS_SHOW: showLinkRating = true; break;
        case LINK_RATING_ALWAYS_HIDE: showLinkRating = false; break;
        case LINK_RATING_ALWAYS_AUTO: showLinkRating = isLink; break;
    }

    return showLinkRating;
};

export const resolveFrameStyle = (frameData: Record<string, string | undefined>, isPendulum: boolean) => {
    const {
        frame,
        topLeftFrame,
        topRightFrame,
        bottomLeftFrame,
        bottomRightFrame,
        effectBackground,
        pendulumEffectBackground,
    } = frameData;
    const resolvedFrame = frame ?? 'effect';
    const resolvedTopLeft = topLeftFrame === 'auto' ? resolvedFrame : topLeftFrame;
    const resolvedTopRight = (topRightFrame === 'auto' ? resolvedTopLeft : topRightFrame) ?? resolvedFrame;
    const resolvedBottomLeft = (bottomLeftFrame === 'auto'
        ? (isPendulum ? 'spell' : resolvedTopLeft)
        : bottomLeftFrame) ?? resolvedFrame;
    const resolvedBottomRight = (bottomRightFrame === 'auto'
        ? resolvedBottomLeft
        : bottomRightFrame) ?? resolvedFrame;
    const resolvedEffectBackground = (effectBackground === 'auto'
        ? resolvedBottomLeft
        : effectBackground) ?? resolvedFrame;
    const resolvedPendulumEffectBackground = (pendulumEffectBackground === 'auto'
        ? resolvedBottomLeft
        : pendulumEffectBackground) ?? resolvedFrame;

    return {
        topLeftFrame: resolvedTopLeft,
        topRightFrame: resolvedTopRight,
        bottomLeftFrame: resolvedBottomLeft,
        bottomRightFrame: resolvedBottomRight,
        effectBackground: resolvedEffectBackground,
        pendulumEffectBackground: resolvedPendulumEffectBackground,
    };
};

export const resolveNameStyle = ({
    format,
    frame,
    nameStyle,
    nameStyleType,
    foil,
}: {
    nameStyleType: NameStyleType,
    nameStyle: Partial<NameStyle>,
    frame: string,
    format: string,
    foil: Foil,
}) => {
    const isSpeedSkill = checkSpeedSkill({ frame });
    let contextualFont = nameStyleType === 'auto' ? AUTO_FONT : nameStyle.font;
    if (contextualFont === AUTO_FONT && format === 'ocg') contextualFont = 'OCG';
    if (contextualFont === AUTO_FONT && format === 'tcg') contextualFont = 'Default';
    if (contextualFont === AUTO_FONT && isSpeedSkill && format === 'tcg') contextualFont = 'Arial';

    /** Custom style will be kept as is */
    if (nameStyleType === 'custom') {
        return {
            ...nameStyle,
            font: contextualFont,
        };
    }

    const lightHeader = checkLightHeader(frame);

    /** Predefined name style has dynamic font based on format unless explictly stated */
    let contextualColor = {
        fillStyle: lightHeader ? '#ffffff' : '#000000',
        headTextFillStyle: lightHeader ? '#ffffff' : '#000000',
    };
    if (nameStyleType === 'predefined') {
        const resultNameStyle = { ...PresetNameStyleMap[nameStyle.preset ?? 'commonB'].value };

        return {
            ...contextualColor,
            ...resultNameStyle,
            font: resultNameStyle.font === AUTO_FONT ? contextualFont : resultNameStyle.font,
        };
    }

    let contextualOutline = isSpeedSkill
        ? {
            hasOutline: true,
            lineWidth: 6,
            strokeStyle: '#000',
        }
        : {};

    const foilStyle = foil !== 'normal' ? PresetNameStyleMap[foil]?.value ?? {} : {};
    const frameStyle = frame === 'zarc' ? PresetNameStyleMap.animeGold.value : {};

    /** Auto name style has dynamic font, outline, color, fully affected by foil and frame */
    return {
        font: contextualFont,
        ...contextualColor,
        ...contextualOutline,
        ...foilStyle,
        ...frameStyle,
    };
};