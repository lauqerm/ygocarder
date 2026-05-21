/** We do not want to override Navigator globally, to avoid accidentally use unsupported features. */
export type NavigatorWithLimitedFeature = Navigator & {
    standalone: boolean,
    connection?: {
        effectiveType?: 'slow-2g' | '2g' | '3g' | '4g',
        saveData?: boolean,
    },
};