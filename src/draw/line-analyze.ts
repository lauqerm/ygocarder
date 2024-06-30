import {
    OCGAlphabetRegex,
    MAX_LINE_REVERSE_INDENT,
    START_OF_LINE_ALPHABET_OFFSET,
    START_OF_LINE_GAP,
    TextData,
    NB_UNCOMPRESSED_END,
    NB_UNCOMPRESSED_START,
} from 'src/model';
import { tokenizeText } from './text-util';
import { analyzeToken } from './text-analyze';

/** Biến một đoạn thành một chuỗi các dòng dựa trên thông số cho trước */
export const createLineList = ({
    ctx,
    median,
    paragraphList,
    additionalLineCount = 0,
    trueWidth,
    format,
    textData,
}: {
    ctx: CanvasRenderingContext2D,
    median: number,
    trueWidth: number,
    paragraphList: string[],
    additionalLineCount?: number,
    format: string,
    textData: TextData,
}) => {
    const { fontData, fontLevel } = textData;
    const { letterSpacing } = fontData.fontList[fontLevel];
    const currentLineList: { line: string, isLast: boolean, effectiveMedian: number, actualLineWidth: number }[] = [];
    const currentLineCount = paragraphList.reduce((accumulatedLineCount, curr) => {
        // Thay vì giảm độ dài từng chữ, ta dùng ratio để tăng độ dài hiện có, như vậy tránh tích tụ sai số
        const baseXRatio = (median <= 100 ? 100 : median) / 1000;
        const hypoWidth = trueWidth / baseXRatio;
        const tokenList = tokenizeText(curr, true);
        let addedLineCount = 1;
        let wordList: string[] = [];
        let currentLineWidth = 0;
        let currentGap = START_OF_LINE_GAP;
        let unCompressedFlag = 0;

        for (let cnt = 0, xRatio = baseXRatio; cnt < tokenList.length; cnt++) {
            const token = tokenList[cnt];
            const nextToken = tokenList[cnt + 1];
            /** Vì cờ NB_UNCOMPRESS có thể trải ra nhiều dòng, nhưng ta không muốn các dòng liên hệ quá với nhau, vậy nên ta khảo sát như sau:
             * * Nếu line hiện tại dư một cờ end, nghĩa là có cờ start ở dòng trước đó, ta sẽ bổ sung cờ start vào đầu
             * * Tương tự nếu line hiện tại dư một cờ start, ta thêm một cờ end vào cuối
             * Vì cờ không có độ dài thực nên không ảnh hưởng lên kết quả line list.
             */
            if (token === NB_UNCOMPRESSED_START) {
                unCompressedFlag += 1;
                xRatio = 1;
            } else if (token === NB_UNCOMPRESSED_END) {
                unCompressedFlag -= 1;
                xRatio = baseXRatio;
            }
            /** Tính số đo của 1 token */
            let {
                outmostLetter,
                totalWidth,
                rightGap,
                leftGap,
            } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: currentGap, format, letterSpacing, textData });

            /** Token ở đầu line có quyền âm ngược ra lề trái, tuy nhiên footText không được tràn ra khỏi lề, ngoài ra ta giới hạn
             * việc âm ngược để tránh tràn
             */
            const indent = cnt === 0
                ? (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                    + (OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0)
                : 0;
            let tokenWidth = totalWidth / (unCompressedFlag > 0 ? baseXRatio : 1) + indent;
            /**
             * Trong khi gap bên trái có thể âm ngược vào token trước, gap bên phải luôn đầy đủ.
             * */
            if (currentLineWidth + tokenWidth > hypoWidth) {
                /**
                 * Nếu token kế tiếp làm câu quá dài, wrap xuống dòng mới
                 */
                let line = wordList.join('').trim();
                if (unCompressedFlag > 0) line = line + NB_UNCOMPRESSED_END;
                if (unCompressedFlag < 0) line = NB_UNCOMPRESSED_START + line;
                unCompressedFlag = 0;
                currentLineList.push({
                    line,
                    effectiveMedian: median,
                    isLast: false,
                    actualLineWidth: currentLineWidth,
                });
                /** Token gây ra wrap dòng tất nhiên trở thành token mới nhất của dòng kế tiếp, nhưng ta tính lại width vì lúc này rightGap đã khác */
                let {
                    totalWidth,
                    rightGap,
                    leftGap,
                } = analyzeToken({ ctx, token, nextToken, xRatio, previousTokenGap: START_OF_LINE_GAP, format, textData });
                /** Xử lý âm lề tương tự */
                const indent = (leftGap > 0 ? Math.min(MAX_LINE_REVERSE_INDENT / xRatio, leftGap) * -1 : 0)
                    + (OCGAlphabetRegex.test(outmostLetter) ? START_OF_LINE_ALPHABET_OFFSET : 0);
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

        let line = wordList.join('').trim();
        if (unCompressedFlag > 0) line = line + NB_UNCOMPRESSED_END;
        if (unCompressedFlag < 0) line = NB_UNCOMPRESSED_START + line;
        unCompressedFlag = 0;
        currentLineList.push({
            line,
            effectiveMedian: median,
            isLast: true,
            actualLineWidth: currentLineWidth,
        });

        return accumulatedLineCount + addedLineCount;
    }, 0) + (additionalLineCount ?? 0);

    return { currentLineList, currentLineCount };
};