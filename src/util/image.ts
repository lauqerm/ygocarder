import { getDefaultCrop } from 'src/model';

type CacheEntry = {
    blob: Blob;
    createdAt: number;
};

const cache = new Map<string, CacheEntry>();

function buildCacheKey(url: string, crop?: Partial<ReactCrop.Crop>): string {
    if (!crop) return url;
    return `${url}::${crop.x},${crop.y},${crop.width},${crop.height}`;
}

async function fetchImageBlob(url: string): Promise<Blob> {
    // 1. Try fetch() with cors — works for same-origin and CORS-enabled hosts
    try {
        const res = await fetch(url, { mode: 'cors' });
        if (res.ok) return await res.blob();
    } catch (_) { }

    // 2. Try fetch() with no-cors — opaque response, only works without crop
    try {
        const res = await fetch(url, { mode: 'no-cors' });
        const blob = await res.blob();
        if (blob.size > 0) return blob;
    } catch (_) { }

    // 3. Fall back to drawing onto a canvas via HTMLImageElement
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            canvas.getContext('2d')!.drawImage(img, 0, 0);
            canvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error('canvas.toBlob() failed'));
            }, 'image/png');
        };
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
    });
}

async function cropBlob(blob: Blob, crop: Partial<ReactCrop.Crop>): Promise<Blob> {
    const normalizedCrop = { ...getDefaultCrop(), ...crop };
    const bitmap = await createImageBitmap(blob);
    const sx = (normalizedCrop.x / 100) * bitmap.width;
    const sy = (normalizedCrop.y / 100) * bitmap.height;
    const sw = (normalizedCrop.width / 100) * bitmap.width;
    const sh = (normalizedCrop.height / 100) * bitmap.height;

    const canvas = document.createElement('canvas');
    canvas.width = sw;
    canvas.height = sh;
    canvas.getContext('2d')!.drawImage(bitmap, sx, sy, sw, sh, 0, 0, sw, sh);
    bitmap.close();

    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            if (blob) resolve(blob);
            else reject(new Error('Crop canvas.toBlob() failed'));
        }, 'image/png');
    });
}

// ---- Public API ----

export async function imageLinkToBlob(url: string, crop?: Partial<ReactCrop.Crop>): Promise<Blob> {
    const key = buildCacheKey(url, crop);

    const cached = cache.get(key);
    if (cached) return cached.blob;

    const rawBlob = await fetchImageBlob(url);
    const finalBlob = crop ? await cropBlob(rawBlob, crop) : rawBlob;

    cache.set(key, { blob: finalBlob, createdAt: Date.now() });
    return finalBlob;
}

/** Remove one specific entry (url + crop combo) */
export function evictCache(url: string, crop?: Partial<ReactCrop.Crop>): void {
    cache.delete(buildCacheKey(url, crop));
}

/** Remove all entries for a given URL regardless of crop */
export function evictCacheByUrl(url: string): void {
    for (const key of cache.keys()) {
        if (key === url || key.startsWith(`${url}::`)) cache.delete(key);
    }
}

/** Remove all entries older than `maxAgeMs` milliseconds */
export function evictCacheByAge(maxAgeMs: number): void {
    const cutoff = Date.now() - maxAgeMs;
    for (const [key, entry] of cache.entries()) {
        if (entry.createdAt < cutoff) cache.delete(key);
    }
}

/** Wipe the entire cache */
export function clearCache(): void {
    cache.clear();
};

export async function base64ToBlob(base64Data: string, contentType = '') {
    // If it's a raw base64 string, wrap it in a data URL format
    const dataUrl = base64Data.startsWith('data:')
        ? base64Data
        : `data:${contentType};base64,${base64Data}`;

    const response = await fetch(dataUrl);
    return await response.blob();
};