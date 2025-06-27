import { Button, Modal } from 'antd';
import JSZip from 'jszip';
import { useEffect, useRef } from 'react';
import { InternalCard } from 'src/model';
import { useBatchDownload, useCardList, WithLanguage } from 'src/service';
import { downloadBlob } from 'src/util';
import styled from 'styled-components';
import { CheckCircleOutlined, LoadingOutlined, HourglassOutlined } from '@ant-design/icons';
import { useShallow } from 'zustand/react/shallow';

const ExportingListContainer = styled.div`
    .exporting-item {
        display: grid;
        grid-template-columns: 1.5rem 1fr;
    }
    .anticon-hourglass {
        color: var(--main-info);
    }
    .anticon-loading {
        color: var(--main-active);
    }
    .anticon-check-circle {
        color: var(--main-online);
    }
`;

export type BatchDownloadButton = {
    onActive: (card: InternalCard) => void,
} & WithLanguage;
export const BatchDownloadButton = ({
    language,
    onActive,
}: BatchDownloadButton) => {
    const {
        selectedMap,
        listName,
        activeId,
        cardDisplayList,
    } = useCardList(useShallow(({
        selectedMap,
        listName,
        activeId,
        cardDisplayList,
    }) => ({
        selectedMap,
        listName,
        activeId,
        cardDisplayList,
    })));
    const {
        batchQueue,
        batchDataMap,
        isBatchDownloading,
        isReady,
        clearQueue,
        stopBatchDownload,
        startBatchDownload,
    } = useBatchDownload();
    /**
     * The batch download process is as follow:
     * * Start the process, block the screen with a popup and mark the process as started.
     * * During the process, the top card of the exporting list is picked, and force select.
     * * After it fully render (we check it at the useCardExport hook), it trigger the recording process, while also remove the recorded card from exporting list.
     * * When the exporting list changed, jump back to step 2. If the exporting list is now empty, we zip it and trigger the download.
     * * Clean up and end the process.
     */
    const nextSelectedId = batchQueue[0];
    const lastSelectedId = useRef('');
    useEffect(() => {
        if (nextSelectedId && isBatchDownloading && nextSelectedId !== lastSelectedId.current) {
            lastSelectedId.current = nextSelectedId;
            const targetCard = cardDisplayList.find(card => card.id === nextSelectedId);

            if (targetCard) {
                onActive(targetCard);
            }
        }
    }, [cardDisplayList, isBatchDownloading, nextSelectedId, onActive]);

    useEffect(() => {
        let relevant = true;
        if (isReady) {
            (async () => {
                const { batchName, batchDataMap } = useBatchDownload.getState();
                const zipObject = new JSZip();
                const batchDataList = Object.values(batchDataMap);

                if (batchDataList.length > 0) {
                    Object.values(batchDataMap).forEach(({ blob, name }) => {
                        zipObject.file(name, blob);
                    });
                    const zipBlob = await zipObject.generateAsync({
                        type: 'blob',
                    });
                    if (relevant) {
                        downloadBlob(
                            `${batchName}.zip`,
                            zipBlob,
                            'application/zip',
                        );
                        stopBatchDownload();
                    }
                }
            })();
        }
        return () => {
            relevant = false;
        };
    }, [isReady, stopBatchDownload]);

    const exportAllCard = Object.keys(selectedMap).length === 0;
    return <>
        <Modal
            visible={isBatchDownloading}
            onCancel={() => stopBatchDownload()}
            onOk={() => clearQueue()}
            cancelText={language['manager.batch.batch-download.cancel-all.label']}
            okText={language['manager.batch.batch-download.premature-stop.label']}
            okButtonProps={{
                type: 'default',
            }}
        >
            <ExportingListContainer className="exporting-list">
                {Object
                    .values(cardDisplayList)
                    .map(({ id, name }) => {
                        if (!exportAllCard && !selectedMap[id]) return null;
                        return <div key={id} className="exporting-item">
                            <div className="export-status">
                                {activeId === id
                                    ? <LoadingOutlined />
                                    : batchDataMap[id]
                                        ? <CheckCircleOutlined />
                                        : <HourglassOutlined />}
                            </div>
                            <div className="export-name">{name}</div>
                        </div>;
                    })}
            </ExportingListContainer>
        </Modal>
        <Button
            className="batch-download-button"
            onClick={() => startBatchDownload(
                listName,
                exportAllCard
                    ? cardDisplayList.map(card => card.id)
                    : Object.keys(selectedMap),
            )}
        >
            {exportAllCard
                ? language['manager.batch.batch-download.label']
                : language['manager.batch.batch-download.partial-download.label']}
        </Button>
    </>;
};