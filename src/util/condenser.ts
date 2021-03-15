export const createCondenser = (minThreshold = 0, maxThreshold = 1000) => {
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