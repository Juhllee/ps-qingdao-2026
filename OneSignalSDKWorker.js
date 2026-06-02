// OneSignal 기능 제거됨. 기존에 등록된 SW는 자체 해제 후 cache 정리.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  try {
    await self.registration.unregister();
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    const clients = await self.clients.matchAll();
    clients.forEach(c => c.navigate(c.url));
  } catch (e) {}
});
