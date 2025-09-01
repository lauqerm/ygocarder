import {
    FLAVOR_CONDITION_SOURCE,
    FLAVOR_LINE_PLACEHOLDER,
    FULL_LINE_PLACEHOLDER,
    NB_FULL_LINE_CLOSE,
    NB_FULL_LINE_OPEN,
    NB_LINE_CLOSE,
    NB_LINE_OPEN,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NB_WORD_CLOSE,
    NB_WORD_OPEN,
    NOT_END_OF_LINE_SOURCE,
    NOT_SPLIT_SOURCE,
    NOT_START_OF_LINE_SOURCE,
    OCG_BULLET_SOURCE,
    OCG_KEYWORD_SOURCE,
    OCG_RUBY_SOURCE,
    STYLING_TAG_SOURCE,
    UNCOMPRESSED_SOURCE,
    WHOLE_WORD_SOURCE,
    contextualDoubleQuoteRegex,
    ocgKeywordDataMap,
    ocgNumberCircleMap,
    ocgToTCGLetterMap,
    tcgToOCGLetterMap,
} from 'src/model';

export type LineOption = {
    line: string,
    alignment: 'left' | 'justify',
};
export const splitEffect = (effect: string, isNormal = false) => {
    const lineRegexSource = `^(${NB_LINE_OPEN}([^${NB_LINE_CLOSE}]*)${NB_LINE_CLOSE}\\s*)`;
    const fullLineRegexSource = `^(${NB_FULL_LINE_OPEN}([^${NB_FULL_LINE_CLOSE}]*)${NB_FULL_LINE_CLOSE}\\s*)`;
    const fullLineListOption: LineOption[] = [];
    const lineList: string[] = [];
    const wholeLineRegex = new RegExp([lineRegexSource, fullLineRegexSource].join('|'));
    let effectText = effect;
    let effectFlavorCondition = '';
    /** We use two new line character to identify condition clause among flavor text. Because in normal case the user will try to put in many new lines to ensure that the condition clause is placed at bottom of the card text.
     * 
     * But this method has a caveat: For example if current line limit is 6, and the flavor text already take 5 lines. If user put the condition clause at line 6, it is indistinguishable from a normal paragraph, and therefore drawn with italic font. But if user put a new line between, it will force the draw function to increase the line limit into 7.
     * 
     * To combat this, we perform a simple remove that additional new line, that means if conditional clause is present, two new lines in text are actually result only one new line. This does not create much hassle since user rarely notice this behavior.
     * */
    const flavorConditionRegex = new RegExp(FLAVOR_CONDITION_SOURCE, 'm');
    const potentialFlavorConditionText = flavorConditionRegex.exec(effect)?.[1];
    if (potentialFlavorConditionText && isNormal) {
        effectFlavorCondition = potentialFlavorConditionText.trim();
        effectText = effectText.replace(potentialFlavorConditionText, '');
    } else effectFlavorCondition = '';

    /** Infinite loop guarding just in case, we are dealing with while loop anyways */
    let tryCnt = 0;
    while (effectText.length > 0 && tryCnt <= 100) {
        const result = wholeLineRegex.exec(effectText);
        const lineReplacement = result?.[1];
        const lineContent = result?.[2];
        const fullLineReplacement = result?.[3];
        const fullLineContent = result?.[4];

        if (lineContent && lineReplacement) {
            effectText = effectText.replace(lineReplacement, '');
            fullLineListOption.push({ line: lineContent, alignment: 'left' });
            lineList.push(FULL_LINE_PLACEHOLDER);
        } else if (fullLineContent && fullLineReplacement) {
            effectText = effectText.replace(fullLineReplacement, '');
            fullLineListOption.push({ line: fullLineContent, alignment: 'justify' });
            lineList.push(FULL_LINE_PLACEHOLDER);
        } else {
            const paragraphResult = /(.*)(\n|$)/.exec(effectText);
            const lineReplacement = paragraphResult?.[0];
            const lineContent = paragraphResult?.[1];
            if (typeof lineReplacement === 'string' && typeof lineContent === 'string') {
                /** Restore all remaining nb line symbol back to their normal letters. Then split those paragraph into lines. */
                lineList.push(...lineContent
                    .replaceAll(NB_LINE_OPEN, '[').replaceAll(NB_LINE_CLOSE, ']')
                    .replaceAll(NB_FULL_LINE_OPEN, '[[').replaceAll(NB_FULL_LINE_CLOSE, ']]')
                    .split('\n')
                );
                effectText = effectText.replace(lineReplacement, '');
            }
        }
        tryCnt++;
    }
    if (effectFlavorCondition) {
        lineList.push(FLAVOR_LINE_PLACEHOLDER);
    }

    return {
        lineList,
        fullLineListOption: [...fullLineListOption],
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

    /** OCG text sometimes enter new line follow letter "、" or "。", we will automatically join them. It is debatable whether this feature is needed or not. */
    // const textAfterJoinRow = normalizedText.replace(/(､|｡|。|、)\n(?!●)/g, '$1');
    const textAfterJoinRow = normalizedText;

    /** Translate non-wrappable line syntax into internal control characters, beware that "Qliphort Scout" does use square brackets in its flavor text, so the regex must exclude that case. */
    const textAfterSplitBlockRow = multiline
        ? textAfterJoinRow
            .replace(/^\[\[([\w\W]*?)\]\](?=(\n|$))/gm, `${NB_FULL_LINE_OPEN}$1${NB_FULL_LINE_CLOSE}`)
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
        .replaceAll(new RegExp(STYLING_TAG_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
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
    let textAfterNormalizeBlockWord: string[] = [];
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
        .replaceAll(`${NB_FULL_LINE_CLOSE}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_FULL_LINE_CLOSE}`)
        .replaceAll(`${NB_LINE_CLOSE}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_LINE_CLOSE}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_FULL_LINE_OPEN}`, `${NB_FULL_LINE_OPEN}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_LINE_OPEN}`, `${NB_LINE_OPEN}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_UNCOMPRESSED_START}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_UNCOMPRESSED_START}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_UNCOMPRESSED_END}`, `${NB_UNCOMPRESSED_END}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_LINE_OPEN}${NB_LINE_CLOSE}`, '')
        .replaceAll(`${NB_FULL_LINE_OPEN}${NB_FULL_LINE_CLOSE}`, '')
        .replaceAll(`${NB_WORD_OPEN}${NB_WORD_CLOSE}`, '');

    return finalizedText;
};