import { getDefaultCrop } from 'src/model';
import { updateCropRatio } from './other';

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

async function cropBlob(blob: Blob, crop: Partial<ReactCrop.Crop>, desiredRatio = 1): Promise<Blob> {
    const bitmap = await createImageBitmap(blob);
    const normalizedCrop = { ...getDefaultCrop(), ...updateCropRatio(crop, bitmap, desiredRatio) };
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
};

export async function imageLinkToBlob(url: string, crop?: Partial<ReactCrop.Crop>, desiredRatio = 1): Promise<Blob> {
    const key = buildCacheKey(url, crop);

    const cached = cache.get(key);
    if (cached) return cached.blob;

    const rawBlob = await fetchImageBlob(url);
    const finalBlob = crop ? await cropBlob(rawBlob, crop, desiredRatio) : rawBlob;

    cache.set(key, { blob: finalBlob, createdAt: Date.now() });
    return finalBlob;
};

export const imageLinkToBase64 = async (url: string, crop?: Partial<ReactCrop.Crop>, desiredRatio = 1): Promise<string> => {
    const blob = await imageLinkToBlob(url, crop, desiredRatio);
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            if (!reader.result) reject(new Error('Cannot convert blob'));
            else {
                // The result contains the prefix: "data:image/png;base64,"
                resolve(reader.result as string);
            }
        };
        reader.onerror = reject;
    });
};

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

export async function cropBase64(base64: string, crop?: Partial<ReactCrop.Crop>, desiredRatio = 1): Promise<string> {
    if (!crop) return base64;
    // Strip data URL prefix if present (e.g. "data:image/png;base64,")
    const mimeMatch = base64.match(/^data:([^;]+);base64,/);
    const mimeType = mimeMatch?.[1] ?? 'image/png';

    const pureBase64 = mimeMatch ? base64.slice(mimeMatch[0].length) : base64;

    // Decode base64 into a Uint8Array
    const binary = atob(pureBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: mimeType });
    const bitmap = await createImageBitmap(blob);
    const normalizedCrop = updateCropRatio(crop, bitmap, desiredRatio);

    if (typeof normalizedCrop.x !== 'number'
        || typeof normalizedCrop.y !== 'number'
        || typeof normalizedCrop.width !== 'number'
        || typeof normalizedCrop.height !== 'number'
    ) return base64;
    const sx = (normalizedCrop.x / 100) * bitmap.width;
    const sy = (normalizedCrop.y / 100) * bitmap.height;
    const sw = (normalizedCrop.width / 100) * bitmap.width;
    const sh = (normalizedCrop.height / 100) * bitmap.height;

    const canvas = document.createElement('canvas');
    canvas.width = sw;
    canvas.height = sh;
    canvas.getContext('2d')!.drawImage(bitmap, sx, sy, sw, sh, 0, 0, sw, sh);
    bitmap.close();

    return canvas.toDataURL('image/png');
};
export async function base64ToBlob(base64: string, crop?: Partial<ReactCrop.Crop>, desiredRatio = 1): Promise<Blob> {
    // Strip data URL prefix if present (e.g. "data:image/png;base64,")
    const mimeMatch = base64.match(/^data:([^;]+);base64,/);
    const mimeType = mimeMatch?.[1] ?? 'image/png';
    const pureBase64 = mimeMatch ? base64.slice(mimeMatch[0].length) : base64;

    // Decode base64 into a Uint8Array
    const binary = atob(pureBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: mimeType });
    if (!crop) return blob;

    const bitmap = await createImageBitmap(blob);
    const normalizedCrop = updateCropRatio(crop, bitmap, desiredRatio);

    if (typeof normalizedCrop.x !== 'number'
        || typeof normalizedCrop.y !== 'number'
        || typeof normalizedCrop.width !== 'number'
        || typeof normalizedCrop.height !== 'number'
    ) return blob;
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
        canvas.toBlob(
            blob => blob ? resolve(blob) : reject(new Error('canvas.toBlob() failed')),
            mimeType
        );
    });
};