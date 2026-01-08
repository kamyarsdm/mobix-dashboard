'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36a6d549a66b6d4a8d51637e9b2ab2ab",
"version.json": "697894954132da250427d59fb34258ed",
"index.html": "1d52bc40406c307809f05d1375e267c2",
"/": "1d52bc40406c307809f05d1375e267c2",
"CNAME": "8004c8b4841467ccf85d7bbbaa8dc22e",
"main.dart.js": "cf65ec7d90154a206c30b5c9897908e5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0deff42dd5277e12f780d4c960671def",
".git/config": "e0e99230bcf3ccf6eed5df68fed0d8e5",
".git/objects/0d/a0e3eb23b365c27c6b585547c3096445745adf": "add98d8c819ff3adc2f0378ba2b8cf4b",
".git/objects/0d/5e083a900bc968229cebc3ede0bd0f45ecd063": "5ac37eb5a9f2dd14294667e4441438cc",
".git/objects/3e/db808c88d58d7f5b97fc6821a8208d8d395364": "8e714b991903cf983cac2582a67c8816",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9b/35cc986b2b05aa21dd629363373bb832974c65": "f950e06ad3f868a0696b8cc16854d0d2",
".git/objects/35/27539f8ccd2c67deee68ec3d6eb9a0f78e4857": "3d454af332f64b5ed3931859b4ed5615",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/28ea7409b67eb7a9c41ad6728a4ce6b67ecef9": "e1626c6cd7192ea0c7d0347526a4a1ca",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/58/439cf9b1de87394094c3d27009f765c0e125ef": "f5ab4c5681e7d0d8544fec2a09fa67de",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/1d9236c04b2311aca3b108c97086311f314f3e": "69fe63d98c9c91fdf4a58657adbfdbb3",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/54919b3306ebfa120c66029d8e43d0d25d0d3c": "bc28a912d3b22dba0bd62c00fbbdc8cc",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/a2/ceb756ac219c96a41198ce8b86df7792bf0796": "fe30140d73d6968ad17dceefebcbc8ba",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/62997e859158dffbab467006378f2c41061188": "2cf97e01ae045ea414260b219abdcdbe",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/ad604533d8b50d22ea1167e22e22a96b91da14": "fb50b69a81f3d64371ebfdcbe2db7f4d",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/9948ad4ec710f1bb2a00948442ea671ded6a40": "306707a8a7ff9e3f737dd274cf7b2ea7",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4e/bcf66a0aa5a5494e00ca85eb70a68da1159c17": "7f0a306d7136877d80eaed203d218497",
".git/objects/18/12ac35a012c9d6aa96d6af3478cb1aa44135bf": "528b481ecf3a4c537624f344e4343179",
".git/objects/11/0a32dd5ab80e4e345b06ee763505f559c3a49a": "ac15c7d5a25dd049aaea41f8a3dfb452",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/f52d36e4a56fab15922ca64408964cf24867a9": "c2341905fc36d33e4f72526c003c179d",
".git/objects/89/8490fcc817f18c1f7efc619e097ca913e90aaa": "d66cc4339bda367a3e6467a0731239f3",
".git/objects/45/a4acf1493af6a46438acf1282a9b09ef530802": "72f1aed37257b299895c80281c17db93",
".git/objects/73/b838cd876047098fbd5e9512e7cd16605f545c": "cba2f19b8239bf838e9e8e6582b80d74",
".git/objects/7b/a9c9d0441fcdbf7f566b27927cd20bce3f43d6": "2e42929043a1f2c989fe9859c29e1384",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/b1036fb7ebe680880e5580a6bee72442916d42": "3db3c628b8c48029c56e8032bfc64322",
".git/objects/4d/ea24744d65e983e7e5758c35c051adf5f5bd5a": "07d19add8ecce533640acd9d50101dd4",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/43/346609014063f9b113f0ce5e31ee078b01fd3b": "db73b7c5e1e00a461b4064e6c3ac0a78",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f4fbb52c1a0040d742ea8bd47738165334a47c": "b9472807f75c06681d5dd34d43a8089a",
".git/objects/9f/ee3367825651b5f99c8eedaddd1dd624978a32": "a5210b42f523c429875e67a81e630c3a",
".git/objects/91/6a3e8b6e284fa1d197622e84bb0ad523af5d29": "764f3dc0478a29f050ac415a356f8231",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/30/ef27fea3430c9df5f8b89c1f22210488739485": "cc89ee82d1ddbe31afa60485334df7fd",
".git/objects/08/322e009092f420735b799326fbea423c15d50c": "1842886128329d10e2923048bbd1f2f2",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/01/98e98a51a77be2eaa0c6ba7242af627f69c11a": "a8d230c0fa0ef996945fa3f567ac7755",
".git/objects/55/d15346e90ebf5cc28c2bec71cc7a23c0cb9477": "a7acc223538f11e9cbc8ca04e14c8604",
".git/objects/63/d0a06a21aafa106c6b8d01dd3f74cf86af421d": "b06872509f2034f9c5530a9c9616a323",
".git/objects/63/11c491f1c6954533928dde161615fb271d228f": "301a35926a91e5d5eb898e97cd030426",
".git/objects/0a/51dbd08f6a9b38195ede2e971577a84e59c285": "101ae430b004ecc95ed21f2fe4a8a842",
".git/objects/90/c8ddeab6cfea5f79cb943b29596f5f531a4c62": "25f9c4301bf69c7039e7ff69d2c14763",
".git/objects/bf/e0a9306c99dd58a4242060d37aa382e878f9dd": "61d00620ae56e68c9fd6b875df572345",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/3ef3878a5d16f1be7860e41164c944ed0c0526": "08815a5f6ce009dacaa3e1ee33c14578",
".git/objects/d5/f083409d626e7ae74b0bba22746bdc2fc242d0": "fcb7183cd91961a56eba7ca3caf54369",
".git/objects/d2/241fa0abc646184de7265b29b09866bc6fd3e7": "ff8a4100a8cd35bd921f4eeabed8f162",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/3df61e0e3096208fb6bad0e97beeb50b0f77bc": "6431771260f74e0066b52aed2e8fca20",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/e9512e676e987b54c3fd9d499be266fa20fc1a": "d1c018864db15d671571aefdd199b6cb",
".git/objects/fa/2744a3589417b9fe2a7633a127772366b6ec5c": "1f2b58b7f3c6ba42f848beb5255b6431",
".git/objects/ff/d50f1ff942ba8c1382e71dc23cd42d9023664c": "cdc6cecef605ab896707c724b038508f",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e0/4913aa0c932f1786d87b95b0d02b34ee50e540": "3074256de019e34ecc6546def84133b3",
".git/objects/2d/60b56550ed1924142d2e5171dfef6ddbff0d2e": "32aefcedeaaccd655ef4f674f238d2e9",
".git/objects/1b/b1d3e2463c6e43753c32410a5ae0fc94f8e2b6": "069089659999ac4716cc8229e44dcc55",
".git/objects/1b/2447272399226ce3509688797645d28d002444": "6a5df43b26a03530792a00906ecb0b54",
".git/objects/12/3faf8bb344e1d5d2728b08cb07f4e86fe615ba": "c4acea8ae8e9a5866ad7b938d6226dc8",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/1d/0b608d7a234869de814b0471e5b3b979fe2df3": "c0c3fb7d5a575c2b22542ec0a665055a",
".git/objects/82/2bda8bb79021880b77d7369e544323b2c03ed0": "9e4b5fa35983f473011031bb7f41292a",
".git/objects/2b/9e747ec259b8730b275e4351c8b412aa381274": "cf208fe957efbb6e1d4a47125148b18e",
".git/objects/7f/49162fb3b794b5a4351bd1d8924577f8da5082": "80b2e92b519bcd36fd52fe3379bcc9f4",
".git/objects/22/4b65da1de346f86e6ce0c5621c829043ac32d8": "13e797f041a92fd9da959a8b3c2f735f",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e40955c4eba7bad7d787c5dfc4baaad",
".git/logs/refs/heads/gh-pages": "d35166ccbe7d4af197c306f49a1a76c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "bbef08a774cb29f1a664205f69e6a70a",
".git/index": "00fb33325ec7729670f1d6c016e60b79",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "822f9c7f9aaced57c9cf3d480f36eb65",
"assets/NOTICES": "a3a4bf50d2c80872c78394c5d1986d73",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "b1fc3ead2badd370add41becb61e0ef0",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
