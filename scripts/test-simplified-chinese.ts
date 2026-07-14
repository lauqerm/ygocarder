import assert from 'node:assert/strict';
import {
    EffectFontData,
    SIMPLIFIED_CHINESE_FONT_FAMILY,
} from '../src/model/font-data-effect';
import { NameFontDataMap } from '../src/model/font-data-name';
import { PendulumEffectFontData } from '../src/model/font-data-pendulum-effect';
import { getTypeAbilityFontData } from '../src/model/font-data-other';
import {
    getCardFormatMode,
    passwordSentenceMap,
} from '../src/model/format';
import type { InternalCard } from '../src/model/card';
import { changeCardFormat } from '../src/service/format-change';

const tcgCard = {
    format: 'tcg',
    region: 'en',
    name: 'Test Card',
    effect: 'Test effect',
    pendulumEffect: 'Test Pendulum effect',
    setId: 'TEST-EN001',
    typeAbility: ['Spellcaster', 'Fusion', 'Effect'],
    password: passwordSentenceMap.tcg,
    creator: '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI',
    isFirstEdition: true,
    furiganaHelper: true,
} as InternalCard;

const simplifiedChineseCard = changeCardFormat(tcgCard, 'sc');
assert.equal(simplifiedChineseCard.format, 'ocg');
assert.equal(simplifiedChineseCard.region, 'ch');
assert.equal(getCardFormatMode(simplifiedChineseCard.format, simplifiedChineseCard.region), 'sc');
assert.equal(simplifiedChineseCard.setId, 'TEST-SC001');
assert.deepEqual(simplifiedChineseCard.typeAbility, ['魔法师族', '融合', '效果']);
assert.equal(simplifiedChineseCard.password, '※不能使用于牌组构筑。');
assert.equal(simplifiedChineseCard.creator, '©2020 Studio Dice/SHUEISHA, TV TOKYO, KONAMI');
assert.equal(simplifiedChineseCard.isFirstEdition, false);
assert.equal(simplifiedChineseCard.furiganaHelper, false);

const japaneseCard = changeCardFormat(simplifiedChineseCard, 'ocg');
assert.equal(japaneseCard.format, 'ocg');
assert.equal(japaneseCard.region, 'jp');
assert.equal(japaneseCard.setId, 'TEST-JP001');
assert.deepEqual(japaneseCard.typeAbility, ['魔法使い族', '融合', '効果']);

const roundTrippedTCGCard = changeCardFormat(japaneseCard, 'tcg');
assert.equal(roundTrippedTCGCard.format, 'tcg');
assert.equal(roundTrippedTCGCard.region, 'en');
assert.equal(roundTrippedTCGCard.setId, 'TEST-EN001');
assert.deepEqual(roundTrippedTCGCard.typeAbility, ['Spellcaster', 'Fusion', 'Effect']);

assert.equal(NameFontDataMap.SC.fontData.font, SIMPLIFIED_CHINESE_FONT_FAMILY);
assert.equal(EffectFontData.sc.font, SIMPLIFIED_CHINESE_FONT_FAMILY);
assert.equal(PendulumEffectFontData['sc-medium'].font, SIMPLIFIED_CHINESE_FONT_FAMILY);
assert.equal(getTypeAbilityFontData().sc.font, SIMPLIFIED_CHINESE_FONT_FAMILY);

console.log('Simplified Chinese card mode tests passed.');
