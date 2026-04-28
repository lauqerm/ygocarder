export const getDefaultImageStyle = () => ({ flipX: false, flipY: false });
export type ImageStyle = ReturnType<typeof getDefaultImageStyle>;

export type ImageSourceType = 'offline' | 'online';