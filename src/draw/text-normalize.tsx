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
    NB_UNCOMPRESSED_END
} from 'src/model';

export const splitEffect = (effect: string, isNormal = false) => {
    let effectBody = effect;

    let fullLineList = [];
    const wholeLineRegex = new RegExp(`^(${NB_LINE_OPEN}([^${NB_LINE_CLOSE}]*)${NB_LINE_CLOSE}\\s*)`);
    let materialReplacement;
    let material;
    do {
        materialReplacement = wholeLineRegex.exec(effectBody)?.[1];
        material = wholeLineRegex.exec(effectBody)?.[2];

        if (material && materialReplacement) {
            fullLineList.push(material);
            effectBody = effectBody.replace(materialReplacement, '');
        }
    } while (materialReplacement && material);

    let effectFlavorCondition = '';
    
    const flavorConditionRegex = new RegExp(FLAVOR_CONDITION_SOURCE, 'm');
    const flavorCondition = flavorConditionRegex.exec(effect)?.[1];
    if (flavorCondition && isNormal) {
        effectFlavorCondition = flavorCondition;
        effectBody = effectBody.replace(flavorCondition, '');
    } else effectFlavorCondition = '';

    return {
        fullLineList,
        body: effectBody,
        flavorCondition: effectFlavorCondition
    };
};

export const normalizeCardText = (
    text: string,
    format: string,
    option?: { multiline?: boolean, furiganaHelper?: boolean, dictionaryType?: 'rubyForm' | 'rubyFormName' },
) => {
    const { multiline = true, furiganaHelper = true, dictionaryType = 'rubyForm' } = option ?? {};
    const normalizedText = text ?? '';
    let textAfterLetterSwap = '';
    let letterSwapMap = format === 'ocg' ? tcgToOCGLetterMap : ocgToTCGLetterMap;
    for (const letter of normalizedText) {
        textAfterLetterSwap += letterSwapMap[letter] ?? letter;
    }
    const textAfterJoinRow = textAfterLetterSwap
        // Văn bản Nhật thường tự xuống dòng follow hai ký tự "、" và "。" này, nên ta tự ghép dòng nếu cần.
        .replace(/(､|｡|。|、)\n(?!●)/g, '$1');
    const textAfterSplitBlockRow = multiline
        ? textAfterJoinRow
            /** Chuyển định dạng block row (dòng nguyên) thành ký tự ít phổ biến hơn, vì các card như "Qliphort Scout" vẫn sử dụng cặp ngoặc [ ]. */
            .replace(/^\[([\w\W]*?)\](?=(\n|$))/gm, `${NB_LINE_OPEN}$1${NB_LINE_CLOSE}`)
        : textAfterJoinRow;
    const textAfterSwapLetter = textAfterSplitBlockRow
        .replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')                /** Chuyển ký tự nháy đôi ' thành cặp ký tự nháy đôi ‘ */
        .replace(/'/g, '\u2019')                                    /** Chuyển ký tự nháy đơn ' thành cặp ký tự nháy đơn ’ */
        .replace(/(^|[-\u2014/[(\u2018\s])"/g, '$1\u201c')          /** Chuyển ký tự nháy đôi " thành cặp ký tự nháy đôi “ */
        .replace(/"/g, '\u201d')                                    /** Chuyển ký tự nháy đơn " thành cặp ký tự nháy đơn ” */
        .replace(/--/g, '\u2014')                                   /** Chuyển cặp ký tự "--" thành em dash "—" */
        .replace(/● /g, '●')                                        /** Loại bỏ space nối liền bullet, vì space sau bullet là fixed space vẽ riêng */
        // Chuyển shorthand dạng (15) thành ký tự chữ số tròn tương ứng "⑮", trong OCG text
        .replace(/(\([０-９0-9]{1,2}\))/g, m => {
            const correspondingCircleSymbol = ocgNumberCircleMap[m];

            return correspondingCircleSymbol ?? m;
        });

    /** Xác định các nhóm block word (từ nguyên), bao gồm:
     * * Các cụm từ đã xác định từ trước
     * * Các ký tự không được nằm cuối dòng (luật Kinsoku Shori)
     * * Các ký tự không được nằm đầu dòng (luật Kinsoku Shori)
     * * Các ký tự nối liền không được bẻ dòng (luật Kinsoku Shori)
     */
    const textAfterDetectBlockWord = textAfterSwapLetter
        .replaceAll(new RegExp(UNCOMPRESSED_SOURCE, 'g'), m => m.replaceAll('{{', NB_UNCOMPRESSED_START).replaceAll('}}', NB_UNCOMPRESSED_END))
        .replaceAll(new RegExp(OCG_RUBY_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}⦊`);
    const textAfterDictionaryMatch = format === 'tcg' || furiganaHelper === false
        ? textAfterDetectBlockWord
        : textAfterDetectBlockWord
            .replaceAll(new RegExp(OCG_KEYWORD_SOURCE, 'g'), m => {
                const keywordSubtitue = ocgKeywordDataMap[m][dictionaryType] ?? ocgKeywordDataMap[m].rubyForm;

                return `${NB_WORD_OPEN}${keywordSubtitue}${NB_WORD_CLOSE}`;
            });
    const textAfterProcessing = textAfterDictionaryMatch
        .replaceAll(new RegExp(WHOLE_WORD_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_END_OF_LINE_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_START_OF_LINE_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(NOT_SPLIT_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`)
        .replaceAll(new RegExp(OCG_BULLET_SOURCE, 'g'), m => `${NB_WORD_OPEN}${m}${NB_WORD_CLOSE}`);
    /** Các nhóm này có thể overlap, vậy nên ta cần gom chúng lại thành nhóm lớn hơn bằng cách giải ngoặc.
     * * ((()))     => ()
     * * (()())     => ()
     * * ((()()))   => ()
     * * ()()()     => ()()()
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
    /** Vì block row có độ ưu tiên cao hơn block word, ta đưa block word vào trong. */
    const finalizedText = textAfterNormalizeBlockWord.join('')
        .replaceAll(`${NB_LINE_CLOSE}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_LINE_CLOSE}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_LINE_OPEN}`, `${NB_LINE_OPEN}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_UNCOMPRESSED_START}${NB_WORD_CLOSE}`, `${NB_WORD_CLOSE}${NB_UNCOMPRESSED_START}`)
        .replaceAll(`${NB_WORD_OPEN}${NB_UNCOMPRESSED_END}`, `${NB_UNCOMPRESSED_END}${NB_WORD_OPEN}`)
        .replaceAll(`${NB_LINE_OPEN}${NB_LINE_CLOSE}`, '')
        .replaceAll(`${NB_WORD_OPEN}${NB_WORD_CLOSE}`, '');

    return finalizedText;
};