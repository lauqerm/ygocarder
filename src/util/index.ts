export const forceRefocus = (selector = '.radio-train-input-group') => {
    document.querySelector<HTMLElement>(selector)?.focus();
};

export function mergeClass(...args: (boolean | string | undefined | null)[]) {
    return args.filter(Boolean).join(' ');
}

export * from './canvas';
export * from './categorize';
export * from './codec';
export * from './codec-other-vendor';
export * from './codec-ygoprodeck';
export * from './color';
export * from './condenser';
export * from './font';
export * from './gradient';
export * from './hook';
export * from './imgur';
export * from './navigation';
export * from './normalize';
export * from './other';
export * from './random';
export * from './report';
export * from './scale';