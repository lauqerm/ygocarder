import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, relative, posix, sep } from 'node:path';

// ─── Config ─────────────────────────────────────────────────────────────────
const PUBLIC_DIR = 'public';
const ASSET_DIR = join(PUBLIC_DIR, 'asset');
const OUTPUT_FILE = join(PUBLIC_DIR, 'asset-manifest.json');
const BASE_PATH = '/ygocarder/';
/** 16 is quite enough for a unique identifier */
const HASH_LENGTH = 16;
// ────────────────────────────────────────────────────────────────────────────

interface AssetManifest {
    version: string;
    generatedAt: string;
    basePath: string;
    assetCount: number;
    totalBytes: number;
    assets: Record<string, AssetEntry>;
}

interface AssetEntry {
    hash: string;
    size: number;
}

/** Recursively walk a directory and return all file paths */
async function walk(dir: string): Promise<string[]> {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map(async (entry) => {
            const full = join(dir, entry.name);
            if (entry.isDirectory()) return walk(full);
            if (entry.isFile()) return [full];
            return [];
        })
    );
    return files.flat();
}

function toUrlPath(filePath: string): string {
    // public/asset/image/foo.png → /ygocarder/asset/image/foo.png
    const relativeToPublic = relative(PUBLIC_DIR, filePath);
    const urlPath = relativeToPublic.split(sep).join(posix.sep);
    return posix.join(BASE_PATH, urlPath);
}

async function hashFile(filePath: string): Promise<AssetEntry> {
    const buf = await readFile(filePath);
    const hash = createHash('sha256').update(buf).digest('hex').slice(0, HASH_LENGTH);
    return { hash, size: buf.byteLength };
}

async function build(): Promise<void> {
    console.log(`[asset-manifest] scanning ${ASSET_DIR}…`);

    // Verify the asset directory exists; helpful error if misconfigured
    try {
        const s = await stat(ASSET_DIR);
        if (!s.isDirectory()) throw new Error(`${ASSET_DIR} is not a directory`);
    } catch {
        throw new Error(`Asset directory not found: ${ASSET_DIR}`);
    }

    const files = await walk(ASSET_DIR);
    if (files.length === 0) {
        console.warn(`[asset-manifest] no files found in ${ASSET_DIR}`);
    }

    // Hash all files in parallel, but cap concurrency to avoid exhausting FDs
    const CONCURRENCY = 16;
    const assets: Record<string, AssetEntry> = {};
    let totalBytes = 0;

    for (let i = 0; i < files.length; i += CONCURRENCY) {
        const batch = files.slice(i, i + CONCURRENCY);
        const results = await Promise.all(
            batch.map(async (file) => {
                const entry = await hashFile(file);
                return { url: toUrlPath(file), entry };
            })
        );
        for (const { url, entry } of results) {
            assets[url] = entry;
            totalBytes += entry.size;
        }
    }

    // Sort keys for stable, diff-friendly output, different OSes may return out-of-oder file lists
    const sortedAssets: Record<string, AssetEntry> = {};
    for (const key of Object.keys(assets).sort()) {
        sortedAssets[key] = assets[key];
    }

    // Version = hash of (url + content-hash) pairs in sorted order
    // Two builds with the same files produce the same version, regardless of FS order
    const versionInput = Object.entries(sortedAssets)
        .map(([url, { hash }]) => `${url}:${hash}`)
        .join('\n');
    const version = createHash('sha256')
        .update(versionInput)
        .digest('hex')
        .slice(0, HASH_LENGTH);

    const manifest: AssetManifest = {
        version,
        generatedAt: new Date().toISOString(),
        basePath: BASE_PATH,
        assetCount: files.length,
        totalBytes,
        assets: sortedAssets,
    };

    await writeFile(OUTPUT_FILE, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');

    const mb = (totalBytes / 1024 / 1024).toFixed(2);
    console.log(`[asset-manifest] wrote ${files.length} assets (${mb} MB)`);
    console.log(`[asset-manifest] version: ${version}`);
    console.log(`[asset-manifest] → ${OUTPUT_FILE}`);
}

build().catch((err) => {
    console.error('[asset-manifest] failed:', err);
    process.exit(1);
});