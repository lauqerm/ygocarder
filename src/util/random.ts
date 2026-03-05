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

export const randomCharacter = (charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', length = 1) => {
    let result = '';
    const charactersLength = charSet.length;
    for (let i = 0; i < length; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const randomSetID = (format: string) => {
    return randomCharacter('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)
        + '-'
        + (format === 'OCG' ? 'JP' : 'EN')
        /** Most set does not reach 200+ index, so 0, 1 and 2 has significantly higher chance to roll */
        + randomCharacter('0000000000111111111122222222223456789', 1)
        + randomCharacter('0123456789', 2);
};

export const randomPassword = () => {
    return `${randomCharacter('0123456789', 8)}`;
};