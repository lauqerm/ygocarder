export const getNavigationProps = ({
    debug,
    optionLength,
    stopPropagation = false,
    setFocus,
    onTrigger,
    onCancel,
    onKeyPress,
}: {
    debug?: string,
    optionLength: number,
    stopPropagation?: boolean,
    setFocus: (value: React.SetStateAction<number>) => void,
    onTrigger: () => void,
    onCancel?: () => void,
    onKeyPress?: (ev: React.KeyboardEvent<any>) => (void | boolean),
}) => {
    return {
        tabIndex: 0,
        onFocus: () => {
            if (debug) console.info('Navigation Focus', debug);
            setFocus(0);
        },
        onBlur: () => {
            if (debug) console.info('Navigation Blur', debug);
            setFocus(-1);
        },
        onKeyDown: (e: React.KeyboardEvent<any>) => {
            if (stopPropagation) e.stopPropagation();
            if (debug) console.info('Navigation Keydown', debug, e.key);
            if (onKeyPress?.(e) === false) return;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                setFocus(cur => Math.max(0, optionLength + cur + 1) % optionLength);
            }
            else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                setFocus(cur => Math.max(0, optionLength + cur - 1) % optionLength);
            }
            else if (e.key === 'Enter' || e.key === '  ') {
                onTrigger();
            }
            else if (e.key === 'Escape') {
                onCancel?.();
            }
        },
    };
};