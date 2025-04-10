import { useCallback } from 'react';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

const notificationLocalStorageKey = 'ygocarder-notification';
export type NotificationMemory = {
    condenseReminder: boolean,
    versionReminder: string,
};
export type NotificationStore = {
    memory: NotificationMemory,
    updateNotification: <Key extends keyof NotificationMemory>(
        key: Key,
        value: NotificationMemory[Key],
    ) => void,
    updateNotificationMemory: (transformerOrPayload: Partial<NotificationMemory>
        | ((currentSetting: NotificationMemory) => NotificationMemory)) => void,
};
export const useNotificationMemory = create<NotificationStore>((set) => {
    const {
        condenseReminder,
        versionReminder,
    } = ((): Record<string, any> => {
        try {
            const cachedStore = JSON.parse(localStorage.getItem(notificationLocalStorageKey) ?? '{}');

            if (cachedStore && typeof cachedStore === 'object' && !Array.isArray(cachedStore)) return cachedStore;
            return {};
        } catch (e) {
            console.error('useNotificationMemory: Error when getting cached notification', e);
            return {};
        }
    })();

    return {
        memory: {
            condenseReminder: typeof condenseReminder === 'boolean' ? condenseReminder : false,
            versionReminder: typeof versionReminder === 'string' ? versionReminder : '1.99.99',
        },
        updateNotification: (key, value) => {
            set(currentStore => {
                const newNotificationMemory = { ...currentStore.memory, [key]: value };

                localStorage.setItem(notificationLocalStorageKey, JSON.stringify(newNotificationMemory));

                return {
                    memory: newNotificationMemory,
                };
            });
        },
        updateNotificationMemory: transformerOrPayload => {
            set(currentStore => {
                const newNotificationMemory = typeof transformerOrPayload === 'function'
                    ? transformerOrPayload(currentStore.memory)
                    : { ...currentStore.memory, ...transformerOrPayload };

                localStorage.setItem(notificationLocalStorageKey, JSON.stringify(newNotificationMemory));

                return {
                    memory: newNotificationMemory,
                };
            });
        }
    };
});

export const useNotification = <Key extends keyof NotificationMemory>(key: Key) => {
    const {
        targetMemory,
        updateNotification,
    } = useNotificationMemory(useShallow(({
        memory,
        updateNotification,
    }) => ({
        targetMemory: memory[key],
        updateNotification,
    })));

    const updateTargetNotification = useCallback(
        (value: NotificationMemory[Key]) => updateNotification(key, value),
        [key, updateNotification],
    );

    return [targetMemory, updateTargetNotification] as const;
};