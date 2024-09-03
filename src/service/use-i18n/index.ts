import { create } from 'zustand';
import {
    getDefaultLanguageMetadata,
    LanguageData,
    LanguageMetadata,
    processLanguage,
    RawLanguageData,
} from './processor';

export type I18NStore = {
    languageInfo: LanguageMetadata,
    languageMetadataMap: Record<string, LanguageMetadata>,
    language: LanguageData['dictionary'],
    error: any,
    isLoading: boolean,
    isMetadataReady: boolean,
    isInitiating: boolean,
    initiate: () => Promise<void>,
    loadLanguage: (language: string) => Promise<LanguageData | null>,
    loadDefaultLanguage: () => Promise<void>,
    changeLanguage: (language: string) => Promise<void>,
};
export const useI18N = create<I18NStore>((set, get) => {
    const defaultLanguageName = (() => {
        /** Direct request from URL is preferred */
        const url = new URL(window.location.href);
        const initialParam = url.searchParams;
        const defaultLanguageFromURL = initialParam.get('language');
        /** Side effect: Remove default language after load */
        initialParam.delete('language');
        window.history.replaceState(window.history.state, '', url.href);
        if (defaultLanguageFromURL) return defaultLanguageFromURL;

        try {
            const cachedLanguage = window.localStorage.getItem('language');

            if (cachedLanguage) return cachedLanguage;
            return 'eng';
        } catch (e) {
            console.error('useSetting: Error when getting cached language', e);
            return 'eng';
        }
    })();
    const languageMap: Partial<Record<string, LanguageData>> = {};
    const defaultLanguage = processLanguage({
        ...getDefaultLanguageMetadata(),
        rawDictionary: {},
    });
    const loadLanguageMetadata = async () => {
        try {
            const response = await fetch(
                `${process.env.PUBLIC_URL}/asset/i18n/metadata.json`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            const languageMetadataMap: Record<string, LanguageMetadata> = await response.json();

            if (!languageMetadataMap) throw (new Error('No metadata found'));

            set({
                languageMetadataMap,
                isMetadataReady: true,
            });
        } catch (e) {
            console.error('loadLanguageMetadata: Could not load language metadata, try to use English', e);
            set({
                languageMetadataMap: {
                    eng: {
                        name: 'English',
                        formalName: 'English',
                        codeName: 'eng',
                        initialMessage: 'Loading fonts and scripts…',
                        order: 1,
                        active: true
                    },
                },
                isMetadataReady: true,
            });
        }
    };
    const loadLanguage = async (languageName: string) => {
        if (languageMap[languageName]) return null;
        try {
            const response = await fetch(
                `${process.env.PUBLIC_URL}/asset/i18n/${languageName}.json`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            const languageData: RawLanguageData = await response.json();

            if (!languageData.rawDictionary) throw (new Error('No dictionary found'));
            const processedLanguage = processLanguage(languageData, languageMap.eng?.rawDictionary);
            languageMap[languageName] = processedLanguage;

            return processedLanguage;
        } catch (e) {
            console.error('loadLanguage: Could not load language, revert back to default', e);
            return null;
        }
    };
    const changeLanguage = async (languageName: string) => {
        const nextMeta = get().languageMetadataMap[languageName];
        if (!nextMeta) return;

        /** Currently it is better to NOT show language loading process, just let everything magically replaced. */
        // set({ isLoading: true });
        const languageData = !languageMap[languageName]
            ? await loadLanguage(languageName)
            : languageMap[languageName];

        if (languageData) {
            set({
                languageInfo: get().languageMetadataMap[languageName],
                language: languageData.dictionary,
            });
            window.localStorage.setItem('language', languageName);
            set({
                isLoading: false,
                languageInfo: nextMeta,
            });
        } else {
            set({
                isLoading: false,
                languageInfo: get().languageMetadataMap.eng,
                language: defaultLanguage.dictionary,
            });
        }
    };

    return {
        languageMetadataMap: {},
        languageInfo: getDefaultLanguageMetadata(),
        language: defaultLanguage.dictionary,
        error: null,
        isInitiating: true,
        isLoading: true,
        isMetadataReady: false,
        initiate: async () => {
            loadLanguageMetadata();
        },
        loadDefaultLanguage: async () => {
            /** Load english first regardless, so it can act as a fallback language */
            await loadLanguage('eng');
            await changeLanguage(defaultLanguageName);
            set({
                isInitiating: false,
            });
        },
        loadLanguage,
        changeLanguage,
    };
});

export const useLanguage = () => {
    const language = useI18N(({ language }) => language);

    return language;
};
export const getLanguage = () => useI18N.getState().language;
export * from './processor';