export const seedDistributionCalculator = (seedIncrement: number) => {
    const runSeed = () => {
        let count = 1;
        let current = seedIncrement;
        while (current < Math.random()) {
            current += seedIncrement;
            count += 1;
        }
        return count;
    };
    let distributionMap: Record<string, number> = {};
    for (let i = 0; i < 100000; i++) {
        const result = runSeed();
        if (distributionMap[result] !== undefined) distributionMap[result] += 1;
        else distributionMap[result] = 1;
    }
    return distributionMap;
};
/** We choose 0.015 as our seed increment, so it has roughly 20% chance to remind user of backup every 5 saves, and increased to 60% after 10. */
export const DEFAULT_SEED_INCREMENT = 0.015;

export const getNaivePseudoRandomizer = (seedIncrement = DEFAULT_SEED_INCREMENT) => {
    let internalChance = seedIncrement;

    return {
        check: () => {
            const result = Math.random();

            if (internalChance < result) {
                internalChance += seedIncrement;
                return false;
            } else {
                internalChance = seedIncrement;
                return true;
            }
        }
    };
};