const CACHE_NAME = "kindling-cache-v1";
const ASSETS = ["./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first: always try the latest version when online, falling back to
// the cached copy only when truly offline. Google's own API/auth requests
// are never intercepted or cached — only this app's own files are.
self.addEventListener("fetch", (event) => {
  var url = event.request.url;
  if (url.indexOf("googleapis.com") !== -1 || url.indexOf("google.com") !== -1 || url.indexOf("gstatic.com") !== -1) {
    return; // let Google's own requests pass through untouched
  }
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        var copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
