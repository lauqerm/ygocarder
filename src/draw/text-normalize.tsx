import {
    NB_LINE_OPEN,
    NB_LINE_CLOSE,
    OCG_RUBY_SOURCE,
    OCG_KEYWORD_SOURCE,
    ocgKeywordDataMap,
    WHOLE_WORD_SOURCE,
    NOT_END_OF_LINE_SOURCE,
    NOT_START_OF_LINE_SOURCE,
    NOT_SPLIT_SOURCE,
    OCG_BULLET_SOURCE,
    tcgToOCGLetterMap,
    ocgToTCGLetterMap,
    UNCOMPRESSED_SOURCE,
    ocgNumberCircleMap,
    NB_WORD_OPEN,
    NB_WORD_CLOSE,
    FLAVOR_CONDITION_SOURCE,
    NB_UNCOMPRESSED_START,
    NB_UNCOMPRESSED_END,
    contextualDoubleQuoteRegex
} from 'src/model';

export const splitEffect = (effect: string, isNormal = false) => {
    let effectText = effect;

    let fullLineList = [];
    const wholeLineRegex = new RegExp(`^(${NB_LINE_OPEN}([^${NB_LINE_CLOSE}]*)${NB_LINE_CLOSE}\\s*)`);
    let materialReplacement;
    let material;
    do {
        materialReplacement = wholeLineRegex.exec(effectText)?.[1];
        material = wholeLineRegex.exec(effectText)?.[2];

        if (material && materialReplacement) {
            fullLineList.push(material);
            effectText = effectText.replace(materialReplacement, '');
        }
    } while (materialReplacement && material);

    let effectFlavorCondition = '';
    const flavorConditionRegex = new RegExp(FLAVOR_CONDITION_SOURCE, 'm');
    const potentialFlavorConditionText = flavorConditionRegex.exec(effect)?.[1];
    if (potentialFlavorConditionText && isNormal) {
        effectFlavorCondition = potentialFlavorConditionText.trim();
        effectText = effectText.replace(potentialFlavorConditionText, '');
    } else effectFlavorCondition = '';

    return {
        fullLineList,
        effectText,
        effectFlavorCondition,
    };
};

export const normalizeCardText = (
    text: string,
    format: string,
    option?: { multiline?: boolean, furiganaHelper?: boolean, dictionaryType?: 'rubyForm' | 'rubyFormName' },
) => {
    const {
        multiline = true,
        furiganaHelper = true,
        dictionaryType = 'rubyForm',
    } = option ?? {};
    const nonNullableText = text ?? '';

    /** Normalize the text based on format, by swapping letters to their corresponding form. For example full-width captial A "Ａ" will become normal capital "A" after normalized. */
    let normalizedText = '';
    let letterSwapMap = format === 'ocg'
        ? tcgToOCGLetterMap
        : ocgToTCGLetterMap;
    for (const letter of nonNullableText) {
        normalizedText += letterSwapMap[letter] ?? letter;
    }

    /** OCG text sometimes enter new line follow letter "、" or "。", we will automatically join them. It is debatable whether this feature is need or not. */
    // const textAfterJoinRow = normalizedText.replace(/(､|｡|。|、)\n(?!●)/g, '$1');
    const textAfterJoinRow = normalizedText;

    /** Translate non-wrappable line syntax into internal control characters, beware that "Qliphort Scout" does use square brackets in its flavor text, so the regex must exclude that case. */
    const textAfterSplitBlockRow = multiline
        ? textAfterJoinRow
            .replace(/^\[([\w\W]*?)\](?=(\n|$))/gm, `${NB_LINE_OPEN}$1${NB_LINE_CLOSE}`)
        : textAfterJoinRow;

    /** Various contextual swaps */
    const textAfterSwapLetter = textAfterSplitBlockRow
        .replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')        /** Turn straight single quote ' into contextual curly quote ‘ */
        .replace(/'/g, '\u2019')                            /** Close open curly quote ’ */
        .replace(contextualDoubleQuoteRegex, '$1\u201c')  /** Turn straight double quote " into contextual curly double quote “ */
        .replace(/"/g, '\u201d')                            /** Close open curly double quote ” */
        .replace(/--/g, '\u2014')                           /** Turn double dash "--" into em-dash "—" */
        .replace(/● /g, '●')                                /** Remove direct whitespace after bullet, bullet have their own fixed space that we will draw later */
        /** Convert ordinal shorthand syntax, for example "(15)" will become "⑮", used in OCG effect */
        .replace(/(\([０-９0-9]{1,2}\))/g, m => {
            const correspondingCircleSymbol = ocgNumberCircleMap[m];

            return correspondingCircleSymbol ?? m;
        });

    const textAfterDetectBlockWord = textAfterSwapLetter
        /** Convert non-compressable syntax into internal control characters */
        .replaceAll(new RegExp(UNCOMPRESSED_SOURCE, 'g'), m => m.replaceAll('{{', NB_UNCOMPRESSED_START).replaceAll('}}', NB_UNCOMPRESSED_END))
        /** Convert ruby syntax into internal control characters */
        .replaceAll(new RegExp(OCG_RUBY_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`);

    /** Apply dictionary */
    const textAfterDictionaryMatch = format === 'tcg' || furiganaHelper === false
        ? textAfterDetectBlockWord
        : textAfterDetectBlockWord
            .replaceAll(new RegExp(OCG_KEYWORD_SOURCE, 'g'), m => {
                const keywordSubtitue = ocgKeywordDataMap[m][dictionaryType] ?? ocgKeywordDataMap[m].rubyForm;

                return `${NB_WORD_OPEN}${keywordSubtitue}${NB_WORD_CLOSE}`;
            });
    /** Analyze various typography rules in OCG card (mainly Kinsoku Shorit)
     * * Some letters cannot stand at the start of the line, so they form a block with the token before them.
     * * Some letters cannot stand at the end of a line, so they form a block with the token next to them.
     * * Some letters cannot be splitted into two lines, so they form a block with both tokens around them.
     * * Ordinal letters must always followed by a colon "：", and cannot stand at the end of a line.
    */
    const textAfterProcessing = textAfterDictionaryMatch
        .replaceAll(new RegExp(WHOLE_WORD_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_END_OF_LINE_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_START_OF_LINE_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_SPLIT_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(OCG_BULLET_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`);

    /** Eliminate overlapping group control characters, we perform a simple algorithm to reduce various overlapping forms into non-overlapping ones.
     * * `((()))` => `()`
     * * `(()())` => `()`
     * * `((()()))` => `()`
     * * `()()()` => `()()()`
     */
    let textAfterNormalizeBlockWord = [];
    let currentDepth = 0;
    for (const letter of textAfterProcessing) {
        if (letter === NB_WORD_OPEN) {
            if (currentDepth === 0) textAfterNormalizeBlockWord.push(letter);
            currentDepth += 1;
        } else if (letter === NB_WORD_CLOSE) {
            currentDepth -= 1;
            if (currentDepth === 0) textAfterNormalizeBlockWord.push(letter);
        } else textAfterNormalizeBlockWord.push(letter);
    }
    /** Non-wrappable line syntax has higher priority than non-wrappable word syntax, so we re-arrange control characters to fit such case. */
    const finalizedText = textAfterNormalizeBlockWord.join('')
        .replaceAll(`${NB_LINE_CLOSE}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_LINE_CLOSE}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_LINE_OPEN}`, `${NB_LINE_OPEN}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_UNCOMPRESSED_START}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_UNCOMPRESSED_START}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_UNCOMPRESSED_END}`, `${NB_UNCOMPRESSED_END}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_LINE_OPEN}${NB_LINE_CLOSE}`, '')
        .replaceAll(`${NB_WORD_OPEN}${NB_WORD_CLOSE}`, '');

    return finalizedText;
};