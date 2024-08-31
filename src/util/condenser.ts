const MAX_CONDENSER_THRESHOLD = 1000;
/** Simple iteration method
 * 1 The initial threshold is 1000, initial step is 100, max step count is 30.
 * 1. If current threshold satisfy the driver, or step count is already 0, return the current threshold.
 * 1. Step down the threshold, and keep stepdown until driver return satisfy signal, reduce step count by 1 for each step made.
 * 1. Otherwise if step value is less than 1, finish with the current threshold.
 * 1. Otherwise step up the threshold by 1 step, and cut down the step value tenfold. Repeat from step 2.
 * 
 * Example, we want to reach satisfy target at 487:
 *
```
Curr  Step    Count Explain
1000  100     30    Initial
900   100     29    Down
800   100     28    Down
700   100     27    Down
600   100     26    Down
500   100     25    Down
400   100     24    Down
500   10      24    Up => Step / 10
490   10      23    Down
480   10      22    Down
490   1       21    Up => Step / 10
489   1       20    Down
488   1       19    Down
487   1       18    Down => Satisfy
 * ```
 */
export const createCondenser = (minThreshold = 0, maxThreshold = MAX_CONDENSER_THRESHOLD) => {
    let min = minThreshold;
    let max = maxThreshold;
    let median = max;
    let lastEffective = median;
    let iterateCount = 30;
    let magnitude = 100;
    let magnitudeReductionRatio = 10;

    const reverseSearch = () => {
        if (magnitude === 1) finish();
        else {
            median += magnitude;
            magnitude /= magnitudeReductionRatio;
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
            /** Support minThreshold here, we don't want to deal with 0. In practices, most text become unreadable when condense with ratio of 400 or lower. */
            const finalMedian = condenser.getMedian();

            effectiveMedian = finalMedian;
            break;
        } else {
            const satisfy = worker(condenser.getMedian());

            if (!satisfy && condenser.getMedian() > 0) {
                /** If overflow, lower the median and apply it */
                condenser.searchDown();
            } else {
                /** Return immediately if max threshold is enough to satisfy the driver */
                if (condenser.getMedian() === MAX_CONDENSER_THRESHOLD) break;
                else effectiveMedian = condenser.reverseSearch();
            }
        }
    }

    /**
     * Ensure worker does not run with undesirable threshold (it may have side effect depend on the current ratio, for example, scale canvas). So we run worker with the final median one last time so any side effects from it is affected by the ratio we gonna return.
     */
    const forcedMedian = Math.max(minThreshold, Math.min(effectiveMedian, MAX_CONDENSER_THRESHOLD));
    if (forcedMedian !== effectiveMedian) worker(forcedMedian);
    return forcedMedian;
};