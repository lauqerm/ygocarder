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
    onSelect: (card: InternalCard) => void,
} & WithLanguage;
export const BatchDownloadButton = ({
    language,
    onSelect,
}: BatchDownloadButton) => {
    const {
        listName,
        activeId,
        cardDisplayList,
    } = useCardList(useShallow(({
        listName,
        activeId,
        cardDisplayList,
    }) => ({
        listName,
        activeId,
        cardDisplayList,
    })));
    const {
        batchQueue,
        batchDataMap,
        isBatchDownloading,
        isReady,
        stopBatchDownload,
        startBatchDownload,
    } = useBatchDownload();
    const nextSelectedId = batchQueue[0];
    const lastSelectedId = useRef('');
    useEffect(() => {
        if (nextSelectedId && isBatchDownloading && nextSelectedId !== lastSelectedId.current) {
            lastSelectedId.current = nextSelectedId;
            const targetCard = cardDisplayList.find(card => card.id === nextSelectedId);

            if (targetCard) {
                onSelect(targetCard);
            }
        }
    }, [cardDisplayList, isBatchDownloading, nextSelectedId, onSelect]);

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

    return <>
        <Modal
            visible={isBatchDownloading}
            onCancel={() => stopBatchDownload()}
            onOk={() => stopBatchDownload()}
            cancelText={language['manager.batch.download-all.cancel-all.label']}
            okText={language['manager.batch.download-all.premature-stop.label']}
            okButtonProps={{
            }}
        >
            <ExportingListContainer className="exporting-list">
                {Object
                    .values(cardDisplayList)
                    .map(({ id, name }) => {
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
            onClick={() => startBatchDownload(listName, cardDisplayList.map(card => card.id))}
        >
            {language['manager.batch.download-all.label']}
        </Button>
    </>;
};