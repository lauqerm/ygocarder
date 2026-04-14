import { ocgKeywordDataList } from './dictionary';

export const ST_ICON_SYMBOL = '⦾';

export const CAPITAL_LETTER_SOURCE = '[A-ZＡ-ＺÀ-Ö]';
export const CapitalLetterRegex = new RegExp(CAPITAL_LETTER_SOURCE);

export const SQUARE_BRACKET_SOURCE = '[\\[\\]【】]';
export const SquareBracketLetterRegex = new RegExp(SQUARE_BRACKET_SOURCE);

export const StylingTagList = ['i', 'b', 'pre'];
export const STYLING_TAG_SOURCE = `<(\\/?(${StylingTagList.join('|')}))( [^<]*|)>`;
export const StylingTagRegex = new RegExp(STYLING_TAG_SOURCE);

export const IMG_TAG_NAME = 'img';

export const RenderTagList = [IMG_TAG_NAME];
export const RENDER_TAG_SOURCE = `<(${RenderTagList.join('|')}).*?\\/>`;
export const RenderTagRegex = new RegExp(RENDER_TAG_SOURCE);

/** Use italic font like in Normal Monster */
export const ITALIC_OPEN_TAG = '<i>';
export const ITALIC_CLOSE_TAG = '</i>';

export const BOLD_OPEN_TAG = '<b>';
export const BOLD_CLOSE_TAG = '</b>';

/** Ignore dynamic space and force draw character as is (still affected by text condensation) */
export const PRE_OPEN_TAG = '<pre>';
export const PRE_CLOSE_TAG = '</pre>';

export const NB_WORD_OPEN = '⧚';
export const NB_WORD_CLOSE = '⧛';
export const NB_LINE_OPEN = '⟅';
export const NB_LINE_CLOSE = '⟆';
export const NB_FULL_LINE_OPEN = '᚛';
export const NB_FULL_LINE_CLOSE = '᚜';
export const NB_UNCOMPRESSED_START = '⟬';
export const NB_UNCOMPRESSED_END = '⟭';
export const PLACEHOLDER_OPEN = '⦇';
export const PLACEHOLDER_CLOSE = '⦈';
export const PLACEHOLDER_DELIMITER = ';';
/** Remove all control characters */
export const NormalizeTextRegex = new RegExp(`[${[
    NB_FULL_LINE_CLOSE,
    NB_FULL_LINE_OPEN,
    NB_LINE_CLOSE,
    NB_LINE_OPEN,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NB_WORD_CLOSE,
    NB_WORD_OPEN,
].join('')}]|(\\|[^}]+})`, 'g');

export const PLACHOLDER_SOURCE = `${PLACEHOLDER_OPEN}[^${PLACEHOLDER_OPEN}${PLACEHOLDER_CLOSE}]*${PLACEHOLDER_CLOSE}$`;
export const PlaceholderRegex = new RegExp(PLACHOLDER_SOURCE);

/** 
 * Beside usual alphabet letter and number, we try to support accented letters and Japanese's version of alphabet too.
 * * Latin-1 Supplement block, without arithmetic symbol such as × and ÷
 * * Latin Extended-A
 * * Latin Extended-B
 * * Latin Extended Additional
 * 
 * Multiple letter that is not used in normal word but have appear in YGO card is also included such as ∞.
 */
export const WHOLE_WORD_SOURCE = '[،-٩#@∞a-zａ-ｚA-ZＡ-Ｚ0-9０-９À-ÖÙ-öù-ÿĀ-žƀ-ɏḀ-ỿ!！+×＃#@∞‘“’”:;\\[\\]\\(\\)【】\\.,]+';
export const WholeWordRegex = new RegExp(WHOLE_WORD_SOURCE, 'u');

export const ARABIC_WORD_REGEX = '[،-٩]+';
export const ArabicWordRegex = new RegExp(ARABIC_WORD_REGEX, 'u');

/**
 * We don't use full vietnamese diacritic here, because we will prioritize diacritic letters from other official languages such as Spanish, French and Italian. That means if our default font already support those diacritic letters, we don't need to specially handle them here.
 * We still need to cover other diacritic letters as Vietnamese use some specific ones that does not get covered by our normal font.
*/
export const VIETNAMESE_DIACRITIC_LETTER = '[ĂĐƠăđơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺỀỀỂưăạảấầẩẫậắằẳẵặẹẻềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]';
export const VietnameseDiacriticLetterRegex = new RegExp(VIETNAMESE_DIACRITIC_LETTER);

export const FragmentSplitRegex = new RegExp(`(\\{[^\\{\\}]+?\\}|${WHOLE_WORD_SOURCE}|${PLACEHOLDER_OPEN}[^${PLACEHOLDER_OPEN}${PLACEHOLDER_CLOSE}]*${PLACEHOLDER_CLOSE}|.)`, 'u');

export const UNCOMPRESSED_SOURCE = '{{([^{}]+?)}}';

export const FULL_LINE_PLACEHOLDER = '⸦⸧';
export const FLAVOR_LINE_PLACEHOLDER = '⸦⸦⸧⸧';

export const CONTEXTUAL_DOUBLE_QUOTE_SOURCE = `(^|[-\\u2014/[(\\u2018${NB_WORD_OPEN}${NB_LINE_OPEN}${NB_FULL_LINE_OPEN}${NB_UNCOMPRESSED_START}\\s])"`;
export const contextualDoubleQuoteRegex = new RegExp(CONTEXTUAL_DOUBLE_QUOTE_SOURCE, 'g');

export const NON_BREAKABLE_SYMBOL_SOURCE = `${NB_WORD_OPEN}|${NB_WORD_CLOSE}`;
export const nonBreakableSymbolRegex = new RegExp(NON_BREAKABLE_SYMBOL_SOURCE);

/** Pretty hard to automatically detect condition clause inside flavor text. We must assume that the clause is always put inside a parentheses or asterisk (as official cards do). */
export const FLAVOR_CONDITION_SOURCE = `(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${NB_WORD_OPEN}?(\\(|\\*)[\\w\\W]+${NB_WORD_CLOSE}?)\\s*$`;

/** Small reminder: `g` flag turn regex into stateful, and cannot be reused without reset it first. */
export const TCG_LETTER_JOINLIST = '&A-Za-z0-9\\-/\\s\\(\\)!,.‘“’”:;<>\\[\\]\\\\';
/** Additional symbol including
 * * Greek Extended 
 * * Greek and Coptic
 */
export const TCG_SYMBOL_JOINLIST = '＋－±~¡Ø#★☆@∞Ͱ-Ͽἀ-῾';
export const TCGSymbolLetterRegex = new RegExp(`[${TCG_SYMBOL_JOINLIST}]`);

export const OCG_KEYWORD_JOIN_REGEX = ocgKeywordDataList.map(entry => entry.regexForm ?? entry.shortForm).join('|');
export const OCG_KEYWORD_SOURCE = `(${OCG_KEYWORD_JOIN_REGEX})(?![^{]*})`;

export const CHIISAI_KANA_JOINLIST = 'ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻';
export const ChiisaiRegex = new RegExp(`[${CHIISAI_KANA_JOINLIST}]`);

export const OCG_RUBY_SOURCE = '{[^{}]+?}';
export const NOT_START_OF_LINE_SOURCE = `.[${CHIISAI_KANA_JOINLIST})\\]｝〕〉》」｣』】〙〗〟'"’”｠»‐゠–〜？!‼⁇⁈⁉・、:;,。.｡､]+`;
export const NOT_END_OF_LINE_SOURCE = '[(\\[｛〔〈《「｢『【〘〖〝\'"‘“｟«●]+.';
export const NOT_SPLIT_SOURCE = '.[—...‥〳〴〵)]+[^\\s]';
export const OCG_BULLET_SOURCE = '[①-⑳]：.';

export const NON_COMPRESSABLE_SOURCE = '[①-⑳※]';
export const NonCompressableRegex = new RegExp(NON_COMPRESSABLE_SOURCE);

export const OCG_ALPHABET_SOURCE = '[Ａ-Ｚａ-ｚ]';
export const OCGAlphabetRegex = new RegExp(OCG_ALPHABET_SOURCE);

export const OCGNumberRegex = new RegExp('[０-９]');
export const NumberRegex = new RegExp('[0-9]');

export const HiraganaRegex = /[あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわゐゑをんゔ]/;

export const KatakanaRegex = /[アイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲンヴヷヸヹヺ]/;

export const OCGDotRegex = new RegExp('[・]');
export const ChoonpuRegex = new RegExp('[ー]');
export const NoSpaceRegex = new RegExp('[―]');

const OCG_INCREASED_LEVEL_2_WIDTH_JOINLIST = '：';
export const OCGIncreasedLevel2WidthRegex = new RegExp(`[${OCG_INCREASED_LEVEL_2_WIDTH_JOINLIST}]`);

const OCG_INCREASED_WIDTH_JOINLIST = '。､';
export const OCGIncreasedWidthRegex = new RegExp(`[${OCG_INCREASED_WIDTH_JOINLIST}]`);

const OCG_NO_OVERHEAD_GAP_JOINLIST = '：';
export const OCGNoOverheadGapRegex = new RegExp(`[${OCG_NO_OVERHEAD_GAP_JOINLIST}]`);

export const OCGOffsetMap: Record<string, number> = {
    '。': -0.2,
    '､': -0.2,
    '｢': 0,
    '｣': 0,
    '：': 0,
    '>': 0.25,
    '<': -0.25,
};
export const OCGLastOfLineOffsetMap: Record<string, number> = {
    '。': -0.5,
    '：': -0.25,
};
export const OCGBoxSpacingRatioMap: Record<string, number> = {
    '>': 0.125,
    '<': 0.125,
};
export const TCGOffsetMap: Record<string, number> = {
    // Example
    // '\\': -0.025,
};
export const TCGLastOfLineOffsetMap: Record<string, number> = {
};
export const TCGBoxSpacingRatioMap: Record<string, number> = {
    // Example
    // '\\': 0.3,
};

export const OCG_REDUCED_AT_END_LINE_RATIO = 0.500;

export const BULLET_LETTER = '●';
export const getBulletSpacing = (format: string) => format === 'tcg' ? 7 : 1;

export const MAX_LINE_REVERSE_INDENT = 20;
export const START_OF_LINE_ALPHABET_OFFSET = 4;

export const RUBY_REGEX = /{[^{}]+?}/;
/** If foot text consist of multiple letter and overflow mode is `condense`, head text will also condense but with a smaller rate (that mean they are less compressed), this is the bonus rate. So if foot text is compressed by 50%, head text only got compressed by 40%. */
export const RUBY_BONUS_RATIO = 0.1;

export const BREAKABLE_LETTER = '\\s\\-/';
/** Default ratio to calculate the gap of a letter. We do not want head text to overlap, so a letter cannot give more space than half of it size. 40-50% is nice enough. */
export const LETTER_GAP_RATIO = -0.5;
export const GAP_PER_WIDTH_RATIO = -2.25;