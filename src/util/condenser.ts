/** Thuật toán tìm kiếm đơn giản như sau
 * 1. Bước nhảy mặc định là 100
 * 1. Tìm từ trên xuống, chừng nào giá trị hiện tại còn lớn hơn giá trị yêu cầu
 * 1. Nếu giá trị hiện tại bằng giá trị yêu cầu => Kết thúc
 * 1. Nếu giá trị hiện tại nhỏ hơn giá trị yêu cầu nghĩa là đã đi quá, nhảy lên lại một bậc
 * 1. Giảm bước nhảy đi 10 lần, lặp lại từ bước 2 với bước nhảy mới
 */
const MAX_CONDENSER_THRESHOLD = 1000;
export const createCondenser = (minThreshold = 0, maxThreshold = MAX_CONDENSER_THRESHOLD) => {
    let min = minThreshold;
    let max = maxThreshold;
    let median = max;
    let lastEffective = median;
    let iterateCount = 30;
    let magnitude = 100;

    const reverseSearch = () => {
        if (magnitude === 1) finish();
        else {
            median += magnitude;
            magnitude /= 10;
            median -= magnitude;
        }

        return Math.min(median, max);
    };

    const searchDown = () => {
        median -= magnitude;
        iterateCount -= 1;

        return median;
    };

    const reset = (minThreshold = min, maxThreshold = max) => {
        min = minThreshold;
        max = maxThreshold;
        median = maxThreshold;
        iterateCount = 30;
        magnitude = 100;
        lastEffective = maxThreshold;
    };

    const getMedian = () => median;
    const setMedian = (newMedian: number) => median = newMedian;

    const setLastEffective = (forceMedian = median) => lastEffective = forceMedian;
    const getLastEffective = () => lastEffective;
    const applyLastEffective = () => {
        median = lastEffective;
        iterateCount = -1;
        return median;
    };

    const getIterateCount = () => iterateCount;
    const finish = () => iterateCount = -1;

    return {
        reset,
        searchDown,
        reverseSearch,
        finish,
        getMedian,
        setMedian,
        setLastEffective,
        getLastEffective,
        applyLastEffective,
        getIterateCount,
    };
};

export const condense = (
    worker: (currentMedian: number) => boolean,
    minThreshold = 100,
) => {
    let effectiveMedian = MAX_CONDENSER_THRESHOLD;
    const condenser = createCondenser();
    while (condenser.getIterateCount() >= 0) {
        if (condenser.getIterateCount() <= 0) {
            /** Trả về median cuối cùng sau khi lặp tối đa, median nhỏ hơn minThreshold sẽ được quy về minThreshold, để tránh việc phải deal với threshold 0 */
            const finalMedian = condenser.getMedian();

            effectiveMedian = finalMedian <= minThreshold ? minThreshold : finalMedian;
            break;
        } else {
            const satisfy = worker(condenser.getMedian());

            if (!satisfy) {
                /** If overflow, lower the median and apply it */
                condenser.searchDown();
            } else {
                /** Không làm gì thêm nếu không cần compress */
                if (condenser.getMedian() === MAX_CONDENSER_THRESHOLD) break;
                else effectiveMedian = condenser.reverseSearch();
            }
        }
    }

    return effectiveMedian;
};