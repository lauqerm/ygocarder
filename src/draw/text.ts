import {
    BOLD_CLOSE_TAG,
    BOLD_OPEN_TAG,
    BULLET_LETTER,
    CapitalLetterRegex,
    DefaultFontData,
    DefaultFontSizeData,
    FragmentSplitRegex,
    IMG_TAG_NAME,
    ITALIC_CLOSE_TAG,
    ITALIC_OPEN_TAG,
    ImageDrawMemory,
    LETTER_GAP_RATIO,
    MAX_LINE_REVERSE_INDENT,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
    NoSpaceRegex,
    NonCompressableRegex,
    NormalFontData,
    NumberRegex,
    OCGAlphabetRegex,
    OCGNoOverheadGapRegex,
    PRE_CLOSE_TAG,
    PRE_OPEN_TAG,
    RENDER_TAG_SOURCE,
    RUBY_BONUS_RATIO,
    RUBY_REGEX,
    PLACEHOLDER_CLOSE,
    PLACEHOLDER_OPEN,
    START_OF_LINE_ALPHABET_OFFSET,
    ST_ICON_SYMBOL,
    PlaceholderRegex,
    SquareBracketLetterRegex,
    TCGSymbolLetterRegex,
    TextData,
    TotalImagePresetMap,
    VietnameseDiacriticLetterRegex,
    WholeWordRegex,
    getBulletSpacing,
    PLACEHOLDER_DELIMITER,
} from 'src/model';
import {
    drawBullet,
    getLostLeftWidth,
    analyzeHeadText,
    getTextWorker,
    tokenizeText,
    splitPlaceholder,
} from './text-util';
import { analyzeToken } from './text-analyze';
import { TextDrawer, drawLetter, getLetterWidth } from './letter';
import { fillHeadText } from './text-overhead';
import { drawMarker } from './canvas-util';
import { scaleFontSizeData, swapTextData } from 'src/util';
import { drawFromWithSizeAndFallback } from './image';
import { useGlobalMemory } from 'src/service';
import { normalizeCardText } from './text-normalize';

/**
 * This is the heart and soul of drawer, please test this thoroughly for each change.
 * 
 * @summary Text hierachy
 *   * Letter: Individual (1) letter. E.g. "a", "1", "み", "装", "-", "①"
 *   * Fragment: Multiple letters with decorate control characters. E.g. "{無|む}", "Damage"
 *   * Token: Multiple fragments with group control characters (`NB_WORD_OPEN` and `NB_WORD_CLOSE`) or a whole word, splitted by space or other breakable letters. E.g. "⧚{相|あい}{手|て}⧛"
 *   * Sentence: Sequence of tokens. E.g. "Cannot be destroyed by battle or card effects"
 *   * Paragraph: Consecutive sentences without new line characters ("\n").
 *   * Block: Whole text in a section.
 * 
 * Line: Line is a special unit, when a sentence hit the end of current text box, it wrap to new line without using the actual new line character. In this case the sentence is broke down into multiple lines. Line can be manully created with line control characters (`NB_LINE_OPEN`/`NB_FULL_LINE_OPEN` and `NB_LINE_CLOSE`/`NB_FULL_LINE_CLOSE`), or created from text split function.
 * **/
export const drawLine = async ({
    ctx,
    tokenList,
    trueEdge, trueBaseline,
    spaceWidth = 0,
    lineHeight = 0,
    xRatio: baseXRatio, yRatio = 1,
    textData,
    format,
    drawImage = true,
    textDrawer,
    debug = false,
    option,
    globalScale,
    memory,
}: {
    ctx: CanvasRenderingContext2D,
    format: string,
    tokenList: string[],
    xRatio: number,
    yRatio?: number,
    trueEdge: number,
    trueBaseline: number,
    spaceWidth?: number,
    lineHeight?: number,
    textData: TextData,
    textDrawer?: TextDrawer,
    drawImage?: boolean,
    globalScale: number,
    option?: {
        drawHeadText?: boolean,
    },
    debug?: boolean,
    memory?: {
        image: Record<string, { src: string, width?: number, height?: number, offsetX?: number, offsetY?: number }>,
    },
}) => {
    const normalizedMemory = memory ?? { image: {} };
    const imageMemory = normalizedMemory?.image ?? {};
    const imagePresetMap = useGlobalMemory.getState().memory.imagePresetMap;
    const { drawHeadText = true } = option ?? {};
    const {
        fontLevel,
    } = textData;
    const defaultFontData = textData.fontData;
    const scaledDefaultFontSizeData = scaleFontSizeData(DefaultFontSizeData, globalScale);
    let currentTextData = textData;
    let currentFont = currentTextData.currentFont;
    let currentFontData = currentTextData.fontData;
    let fontSizeData = currentFontData.fontList[fontLevel];
    let textWorker = getTextWorker(ctx, currentFontData, fontSizeData, currentFont, globalScale);

    let previousTokenGap = 0;
    let iconPositionList: { edge: number, size: number, baseline: number }[] = [];
    let previousTokenRebalanceOffset = 0;
    let tokenEdge = trueEdge;
    let preformatMode = false;

    /** To reach a acceptable degree of calculation, we usually need to look ahead 1 or 2 next tokens, same with fragments. */
    /** To prevent cascading calculation, we disconnect the relationship between fragments and tokens. We use all information to calculate an empty space for each token, then fragments of that token is drawn inside that empty space assuming they would fit. In other words, drawing fragments of a token DOES NOT interfere with the next token. That means in theory we can skip all fragments of a token to draw the next token right away.
     */
    for (let tokenCnt = 0, xRatio = baseXRatio; tokenCnt < tokenList.length; tokenCnt++) {
        /** All the info here is not affected by injected dynamic fonts */
        const {
            bulletOffset = scaledDefaultFontSizeData.bulletOffset,
            bulletWidth,
            capitalLetterRatio = scaledDefaultFontSizeData.capitalLetterRatio,
            fontSize,
            headTextSpacing = scaledDefaultFontSizeData.headTextSpacing,
            iconSymbolWidth = bulletWidth,
            largeSymbolRatio = scaledDefaultFontSizeData.largeSymbolRatio,
            letterSpacing = scaledDefaultFontSizeData.letterSpacing,
            ordinalFontOffsetY = scaledDefaultFontSizeData.ordinalFontOffsetY,
            squareBracketRatio = scaledDefaultFontSizeData.squareBracketRatio,
            wordLetterSpacing,
            allRightSymbolOffset = scaledDefaultFontSizeData.allRightSymbolOffset,
        } = fontSizeData;
        const letterSpacingRatio = 1 + letterSpacing / 2;
        const baseline = trueBaseline / yRatio;
        const {
            headTextFillStyle,
            headTextBold = DefaultFontData.headTextBold,
            headTextHeightRatio = DefaultFontData.headTextHeightRatio,
            headTextOverflow = DefaultFontData.headTextOverflow,
            headTextGapRatio = DefaultFontData.headTextGapRatio,
            metricMethod,
            fontStyle,
            letterDeviationMap = {},
            letterOffsetMap = {},
        } = currentFontData;
        const {
            stopApplyFuriganaFont, applyFuriganaFont,
            stopApplyLargerText, applyLargerText,
            stopApplyNumberFont, applyNumberFont,
            stopApplyOrdinalFont, applyOrdinalFont,
            applyScale, reverseScale,
            applySymbolFont, stopApplySymbolFont,
            applyVietnameseFont, stopApplyVietnameseFont,
            applyAsymmetricScale, resetScale,
        } = textWorker;
        const potentialTaggedToken = tokenList[tokenCnt];
        /** Mode switch letter got processed first */
        if (potentialTaggedToken === NB_UNCOMPRESSED_START) {
            xRatio = 1;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            continue;
        }
        else if (potentialTaggedToken === NB_UNCOMPRESSED_END) {
            xRatio = baseXRatio;
            ctx.scale(xRatio, 1);
            continue;
        }
        if (potentialTaggedToken === ITALIC_OPEN_TAG) {
            const hasItalicFontData = !!(NormalFontData[defaultFontData?.variant ?? '']);
            const italicFontData = hasItalicFontData
                ? NormalFontData[defaultFontData.variant]
                : defaultFontData;

            currentTextData = swapTextData(textData, italicFontData);
            currentFont = currentTextData.currentFont;
            currentFontData = currentTextData.fontData;
            fontSizeData = currentFontData.fontList[fontLevel];
            textWorker = getTextWorker(ctx, currentFontData, fontSizeData, currentFont, globalScale);
            ctx.font = currentFont
                .setStyle('italic')
                .getFont();
            continue;
        } else if (potentialTaggedToken === ITALIC_CLOSE_TAG) {
            currentTextData = textData;
            currentFont = currentTextData.currentFont;
            currentFontData = currentTextData.fontData;
            fontSizeData = currentFontData.fontList[fontLevel];
            textWorker = getTextWorker(ctx, currentFontData, fontSizeData, currentFont, globalScale);
            ctx.font = currentFont
                .setStyle('')
                .getFont();
            continue;
        }
        if (potentialTaggedToken === BOLD_OPEN_TAG) {
            ctx.font = currentTextData.currentFont
                .setWeight('bold')
                .getFont();
            continue;
        } else if (potentialTaggedToken === BOLD_CLOSE_TAG) {
            ctx.font = currentTextData.currentFont
                .setWeight('')
                .getFont();
            continue;
        }
        if (potentialTaggedToken === PRE_OPEN_TAG) {
            preformatMode = true;
            continue;
        } else if (potentialTaggedToken === PRE_CLOSE_TAG) {
            preformatMode = false;
            continue;
        }

        /** Start drawing things */
        const gapRatio = LETTER_GAP_RATIO * xRatio;
        const defaultGap = fontSize * gapRatio;
        const nextToken = tokenList[tokenCnt + 1];
        const next2ndToken = tokenList[tokenCnt + 2];
        const analyzeTokenParameter = {
            ctx,
            xRatio,
            letterSpacing,
            format,
            textData,
            globalScale,
            lineHeight,
        };
        const drawLetterParameter = {
            ctx,
            baseline,
            xRatio,
            textDrawer,
        };

        /** Remember renderable tags' information here, we will use it to draw later */
        let token = potentialTaggedToken;
        const tagList: ImageDrawMemory[] = [];
        const renderTagRegex = new RegExp(RENDER_TAG_SOURCE, 'g');
        let renderTagMatchResult: RegExpMatchArray | null;
        let tagListPosition = 0;
    
        while ((renderTagMatchResult = renderTagRegex.exec(potentialTaggedToken)) != null) {
            const regex = /(?<=<.+?)(?<!>) ([\w-]+)(?:=["|'|”|“](.+?)["|'|”|“]|\b)(?!<)(?=.*?>)/gm;
            const tagName = renderTagMatchResult[1];
            let placeholderWidth = 0;
            if (tagName === IMG_TAG_NAME) {
                // fragmentList = [];
                // currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
                let matchResult: RegExpExecArray | null;
                let src = '';
                let width: number | undefined;
                let height: number | undefined;
                let offsetX: number | undefined;
                let offsetY: number | undefined;
                let name: string | undefined;
                while ((matchResult = regex.exec(renderTagMatchResult[0])) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (matchResult.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    const attributeKey = matchResult[1];
                    const attributeValue = matchResult[2];
                    switch (attributeKey) {
                        case 'src': {
                            src = attributeValue;
                            break;
                        }
                        case 'width': {
                            width = parseInt(attributeValue);
                            break;
                        }
                        case 'height': {
                            height = parseInt(attributeValue);
                            break;
                        }
                        case 'offsetX': {
                            offsetX = parseInt(attributeValue);
                            break;
                        }
                        case 'offsetY': {
                            offsetY = parseInt(attributeValue);
                            break;
                        }
                        case 'name': {
                            name = attributeValue;
                            break;
                        }
                    }
                }
                if (name) {
                    const memoizedImage = imageMemory[name];
                    if (memoizedImage) {
                        src = memoizedImage.src;
                        width = typeof width === 'number' ? width : memoizedImage.width;
                        height = typeof height === 'number' ? height : memoizedImage.height;
                        offsetX = typeof offsetX === 'number' ? offsetX : memoizedImage.offsetX;
                        offsetY = typeof offsetY === 'number' ? offsetY : memoizedImage.offsetY;
                    } else {
                        imageMemory[name] = {
                            src,
                            width,
                            height,
                            offsetX,
                            offsetY,
                        };
                    }
                }

                if (src && drawImage) {
                    let normalizedWidth = typeof width === 'number'
                        ? width
                        : typeof height === 'number'
                            ? undefined
                            : lineHeight * 0.9;
                    let normalizedSource = src;
                    let isInternalSource = false;
                    const preset = src ? imagePresetMap[src] : undefined;
                    if (preset) {
                        const {
                            height: presetHeight, width: presetWidth,
                            offsetX: presetOffsetX, offsetY: presetOffsetY,
                            src,
                        } = preset;
                        normalizedSource = src;
                        width = typeof width === 'number' ? width : presetWidth;
                        height = typeof height === 'number' ? height : presetHeight;
                        offsetY = typeof offsetY === 'number' ? offsetY : presetOffsetY;
                        offsetX = typeof offsetX === 'number' ? offsetX : presetOffsetX;
                    } else if (!src.startsWith('https')) {
                        isInternalSource = true;
                        normalizedSource = '/asset/image/' + (TotalImagePresetMap[src] ?? `${src}.png`);
                    }
                    /** Image is unscalable */
                    placeholderWidth = (normalizedWidth ?? 0) / xRatio;
                    tagList[tagListPosition] = {
                        type: 'img',
                        isInternalSource,
                        src: normalizedSource,
                        offsetX, offsetY,
                        width: normalizedWidth, height,
                    };
                }
            }
            token = token.replace(
                renderTagMatchResult[0],
                `${PLACEHOLDER_OPEN}${tagListPosition}${PLACEHOLDER_DELIMITER}${placeholderWidth}${PLACEHOLDER_CLOSE}`,
            );
            tagListPosition += 1;
        };

        const trueFragmentList = potentialTaggedToken.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
        const fragmentList = token.split(FragmentSplitRegex).filter(entry => entry != null && entry !== '');
        /** Analyze current token again, this will dictate the width of a token, no matter what is actually drawn. We expect to draw nothing but the calculation must stay correct. */
        const {
            leftMostLetter,
            leftGap,
            rightGap: tokenRightGap,
            totalWidth: totalTokenWidth,
            spaceCount,
        } = analyzeToken({
            token, nextToken, previousTokenGap: previousTokenGap / xRatio, memory: normalizedMemory, ...analyzeTokenParameter,
        });

        /** Again, first token indentation. */
        const indent = tokenCnt === 0
            ? (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT * globalScale, leftGap * xRatio) * -1 : 0)
            + (OCGAlphabetRegex.test(leftMostLetter) ? START_OF_LINE_ALPHABET_OFFSET * globalScale : 0)
            : 0;
        let fragmentEdge = tokenEdge + indent;
        let currentRightGap = previousTokenGap;
        /** Draw all the fragments of a token. */
        for (let fragmentCnt = 0; fragmentCnt < fragmentList.length; fragmentCnt++) {
            const fragment = fragmentList[fragmentCnt];
            const nextFragment = fragmentList[fragmentCnt + 1] ?? nextToken;
            const next2ndFragment = fragmentList[tokenCnt + 2] ?? next2ndToken;

            /** These fragments do not have any visual */
            if (token === NB_UNCOMPRESSED_START || token === NB_UNCOMPRESSED_END) { }
            /** We do not actually draw S/T Icon here, but we record its position and leave a suitable space for it. */
            else if (fragment === ST_ICON_SYMBOL) {
                iconPositionList.push({ edge: fragmentEdge, size: iconSymbolWidth, baseline });
                fragmentEdge += iconSymbolWidth * letterSpacingRatio;
                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** Bullet symbol ● is not condenseable, and has specialized draw worker. */
            else if (fragment === BULLET_LETTER) {
                resetScale();
                drawBullet(
                    ctx,
                    fragmentEdge,
                    trueBaseline + bulletOffset - 1 * globalScale,
                    bulletWidth,
                    getBulletSpacing(format) * globalScale,
                );
                fragmentEdge += bulletWidth * letterSpacingRatio;
                applyAsymmetricScale(xRatio, yRatio);

                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** Copyright symbol © is not condenseable and use larger font. */
            else if (/[©]/.test(fragment)) {
                resetScale();
                applyLargerText(largeSymbolRatio);
                drawLetter({
                    ...drawLetterParameter,
                    letter: fragment,
                    edge: fragmentEdge * xRatio,
                    baseline: trueBaseline + (format === 'tcg'
                        ? allRightSymbolOffset
                        : allRightSymbolOffset * 2), /** 1 look a bit better than 2 */
                });
                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplyLargerText();
                applyAsymmetricScale(xRatio, yRatio);

                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** OCG Ordinal symbol is not condenseable and use different font. */
            else if (NonCompressableRegex.test(fragment)) {
                resetScale();
                applyOrdinalFont();
                drawLetter({
                    ...drawLetterParameter,
                    letter: fragment,
                    edge: fragmentEdge * xRatio,
                    baseline: trueBaseline + ordinalFontOffsetY,
                });
                fragmentEdge += ctx.measureText(fragment).width * letterSpacingRatio;
                stopApplyOrdinalFont();
                applyAsymmetricScale(xRatio, yRatio);

                fragmentEdge += spaceWidth;
                currentRightGap = 0;
                previousTokenRebalanceOffset = 0;
            }
            /** Draw tagged entry */
            else if (PlaceholderRegex.test(fragment)) {
                const { content } = splitPlaceholder(fragment);
                const tagPosition = parseInt(content);
                if (!isNaN(tagPosition) && tagList[tagPosition]) {
                    const {
                        type,
                        src,
                        offsetX, offsetY,
                        width, height,
                        isInternalSource,
                    } = tagList[tagPosition];
                    const lineHeightOffsetRatio = 0.75; // If it is 1, the image will touch the bottom of the line above
                    resetScale();
                    await drawFromWithSizeAndFallback(
                        ctx,
                        src,
                        fragmentEdge + (offsetX ?? 0),
                        trueBaseline + (offsetY ?? 0) - lineHeight * lineHeightOffsetRatio,
                        width, height,
                        undefined, undefined,
                        undefined, undefined,
                        { cache: isInternalSource, internalImage: isInternalSource, crossorigin: 'anonymous' }
                    );
                    fragmentEdge += (type === 'img' && width ? width : 0);
                    applyAsymmetricScale(xRatio, yRatio);
                    currentRightGap = 0;
                    previousTokenRebalanceOffset = 0;
                }
            }
            /** Fragment with overhead text. */
            else if (RUBY_REGEX.test(fragment)) {
                const [footText, rubyType, headText = ''] = trueFragmentList[fragmentCnt].replaceAll(/{|}/g, '').split(/(\|+)/);
                const fitFootText = rubyType === '||';
                /** We do not support nested overhead text. */
                const { totalWidth: footTextWidth } = analyzeToken({
                    token: footText, nextToken: nextFragment,
                    previousTokenGap: 0,
                    memory: normalizedMemory,
                    ...analyzeTokenParameter,
                });

                /** Calculate letter width first before deciding the spacing. */
                applyFuriganaFont();
                const headTextLetterWidth = headText
                    .split('')
                    .map(letter => getLetterWidth({ ctx, letter, fontStyle, metricMethod: 'furigana', xRatio: 1, globalScale }).boundWidth)
                    .reduce((acc, cur) => acc + cur, 0);
                stopApplyFuriganaFont();

                /** Notice what is scaled and what is not in those params. It is a headache to work with sometime. */
                const {
                    headTextWidth,
                    halfGap: baseHalfGap,
                } = analyzeHeadText({
                    headText,
                    headTextLetterWidth,
                    footText,
                    footTextWidth: footTextWidth * xRatio,
                    headTextGap: defaultGap,
                    headTextSpacing: headTextSpacing * xRatio,
                    gapPadding: fontSize * headTextGapRatio,
                    fitFootText,
                    sentenceXRatio: xRatio,
                    xRatio: (headTextOverflow === 'condense' && footText.length > 1) ? Math.min(1, xRatio + RUBY_BONUS_RATIO) : 0,
                });
                const halfGap = headText.length === 0
                    ? Math.max(defaultGap, footTextWidth * gapRatio)
                    : baseHalfGap;
                const rightGap = halfGap;
                const leftGap = halfGap;
                /** Lost left width because of negative gap of the previous fragment OR token */
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);
                const vacantLeftWidth = leftGap > 0 ? leftGap - lostLeftWidth : 0;

                const {
                    offsetable: isNextTokenOffsetable,
                    leftGap: nextUncompressedLeftGap
                } = analyzeToken({
                    token: nextFragment, nextToken: next2ndFragment,
                    previousTokenGap: rightGap / xRatio,
                    memory: normalizedMemory,
                    ...analyzeTokenParameter,
                });
                const nextLeftGap = nextUncompressedLeftGap * xRatio;
                const lostRightWidth = getLostLeftWidth(rightGap, nextLeftGap);
                const vacantRightWidth = rightGap > 0 ? rightGap - lostRightWidth : 0;
                const totalVacantSpace = vacantLeftWidth + vacantRightWidth;
                let rebalancedSpace = 0;
                let nextTokenRebalanceOffset = 0;

                /** Rebalance tactic here. In essential, we try to calculate the empty space of a fragment. These spaces are because the head text is too long compare to the foot text underneath. Then we divide those spaces in such a way that the foot text has roughly equal space each side so they looks more pleasant. */
                if (totalVacantSpace > 0 && nextLeftGap >= (-2 * globalScale) && isNextTokenOffsetable) {
                    rebalancedSpace = (totalVacantSpace + Math.max(nextLeftGap, 0) * 2) / 3;
                    nextTokenRebalanceOffset = Math.max(nextLeftGap, 0) - rebalancedSpace;
                } else {
                    // rebalancedSpace = totalVacantSpace / 2;
                    rebalancedSpace = vacantLeftWidth;
                }
                const footTextFragmentEdge = fragmentEdge
                    + (halfGap < 0 ? -lostLeftWidth : (indent ? -indent : rebalancedSpace))
                    + previousTokenRebalanceOffset;
                previousTokenRebalanceOffset = nextTokenRebalanceOffset;

                /** Draw actual foot text here */
                /**
                 * In theory, our tokenize tactic should perform correctly for all the past cases, but we are currently unable to test it now, so we tried our best to keep the old behavior unchanged. @todo verify this later.
                 */
                const footTextTokenList = footText.includes('<')
                    ? tokenizeText(normalizeCardText(footText, format, { multiline: false, furiganaHelper: false }))
                    : tokenizeText(footText);
                await drawLine({
                    ctx,
                    format,
                    textData,
                    tokenList: footTextTokenList,
                    trueBaseline: baseline,
                    lineHeight,
                    trueEdge: footTextFragmentEdge,
                    xRatio,
                    yRatio,
                    spaceWidth: 0,
                    textDrawer,
                    globalScale,
                    debug: false,
                    memory: normalizedMemory,
                });

                /** Head text may have different text style than foot text, so we store the current style before start drawing head text. */
                const currentFillStyle = ctx.fillStyle;
                const currentStrokeStyle = ctx.strokeStyle;
                const currentShadowColor = ctx.shadowColor;
                const currentShadowOffsetX = ctx.shadowOffsetX;
                const currentShadowOffsetY = ctx.shadowOffsetY;
                const currentShadowBlur = ctx.shadowBlur;
                if (headTextFillStyle) {
                    ctx.fillStyle = headTextFillStyle;
                    ctx.strokeStyle = '';
                    ctx.shadowColor = '';
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    ctx.shadowBlur = 0;
                }
                /** Draw head text here, remember head text and foot text most of the time do not align at all. */
                const headTextFragmentEdge = fragmentEdge - lostLeftWidth;
                if (drawHeadText) fillHeadText({
                    ctx,
                    fontSize,
                    edge: headTextFragmentEdge, baseline,
                    headText, headTextLetterWidth,
                    footText, footTextWidth,
                    headTextGap: defaultGap,
                    headTextSpacing,
                    headTextHeightRatio,
                    headTextBold,
                    headTextGapRatio,
                    xRatio,
                    fontStyle,
                    textWorker,
                    fitFootText,
                    headTextOverflow,
                    globalScale,
                });
                /** Restore foot text's original style */
                ctx.fillStyle = currentFillStyle;
                ctx.strokeStyle = currentStrokeStyle;
                ctx.shadowColor = currentShadowColor;
                ctx.shadowOffsetX = currentShadowOffsetX;
                ctx.shadowOffsetY = currentShadowOffsetY;
                ctx.shadowBlur = currentShadowBlur;

                fragmentEdge += Math.max(footTextWidth * xRatio, headTextWidth) - lostLeftWidth + spaceWidth;
                currentRightGap = rightGap;
            }
            /** Draw "whole words". */
            else if (WholeWordRegex.test(fragment)) {
                const normalizedWordSpacingRatio = wordLetterSpacing
                    ? 1 + wordLetterSpacing / 2
                    : letterSpacingRatio;
                ctx.letterSpacing = `${(normalizedWordSpacingRatio - 1) * currentFont.getFontInfo().sizeAsNumber}px`;

                /**
                 * A problem here: We cannot calculate the gap of a fragment unless knowing its actual width, so that means we must calculate it first, then calculate the gap, then go back and calculate the actual width all over again when we draw. These are doable but it make this ugly long code become needlessly more ugly and long. So we just naively measure the word without any kind of special treatment, take the gap based on it and call it a day.
                 * 
                 * Even if the actual width of the fragment is different than when we measure it naively, the gap ratio itself have a bit of room for error (around 50%), so most of the time we can avoid any overlap unless in extreme condensing situation.
                 */
                const fragmentNaiveWidth = ctx.measureText(fragment).width * xRatio;
                const leftGap = Math.max(defaultGap, fragmentNaiveWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);
                fragmentEdge -= lostLeftWidth;

                /** Read the comment in `analyzeToken` function, we repeat exactly the treatment there, the different is we actually draw the letter along the way. */
                let remainFragment = fragment;
                let currentPosition = fragmentEdge;
                while (remainFragment !== '') {
                    let currentLetter = remainFragment[0];
                    let nextRemainFragment = remainFragment.slice(1);
                    let actualLetterWidth = 0;
                    const drawLetterofWordParameter = {
                        ...drawLetterParameter,
                        deviation: letterDeviationMap[`${globalScale}`],
                        letter: currentLetter,
                        edge: currentPosition,
                    };
                    if (SquareBracketLetterRegex.test(currentLetter)) {
                        applyScale(squareBracketRatio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterofWordParameter,
                            edge: currentPosition / squareBracketRatio,
                            baseline: baseline / squareBracketRatio,
                        });
                        reverseScale(squareBracketRatio);
                    } else if (CapitalLetterRegex.test(currentLetter)) {
                        applyScale(capitalLetterRatio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        const letterOffset = (actualLetterWidth > ctx.measureText(currentLetter).width * capitalLetterRatio)
                            ? Math.round(actualLetterWidth * (1 - capitalLetterRatio)) / 2
                            : 0;
                        drawLetter({
                            ...drawLetterofWordParameter,
                            edge: currentPosition / capitalLetterRatio + letterOffset,
                            baseline: baseline / capitalLetterRatio
                        });
                        reverseScale(capitalLetterRatio);
                    } else if (VietnameseDiacriticLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                        applyVietnameseFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                        stopApplyVietnameseFont();
                    } else if (NumberRegex.test(currentLetter)) {
                        applyNumberFont();
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                        stopApplyNumberFont();
                    } else if (TCGSymbolLetterRegex.test(currentLetter) && fontStyle === 'tcg') {
                        const { fontSize } = applySymbolFont(letterOffsetMap[currentLetter]?.ratio);
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter({
                            ...drawLetterofWordParameter,
                            baseline: drawLetterofWordParameter.baseline + fontSize * (letterOffsetMap[fragment]?.baseline ?? 0),
                        });
                        stopApplySymbolFont();
                    } else {
                        actualLetterWidth = ctx.measureText(remainFragment).width - ctx.measureText(nextRemainFragment).width;
                        drawLetter(drawLetterofWordParameter);
                    }
                    currentPosition += actualLetterWidth * xRatio;
                    remainFragment = nextRemainFragment;
                }

                fragmentEdge = currentPosition;
                currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
                ctx.letterSpacing = '0px';
            }
            /** Some specific letter ("Evil★Twin's Trouble Sunny" TCG) requires different font. */
            else if (TCGSymbolLetterRegex.test(fragment) && fontStyle === 'tcg') {
                const {
                    yRatio = 1,
                    ratio: fontSizeRatio,
                    baseline: offsetBaseline = 0,
                    edge: offsetEdge = 0,
                } = letterOffsetMap[fragment] ?? {};

                const letter = fragment;
                const { fontSize } = applySymbolFont(fontSizeRatio);
                ctx.scale(1, yRatio);

                const letterWidth = ctx.measureText(letter).width * letterSpacingRatio * xRatio;
                const leftGap = Math.max(defaultGap, letterWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

                fragmentEdge -= lostLeftWidth;
                drawLetter({
                    ...drawLetterParameter,
                    baseline: (drawLetterParameter.baseline + fontSize * offsetBaseline) / yRatio,
                    letter,
                    edge: fragmentEdge + fontSize * offsetEdge,
                });
                fragmentEdge += letterWidth;

                ctx.scale(1, 1 / yRatio);
                stopApplySymbolFont();

                currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
            }
            /** All other fragments */
            else {
                const letter = fragment;
                const letterMetric = getLetterWidth({
                    ctx,
                    letter,
                    fontStyle,
                    metricMethod,
                    isLastOfLine: nextFragment === undefined,
                    xRatio,
                    globalScale,
                });
                const letterWidth = letterMetric.boundWidth * letterSpacingRatio * xRatio;
                const leftGap = Math.max(defaultGap, letterWidth * gapRatio);
                const rightGap = leftGap;
                const lostLeftWidth = getLostLeftWidth(currentRightGap, leftGap);

                fragmentEdge -= lostLeftWidth;
                drawLetter({
                    ...drawLetterParameter,
                    letter,
                    edge: fragmentEdge,
                    deviation: letterDeviationMap?.[`${globalScale}`],
                    letterMetric,
                });
                fragmentEdge += letterWidth;
                if (
                    (format === 'ocg' || (format === 'tcg' && /\s+/.test(letter)))
                    && NoSpaceRegex.test(letter) !== true
                ) {
                    fragmentEdge += spaceWidth;
                }
                if (!OCGNoOverheadGapRegex.test(letter)) currentRightGap = rightGap;
                previousTokenRebalanceOffset = 0;
            }
        }

        /** Make space for the next token, as we can see it does not involve any variables from the fragment drawing process. */
        previousTokenGap = tokenRightGap * xRatio;
        if (debug) drawMarker({ ctx, baseline, edge: tokenEdge, width: totalTokenWidth * xRatio, xRatio });
        const actualSpaceCount = preformatMode
            ? 0
            : spaceCount;
        tokenEdge += totalTokenWidth * xRatio + actualSpaceCount * spaceWidth + indent;
    }

    return {
        tokenEdge,
        iconPositionList,
    };
};