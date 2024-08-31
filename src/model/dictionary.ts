/** Dicitionary that convert popular letters combination into a fragment block with (most of the time) corresponding furigana attached.
 * 
 * This is created based on pure survey only. Also this is based on regex, so do not add too many entries into this one. Around 300 would be a nice limit to stop, after all this is just a helper. There are much more rules and block words in practice that we basically have no way to collect and implement.
 * 
 * Each dicitionary entry has at most 4 fields.
 *  * `shortForm`: Pure letters without decoration, act as the primary key in this dictionary.
 *  * `regexForm`: Some words may blend inside fragment and will get falsely detected, especially English letter. For example "銀翼のAXE－サリー" OCG has letter X in its name, which maybe detected as Xyz Monster. Regex form will (try to) solve this problem.
 *  * `rubyForm`: The full version of `shortForm`, with furigana and control characters attached.
 *  * `rubyFormName`: In very rare case, the same `shortForm` has different treatment based on the section it belong in. This field (if existed) will be preferred when converting the name of the card.
 * 
 * Overall we want to sort this list based on the length of the shortForm, so we match larger entry first. For example, the letter "族" appears both as a standalone letter and in the word "種族", we naturally want to match the word "種族" first.
 */
export const ocgKeywordDataList = [
    {
        shortForm: '特殊召喚',
        rubyForm: '{特|とく}{殊|しゅ}{召|しょう}{喚|かん}',
    },
    {
        shortForm: 'カード',
        rubyForm: '{カード}',
    },
    {
        shortForm: 'デュエル',
        rubyForm: '{デュエル}',
    },
    {
        shortForm: 'マッチ',
        rubyForm: '{マッチ}',
    },
    {
        shortForm: 'ターン',
        rubyForm: '{ターン}',
    },
    {
        shortForm: 'プレイヤー',
        rubyForm: '{プレイヤー}',
    },
    {
        shortForm: '自分',
        rubyForm: '{自|じ}{分|ぶん}',
    },
    {
        shortForm: '相手',
        rubyForm: '{相|あい}{手|て}',
    },
    {
        shortForm: 'LP',
        regexForm: '(?<![a-zA-Z_])LP(?![a-zA-Z_])',
        rubyForm: '{LP|ライフポイント}',
    },
    {
        shortForm: 'デッキ',
        rubyForm: '{デッキ}',
    },
    {
        shortForm: 'メイン',
        rubyForm: '{メイン}',
    },
    {
        shortForm: 'サイド',
        rubyForm: '{サイド}',
    },
    {
        shortForm: 'EX',
        regexForm: '(?<!\\w)EX(?!\\w)',
        rubyForm: '{EX|エクストラ}',
    },
    {
        shortForm: 'フィールド',
        rubyForm: '{フィールド}',
    },
    {
        shortForm: '墓地',
        rubyForm: '{墓|ぼ}{地|ち}',
    },
    {
        shortForm: '手札',
        rubyForm: '{手|て}{札|ふだ}',
    },
    {
        shortForm: 'ゾーン',
        rubyForm: '{ゾーン}',
    },
    {
        shortForm: 'モンスター',
        rubyForm: '{モンスター}',
    },
    {
        shortForm: '縦列',
        rubyForm: '{縦|たて}{列|れつ}',
    },
    {
        shortForm: 'コントローラー',
        rubyForm: '{コントローラー}',
    },
    {
        shortForm: '持ち主',
        rubyForm: '{持|も}ち{主|ぬし}',
    },
    {
        shortForm: 'ダメージ',
        rubyForm: '{ダメージ}',
    },
    {
        shortForm: '戦闘',
        rubyForm: '{戦|せん}{闘|とう}',
    },
    {
        shortForm: 'スペル',
        rubyForm: '{スペル}',
    },
    {
        shortForm: 'スピード',
        rubyForm: '{スピード}',
    },
    {
        shortForm: 'チェーン',
        rubyForm: '{チェーン}',
    },
    {
        shortForm: 'ブロック',
        rubyForm: '{ブロック}',
    },
    {
        shortForm: '直接',
        rubyForm: '{直|ちょく}{接|せつ}',
    },
    {
        shortForm: '素材',
        rubyForm: '{素|そ}{材|ざい}',
    },
    {
        shortForm: '名',
        rubyForm: '{名|めい}',
    },
    {
        shortForm: '条件',
        rubyForm: '{条|じょう}{件|けん}',
    },
    {
        shortForm: 'コイン',
        rubyForm: '{コイン}',
    },
    {
        shortForm: 'サイコロ',
        rubyForm: '{サイコロ}',
    },
    {
        shortForm: '元',
        rubyForm: '{元|もと}',
    },
    {
        shortForm: '先',
        rubyForm: '{先|さき}',
    },
    {
        shortForm: '状態',
        rubyForm: '{状|じょう}{態|たい}',
    },
    {
        shortForm: '相互',
        rubyForm: '{相|そう}{互|ご}',
    },
    {
        shortForm: 'エクストラ',
        rubyForm: '{エクストラ}',
    },
    {
        shortForm: 'フェイズ',
        rubyForm: '{フェイズ}',
    },
    {
        shortForm: 'ドロー',
        rubyForm: '{ドロー}',
    },
    {
        shortForm: 'スタンバイ',
        rubyForm: '{スタンバイ}',
    },
    {
        shortForm: 'バトル',
        rubyForm: '{バトル}',
    },
    {
        shortForm: 'エンド',
        rubyForm: '{エンド}',
    },
    {
        shortForm: 'スタート',
        rubyForm: '{スタート}',
    },
    {
        shortForm: 'ステップ',
        rubyForm: '{ステップ}',
    },
    {
        shortForm: '種類',
        rubyForm: '{種|しゅ}{類|るい}',
    },
    {
        shortForm: '形式',
        rubyForm: '{形|けい}{式|しき}',
    },
    {
        shortForm: '表側',
        rubyForm: '{表|おもて}{側|がわ}',
    },
    {
        shortForm: '裏側',
        rubyForm: '{裏|うら}{側|がわ}',
    },
    {
        shortForm: '表示',
        rubyForm: '{表|ひょう}{示|じ}',
    },
    {
        shortForm: '罠',
        rubyForm: '{罠|トラップ}',
    },
    {
        shortForm: 'アクション',
        rubyForm: 'アクション',
    },
    {
        shortForm: '装備',
        rubyForm: '{装|そう}{備|び}',
    },
    {
        shortForm: '速攻',
        rubyForm: '{速|そっ}{攻|こう}',
    },
    {
        shortForm: '永続',
        rubyForm: '{永|えい}{続|ぞく}',
    },
    {
        shortForm: 'カウンター',
        rubyForm: '{カウンター}',
    },
    {
        shortForm: 'レベル',
        rubyForm: '{レベル}',
    },
    {
        shortForm: 'ランク',
        rubyForm: '{ランク}',
    },
    {
        shortForm: 'スケール',
        rubyForm: '{スケール}',
    },
    {
        shortForm: '攻撃力',
        rubyForm: '{攻|こう}{撃|げき}{力|りょく}',
    },
    {
        shortForm: '守備力',
        rubyForm: '{守|しゅ}{備|び}{力|りょく}',
    },
    {
        shortForm: '撃力',
        rubyForm: '{撃|げき}{力|りょく}',
    },
    {
        shortForm: '勝利',
        rubyForm: '{勝|しょう}{利|り}',
    },
    {
        shortForm: '属性',
        rubyForm: '{属|ぞく}{性|せい}',
    },
    {
        shortForm: '種族',
        rubyForm: '{種|しゅ}{族|ぞく}',
    },
    {
        shortForm: '効果',
        rubyForm: '{効|こう}{果|か}',
    },
    {
        shortForm: '融合',
        rubyForm: '{融|ゆう}{合|ごう}',
    },
    {
        shortForm: '儀式',
        rubyForm: '{儀|ぎ}{式|しき}',
    },
    {
        shortForm: 'マキシマム',
        rubyForm: '{マキシマム}',
    },
    {
        shortForm: 'トークン',
        rubyForm: '{トークン}',
    },
    {
        shortForm: 'チューナー',
        rubyForm: '{チューナー}',
    },
    {
        shortForm: 'デュアル',
        rubyForm: '{デュアル}',
    },
    {
        shortForm: 'リバース',
        rubyForm: '{リバース}',
    },
    {
        shortForm: 'トゥーン',
        rubyForm: '{トゥーン}',
    },
    {
        shortForm: 'スピリット',
        rubyForm: '{スピリット}',
    },
    {
        shortForm: 'ユニオン',
        rubyForm: '{ユニオン}',
    },
    {
        shortForm: '光',
        rubyForm: '{光|ひかり}',
    },
    {
        shortForm: '闇',
        rubyForm: '{闇|やみ}',
    },
    {
        shortForm: '地',
        rubyForm: '{地|ち}',
    },
    {
        shortForm: '水',
        rubyForm: '{水|みず}',
    },
    {
        shortForm: '炎',
        rubyForm: '{炎|ほのお}',
    },
    {
        shortForm: '風',
        rubyForm: '{風|かぜ}',
    },
    {
        shortForm: '獣戦士',
        rubyForm: '{獣|じゅう}{戦|せん}{士|し}',
    },
    {
        shortForm: '創造神',
        rubyForm: '{創|そう}{造|ぞう}{神|しん}',
    },
    {
        shortForm: 'サイバース',
        rubyForm: '{サイバース}',
    },
    {
        shortForm: '恐竜',
        rubyForm: '{恐|きょう}{竜|りゅう}',
    },
    {
        shortForm: '幻神獣',
        rubyForm: '{幻|げん}{神|しん}{獣|じゅう}',
    },
    {
        shortForm: '天使',
        rubyForm: '{天|てん}{使|し}',
    },
    {
        shortForm: '悪魔',
        rubyForm: '{悪|あく}{魔|ま}',
    },
    {
        shortForm: '魚',
        rubyForm: '{魚|さかな}',
    },
    {
        shortForm: 'ギャラクシー',
        rubyForm: '{ギャラクシー}',
    },
    {
        shortForm: '幻想魔',
        rubyForm: '{幻|げん}{想|そう}{魔|ま}',
    },
    {
        shortForm: '昆虫',
        rubyForm: '{昆|こん}{虫|ちゅう}',
    },
    {
        shortForm: '機械',
        rubyForm: '{機|き}{械|かい}',
    },
    {
        shortForm: '植物',
        rubyForm: '{植|しょく}{物|ぶつ}',
    },
    {
        shortForm: '爬虫類',
        rubyForm: '{爬|は}{虫|ちゅう}{類|るい}',
    },
    {
        shortForm: '岩石',
        rubyForm: '{岩|がん}{石|せき}',
    },
    {
        shortForm: '海竜',
        rubyForm: '{海|かい}{竜|りゅう}',
    },
    {
        shortForm: '魔法使い',
        rubyForm: '{魔|ま}{法|ほう}{使|つか}い',
    },
    {
        shortForm: '雷',
        rubyForm: '{雷|いかずち}',
    },
    {
        shortForm: '鳥獣',
        rubyForm: '{鳥|ちょう}{獣|じゅう}',
    },
    {
        shortForm: '幻竜',
        rubyForm: '{幻|げん}{竜|りゅう}',
    },
    {
        shortForm: 'アンデット',
        rubyForm: '{アンデット}',
    },
    {
        shortForm: 'サイボーグ',
        rubyForm: '{サイボーグ}',
    },
    {
        shortForm: '天界戦士',
        rubyForm: '{天|てん}{界|かい}{戦|せん}{士|し}',
    },
    {
        shortForm: 'ハイドラゴン',
        rubyForm: '{ハイドラゴン}',
    },
    {
        shortForm: '魔導騎士',
        rubyForm: '{魔|ま}{導|どう}{騎|き}{士|し}',
    },
    {
        shortForm: '無効化',
        rubyForm: '{無|む}{効|こう}{化|か}',
    },
    {
        shortForm: 'オメガ',
        rubyForm: '{オメガ}',
    },
    {
        shortForm: 'サイキック',
        rubyForm: '{サイキック}',
    },
    {
        shortForm: '捨てる',
        rubyForm: '{捨|す}てる',
    },
    {
        shortForm: '加える',
        rubyForm: '{加|くわ}える',
    },
    {
        shortForm: 'から離れる',
        rubyForm: 'から{離|はな}れる',
    },
    {
        shortForm: '与える',
        rubyForm: '{与|あた}える',
    },
    {
        shortForm: '重ねる',
        rubyForm: '{重|かさ}ねる',
    },
    {
        shortForm: '取り除く',
        rubyForm: '{取|と}り{除|ぞ}く',
    },
    {
        shortForm: '取り除い',
        rubyForm: '{取|と}り{除|ぞ}い',
    },
    {
        shortForm: '除く',
        rubyForm: '{除|のぞ}く',
    },
    {
        shortForm: '行う',
        rubyForm: '{行|おこな}う',
    },
    {
        shortForm: '対す',
        rubyForm: '{対|たい}す',
    },
    {
        shortForm: '送る',
        rubyForm: '{送|おく}る',
    },
    {
        shortForm: '置く',
        rubyForm: '{置|お}く',
    },
    {
        shortForm: 'めくる',
        rubyForm: '{めくる}',
    },
    {
        shortForm: 'アドバンス',
        rubyForm: '{アドバンス}',
    },
    {
        shortForm: '反転',
        rubyForm: '{反|はん}{転|てん}',
    },
    {
        shortForm: '特殊',
        rubyForm: '{特|とく}{殊|しゅ}',
    },
    {
        shortForm: '発動',
        rubyForm: '{発|はつ}{動|どう}',
    },
    {
        shortForm: '破壊',
        rubyForm: '{破|は}{壊|かい}',
    },
    {
        shortForm: '対象',
        rubyForm: '{対|たい}{象|しょう}',
    },
    {
        shortForm: '無効',
        rubyForm: '{無|む}{効|こう}',
    },
    {
        shortForm: '攻撃',
        rubyForm: '{攻|こう}{撃|げき}',
    },
    {
        shortForm: '処理',
        rubyForm: '{処|しょ}{理|り}',
    },
    {
        shortForm: '宣言',
        rubyForm: '{宣|せん}{言|げん}',
    },
    {
        shortForm: '除外',
        rubyForm: '{除|じょ}{外|がい}',
    },
    {
        shortForm: 'リリース',
        rubyForm: '{リリース}',
    },
    {
        shortForm: 'スキップ',
        rubyForm: '{スキップ}',
    },
    {
        shortForm: 'シャッフル',
        rubyForm: '{シャッフル}',
    },
    {
        shortForm: 'コントロール',
        rubyForm: '{コントロール}',
    },
    {
        shortForm: 'セット',
        rubyForm: '{セット}',
    },
    {
        shortForm: 'RUM',
        regexForm: '(?<!\\w)RUM(?!\\w)',
        rubyForm: '{RUM|ランクアップマジック}',
    },
    {
        shortForm: 'S',
        regexForm: '(?<!\\w)S(?!\\w)',
        rubyForm: '{S|シンクロ}',
    },
    {
        shortForm: 'X',
        regexForm: '(?<!\\w)X(?!\\w)',
        rubyForm: '{X|エクシーズ}',
    },
    {
        shortForm: 'L',
        regexForm: '(?<!\\w)L(?!\\w)',
        rubyForm: '{L|リンク}',
    },
    {
        shortForm: 'P',
        regexForm: '(?<!\\w)P(?!\\w)',
        rubyForm: '{P|ペンデュラム}',
    },
    {
        shortForm: 'リンク',
        rubyForm: '{リンク}',
    },
    {
        shortForm: '守備',
        rubyForm: '{守|しゅ}{備|び}',
    },
    {
        shortForm: '通常',
        rubyForm: '{通|つう}{常|じょう}',
    },
    {
        shortForm: '可能',
        rubyForm: '{可|か}{能|のう}',
    },
    {
        shortForm: '神',
        rubyForm: '{神|かみ}',
    },
    {
        shortForm: '獣',
        rubyForm: '{獣|けもの}',
    },
    {
        shortForm: 'ドラゴン',
        rubyForm: '{ドラゴン}',
    },
    {
        shortForm: 'サイキック',
        rubyForm: '{サイキック}',
    },
    {
        shortForm: '重ねて',
        rubyForm: '{重|かさ}ねて',
    },
    {
        shortForm: '魔法',
        rubyForm: '{魔|ま}{法|ほう}',
    },
    {
        shortForm: '戦士',
        rubyForm: '{戦|せん}{士|し}',
    },
    {
        shortForm: '召喚',
        rubyForm: '{召|しょう}{喚|かん}',
    },
    {
        shortForm: '合計',
        rubyForm: '{合|ごう}{計|けい}',
    },
    {
        shortForm: '以上',
        rubyForm: '{以|い}{上|じょう}',
    },
    {
        shortForm: '場合',
        rubyForm: '{場|ば}{合|あい}',
    },
    {
        shortForm: '降臨',
        rubyForm: '{降|こう}{臨|りん}',
    },
    {
        shortForm: '以外',
        rubyForm: '{以|い}{外|がい}',
    },
    {
        shortForm: '使用',
        rubyForm: '{使|し}{用|よう}',
    },
    {
        shortForm: '存在',
        rubyForm: '{存|そん}{在|ざい}',
    },
    {
        shortForm: '最大',
        rubyForm: '{最|さい}{大|だい}',
    },
    {
        shortForm: '成功',
        rubyForm: '{成|せい}{功|こう}',
    },
    {
        shortForm: '自身',
        rubyForm: '{自|じ}{身|しん}',
    },
    {
        shortForm: '以下',
        rubyForm: '{以|い}{下|か}',
    },
    {
        shortForm: '終了',
        rubyForm: '{終|しゅう}{了|りょう}',
    },
    {
        shortForm: '全て',
        rubyForm: '{全|すべ}て',
    },
    {
        shortForm: '捨て',
        rubyForm: '{捨|す}て',
    },
    {
        shortForm: 'CNo．',
        regexForm: '(?<![a-zA-Z])CNo．(?![a-zA-Z])',
        rubyForm: '{CNo．||カオスナンバーズ}',
        rubyFormName: '{CNo||カオスナンバーズ}．',
    },
    {
        shortForm: 'No．',
        regexForm: '(?<![a-zA-Z])No．(?![a-zA-Z])',
        rubyForm: '{No．||ナンバーズ}',
        rubyFormName: '{No||ナンバーズ}．',
    },
    {
        shortForm: 'CX',
        regexForm: '(?<![a-zA-Z])CX(?![a-zA-Z])',
        rubyForm: '{CX|カオスエクシーズ}',
    },
    {
        shortForm: '適用',
        rubyForm: '{適|てき}{用|よう}',
    },
    {
        shortForm: '数値',
        rubyForm: '{数|すう}{値|ち}',
    },
    {
        shortForm: '計算',
        rubyForm: '{計|けい}{算|さん}',
    },
    {
        shortForm: '必要',
        rubyForm: '{必|ひつ}{要|よう}',
    },
    {
        shortForm: '選択',
        rubyForm: '{選|せん}{択|たく}',
    },
    {
        shortForm: '半分',
        rubyForm: '{半|はん}{分|ぶん}',
    },
    {
        shortForm: '開始',
        rubyForm: '{開|かい}{始|し}',
    },
    {
        shortForm: '裏表',
        rubyForm: '{裏|うら}{表|おもて}',
    },
    {
        shortForm: '回復',
        rubyForm: '{回|かい}{復|ふく}',
    },
    {
        shortForm: '指定',
        rubyForm: '{指|し}{定|てい}',
    },
    {
        shortForm: '位置',
        rubyForm: '{位|い}{置|ち}',
    },
    {
        shortForm: '移動',
        rubyForm: '{移|い}{動|どう}',
    },
    {
        shortForm: '方法',
        rubyForm: '{方|ほう}{法|ほう}',
    },
    {
        shortForm: '変更',
        rubyForm: '{変|へん}{更|こう}',
    },
    {
        shortForm: '発生',
        rubyForm: '{発|はっ}{生|せい}',
    },
    {
        shortForm: '公開',
        rubyForm: '{公|こう}{開|かい}',
    },
    {
        shortForm: '超',
        rubyForm: '{超|こ}',
    },
    {
        shortForm: '毎',
        rubyForm: '{毎|ごと}',
    },
    {
        shortForm: '前',
        rubyForm: '{前|まえ}',
    },
    {
        shortForm: '違',
        rubyForm: '{違|ちが}',
    },
    {
        shortForm: '続',
        rubyForm: '{続|つづ}',
    },
    {
        shortForm: '残',
        rubyForm: '{残|のこ}',
    },
    {
        shortForm: '他',
        rubyForm: '{他|ほか}',
    },
    {
        shortForm: '当',
        rubyForm: '{当|あ}',
    },
    {
        shortForm: '度',
        rubyForm: '{度|ど}',
    },
    {
        shortForm: '時',
        rubyForm: '{時|とき}',
    },
    {
        shortForm: '族',
        rubyForm: '{族|ぞく}',
    },
    {
        shortForm: '数',
        rubyForm: '{数|かず}',
    },
    {
        shortForm: '体',
        rubyForm: '{体|たい}',
    },
    {
        shortForm: '限',
        rubyForm: '{限|ゲン}',
    },
    {
        shortForm: '置',
        rubyForm: '{置|チ}',
    },
    {
        shortForm: '受',
        rubyForm: '{受|う}',
    },
    {
        shortForm: '枚',
        rubyForm: '{枚|まい}',
    },
    {
        shortForm: '後',
        rubyForm: '{後|ご}',
    },
    {
        shortForm: '送',
        rubyForm: '{送|おく}',
    },
    {
        shortForm: '事',
        rubyForm: '{事|こと}',
    },
    {
        shortForm: '内',
        rubyForm: '{内|うち}',
    },
    {
        shortForm: '見',
        rubyForm: '{見|み}',
    },
    {
        shortForm: '中',
        rubyForm: '{中|なか}',
    },
    {
        shortForm: '加',
        rubyForm: '{加|くわ}',
    },
    {
        shortForm: '選',
        rubyForm: '{選|えら}',
    },
    {
        shortForm: '一',
        rubyForm: '{一|いち}',
    },
    {
        shortForm: '番',
        rubyForm: '{番|ばん}',
    },
    {
        shortForm: '同',
        rubyForm: '{同|どう}',
    },
    {
        shortForm: '回',
        rubyForm: '{回|かい}',
    },
    {
        shortForm: '扱',
        rubyForm: '{扱|あつか}',
    },
    {
        shortForm: '星',
        rubyForm: '{星|レベル}',
    },
    {
        shortForm: '攻',
        rubyForm: '{攻|こう}',
    },
    {
        shortForm: '守',
        rubyForm: '{守|しゅ}',
    },
    {
        shortForm: '戻',
        rubyForm: '{戻|もど}',
    },
    {
        shortForm: '上',
        rubyForm: '{上|うえ}',
    },
    {
        shortForm: '次',
        rubyForm: '{次|つぎ}',
    },
    {
        shortForm: '値',
        rubyForm: '{値|ち}',
    },
    {
        shortForm: '含',
        rubyForm: '{含|ふく}',
    },
    {
        shortForm: '与',
        rubyForm: '{与|むた}',
    },
    {
        shortForm: '得',
        rubyForm: '{得|え}',
    },
    {
        shortForm: '及',
        rubyForm: '{及|およ}',
    },
    {
        shortForm: '異',
        rubyForm: '{異|こと}',
    },
    {
        shortForm: '記',
        rubyForm: '{記|しる}',
    },
    {
        shortForm: '繰',
        rubyForm: '{繰|く}',
    },
    {
        shortForm: '返',
        rubyForm: '{返|かえ}',
    },
    {
        shortForm: '決',
        rubyForm: '{決|き}',
    },
    {
        shortForm: '互',
        rubyForm: '{互|たが}',
    },
    {
        shortForm: '払',
        rubyForm: '{払|はら}',
    },
    {
        shortForm: '多',
        rubyForm: '{多|おお}',
    },
    {
        shortForm: '持',
        rubyForm: '{持|おお}',
    },
    {
        shortForm: '持',
        rubyForm: '{持|も}',
    },
    {
        shortForm: '間',
        rubyForm: '{間|あいだ}',
    },
    {
        shortForm: '所',
        rubyForm: '{所|しょ}',
    },
    {
        shortForm: '高',
        rubyForm: '{高|たか}',
    },
    {
        shortForm: '倍',
        rubyForm: '{倍|ばい}',
    },
];
export const ocgKeywordDataMap = ocgKeywordDataList.reduce((acc, cur) => {
    acc[cur.shortForm] = cur;
    return acc;
}, {} as Record<string, typeof ocgKeywordDataList[0]>);