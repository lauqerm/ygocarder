import {
    CanvasConst,
    CondenseType,
    UP_RATIO,
    effectMonsterFontData,
    BoxSize,
    monsterSizeList,
    CondenseTolerantMap,
    FontData,
    SPECIAL_LETTER_JOINLIST,
    ocgAlphabetRegexSource,
    CHIISAI_REGEX,
    CHIISAI_RATIO,
    CHOONPU_RATIO,
    CHOONPU_REGEX,
    HIRAGANA_RATIO,
    HIRAGANA_REGEX,
    OCG_LETTER_RATIO,
    KATAKANA_RATIO,
    KATAKANA_REGEX,
    OCG_NUMBER_RATIO,
    OCG_DOT_RATIO,
    OCG_DOT_REGEX,
    OCG_REDUCED_WIDTH_RATIO,
    OCG_REDUCED_WIDTH_REGEX,
    OCG_INCREASED_WIDTH_RATIO,
    OCG_INCREASED_WIDTH_REGEX,
    OCG_NUMBER_REGEX,
} from '../model';
import { splitEffect, normalizeCardText, condense } from '../util';
import { createFontGetter, drawBullet, getLetterWidth, getTextWorker, getTrueLetterWidth, tokenizeText } from './text-util';

/** @summary Block => Paragraph => Sentence => Token => Fragment => Letter **/
const {
    // height: CanvasHeight,
    width: CanvasWidth,
} = CanvasConst;
export const drawEffect = (
    ctx: CanvasRenderingContext2D | null | undefined,
    content: string,
    isPendulumEffect = false,
    isNormal = false,
    fontData: FontData = effectMonsterFontData.tcg,
    sizeList: BoxSize[] = monsterSizeList,
    condenseTolerant: CondenseType = 'strict',
    format: string,
) => {
    let tStart = performance.now();
    let effectSizeLevel = 0;
    const bulletSymbol = '●';
    const bulletSpaceAfter = format === 'tcg' ? 5 : 1;
    /** Không sử dụng cờ `g` vì cờ này sẽ advance internal state của regex khi test */
    const specialSymbolReg = new RegExp(`[${SPECIAL_LETTER_JOINLIST}]`);
    const ocgAlphabetRegex = new RegExp(ocgAlphabetRegexSource);
    const DEFAULT_GAP = -10;
    const START_OF_LINE_GAP = 0;
    const MAX_LINE_REVERSE_INDENT = 20;
    const START_OF_LINE_ALPHABET_OFFSET = 4;
    if (!ctx || !content) return effectSizeLevel;

    const normalizedContent = normalizeCardText(content.trim(), format);
    const tolerantPerSentence: Record<string, number> = format === 'tcg'
        ? CondenseTolerantMap[condenseTolerant] ?? CondenseTolerantMap['strict']
        : {
            '1': 0,
            '2': 0,
            '3': 0,
        };
    const {
        body: effectBody,
        flavorCondition: effectFlavorCondition,
        fullLineList,
    } = isPendulumEffect
        ? {
            body: normalizedContent,
            flavorCondition: '',
            fullLineList: [],
        }
        : splitEffect(normalizedContent, isNormal);

    /**
     * Line không thuộc effect bao gồm:
     * * Material của Extra Deck monster
     * * Flavor condition của Normal monster
     */
    const additionalLineCount = (fullLineList.length ?? 0) + (effectFlavorCondition.length > 0 ? 1 : 0);
    const paragraphList = effectBody.split('\n');

    const { font, fontList } = fontData;
    const yRatio = format === 'tcg' ? 1 : 1;
    const currentFont = createFontGetter();
    while (effectSizeLevel < fontList.length) {
        const fontSizeData = fontList[effectSizeLevel];
        const {
            fontSize,
            lineHeight,
            lineCount,
            bulletSymbolWidth,
        } = fontSizeData;
        const { left, width: basedWidth, top } = sizeList[effectSizeLevel];
        const width = isNormal ? basedWidth - 2 : basedWidth;

        ctx.font = currentFont
            .setStyle(isNormal ? 'italic' : '')
            .setWeight(format === 'tcg' ? '' : '')
            .setSize(fontSize)
            .setFamily(font)
            .getFont();
        ctx.textAlign = 'left';
        const {
            withFurigana,
            withOrdinalFont,
            withSymbolFont,
            withUncompressText,
        } = getTextWorker(ctx, fontData, fontSizeData, currentFont);

        /**
         * Trả về độ dài biểu kiến của phần head của ruby (không phụ thuộc scale), lượng chữ càng nhiều thì càng khít lại. ("PenduLuMoon" OCG)
         * * Ruby quá dài có thể chiếm dụng không gian hai bên của nó, nếu những bên này không có ruby hoặc ruby ít.
         * * Việc chiếm dụng không thể tích lũy, nghĩa là nếu một từ có ruby dài chiếm không gian phía bên phải, từ bên phải đó nếu có ruby không
         * được chiếm dùng từ từ bên phải kế tiếp của nó.
         * * Từ bên trái có thể được chiếm dụng, nhưng không thể bị đẩy dịch. ("Joyous Melffys" OCG)
         * * Furigana có thể tràn ra rìa trái để foot text canh chuẩn lề ("Beyond the Pendulum" OCG)
         * * Nếu token hiện tại có gap phải đủ lớn, footText của token kế tiếp sẽ dịch qua bên trái một khoảng để rebalance lại cự ly giữa các footText với nhau, headText vẫn giữ nguyên ("Beyond the Pendulum" OCG)
         * */
        const getHeadTextWidth = ({
            ctx,
            footText, footTextWidth,
            headText,
            debug,
        }: {
            ctx: CanvasRenderingContext2D,
            headText: string,
            footText: string,
            footTextWidth: number,
            debug?: string,
        }) => {
            const headTextLetterWidth = withFurigana(() => KATAKANA_RATIO * ctx.measureText(headText).width, 0);
            const condenseHeadText = headTextLetterWidth / footTextWidth;
            const alignCenterLetterSpacing = condenseHeadText <= 2.25 ? -1.5 : -4;
            const alignCenterHeadTextWidth = headTextLetterWidth + alignCenterLetterSpacing * (headText.length - 1);
            const alignSpaceAroundLetterSpacing = (footTextWidth - headTextLetterWidth) / headText.length;
            const alignSpaceAroundHeadTextWidth = headTextLetterWidth + alignSpaceAroundLetterSpacing * (headText.length - 1);
            const alignment = footText.length === 1 || alignCenterHeadTextWidth >= footTextWidth
                ? 'center' as const
                : 'space-around' as const;
            const letterSpacing = alignment === 'center' ? alignCenterLetterSpacing : alignSpaceAroundLetterSpacing;
            const headTextWidth = alignment === 'center' ? alignCenterHeadTextWidth : alignSpaceAroundHeadTextWidth;
            const halfGap = Math.max(
                DEFAULT_GAP,
                alignment === 'center'
                    ? (alignCenterHeadTextWidth - footTextWidth) / 2
                    : alignSpaceAroundLetterSpacing / -2
            );

            if (debug) console.info(
                `getHeadTextWidth ${debug}`,
                alignment,
                letterSpacing,
                headText, headTextWidth,
                footText, footTextWidth,
                halfGap,
            );
            return {
                letterSpacing,
                headTextWidth,
                /**
                 * Canh giữa nếu footText có 1 ký tự hoặc nếu headText canh giữa dài hơn footText, space-around trong trường hợp còn lại
                 * * `[gap][letter + spacing][gap]`
                 * * `[half-gap][letter][gap][letter][half-gap]`
                 */
                alignment,
                /** * Gap dương, furigana chiếm thêm chỗ
                 * * Gap âm, furigana có thể nhường chỗ
                 */
                halfGap,
            };
        };

        /**
         * Tính phần chiều dài bên trái đã mất (nếu có) do ảnh hưởng bởi gap phải.
         */
        const getExtraLeftOffset = (prevGap: number, curGap: number) => {
            if ((prevGap >= 0 && curGap >= 0) || (prevGap <= 0 && curGap <= 0)) return 0;
            const leftExtraWidth = getExtraLeftWidth(prevGap, curGap);

            if (prevGap <= 0 && curGap >= 0) return curGap - leftExtraWidth;
            return -1 * leftExtraWidth;
        };
        /**
         * Tính lại phần chiều dài bên trái (tính từ footText) do ảnh hưởng bởi gap phải.
         * * Nếu prevGap dương (đẩy phải)
         *    * Nếu curGap dương (đẩy trái): Tất cả gap thành chiều dài bổ sung
         *    * Nếu curGap âm (hút trái): Chiều dài bổ sung bị giảm đi, nhưng không quá phần chiều dài mà previousGap có thể cho
         * * Nếu prevGap âm (hút phải)
         *    * Nếu curGap dương (đẩy trái): curGap lấy hết cỡ từ prevGap, nhưng không quá những gì prevGap có nhận
         *    * Nếu curGap âm (hút trái): Hai gap không can thiệp nhau, chiều dài bổ sung là 0
         */
        const getExtraLeftWidth = (prevGap: number, curGap: number) => {
            return prevGap >= 0
                ? curGap >= 0
                    ? curGap
                    : Math.max(curGap, prevGap * -1)
                : curGap >= 0
                    ? curGap + Math.max(curGap * -1, prevGap)
                    : 0;
        };
        /** Trả về độ dài thực của token (không phụ thuộc vào scale), nếu thông số `xRatio` được truyền, các ký tự constant width như bullet
         * sẽ được phóng to lên tương ứng.
         */
        const analyzeToken = ({
            token: rawToken, nextToken,
            xRatio,
            previousTokenGap = 0,
            debug,
        }: {
            token: string,
            nextToken: string | undefined,
            xRatio: number,
            previousTokenGap?: number,
            debug?: string,
        }) => {
            if (!ctx || !rawToken) return {
                totalWidth: 0,
                outmostLetter: '',
                space: 0,
                spaceAtEnd: false,
                fixedWidth: 0,
                rightGap: 0,
                leftGap: 0,
            };
            const token = rawToken.replaceAll(/⦉|⦊/g, '');
            let outmostLetter = '';
            /** Tính số đo của 1 token */
            let totalWidth = 0;
            /** Số lượng khoảng trắng có trong token */
            let spaceCount = 0;
            /** Ở cuối token có space hay không, vì trong một vài trường hợp ta bỏ space ở cuối */
            let spaceAtEnd = false;
            /** Độ dài token cố định có / không thể bị compresss */
            let fixedWidth = 0;
            const lastOfLine = nextToken === undefined;
            /** Gap chừa lại được cho furigana của token, như vậy right gap của token này là left gap của token kế tiếp */
            let currentRightGap = previousTokenGap ?? 0;
            let outmostLeftGap = 0;
            /** 3 nhóm trong token:
             * * Nhóm ruby
             * * Ký tự lẻ
             */
            const fragmentList = token.split(/({[^{}]+?}|.)/).filter(entry => entry != null && entry !== '');
            for (let cnt = 0; cnt < fragmentList.length; cnt++) {
                const fragment = fragmentList[cnt];
                const defaultgetExtraLeftWidth = getExtraLeftWidth(currentRightGap, DEFAULT_GAP);
                /** Bullet symbol không bị compress, tham khảo "Agave Dragon" */
                if (fragment === bulletSymbol) {
                    const fragmentWidth = bulletSymbolWidth / xRatio;
                    totalWidth += fragmentWidth + defaultgetExtraLeftWidth;
                    fixedWidth += fragmentWidth;
                    currentRightGap = DEFAULT_GAP;
                    if (cnt === 0) {
                        outmostLeftGap = DEFAULT_GAP;
                        outmostLetter = fragment[0];
                    }
                    if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
                }
                /** OCG Ordinal symbol không bị compress */
                else if (/[①-⑳]/.test(fragment)) {
                    const fragmentWidth = withOrdinalFont(() => ctx.measureText(fragment).width / xRatio);
                    totalWidth += fragmentWidth + defaultgetExtraLeftWidth;
                    fixedWidth += fragmentWidth;
                    currentRightGap = DEFAULT_GAP;
                    if (cnt === 0) {
                        outmostLeftGap = DEFAULT_GAP;
                        outmostLetter = fragment[0];
                    }
                    if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
                }
                /** Cụm ruby cần tách đôi các phần */
                else if (/{[^{}]+?}/.test(fragment)) {
                    const [footText, headText] = fragment.replaceAll(/{|}/g, '').split('|');
                    const {
                        totalWidth: footTextWidth,
                        fixedWidth: footTextFixedWidth,
                    } = analyzeToken({ token: footText, nextToken, xRatio, previousTokenGap: 0 });
                    const { halfGap } = getHeadTextWidth({ ctx, headText, footText, footTextWidth });
                    const leftGap = getExtraLeftWidth(currentRightGap, halfGap);
                    const rightGap = halfGap;
                    if (debug) console.info(
                        `analyzeToken ${debug}`,
                        token, fragment,
                        currentRightGap, leftGap, rightGap,
                        footTextWidth, footTextWidth + leftGap + Math.max(rightGap, 0),
                    );
                    currentRightGap = rightGap;
                    totalWidth += footTextWidth + leftGap + Math.max(rightGap, 0);
                    fixedWidth += footTextFixedWidth;
                    // if (format === 'ocg') {
                    //     spaceCount += 1;
                    //     if (cnt === fragmentList.length - 1) spaceAtEnd = true;
                    // }
                    if (cnt === 0) {
                        outmostLeftGap = halfGap;
                        outmostLetter = footText[0];
                    }
                }
                /** Một số ký tự dùng font đặc biệt */
                else if (specialSymbolReg.test(fragment) && format === 'tcg') {
                    const fragmentWidth = withSymbolFont(() => ctx.measureText(fragment).width);

                    totalWidth += fragmentWidth + defaultgetExtraLeftWidth;
                    currentRightGap = DEFAULT_GAP;
                    if (cnt === 0) {
                        outmostLeftGap = DEFAULT_GAP;
                        outmostLetter = fragment[0];
                    }
                    if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
                }
                /** Các ký tự còn lại */
                else {
                    const fragmentWidth = getLetterWidth({ ctx, letter: fragment, lastOfLine, format });

                    totalWidth += fragmentWidth + defaultgetExtraLeftWidth;
                    currentRightGap = DEFAULT_GAP;
                    spaceCount += 1;
                    if (cnt === fragmentList.length - 1) spaceAtEnd = true;
                    if (cnt === 0) {
                        outmostLeftGap = DEFAULT_GAP;
                        outmostLetter = fragment[0];
                    }
                    if (debug) console.info(`analyzeToken ${debug}`, token, fragment, fragmentWidth, currentRightGap, defaultgetExtraLeftWidth);
                }
            }

            return {
                totalWidth,
                space: spaceCount,
                spaceAtEnd,
                fixedWidth,
                outmostLetter,
                rightGap: currentRightGap,
                leftGap: outmostLeftGap,
            };
        };

        // [CREATE SENTENCE ON EACH LINE]
        let lineList: { line: string, isLast: boolean }[] = [];
        const createLineList = (
            median: number,
            paragraphList: string[],
            additionalLineCount = 0,
        ) => {
            const currentLineList: { line: string, isLast: boolean }[] = [];
            const currentLineCount = paragraphList.reduce((acc, curr) => {
                // Thay vì giảm độ dài từng chữ, ta dùng ratio để tăng độ dài hiện có, như vậy tránh tích tụ sai số
                const xRatio = (median <= 100 ? 100 : median) / 1000;
                const hypoWidth = width / xRatio;
                const tokenList = tokenizeText(curr, true);
                let addedLineCount = 1;
                let wordList: string[] = [];
                let currentLineWidth = 0;
                let currentGap = START_OF_LINE_GAP;

                for (let cnt = 0; cnt < tokenList.length; cnt++) {
                    const token = tokenList[cnt];
                    const nextToken = tokenList[cnt + 1];
                    /** Tính số đo của 1 token */
                    let {
                        outmostLetter,
                        totalWidth,
                        rightGap,
                        leftGap,
                    } = analyzeToken({ token, nextToken, xRatio, previousTokenGap: currentGap });

                    /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
                     * việc âm ngược để tránh tràn
                     */
                    const indent = (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                        + (cnt === 0 && ocgAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);
                    let tokenWidth = totalWidth + indent;
                    /**
                     * Trong khi gap bên trái có thể âm ngược vào token trước, gap bên phải luôn đầy đủ.
                     * */
                    if (currentLineWidth + tokenWidth > hypoWidth) {
                        /**
                         * Nếu token kế tiếp làm câu quá dài, wrap xuống dòng mới
                         */
                        currentLineList.push({
                            line: wordList.join('').trim(),
                            isLast: false,
                        });
                        /** Token gây ra wrap dòng tất nhiên trở thành token mới nhất của dòng kế tiếp, nhưng ta tính lại width vì lúc này rightGap đã khác */
                        let {
                            totalWidth,
                            rightGap,
                            leftGap,
                        } = analyzeToken({ token, nextToken, xRatio, previousTokenGap: START_OF_LINE_GAP });
                        /** Xử lý âm lề tương tự */
                        const indent = (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                            + (ocgAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);
                        let tokenWidth = totalWidth + indent;
                        currentLineWidth = tokenWidth;
                        currentGap = rightGap;
                        wordList = [token];
                        addedLineCount += 1;
                    } else {
                        currentLineWidth += tokenWidth;
                        currentGap = rightGap;
                        wordList.push(token);
                    }
                }

                const line = wordList.join('').trim();
                currentLineList.push({
                    line,
                    isLast: true,
                });

                return acc + addedLineCount;
            }, 0) + additionalLineCount;

            return { currentLineList, currentLineCount };
        };

        // [FIND SUITABLE CONDENSE RATIO]
        /** Trả về median cuối cùng sau khi lặp tối đa, median nhỏ hơn 100 sẽ được quy về 100, trên thực tế data không thể nào đạt
        tới median 100, trừ phi data vượt giới hạn bình thường nhiều lần */
        const effectiveRatio = condense(
            currentMedian => {
                const { currentLineList, currentLineCount } = createLineList(
                    currentMedian,
                    paragraphList,
                    additionalLineCount,
                );
                lineList = currentLineList;

                if (currentLineCount > lineCount) return false;
                return true;
            },
            100,
        );

        // [START DRAWING]
        const fillHeadText = ({
            edge, baseline,
            headText,
            footText, footTextWidth,
            xRatio,
        }: {
            headText: string,
            footText: string, footTextWidth: number,
            edge: number, baseline: number,
            xRatio: number
        }) => {
            const { letterSpacing, headTextWidth, halfGap, alignment } = getHeadTextWidth({ ctx, headText, footText, footTextWidth });
            const overflow = headTextWidth > footTextWidth;
            let currentEdge = edge + xRatio * (alignment === 'center'
                ? overflow
                    ? 0
                    : (footTextWidth / 2 - headTextWidth / 2)
                : halfGap * -1);

            for (const letter of headText) {
                currentEdge += withFurigana(
                    edge => {
                        ctx.scale(KATAKANA_RATIO, 1);
                        ctx.fillText(letter, edge / xRatio / KATAKANA_RATIO, baseline - fontSize * 0.75);
                        ctx.scale(1 / KATAKANA_RATIO, 1);

                        return (ctx.measureText(letter).width * KATAKANA_RATIO + letterSpacing) * xRatio;
                    },
                    currentEdge,
                );
            }

            return {
                headTextWidth,
                halfGap,
            };
        };
        const tolerantValue = tolerantPerSentence[`${paragraphList.length}`] ?? tolerantPerSentence['3'];

        if (
            (effectiveRatio < tolerantValue)
            && (effectSizeLevel < fontList.length - 1)
        ) {
            effectSizeLevel += 1;
        } else {
            /** Vẽ ký tự lẻ, hàm này chịu ảnh hưởng bởi transform ratio. */
            const drawLetter = (
                ctx: CanvasRenderingContext2D,
                letter: string,
                edge: number,
                baseline: number,
                xRatio: number,
            ) => {
                const letterWidth = getTrueLetterWidth({ ctx, letter }) * xRatio;
                if (OCG_DOT_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_DOT_RATIO) / 2, baseline);

                    return letterWidth * OCG_DOT_RATIO;
                }
                if (CHOONPU_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - CHOONPU_RATIO) / 2, baseline);

                    return letterWidth * CHOONPU_RATIO;
                }
                if (CHIISAI_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - CHIISAI_RATIO) / 2, baseline);

                    return letterWidth * CHIISAI_RATIO;
                }
                if (OCG_NUMBER_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_NUMBER_RATIO) / 2, baseline);

                    return letterWidth * OCG_NUMBER_RATIO;
                }
                /** Theo lý thuyết ta cần xử lý case dấu chấm / phẩy ở cuối dòng, nhưng khi vẽ ở cuối dòng thì thông số này được reset ở dòng mới.
                 * Nên không xử lý gì thêm
                 */
                if (OCG_REDUCED_WIDTH_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio, baseline);

                    /** Tương tự trường hợp dấu chấm */
                    return letterWidth * OCG_REDUCED_WIDTH_RATIO;
                }
                if (OCG_INCREASED_WIDTH_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_INCREASED_WIDTH_RATIO) / 2, baseline);

                    return letterWidth * OCG_INCREASED_WIDTH_RATIO;
                }
                if (HIRAGANA_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - HIRAGANA_RATIO) / 2, baseline);

                    return letterWidth * HIRAGANA_RATIO;
                }
                if (KATAKANA_REGEX.test(letter)) {
                    ctx.fillText(letter, edge / xRatio - letterWidth * (1 - KATAKANA_RATIO) / 2, baseline);

                    return letterWidth * KATAKANA_RATIO;
                }

                ctx.fillText(letter, edge / xRatio - letterWidth * (1 - OCG_LETTER_RATIO) / 2, baseline);

                return letterWidth * OCG_LETTER_RATIO;
            };
            const drawLine = (
                tokenList: string[],
                xRatio: number,
                yRatio: number,
                left: number,
                trueBaseline: number,
                additionalSpaceWidth: number,
            ) => {
                const baseline = trueBaseline / yRatio;
                let previousTokenGap = START_OF_LINE_GAP;
                /** Rebalance */
                let previousTokenVacantSpace = 0;
                for (let cnt = 0, tokenEdge = left; cnt < tokenList.length; cnt++) {
                    const token = tokenList[cnt];
                    const nextToken = tokenList[cnt + 1];
                    const next2ndToken = tokenList[cnt + 2];
                    const fragmentList = token.split(/({[^{}]+?}|.)/).filter(entry => entry != null && entry !== '');
                    const {
                        outmostLetter,
                        leftGap,
                        rightGap,
                        totalWidth: totalTokenWidth,
                    } = analyzeToken({ token, nextToken, xRatio, previousTokenGap });

                    /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
                     * việc âm ngược để tránh tràn
                     */
                    const indent = (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
                        + (cnt === 0 && ocgAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);

                    let fragmentEdge = tokenEdge + indent;
                    let fragmentGap = previousTokenGap;
                    let accumulatedSpace = 0;
                    for (let cnt2 = 0; cnt2 < fragmentList.length; cnt2++) {
                        const fragment = fragmentList[cnt2];
                        const nextFragment = fragmentList[cnt2 + 1] ?? nextToken;
                        const next2ndFragment = fragmentList[cnt + 2] ?? next2ndToken;
                        /** Các symbol ordinal như ① ② ③ không bị compress */
                        if (fragment === bulletSymbol) {
                            fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_GAP) * xRatio;
                            fragmentEdge += withUncompressText(
                                internalTokenEdge => {
                                    drawBullet(ctx, internalTokenEdge, trueBaseline, bulletSymbolWidth, bulletSpaceAfter);

                                    return bulletSymbolWidth;
                                },
                                fragmentEdge,
                                xRatio, yRatio,
                            );
                            fragmentGap = DEFAULT_GAP;
                        }
                        // /** OCG Ordinal symbol không bị compress */
                        else if (/[①-⑳]/.test(fragment)) {
                            fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_GAP) * xRatio;
                            fragmentEdge += withUncompressText(
                                internalTokenEdge => {
                                    return withOrdinalFont(
                                        internalFragmentTrueEdge => {
                                            ctx.fillText(fragment, internalFragmentTrueEdge, trueBaseline - 2);

                                            return ctx.measureText(fragment).width;
                                        },
                                        internalTokenEdge,
                                    );
                                },
                                fragmentEdge,
                                xRatio, yRatio,
                            );
                            fragmentGap = DEFAULT_GAP;
                        }
                        /** Cụm ruby cần tách đôi các phần */
                        else if (/{[^{}]+?}/.test(fragment)) {
                            const [footText, headText] = fragment.replaceAll(/{|}/g, '').split('|');
                            /** Ta assume cụm ruby không lồng nhau */
                            const { totalWidth: footTextWidth } = analyzeToken({
                                token: footText, nextToken: nextFragment,
                                xRatio,
                                previousTokenGap: 0,
                            });
                            const { headTextWidth, halfGap } = getHeadTextWidth({ ctx, headText, footText, footTextWidth });
                            const rightGap = halfGap;
                            /** Phần không gian mất đi do fragment âm vào previous gap (nếu có) */
                            const lostLeftWidth = getExtraLeftOffset(fragmentGap, halfGap);
                            const nextLeftGap = analyzeToken({
                                token: nextFragment, nextToken: next2ndFragment,
                                xRatio,
                                previousTokenGap: rightGap,
                            }).leftGap;
                            /** Phần không gian mất đi do next gap âm vào fragment (nếu có) */
                            const lostRightWidth = getExtraLeftOffset(halfGap, nextLeftGap);
                            const vacantSpace = footTextWidth < headTextWidth
                                ? headTextWidth - lostLeftWidth - lostRightWidth
                                : 0;
                            /** Không gian trống từ fragment phía trước cho tới foot text sau khi đã âm head text */
                            const vacantLeftWidth = getExtraLeftWidth(fragmentGap, halfGap);
                            let footTextFragmentEdge = Math.round(fragmentEdge
                                + (previousTokenVacantSpace > 0 ? previousTokenVacantSpace / -2 : 0) * xRatio
                                + (indent
                                    ? vacantLeftWidth
                                    : vacantSpace - footTextWidth > 0 || footTextWidth - vacantSpace <= 1e-2
                                        ? (vacantSpace - footTextWidth) / 2
                                        : lostLeftWidth * -1) * xRatio);
                            previousTokenVacantSpace = halfGap > 0 ? halfGap - lostRightWidth : 0;

                            for (let cnt3 = 0; cnt3 < footText.length; cnt3++) {
                                const footLetter = footText[cnt3];
                                const nextFootLetter = footText[cnt3 + 1] ?? nextFragment;
                                /** Ta assume cụm ruby không lồng nhau */
                                const { totalWidth } = analyzeToken({
                                    token: footLetter, nextToken: nextFootLetter,
                                    xRatio,
                                    previousTokenGap: 0,
                                });

                                drawLetter(ctx, footLetter, footTextFragmentEdge, baseline, xRatio);
                                footTextFragmentEdge += totalWidth * xRatio;
                            }
                            fillHeadText({
                                /** Lùi edge của head text nếu xuất hiện trường hợp head text overflow vào gap âm */
                                edge: fragmentEdge - lostLeftWidth * xRatio, baseline,
                                headText,
                                footText, footTextWidth,
                                xRatio,
                            });

                            fragmentEdge += (footTextWidth + vacantLeftWidth + Math.max(rightGap, 0)) * xRatio;
                            fragmentGap = rightGap;
                        }
                        /** Một số ký tự dùng font đặc biệt */
                        else if (specialSymbolReg.test(fragment) && format === 'tcg') {
                            fragmentEdge += withSymbolFont(
                                tokenEdge => {
                                    ctx.fillText(fragment, tokenEdge / xRatio, baseline);

                                    return ctx.measureText(fragment).width * xRatio;
                                },
                                tokenEdge,
                            );
                            fragmentGap = DEFAULT_GAP;
                        }
                        else {
                            fragmentEdge += getExtraLeftWidth(fragmentGap, DEFAULT_GAP) * xRatio;
                            const letterWidth = getLetterWidth({ ctx, letter: fragment, format, lastOfLine: nextFragment === undefined });

                            drawLetter(ctx, fragment, fragmentEdge, baseline, xRatio);
                            // drawMarker({ ctx, color: randomDarkColor(), baseline, trueEdge: fragmentEdge, width: letterWidth * xRatio, xRatio, offset: 0 });
                            fragmentEdge += letterWidth * xRatio;
                            if (format === 'ocg') {
                                fragmentEdge += additionalSpaceWidth;
                                accumulatedSpace += additionalSpaceWidth;
                            } else if (format === 'tcg' && /\s*/.test(fragment)) {
                                fragmentEdge += additionalSpaceWidth;
                                accumulatedSpace += additionalSpaceWidth;
                            }
                            fragmentGap = DEFAULT_GAP;
                        }
                    }
                    previousTokenGap = rightGap;
                    /** Token ở đầu line không có gap (tức là cho phép furigana chạy âm về lề trái) */
                    // drawMarker({ ctx, color: randomDarkColor(), baseline, trueEdge: tokenEdge, width: totalTokenWidth * xRatio, xRatio, offset: 0 });
                    tokenEdge += totalTokenWidth * xRatio + accumulatedSpace + indent;
                }
            };
            ctx.clearRect(0, 0, CanvasWidth, 750 * UP_RATIO);

            let baseline = top + lineHeight;
            /** Full line list - ví dụ material, luôn nằm trong 1 dòng duy nhất và có hệ số condense riêng so với phần còn lại của effect, tham
             * khảo "Galaxy-Eyes Cipher X Dragon"
             */
            for (const line of fullLineList) {
                const internalEffectiveRatio = condense(
                    currentMedian => {
                        const { currentLineCount } = createLineList(
                            currentMedian,
                            [line],
                            0,
                        );

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const sigmoidXRatio = internalEffectiveRatio / 1000;

                const tokenList = tokenizeText(line);
                let totalContentWidth = 0;
                let spaceCount = 0;
                let currentGap = 0;

                for (let cnt = 0; cnt < tokenList.length; cnt++) {
                    const token = tokenList[cnt];
                    const nextToken = tokenList[cnt + 1];
                    const {
                        space,
                        totalWidth,
                        spaceAtEnd,
                        leftGap,
                        rightGap,
                        outmostLetter,
                    } = analyzeToken({ token, nextToken, xRatio: sigmoidXRatio, previousTokenGap: currentGap });
                    const indent = (
                        (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * sigmoidXRatio) * -1 : 0)
                        +
                        (cnt === 0 && ocgAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET * sigmoidXRatio : 0)
                    );

                    currentGap = rightGap;
                    totalContentWidth += totalWidth * sigmoidXRatio + indent;
                    spaceCount += space - (spaceAtEnd && nextToken === undefined ? 1 : 0);
                }
                const additionalSpaceWidth = spaceCount > 0 ? (width - totalContentWidth) / spaceCount : 0;

                /** TCG không chia space thừa vào line cuối, OCG thì có, nhưng chỉ chia nếu phần space bonus không quá lớn */
                const normalizedAdditionalSpaceWidth = format === 'tcg'
                    ? 0
                    : additionalSpaceWidth > 2.000 ? 0 : additionalSpaceWidth;

                ctx.scale(sigmoidXRatio, yRatio);
                drawLine(tokenList, sigmoidXRatio, yRatio, left, baseline, normalizedAdditionalSpaceWidth);
                baseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }

            // const sigmoidRatio = 0.825;
            const sigmoidRatio = effectiveRatio / 1000; // Ép về ngưỡng 0-1

            lineList.forEach(({
                line,
                isLast,
            }) => {
                let xRatio = isLast
                    ? Math.min(sigmoidRatio, 1)
                    : sigmoidRatio;

                ctx.scale(xRatio, yRatio);
                /**
                 * Vẽ từng line với tính toán như sau:
                 * * Tính toán tổng không gian cho tất cả từ trong dòng (bao gồm cả bullet và special symbol)
                 * * Lấy độ dài của line trừ cho tổng không gian kể trên, ta được không gian trống
                 * * Chia không gian trống này vào giữa các từ (align justify)
                 * 
                 * Đối với dòng cuối, không gian chưa chắc đã dùng hết nên ta không tính toán không gian trống, mà chỉ vẽ như bình thường
                 */
                const tokenList = tokenizeText(line);
                let totalContentWidth = 0;
                let spaceCount = 0;
                let currentGap = 0;

                for (let cnt = 0; cnt < tokenList.length; cnt++) {
                    const token = tokenList[cnt];
                    const nextToken = tokenList[cnt + 1];
                    const {
                        space,
                        totalWidth,
                        spaceAtEnd,
                        leftGap,
                        rightGap,
                        outmostLetter,
                    } = analyzeToken({ token, nextToken, xRatio, previousTokenGap: currentGap });
                    const indent = (
                        (cnt === 0 && leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT, leftGap * xRatio) * -1 : 0)
                        +
                        (cnt === 0 && ocgAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET * xRatio : 0)
                    );

                    currentGap = rightGap;
                    totalContentWidth += totalWidth * xRatio + indent;
                    spaceCount += space - (spaceAtEnd && nextToken === undefined ? 1 : 0);
                }
                const additionalSpaceWidth = spaceCount > 0 ? (width - totalContentWidth) / spaceCount : 0;

                /** TCG không chia space thừa vào line cuối, OCG thì có, nhưng chỉ chia nếu phần space bonus không quá lớn */
                const normalizedAdditionalSpaceWidth = isLast
                    ? format === 'tcg'
                        ? 0
                        : additionalSpaceWidth > 2.000 ? 0 : additionalSpaceWidth
                    : additionalSpaceWidth;

                drawLine(tokenList, xRatio, yRatio, left, baseline, normalizedAdditionalSpaceWidth);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                baseline += lineHeight;
            });

            /** Condition của Flavor Text không in nghiêng, tham khảo "Summoned Skull" */
            if (effectFlavorCondition.length > 0) {
                const internalEffectiveRatio = condense(
                    currentMedian => {
                        const { currentLineCount } = createLineList(
                            currentMedian,
                            [effectFlavorCondition],
                            0,
                        );

                        if (currentLineCount > 1) return false;
                        return true;
                    },
                );
                const sigmoidXRatio = internalEffectiveRatio / 1000;

                ctx.scale(sigmoidXRatio, yRatio);
                ctx.font = currentFont.setStyle('').getFont();
                const tokenList = tokenizeText(effectFlavorCondition);
                drawLine(tokenList, sigmoidXRatio, yRatio, left, baseline, 0);
                baseline += lineHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            break;
        }
    }

    console.info('Time end', performance.now() - tStart);
    return effectSizeLevel;
};