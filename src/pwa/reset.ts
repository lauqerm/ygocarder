export interface ResetResult {
  cachesCleared: number;
  serviceWorkerUnregistered: boolean;
  storageEstimateBefore: number | null;
  storageEstimateAfter: number | null;
}

export async function resetOfflineData(): Promise<ResetResult> {
  const before = await navigator.storage?.estimate?.().then((e) => e.usage ?? null) ?? null;

  // 1. Unregister all service workers under this origin
  let swUnregistered = false;
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((r) => r.unregister()));
    swUnregistered = registrations.length > 0;
  }

  // 2. Delete all caches
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map((name) => caches.delete(name)));

  // 3. (Optional) Clear IndexedDB if you use it for app state.
  //    Commented out by default — users might lose work otherwise.
  // const dbs = await indexedDB.databases?.();
  // for (const db of dbs ?? []) {
  //   if (db.name) indexedDB.deleteDatabase(db.name);
  // }

  // 4. (Optional) Clear localStorage / sessionStorage.
  //    Same caveat as above.
  // localStorage.clear();
  // sessionStorage.clear();

  const after = await navigator.storage?.estimate?.().then((e) => e.usage ?? null) ?? null;

  return {
    cachesCleared: cacheNames.length,
    serviceWorkerUnregistered: swUnregistered,
    storageEstimateBefore: before,
    storageEstimateAfter: after,
  };
}