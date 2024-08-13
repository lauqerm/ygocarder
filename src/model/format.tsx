/** Một số ký tự OCG sử dụng dạng halfwidth thay vì dạng fullwidth phổ thông và ngược lại, ta cần chủ động map lại. */
export const tcgToOCGLetterMap: Record<string, string> = {
    '０': '0',
    '１': '1',
    '２': '2',
    '３': '3',
    '４': '4',
    '５': '5',
    '６': '6',
    '７': '7',
    '８': '8',
    '９': '9',
    'ａ': 'a',
    'ｂ': 'b',
    'ｃ': 'c',
    'ｄ': 'd',
    'ｅ': 'e',
    'ｆ': 'f',
    'ｇ': 'g',
    'ｈ': 'h',
    'ｉ': 'i',
    'ｊ': 'j',
    'ｋ': 'k',
    'ｌ': 'l',
    'ｍ': 'm',
    'ｎ': 'n',
    'ｏ': 'o',
    'ｐ': 'p',
    'ｑ': 'q',
    'ｒ': 'r',
    'ｓ': 's',
    'ｔ': 't',
    'ｕ': 'u',
    'ｖ': 'v',
    'ｗ': 'w',
    'ｘ': 'x',
    'ｙ': 'y',
    'ｚ': 'z',
    'Ａ': 'A',
    'Ｂ': 'B',
    'Ｃ': 'C',
    'Ｄ': 'D',
    'Ｅ': 'E',
    'Ｆ': 'F',
    'Ｇ': 'G',
    'Ｈ': 'H',
    'Ｉ': 'I',
    'Ｊ': 'J',
    'Ｋ': 'K',
    'Ｌ': 'L',
    'Ｍ': 'M',
    'Ｎ': 'N',
    'Ｏ': 'O',
    'Ｐ': 'P',
    'Ｑ': 'Q',
    'Ｒ': 'R',
    'Ｓ': 'S',
    'Ｔ': 'T',
    'Ｕ': 'U',
    'Ｖ': 'V',
    'Ｗ': 'W',
    'Ｘ': 'X',
    'Ｙ': 'Y',
    'Ｚ': 'Z',
    '「': '｢',
    '」': '｣',
    '、': '､',
    '/': '／',
    ':': '：',
    // 'ー': 'ｰ',
    // '・': '･',
    // '・': '･',
    // '：': ':',
    '∀': 'Ɐ',
    'ꓯ': 'Ɐ',
    'ꓛ': 'Ɔ',
    'ꓱ': 'Ǝ',
    'ꓞ': 'Ⅎ',
    'ꓨ': '⅁',
    'ꓘ': 'Ʞ',
    'ꓶ': 'Ꞁ',
    '⅂': 'Ꞁ',
    'ꓒ': 'Ԁ',
    'ꓕ': 'Ʇ',
    'Ո': 'ꓵ',
    'ꓥ': 'Ʌ',
    '＜': '<',
    '＞': '>',
    '！': '!',
    '（': '(',
    '）': ')',
    '＆': '&',
    '＇': '\'',
    '＠': '@',
};
export const ocgToTCGLetterMap: Record<string, string> = {
    '０': '0',
    '１': '1',
    '２': '2',
    '３': '3',
    '４': '4',
    '５': '5',
    '６': '6',
    '７': '7',
    '８': '8',
    '９': '9',
    'ａ': 'a',
    'ｂ': 'b',
    'ｃ': 'c',
    'ｄ': 'd',
    'ｅ': 'e',
    'ｆ': 'f',
    'ｇ': 'g',
    'ｈ': 'h',
    'ｉ': 'i',
    'ｊ': 'j',
    'ｋ': 'k',
    'ｌ': 'l',
    'ｍ': 'm',
    'ｎ': 'n',
    'ｏ': 'o',
    'ｐ': 'p',
    'ｑ': 'q',
    'ｒ': 'r',
    'ｓ': 's',
    'ｔ': 't',
    'ｕ': 'u',
    'ｖ': 'v',
    'ｗ': 'w',
    'ｘ': 'x',
    'ｙ': 'y',
    'ｚ': 'z',
    'Ａ': 'A',
    'Ｂ': 'B',
    'Ｃ': 'C',
    'Ｄ': 'D',
    'Ｅ': 'E',
    'Ｆ': 'F',
    'Ｇ': 'G',
    'Ｈ': 'H',
    'Ｉ': 'I',
    'Ｊ': 'J',
    'Ｋ': 'K',
    'Ｌ': 'L',
    'Ｍ': 'M',
    'Ｎ': 'N',
    'Ｏ': 'O',
    'Ｐ': 'P',
    'Ｑ': 'Q',
    'Ｒ': 'R',
    'Ｓ': 'S',
    'Ｔ': 'T',
    'Ｕ': 'U',
    'Ｖ': 'V',
    'Ｗ': 'W',
    'Ｘ': 'X',
    'Ｙ': 'Y',
    'Ｚ': 'Z',
    // '｡': '。',
    '｢': '「',
    '｣': '」',
    '､': '、',
    '／': '/',
    '：': ':',
    // 'ｰ': 'ー',
    // '･': '・',
    // '･': '・',
    // ':': '：',
    '∀': 'Ɐ',
    'ꓯ': 'Ɐ',
    'ꓛ': 'Ɔ',
    'ꓱ': 'Ǝ',
    'ꓞ': 'Ⅎ',
    'ꓨ': '⅁',
    'ꓘ': 'Ʞ',
    'ꓶ': 'Ꞁ',
    '⅂': 'Ꞁ',
    'ꓒ': 'Ԁ',
    'ꓕ': 'Ʇ',
    'Ո': 'ꓵ',
    'ꓥ': 'Ʌ',
    '＜': '<',
    '＞': '>',
    '！': '!',
    '（': '(',
    '）': ')',
    '＆': '&',
    '＇': '\'',
    '＠': '@',
};

// const MirrorableLetter = {
//     'ꟻ': 'Ｆ',
//     '⅃': 'Ｌ',
//     'ꟼ': 'Ｐ',
//     'И': 'Ｎ',
//     'Я': 'Ｒ',
// };

export const ocgNumberCircleMap: Record<string, string> = {
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
    '(1)': '①',
    '(2)': '②',
    '(3)': '③',
    '(4)': '④',
    '(5)': '⑤',
    '(6)': '⑥',
    '(7)': '⑦',
    '(8)': '⑧',
    '(9)': '⑨',
    '(10)': '⑩',
    '(11)': '⑪',
    '(12)': '⑫',
    '(13)': '⑬',
    '(14)': '⑭',
    '(15)': '⑮',
    '(16)': '⑯',
    '(17)': '⑰',
    '(18)': '⑱',
    '(19)': '⑲',
    '(20)': '⑳',
};

export const ocgToTCGTermMap: Record<string, string> = {
    /** monster type */
    '水族': 'Aqua',
    '獣族': 'Beast',
    '獣戦士族': 'Beast-Warrior',
    '創造神族': 'Creator God',
    'サイバース族': 'Cyberse',
    '恐竜族': 'Dinosaur',
    '幻神獣族': 'Divine-Beast',
    'ドラゴン族': 'Dragon',
    '天使族': 'Fairy',
    '悪魔族': 'Fiend',
    '魚族': 'Fish',
    'ギャラクシー族': 'Galaxy',
    '幻想魔族': 'Illusion',
    '昆虫族': 'Insect',
    '機械族': 'Machine',
    '植物族': 'Plant',
    'サイキック族': 'Psychic',
    '炎族': 'Pyro',
    '爬虫類族': 'Reptile',
    '岩石族': 'Rock',
    '海竜族': 'Sea Serpent',
    '魔法使い族': 'Spellcaster',
    '雷族': 'Thunder',
    '戦士族': 'Warrior',
    '鳥獣族': 'Winged Beast',
    '幻竜族': 'Wyrm',
    'アンデット族': 'Zombie',
    'サイボーグ族': 'Cyborg',
    '天界戦士族': 'Celestial Warrior',
    'ハイドラゴン族': 'High Dragon',
    '魔導騎士族': 'Magical Knight',
    'オメガサイキック族': 'Omega Psychic',
    /** type */
    'モンスター': 'Monster',
    '魔法カード': 'Spell Card',
    '罠カード': 'Trap Card',
    'アクション': 'Action',
    /** subType */
    '通常': 'Normal',
    '効果': 'Effect',
    '儀式': 'Ritual',
    'フュージョン': 'Fusion', // Nằm trên vì có độ ưu tiên thấp hơn
    '融合': 'Fusion',
    'シンクロ': 'Synchro',
    'エクシーズ': 'Xyz',
    'ペンデュラム': 'Pendulum',
    'リンク': 'Link',
    'マキシマム': 'Maximum',
    'トークン': 'Token',
    '特殊召喚': 'Special Summon',
    /** ability */
    'チューナー': 'Tuner',
    'デュアル': 'Gemini',
    'リバース': 'Flip',
    'トゥーン': 'Toon',
    'スピリット': 'Spirit',
    'ユニオン': 'Union',
    /** creator */
    '©高橋和希 スタジオ・ダイス／集英社': '©1996 KAZUKI TAKAHASHI',
    '©スタジオ・ダイス／集英社・テレビ東京・KONAMI': '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    /** sample card */
    '{純|ジュン}{狐|こ}': 'Junko',
    [`自分フィールドの効果モンスター×２体以上
①：このカードがモンスターゾーンに存在する限り、相手フィールドのモンスターが効果を発動する度に、その相手の表側表示モンスターにピュアカウンターを１つ置く(最大１つまで）。②：このカードはピュアカウンターが置かれているモンスターが発動した効果を受けない。③：このカードはピュアカウンターが置かれているモンスターとの戦闘では破壊されない。`]: `[2+ Effect Monsters on your field]
Each time an opponent's monster activates its effect, place 1 Pure Counter on that opponent's monster (max. 1) after that effect resolves. Unaffected by activated effects from monster with a Pure Counter. Cannot be destroyed by battle with monsters with a Pure Counter.`
};
export const tcgToOCGTermMap = Object.entries(ocgToTCGTermMap).reduce((acc, cur) => {
    const [ocgTerm, tcgTerm] = cur;
    acc[tcgTerm] = ocgTerm;

    return acc;
}, {} as Record<string, string>);