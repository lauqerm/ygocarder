import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export type PresetManagerStore = {
    visible: boolean,
    setVisible: (status?: boolean) => void,
};
export const usePresetManager = create<
    PresetManagerStore,
    [['zustand/subscribeWithSelector', never]]
>(subscribeWithSelector((set) => {
    return {
        visible: false,
        setVisible: newStatus => {
            set(({ visible }) => {
                return { visible: newStatus == null ? !visible : newStatus };
            });
        }
    };
}));