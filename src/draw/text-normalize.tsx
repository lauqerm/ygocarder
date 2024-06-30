import {
    NB_LINE_OPEN,
    NB_LINE_CLOSE,
    OCG_RUBY_REGEX_SOURCE,
    OCG_KEYWORD_REGEX_SOURCE,
    ocgKeywordDataMap,
    WHOLE_WORD_REGEX_SOURCE,
    NOT_END_OF_LINE_REGEX_SOURCE,
    NOT_START_OF_LINE_REGEX_SOURCE,
    NOT_SPLIT_REGEX_SOURCE,
    OCG_BULLET_REGEX_SOURCE,
    tcgToOCGLetterMap,
    ocgToTCGLetterMap,
    UNCOMPRESSED_REGEX_SOURCE
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
    const flavorConditionRegex = /(\n^[\r\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*\([\w\W]+\))\s*$/m;
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

const ocgNumberCircleMap: Record<string, string> = {
    '(１)': '①',
    '(２)': '②',
    '(３)': '③',
    '(４)': '④',
    '(５)': '⑤',
    '(６)': '⑥',
    '(７)': '⑦',
    '(８)': '⑧',
    '(９)': '⑨',
    '(１０)': '⑩',
    '(１１)': '⑪',
    '(１２)': '⑫',
    '(１３)': '⑬',
    '(１４)': '⑭',
    '(１５)': '⑮',
    '(１６)': '⑯',
    '(１７)': '⑰',
    '(１８)': '⑱',
    '(１９)': '⑲',
    '(２０)': '⑳',
};
export const normalizeCardText = (text: string, format: string, option?: { multiline?: boolean }) => {
    const { multiline = true } = option ?? {};
    const normalizedText = text ?? '';
    let textAfterLetterSwap = '';
    let letterSwapMap = format === 'ocg' ? tcgToOCGLetterMap : ocgToTCGLetterMap;
    for (const letter of normalizedText) {
        textAfterLetterSwap += letterSwapMap[letter] ?? letter;
    }
    const textAfterJoinRow = textAfterLetterSwap
        // Văn bản Nhật thường tự xuống dòng follow hai ký tự "、" và "。" này, nên ta tự ghép dòng nếu cần.
        .replace(/(､|｡|。|、)\n/g, '$1');
    const textAfterSplitBlockRow = multiline
        ? textAfterJoinRow
            /** Chuyển định dạng block row (dòng nguyên) thành ký tự ít phổ biến hơn, vì các card như "Qliphort Scout" vẫn sử dụng cặp ngoặc [ ]. */
            .replace(/^\[([\w\W]*?)\](?=(\n|$))/gm, `${NB_LINE_OPEN}$1${NB_LINE_CLOSE}`)
        : textAfterJoinRow;
    const textAfterSwapLetter = textAfterSplitBlockRow
        .replace(/(^|[-\u2014\s(["])'/g, '$1\u2018')                /** Chuyển ký tự nháy đôi " thành cặp ký tự nháy đơn “ */
        .replace(/'/g, '\u2019')                                    /** Chuyển ký tự nháy đơn ' thành cặp ký tự nháy đơn ‘ */
        .replace(/(^|[-\u2014/[(\u2018\s])"/g, '$1\u201c')          /** Chuyển ký tự nháy đôi " thành cặp ký tự nháy đơn ” */
        .replace(/"/g, '\u201d')                                    /** Chuyển ký tự nháy đơn ' thành cặp ký tự nháy đơn ’ */
        .replace(/--/g, '\u2014')                                   /** Chuyển cặp ký tự "--" thành em dash "—" */
        .replace(/● /g, '●')                                        /** Loại bỏ space nối liền bullet, vì space sau bullet là fixed space vẽ riêng */
        // Chuyển shorthand dạng (15) thành ký tự chữ số tròn tương ứng "⑮", trong OCG text
        .replace(/(\([０-９]{1,2}\))/g, m => {
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
        .replaceAll(new RegExp(UNCOMPRESSED_REGEX_SOURCE, 'g'), m => m.replaceAll('{{', '⟬').replaceAll('}}', '⟭'))
        .replaceAll(new RegExp(OCG_RUBY_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`);
    const textAfterDictionaryMatch = format === 'tcg'
        ? textAfterDetectBlockWord
        : textAfterDetectBlockWord
            .replaceAll(new RegExp(OCG_KEYWORD_REGEX_SOURCE, 'g'), m => `⦉${ocgKeywordDataMap[m].rubyForm}⦊`);
    const textAfterProcessing = textAfterDictionaryMatch
        .replaceAll(new RegExp(WHOLE_WORD_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(NOT_END_OF_LINE_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(NOT_START_OF_LINE_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(NOT_SPLIT_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(OCG_BULLET_REGEX_SOURCE, 'g'), m => `⦉${m}⦊`);
    /** Các nhóm này có thể overlap, vậy nên ta cần gom chúng lại thành nhóm lớn hơn bằng cách giải ngoặc.
     * * ((()))     => ()
     * * (()())     => ()
     * * ((()()))   => ()
     * * ()()()     => ()()()
     */
    let textAfterNormalizeBlockWord = [];
    let currentDepth = 0;
    for (const letter of textAfterProcessing) {
        if (letter === '⦉') {
            if (currentDepth === 0) textAfterNormalizeBlockWord.push(letter);
            currentDepth += 1;
        } else if (letter === '⦊') {
            currentDepth -= 1;
            if (currentDepth === 0) textAfterNormalizeBlockWord.push(letter);
        } else textAfterNormalizeBlockWord.push(letter);
    }
    /** Vì block row có độ ưu tiên cao hơn block word, ta đưa block word vào trong. */
    const finalizedText = textAfterNormalizeBlockWord.join('')
        .replaceAll('⟆⦊', '⦊⟆')
        .replaceAll('⦉⟅', '⟅⦉')
        .replaceAll('⟬⦊', '⦊⟬')
        .replaceAll('⦉⟭', '⟭⦉')
        .replaceAll('⟅⟆', '')
        .replaceAll('⦉⦊', '');
    console.info('normalizeCardText:', text, '\n', textAfterNormalizeBlockWord, '\n', finalizedText);

    return finalizedText;
};