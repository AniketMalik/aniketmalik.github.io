'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "553fc1546a8b5205fd7e8cc65f796212",
"index.html": "cf7ea5c558d3527a002ad34073aeb69c",
"/": "cf7ea5c558d3527a002ad34073aeb69c",
"main.dart.js": "ff0d7dbee6f7c562517d2a2aadff3ea8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "658798570b7c3efc7366957aa610bc94",
"assets/AssetManifest.json": "eed55776827313eb0de3a49a185df741",
"assets/NOTICES": "7dfc9190cff9600800f2165b5d26783d",
"assets/FontManifest.json": "81de073f47d4b8aba681c172c1e582a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/am_common_packages/assets/images/placeholder-image.png": "2ba2ff9c14a371d8dc772d40e6679836",
"assets/packages/am_common_packages/assets/images/placeholderImage.jpg": "b3dc359af2120357b3b9b0e18961f2a9",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/shaders/ink_sparkle.frag": "0aaa9a6f3c5d743607e9de3ea82cdbfa",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/figma.svg": "407877cb1b0e9914ec20c56c7c2ad52a",
"assets/assets/svg/javascript.svg": "dfa2728d0a19b02e1326399fddba90f3",
"assets/assets/svg/gitlab.svg": "449a91effcb9b7dba6479f3aa196fa43",
"assets/assets/svg/aws.svg": "20b011282b1ac64b792b1b265199f695",
"assets/assets/svg/firebase.svg": "63a193f6bd8c8d8716468a27b55227c0",
"assets/assets/svg/github.svg": "cfb75cd40ae09fabb6c0620a95033f0c",
"assets/assets/svg/woocommerce.svg": "6790ea820c56a1a4d189e5fc181863a5",
"assets/assets/svg/rest-api.svg": "0cd937d90ea1d1e6591b8b73740e063d",
"assets/assets/svg/google-cloud.svg": "be6d4cff236a4ffd75d17205ad1ac975",
"assets/assets/svg/npm.svg": "f137453a6b5edbe259a53c5d8275726d",
"assets/assets/svg/flutter.svg": "a3db7778851808ec740a26617e6ca41d",
"assets/assets/svg/instagram.svg": "9562c8e05bd346a480feefea1087dba2",
"assets/assets/svg/telegram.svg": "0e55904e4eac11f144421fa140b11d6b",
"assets/assets/svg/notion.svg": "2f5178208517688430686c16ebe54ff1",
"assets/assets/svg/email.svg": "ed3183e73a5c9145c9c776ce4e1a4478",
"assets/assets/svg/nodejs.svg": "84f743ac18ada9afcb207db15cd05643",
"assets/assets/svg/dart.svg": "b4db99263b18a59a30884f9f6a69386d",
"assets/assets/svg/facebook.svg": "a6a36fca4b5a389d0eefbbd3a9c53a7e",
"assets/assets/svg/php.svg": "dac255054fa7e79c7d44112ad8be2934",
"assets/assets/svg/typescript.svg": "5eb391a23a0d9eac3718de641570da88",
"assets/assets/svg/linkedin.svg": "4b475fb3f54b3e35daa04295ec48df4c",
"assets/assets/svg/react.svg": "f17203045e16b5a806505a0e22eaf79a",
"assets/assets/svg/twitter.svg": "cd551cfdb49fc7304a7f7db476043dc7",
"assets/assets/svg/wordpress.svg": "1cc5a41caded6f91f0452ce215232ba7",
"assets/assets/images/xclence-logo-dark-big.png": "122efe1e31e65afe069e86c4d1e8984b",
"assets/assets/images/app-builder.png": "d49bbc96175856e9ce8fc451dc93d048",
"assets/assets/images/web-dev.png": "1e567aae632c3ed197f0790897012f30",
"assets/assets/images/app-dev.png": "ff79228872a9bf426173e51438262a2e",
"assets/assets/images/xclence-logo-light-big.png": "6fa512c0df02182c05eafe13f56f865f",
"assets/assets/images/placeholder-image.png": "2ba2ff9c14a371d8dc772d40e6679836",
"assets/assets/images/codegemm-icon.png": "8615b32d2695fcaac1798260db68ad4d",
"assets/assets/images/create-ideas.png": "d749f8953d231e6cbd60af778cb8fa94",
"assets/assets/images/code-window-2.png": "f8232e5ea0ea5ad53400951aae0948db",
"assets/assets/images/codegemm-icon-big.png": "07363ccad4824b2de1b29412adff0cc0",
"assets/assets/images/xclence-logo-dark.png": "5694e007e2478c6ec02f5039e7aab2e7",
"assets/assets/images/api-dev.png": "e708fef6adf0d9d25515843b27f578ab",
"assets/assets/images/dev.aniket.malik.jpg": "cd1282d7d94c6bd02cb04346dd33049e",
"assets/assets/images/customer-support.png": "7460972c7293167cfb4d746526d10d44",
"assets/assets/images/doc-consult-2.png": "0b28d7621402322897441943bd9bf2e2",
"assets/assets/images/woostore-pro-mockup1.png": "592d3e06dcb0edb12cc00a3b02f759c1",
"assets/assets/images/xclence-logo-light.png": "b688fd32eae218d8513e7d1b7939cc16",
"assets/assets/images/doc-consult-3.png": "d0cfd34ad5e2a1c2880a4e3dd0cc13df",
"assets/assets/images/doc-consult-1.png": "df44611f2291c03f6fbb297ded3f877f",
"assets/assets/images/woostore-pro-mockup2.png": "0abc14f2cf8d664047fb1142468db583",
"assets/assets/images/ui-ux.png": "a41d484798a47aed95af94fbd687ea88",
"assets/assets/images/code-window.png": "6e9d263be46bca74e4461afacbe688c5",
"assets/assets/animations/template-and-mockup.riv": "a0eb563ff794c3cce3538ad7f2e3715f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
