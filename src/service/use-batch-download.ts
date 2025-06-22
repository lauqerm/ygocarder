import { create } from 'zustand';

export type BatchDownloadStore = {
    batchName: string,
    batchQueue: string[],
    batchDataMap: Record<string, { name: string, blob: Blob }>,
    isBatchDownloading: boolean,
    isReady: boolean,
    startBatchDownload: (batchName: string, batchQueue: string[]) => void,
    stopBatchDownload: () => void,
    addToBatch: (cardId: string, cardName: string, cardBlob: Blob) => void,
};
export const useBatchDownload = create<BatchDownloadStore>((set, get) => {
    return {
        batchName: '',
        batch: undefined,
        batchQueue: [],
        batchDataMap: {},
        isBatchDownloading: false,
        isReady: false,
        startBatchDownload: (batchName, batchQueue) => {
            set({
                batchName,
                batchQueue,
                isBatchDownloading: true,
            });
        },
        stopBatchDownload: () => {
            set({
                batchName: '',
                batchQueue: [],
                batchDataMap: {},
                isBatchDownloading: false,
                isReady: false,
            });
        },
        addToBatch: (cardId, cardName, cardBlob) => {
            set(({ batchQueue, batchDataMap }) => {
                const nextQueue = batchQueue.filter(id => id !== cardId);
                const nextBatchDataMap = { ...batchDataMap };
                nextBatchDataMap[cardId] = { name: cardName, blob: cardBlob };

                return {
                    batchQueue: nextQueue,
                    batchDataMap: nextBatchDataMap,
                    isReady: nextQueue.length === 0 ? true : false,
                };
            });
        },
    };
});