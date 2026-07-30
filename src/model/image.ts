export const getDefaultImageStyle = () => ({ flipX: false, flipY: false });
export type ImageStyle = ReturnType<typeof getDefaultImageStyle>;

export type ImageSourceType = 'offline' | 'online';

export const PROXY_BASE = 'https://ygocarder-server.mr-equal1996.workers.dev';
export const toProxiedUrl = (imageUrl: string) =>
    `${PROXY_BASE}/?url=${encodeURIComponent(imageUrl)}`;
export const toBaseUrl = (imageUrl: string) =>
    `${decodeURIComponent(imageUrl.replaceAll(`${PROXY_BASE}/?url=`, ''))}`;
export const isUsingProxy = (imageUrl: string) => imageUrl.startsWith(PROXY_BASE);