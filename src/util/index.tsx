import {
    ocgKeywordRegexSource,
    NB_LINE_CLOSE,
    NB_LINE_OPEN,
    mustNotAtLineEndRegexSource,
    mustNotAtLineStartRegexSource,
    mustNotSplitRegexSource,
    ocgBulletRegexSource,
    ocgWholeWordRegexSource,
    ocgRubyRegexSource,
    ocgKeywordDataMap,
} from 'src/model';

export const randomCharacter = (charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = 1) => {
    let result = '';
    const charactersLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const randomSetID = () => {
    return `${randomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)}-EN${randomCharacter('0123456789', 3)}`;
};

export const randomPassword = () => {
    return `${randomCharacter('0123456789', 8)}`;
};

export const nextChar = (c: string) => {
    return String.fromCharCode(c.charCodeAt(0) + 1);
};

export const splitEffect = (effect: string, isNormal = false) => {
    let effectBody = effect;

    let fullLineList = [];
    const materialRegex = new RegExp(`^(${NB_LINE_OPEN}([^${NB_LINE_CLOSE}]*)${NB_LINE_CLOSE}\\s*)`);
    let materialReplacement;
    let material;
    do {
        materialReplacement = materialRegex.exec(effectBody)?.[1];
        material = materialRegex.exec(effectBody)?.[2];

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
/** Một số ký tự OCG sử dụng dạng halfwidth thay vì dạng fullwidth phổ thông và ngược lại, ta cần chủ động map lại. */
const ConvertLetterMap: Record<string, string> = {
    // '。': '｡',
    '「': '｢',
    '」': '｣',
    '、': '､',
    '/': '／',
    // 'ー': 'ｰ',
    // '・': '･',
    '0': '０',
    '1': '１',
    '2': '２',
    '3': '３',
    '4': '４',
    '5': '５',
    '6': '６',
    '7': '７',
    '8': '８',
    '9': '９',
    ':': '：',
    // '・': '･',
    // '：': ':',
};
export const normalizeCardText = (text?: string, format?: string) => {
    const normalizedText = text ?? '';
    let textAfterSwapOCGLetter = '';
    if (format === 'ocg') {
        for (const letter of normalizedText) {
            textAfterSwapOCGLetter += ConvertLetterMap[letter] ?? letter;
        }
    } else textAfterSwapOCGLetter = normalizedText;
    const textAfterSwapLetter = textAfterSwapOCGLetter
        // Văn bản Nhật thường tự xuống dòng follow hai ký tự "、" và "。" này, nên ta tự ghép dòng nếu cần.
        .replace(/(､|｡|。|、)\n/g, '$1')
        /** Chuyển định dạng block row (dòng nguyên) thành ký tự ít phổ biến hơn, vì các card như "Qliphort Scout" vẫn sử dụng cặp ngoặc [ ]. */
        .replace(/^\[([\w\W]*?)\](?=(\n|$))/gm, `${NB_LINE_OPEN}$1${NB_LINE_CLOSE}`)
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
        .replaceAll(new RegExp(ocgRubyRegexSource, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(ocgKeywordRegexSource, 'g'), m => {
            return `⦉${ocgKeywordDataMap[m].rubyForm}⦊`;
        })
        .replaceAll(new RegExp(ocgWholeWordRegexSource, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(mustNotAtLineEndRegexSource, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(mustNotAtLineStartRegexSource, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(mustNotSplitRegexSource, 'g'), m => `⦉${m}⦊`)
        .replaceAll(new RegExp(ocgBulletRegexSource, 'g'), m => `⦉${m}⦊`);
    /** Các nhóm này có thể overlap, vậy nên ta cần gom chúng lại thành nhóm lớn hơn bằng cách giải ngoặc.
     * * ((()))     => ()
     * * (()())     => ()
     * * ((()()))   => ()
     * * ()()()     => ()()()
     */
    let textAfterNormalizeBlockWord = [];
    let currentDepth = 0;
    for (const letter of textAfterDetectBlockWord) {
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
        .replaceAll('⦉⦊', '');
    console.info('normalizeCardText:', text, '\n', textAfterNormalizeBlockWord, '\n', finalizedText);

    return finalizedText;
};

export function insertUrlParam(key: string, value: string) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
        window.history.pushState({ path: newurl }, '', newurl);
    }
}

export * from './categorize';
export * from './condenser';
export * from './shortener';
export * from './gradient';
export * from './hook';