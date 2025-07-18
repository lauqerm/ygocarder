import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { useEffect, useState } from 'react';

export interface YgoCarderDb extends DBSchema {
    messageStore: {
        key: string,
        value: string,
    },
    presetLayoutStore: {
        key: string,
        value: {
            key: string,
            content: string,
        },
    }
};

export async function setupYgoCarderDb() {
    const db = await openDB<YgoCarderDb>(
        'YgoCarderDb',
        2,
        {
            upgrade(db) {
                if (!db.objectStoreNames.contains('messageStore')) {
                    db.createObjectStore('messageStore', { keyPath: 'key' });
                }
                if (!db.objectStoreNames.contains('presetLayoutStore')) {
                    db.createObjectStore('presetLayoutStore', { keyPath: 'key' });
                }
                console.info('YgoCarderDb ready');
            },
        }
    );

    return db;
};

export const useCarderDb = () => {
    const [db, setDb] = useState<IDBPDatabase<YgoCarderDb> | null>(null);
    const [dbReady, setDbReady] = useState(false);

    useEffect(() => {
        (async () => {
            const db = await setupYgoCarderDb();
            setDb(db);
            setDbReady(true);
        })();

        setTimeout(() => {
            /** Ensure non-blocking */
            setDbReady(true);
        }, 5000);
    }, []);

    return {
        db,
        dbReady,
    };
};