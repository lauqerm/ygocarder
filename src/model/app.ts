/** Webpack use base url without trailing slash, vite does have it. */
// export const PUBLIC_PATH = `${import.meta.env.BASE_URL}`;
export const PUBLIC_PATH = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;