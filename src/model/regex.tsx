import { ocgKeywordDataList } from './dictionary';

export const RotatedLetterMap = {
    'Ɐ': 'Ａ',
    'ꓭ': 'Ｂ',
    'Ɔ': 'Ｃ',
    'ꓷ': 'Ｄ',
    'Ǝ': 'Ｅ',
    'Ⅎ': 'Ｆ',
    '⅁': 'Ｇ',
    'ꓩ': 'Ｊ',
    'Ʞ': 'Ｋ',
    'Ꞁ': 'Ｌ',
    'Ԁ': 'Ｐ',
    'ꓤ': 'Ｒ',
    'Ʇ': 'Ｔ',
    'ꓵ': 'Ｕ',
    'Ʌ': 'Ｖ',
    '⅄': 'Ｙ',
};
export const MirroredLetterMap = {
    'ꟻ': 'Ｆ',
    '⅃': 'Ｌ',
    'ꟼ': 'Ｐ',
    'И': 'Ｎ',
    'Я': 'Ｒ',
};

export const ST_ICON_SYMBOL = '⦾';

export const CAPITAL_LETTER_REGEX_SOURCE = '[A-ZＡ-Ｚ]';
export const CapitalLetterRegex = new RegExp(CAPITAL_LETTER_REGEX_SOURCE);

export const SQUARE_BRACKET_REGEX_SOURCE = '[\\[\\]【】]';
export const SquareBracketLetterRegex = new RegExp(SQUARE_BRACKET_REGEX_SOURCE);

export const WHOLE_WORD_REGEX_SOURCE = '[#@∞a-zａ-ｚA-ZＡ-Ｚ0-9０-９!！+×＃#@∞‘“’”:;\\[\\]\\(\\)【】\\.,]+';
export const WholeWordRegex = new RegExp(WHOLE_WORD_REGEX_SOURCE);

export const UNCOMPRESSED_REGEX_SOURCE = '{{([^{}]+?)}}';
export const UncompressedRegex = new RegExp(UNCOMPRESSED_REGEX_SOURCE);

export const FragmentSplitRegex = new RegExp(`({[^{}]+?}|${WHOLE_WORD_REGEX_SOURCE}|.)`);
// export const FragmentSplitRegex = new RegExp('({[^{}]+?}|.)');

export const NB_WORD_OPEN = '⦉';
export const NB_WORD_CLOSE = '⦊';
export const NB_LINE_OPEN = '⟅';
export const NB_LINE_CLOSE = '⟆';
export const NB_UNCOMPRESSED_START = '⟬';
export const NB_UNCOMPRESSED_END = '⟭';
/** Loại bỏ tất cả ký tự control và furigana */
export const FootTextRegex = new RegExp(`[${[
    NB_WORD_OPEN,
    NB_WORD_CLOSE,
    NB_LINE_OPEN,
    NB_LINE_CLOSE,
    NB_UNCOMPRESSED_START,
    NB_UNCOMPRESSED_END,
].join('')}]|(\\|[^}]+})`, 'g');

/** @todo Remove deprecated */

/** Không sử dụng cờ `g` vì cờ này sẽ advance internal state của regex khi test */
export const TCG_LETTER_JOINLIST = '&A-Za-z0-9\\-/\\s\\(\\)!,.‘“’”:;<>\\[\\]';
export const TCGLetterRegex = new RegExp(`[^${TCG_LETTER_JOINLIST}]`);

/** Không sử dụng cờ `g` vì cờ này sẽ advance internal state của regex khi test */
export const TCG_NON_SYMBOL_JOINLIST = '&A-Za-z0-9\\-/\\s!,.‘’\\[\\]\\(\\)';
export const TCGSymbolRegex = new RegExp(`[^${TCG_NON_SYMBOL_JOINLIST}]`);

export const OCG_KEYWORD_JOIN_REGEX = ocgKeywordDataList.map(entry => entry.regexForm ?? entry.shortForm).join('|');
export const OCG_KEYWORD_REGEX_SOURCE = `(${OCG_KEYWORD_JOIN_REGEX})(?![^{]*})`;

export const CHIISAI_KANA_JOINLIST = 'ヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻';
export const ChiisaiRegex = new RegExp(`[${CHIISAI_KANA_JOINLIST}]`);
export const CHIISAI_RATIO = 0.650;

export const OCG_RUBY_REGEX_SOURCE = '{[^{}]+?}';
/** Các ký tự sau không được ở đầu dòng, vậy nên ta nối nó với một ký tự phía trước */
export const NOT_START_OF_LINE_REGEX_SOURCE = `.[${CHIISAI_KANA_JOINLIST})\\]｝〕〉》」｣』】〙〗〟'"’”｠»‐゠–〜？!‼⁇⁈⁉・、:;,。.｡､]+`;
/** Các ký tự sau không được ở cuối dòng, vậy nên ta nối nó với một ký tự phía sau. ● là ký tự đại diện cho bullet. */
export const NOT_END_OF_LINE_REGEX_SOURCE = '[(\\[｛〔〈《「｢『【〘〖〝\'"‘“｟«●]+.';
export const NOT_SPLIT_REGEX_SOURCE = '.[—...‥〳〴〵)]+[^\\s]';
export const OCG_BULLET_REGEX_SOURCE = '[①-⑳]：.';

export const OCG_ALPHABET_REGEX_SOURCE = '[Ａ-Ｚａ-ｚ]';
export const OCGAlphabetRegex = new RegExp(OCG_ALPHABET_REGEX_SOURCE);

export const OCGNumberRegex = new RegExp('[０-９]');
export const NumberRegex = new RegExp('[0-9]');

export const HiraganaRegex = /[あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわゐゑをんゔ]/;

export const KatakanaRegex = /[アイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲンヴヷヸヹヺ]/;

export const OCG_LETTER_RATIO = 1.000;

export const OCGDotRegex = new RegExp('[・]');

export const ChoonpuRegex = new RegExp('[ー]');

export const NoSpaceRegex = new RegExp('[―]');

const OCG_INCREASED_LEVEL_2_WIDTH_JOINLIST = '：';
export const OCGIncreasedLevel2WidthRegex = new RegExp(`[${OCG_INCREASED_LEVEL_2_WIDTH_JOINLIST}]`);

const OCG_INCREASED_WIDTH_JOINLIST = '。､';
export const OCGIncreasedWidthRegex = new RegExp(`[${OCG_INCREASED_WIDTH_JOINLIST}]`);

const OCG_NO_OVERHEAD_GAP_JOINLIST = '：';
export const OCGNoOverheadGapRegex = new RegExp(`[${OCG_NO_OVERHEAD_GAP_JOINLIST}]`);

export const OCG_INCREASED_WIDTH_RATIO = 1.250;
export const OCGOffsetMap: Record<string, number> = {
    '。': 0,
    '､': 0,
    '｢': 0,
    '｣': 0,
    '：': 0.5,
};
export const OCGLastOfLineOffsetMap: Record<string, number> = {
    '。': -0.5,
    '：': -0.75,
};

export const OCGReducedAtEndLineRegex = new RegExp(`[${OCG_INCREASED_WIDTH_JOINLIST}${OCG_INCREASED_LEVEL_2_WIDTH_JOINLIST}]`);
export const OCG_REDUCED_AT_END_LINE_RATIO = 0.500;

export const BULLET_LETTER = '●';
export const getBulletSpacing = (format: string) => format === 'tcg' ? 7 : 1;

export const MAX_LINE_REVERSE_INDENT = 20;
export const START_OF_LINE_ALPHABET_OFFSET = 4;