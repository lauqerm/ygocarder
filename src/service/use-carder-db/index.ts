import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { useEffect, useState } from 'react';
import { InternalCard } from 'src/model';

/** Remember to update db in service worker too */
const YGO_CARDER_DB = 'YgoCarderDb';
const YGO_CARDER_DB_VERSION = 6;
export interface YgoCarderDb extends DBSchema {
    messageStore: {
        key: string,
        value: string,
    },
    cardStore: {
        key: string,
        value: {
            key: string,
            version: string,
            content: InternalCard,
        },
    },
    presetLayoutStore: {
        key: string,
        value: {
            key: string,
            content: string,
        },
    },
    presetNameStyleStore: {
        key: string,
        value: {
            key: string,
            content: string,
        },
    },
    presetImageStore: {
        key: string,
        value: {
            key: string,
            content: string,
        },
    },
};

export async function getCarderDb() {
    try {
        const db = await openDB<YgoCarderDb>(
            YGO_CARDER_DB,
            YGO_CARDER_DB_VERSION,
            {
                upgrade(db, _oldVersion, newVersion) {
                    if (!db.objectStoreNames.contains('messageStore')) {
                        db.createObjectStore('messageStore', { keyPath: 'key' });
                    }
                    if (!db.objectStoreNames.contains('presetLayoutStore')) {
                        db.createObjectStore('presetLayoutStore', { keyPath: 'key' });
                    }
                    if (!db.objectStoreNames.contains('presetNameStyleStore')) {
                        db.createObjectStore('presetNameStyleStore', { keyPath: 'key' });
                    }
                    if (newVersion === 4) {
                        if (!db.objectStoreNames.contains('presetImageStore')) {
                            db.createObjectStore('presetImageStore', { keyPath: 'key' });
                        }
                    }
                    if (!db.objectStoreNames.contains('cardStore')) {
                        db.createObjectStore('cardStore', { keyPath: 'key' });
                    }
                    console.info('YgoCarderDb ready');
                },
            }
        );

        return db;
    } catch (e) {
        console.error('getCarderDb', e);
        return null;
    }
};

export const useCarderDb = () => {
    const [db, setDb] = useState<IDBPDatabase<YgoCarderDb> | null>(null);
    const [dbReady, setDbReady] = useState(false);

    useEffect(() => {
        (async () => {
            const db = await getCarderDb();
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