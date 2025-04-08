import { useCallback } from 'react';
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

export type NotificationMemory = {
    condenseReminder: boolean,
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
    } = ((): Record<string, any> => {
        try {
            const cachedStore = JSON.parse(localStorage.getItem('notification') ?? '{}');

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
        },
        updateNotification: (key, value) => {
            set(currentStore => {
                const newNotificationMemory = { ...currentStore.memory, [key]: value };

                localStorage.setItem('notification', JSON.stringify(newNotificationMemory));

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

                localStorage.setItem('notification', JSON.stringify(newNotificationMemory));

                return {
                    memory: newNotificationMemory,
                };
            });
        }
    };
});

export const useNotification = <Key extends keyof NotificationMemory>(key: keyof NotificationMemory) => {
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

    return [targetMemory, updateTargetNotification];
};