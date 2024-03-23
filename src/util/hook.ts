import { useCallback, useState } from 'react';

export const useRefresh = (): [() => void, number] => {
    const [cnt, setCnt] = useState(0);
    const refresh = useCallback(() => {
        setCnt(cur => cur + 1);
    }, []);

    return [refresh, cnt];
};