import React from 'react';

export type LanguageMetadata = {
    name: string,
    formalName: string,
    codeName: string,
    initialMessage: string,
    active: boolean,
    order: number,
    style?: React.CSSProperties & Record<string, string>,
};
export const getDefaultLanguageMetadata = () => ({
    name: 'Default',
    formalName: 'Default',
    codeName: 'def',
    initialMessage: '',
    order: 1000,
    active: false,
});
export type RawLanguageData = LanguageMetadata & {
    rawDictionary: Record<string, string>,
};
export type LanguageData = ReturnType<typeof processLanguage>;
export type LanguageDataDictionary = LanguageData['dictionary'];
export type WithLanguage = {
    language: LanguageDataDictionary
};

export const processLanguage = (rawLanguageData: RawLanguageData, fallbackRawDictionary: Record<string, string> = {}) => {
    const normalizedRawDictionary = {
        ...fallbackRawDictionary,
        ...rawLanguageData.rawDictionary,
    };
    const getDictionaryEntry = (entry: string) => {
        return normalizedRawDictionary[entry] ?? '';
    };
    const applyTemplateNode = (template: string, nodeMap: Record<string, React.ReactNode>) => {
        const splitRegex = new RegExp(`\\{(${Object.keys(nodeMap).join('|')})\\}`);
        /** Expectation: Odd slots belong to actual string, even slots belong to template node, we use index base */
        const splittedString = template.split(splitRegex);

        return <React.Fragment key={template}>
            {splittedString.map((entry, index) => {
                if (index % 2 === 0) return <React.Fragment key={`${entry}-${index}`}>{entry}</React.Fragment>;
                return nodeMap[entry];
            })}
        </React.Fragment>;
    };
    const specializedDictionary = {
        'error.load.font.tcg': (familyName: string) => {
            return getDictionaryEntry('error.load.font.tcg').replaceAll('{familyName}', familyName);
        },
        'error.load.font.ocg': (familyName: string) => {
            return getDictionaryEntry('error.load.font.ocg').replaceAll('{familyName}', familyName);
        },
        'error.max-size.description': (fileSize: number) => {
            return getDictionaryEntry('error.max-size.description').replaceAll('{fileSize}', `${fileSize}`);
        },
        'contributor.disclaimer.line-1': (siteLink: React.ReactNode) => {
            return applyTemplateNode(
                getDictionaryEntry('contributor.disclaimer.line-1'),
                { siteLink },
            );
        },
        'contributor.disclaimer.line-5': (author1: React.ReactNode, author2: React.ReactNode) => {
            return applyTemplateNode(
                getDictionaryEntry('contributor.disclaimer.line-5'),
                { author1, author2 },
            );
        },
        'contributor.template-maker': (
            artist1: React.ReactNode,
            artist2: React.ReactNode,
            artist3: React.ReactNode,
            artist4: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('contributor.template-maker'),
                { artist1, artist2, artist3, artist4 },
            );
        },
        'converter.header.warning.label': (
            maxAmount: number,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('converter.header.warning.label'),
                { maxAmount },
            );
        },
        'guide.format.introduction': (settingIcon: React.ReactNode) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.introduction'),
                { settingIcon },
            );
        },
        'guide.format.section-1.content': (
            openTag: React.ReactNode,
            closeTag: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-1.content'),
                { openTag, closeTag, hotkey, hotkeyAlternative },
            );
        },
        'guide.format.section-2.content': (
            openTag: React.ReactNode,
            closeTag: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-2.content'),
                { openTag, closeTag, hotkey, hotkeyAlternative },
            );
        },
        'guide.format.section-3.content': (
            separator: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-3.content'),
                { separator, hotkey, hotkeyAlternative },
            );
        },
        'guide.format.section-4.content': (
            separator: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-4.content'),
                { separator, hotkey, hotkeyAlternative },
            );
        },
        'guide.format.section-5.content': (
            openTag: React.ReactNode,
            closeTag: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-5.content'),
                { openTag, closeTag, hotkey, hotkeyAlternative },
            );
        },
        'guide.format.section-6.content': (
            openTag: React.ReactNode,
            closeTag: React.ReactNode,
            hotkey: React.ReactNode,
            hotkeyAlternative: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('guide.format.section-6.content'),
                { openTag, closeTag, hotkey, hotkeyAlternative },
            );
        },
        'input.name-style.emboss.color.alert': (
            colorTab: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('input.name-style.emboss.color.alert'),
                { colorTab },
            );
        },
        'input.scale.label': (
            scaleType: React.ReactNode,
        ) => {
            return applyTemplateNode(
                getDictionaryEntry('input.scale.label'),
                { scaleType },
            );
        },
    };

    return {
        ...rawLanguageData,
        rawDictionary: normalizedRawDictionary,
        dictionary: {
            ...normalizedRawDictionary,
            ...specializedDictionary,
        } as typeof specializedDictionary & Record<string, string>,
    };
};