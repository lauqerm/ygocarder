import { ocgKeywordDataList } from './dictionary';

export const ST_ICON_SYMBOL = '⦾';

export const CAPITAL_LETTER_SOURCE = '[A-ZＡ-Ｚ]';
export const CapitalLetterRegex = new RegExp(CAPITAL_LETTER_SOURCE);

export const SQUARE_BRACKET_SOURCE = '[\\[\\]【】]';
export const SquareBracketLetterRegex = new RegExp(SQUARE_BRACKET_SOURCE);

export const WHOLE_WORD_SOURCE = '[#@∞a-zａ-ｚA-ZＡ-Ｚ0-9０-９!！+×＃#@∞‘“’”:;\\[\\]\\(\\)【】\\.,]+';
export const WholeWordRegex = new RegExp(WHOLE_WORD_SOURCE);

export const FragmentSplitRegex = new RegExp(`({[^{}]+?}|${WHOLE_WORD_SOURCE}|.)`);
// export const FragmentSplitRegex = new RegExp('({[^{}]+?}|.)');

export const UNCOMPRESSED_SOURCE = '{{([^{}]+?)}}';

export const NB_WORD_OPEN = '⦉';
export const NB_WORD_CLOSE = '⦊';
export const NB_LINE_OPEN = '⟅';
export const NB_LINE_CLOSE = '⟆';
export const NB_UNCOMPRESSED_START = '⟬';
export const NB_UNCOMPRESSED_END = '⟭';
/** Remove all control characters */
export const NormalizeTextRegex = new RegExp(`[${[
    NB_WORD_OPEN,
    NB_WORD_CLOSE,
    NB_LINE_OPEN,
    NB_LINE_CLOSE,
    NB_UNCOMPRESSED_START,
    NB_UNCOMPRESSED_END,
].join('')}]|(\\|[^}]+})`, 'g');

export const NON_BREAKABLE_SYMBOL_SOURCE = `${NB_WORD_OPEN}|${NB_WORD_CLOSE}`;
export const nonBreakableSymbolRegex = new RegExp(NON_BREAKABLE_SYMBOL_SOURCE);

/** Pretty hard to automatically detect condition clause inside flavor text. We must assume that the clause is always put inside a parentheses (as official cards do). */
export const FLAVOR_CONDITION_SOURCE = `(\\n^[\\r\\t\\f\\v \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]*\\n${NB_WORD_OPEN}?\\([\\w\\W]+\\)${NB_WORD_CLOSE}?)\\s*$`;

/** Small reminder: `g` flag turn regex into stateful, and cannot be reused without reset it first. */
export const TCG_LETTER_JOINLIST = '&A-Za-z0-9\\-/\\s\\(\\)!,.‘“’”:;<>\\[\\]\\\\';
export const TCG_SYMBOL_JOINLIST = '#★@∞';
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
    '\\': -0.025,
};
export const TCGLastOfLineOffsetMap: Record<string, number> = {
};
export const TCGBoxSpacingRatioMap: Record<string, number> = {
    '\\': 0.3,
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