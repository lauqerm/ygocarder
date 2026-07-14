import {
    CardFormatMode,
    getCardFormatMode,
    ocgToTCGTermMap,
    scToTCGTermMap,
    tcgToOCGTermMap,
    tcgToSCTermMap,
} from 'src/model/format';
import type { InternalCard } from 'src/model/card';

const formatModeData: Record<CardFormatMode, { format: 'tcg' | 'ocg', region: 'en' | 'jp' | 'ch', setIdRegion: string }> = {
    tcg: { format: 'tcg', region: 'en', setIdRegion: 'EN' },
    ocg: { format: 'ocg', region: 'jp', setIdRegion: 'JP' },
    sc: { format: 'ocg', region: 'ch', setIdRegion: 'SC' },
};

const convertTerm = (term: string, sourceMode: CardFormatMode, targetMode: CardFormatMode) => {
    const tcgTerm = sourceMode === 'ocg'
        ? ocgToTCGTermMap[term] ?? term
        : sourceMode === 'sc'
            ? scToTCGTermMap[term] ?? term
            : term;

    if (targetMode === 'ocg') return tcgToOCGTermMap[tcgTerm] ?? tcgTerm;
    if (targetMode === 'sc') return tcgToSCTermMap[tcgTerm] ?? tcgTerm;
    return tcgTerm;
};

export const changeCardFormat = (card: InternalCard, targetModeValue: string): InternalCard => {
    const {
        creator,
        effect,
        format,
        region,
        isFirstEdition,
        name,
        password,
        pendulumEffect,
        setId,
        typeAbility,
    } = card;

    const sourceMode = getCardFormatMode(format, region);
    const targetMode: CardFormatMode = targetModeValue === 'sc'
        ? 'sc'
        : targetModeValue === 'ocg'
            ? 'ocg'
            : 'tcg';
    if (sourceMode === targetMode) return card;

    const target = formatModeData[targetMode];
    const newSetId = setId.replace(/-[A-Z]{2}(?=\d)/i, `-${target.setIdRegion}`);

    return {
        ...card,
        name: convertTerm(name, sourceMode, targetMode),
        format: target.format,
        region: target.region,
        effect: convertTerm(effect, sourceMode, targetMode),
        pendulumEffect: convertTerm(pendulumEffect, sourceMode, targetMode),
        typeAbility: typeAbility.map(entry => convertTerm(entry, sourceMode, targetMode)),
        creator: convertTerm(creator, sourceMode, targetMode),
        password: convertTerm(password, sourceMode, targetMode),
        setId: newSetId,
        isFirstEdition: target.format === 'ocg' ? false : isFirstEdition,
        furiganaHelper: targetMode === 'sc' ? false : card.furiganaHelper,
    };
};
