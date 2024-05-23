'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a1fb94d75ea059c8aa2eca0bec507658",
".git/config": "055c62d42f732a0adfe1f4c6cef2dc5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "237e448cc56835be58cb980b29dd55ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb27a957e6bbf5f1b32e6db7f5030af4",
".git/logs/refs/heads/main": "22df93fa77732e69fc499ce718312416",
".git/logs/refs/remotes/origin/main": "e99fbbc67863e697ae76bc7e96a18d6c",
".git/objects/04/eaabf45ff750de838ca4adb4fdfa7345782b78": "f49bc0b01c8869caf65f1d6164da84f6",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0c/a1e8a1d262a6df0fc76d680f865d0de7710776": "c5cce4e7cb4b974f4897f9a6fc9576aa",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/518995cc3b0f95e614078feeb0cd8d452f6dea": "f0ed3c209f1a8dfef9bb8089d28d06e9",
".git/objects/13/4a7bf4c96e3d32f8fca82ea7e94191b1c3559b": "fa3c237f795e1b228781507c23118389",
".git/objects/15/4a505d676561659e91015fcdd2d0a34149d7a9": "cb1c33435582235ad3ca938d00cc8503",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/2bfd5c3982244999ee2cbc78566a3972892d96": "b9572008c1f34e97d2474afe560c9df6",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/23/6bec6241318f97226f7112f30be156cd052804": "d3ff068a38d4dfb2dda4dececa78f1e5",
".git/objects/26/685c041550dc3307b79c45da30c87c5ce7f992": "e91d4c7a61d5e7c9b68f40d199f370e7",
".git/objects/2d/5bc89f84944c0e6f83657214f8d3f7f92767ae": "a35d9dcc11b16cc8f3df051458aaeb18",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/3a/51ca566645efc6440e04f2a5c2f5d85578a48d": "4806a470fa920887be18635de75fc9cf",
".git/objects/42/d52a6b9640b7d430df84aa903b4f315c717798": "fc6e3c45214e38ffac433748adeb1e87",
".git/objects/43/e54d8e39cf94dc705af42cc9427878b4271fc1": "6b5d855b9abb39ae35612f452c3d8e5f",
".git/objects/49/4df70919e0bd57f2b95905ac7b65e8df66b58b": "45867e680ebdbe9f6e9d4139d019002f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/0b3bc283db118cec9db8515a96d07dabb6ba60": "c38daf085d0cfb441cf8f9cdfeca4225",
".git/objects/4f/d91d60cf0f4bbbea542171ccc9e3beef64b540": "abd51983f04af8ec7f158400e0a673b7",
".git/objects/53/eb9b160e1f1be07bcffe9e95503b234b20b070": "03d3bd5b00c5143f9726393e5a750447",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/61/762c87c5202b95cdf096d308598d12c376d931": "64aa91ede2de2b236e17b41092af816e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6c/af735feacbd32eaa7d5ac8700e93fb755d2606": "f76ee1d05a32d0acd0cd3c24eb6d8b29",
".git/objects/6d/85d24ad38364a440770cd3dc0065801bdf9e8b": "2c462115d035dffef85ab28f96cd8db2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/0845a2750ea3518d722c8c56150490fbc30a6e": "71b34dbba3c5f4928d7cfcf7ec65b428",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/78/461be0e2b829c7840cdce7c044f14c3fc95800": "6849a3090861ad30b6581bc363a74e5e",
".git/objects/78/5805303ece652870613891a18c71fdcfa6a403": "aa22883a1a89b816b2544947617a657a",
".git/objects/7b/f7d6d85f0d36e116f5376a7718cee348a27256": "8c5c81da46e7aee054ef2e36cae4d8cc",
".git/objects/80/e1d3dfd41a61d3bd5be871679cd0da112994e9": "0bd39ebd9f76727dfdd56c86694e9500",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5e81abc33dea4a8dd0f9925726bb3e0fe80705": "45fef5c8f050b88ee8a0e8b65c199fe6",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/acdbca6fab8cce625afbf7621b395c7511a245": "48eb531eba6273881dffe44155d83618",
".git/objects/9a/fdb7c57859d9c7124cd9d44df1a52248bffd94": "0973291d806f5154eae2aadd00c1ed3f",
".git/objects/a1/af788710ac2c0244d9606650b5e93a109d9ab0": "e4c65b70e4fbe65e9e0056f010f633af",
".git/objects/a3/21d5397dca22f19e024567a17e19d57373dab5": "d60027f9d85bc6ea4725b50eb9d65dc5",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/418a6ee6522d96ef431b205645065158597b80": "08251d1cf15be64d6c8b02b72b32d1a0",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/800962a6b067594ab7f957fdce19e2529a1ca8": "6deea17f9ccc3256c4b0af0a4fa5d91f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/41a06b00c89e3ebddf95c48aa7ae18d3bb5f9a": "5e07642aaff4ce5725b9aacf6c7fc082",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/83ecea668e3774e29ceab9f3a3822525edb636": "9a178c9c275d330b970b45b12f2a005d",
".git/objects/c8/2bbf31716c1a8f05ebc154343f42dfd9578e58": "87e8274a5bc2b3c8a0b894d8f6c34d93",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/f4497fc5c4711ecf330cc71479fdf6cf632657": "041d8d4d0f2d68a7a492a59ec54b4afd",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/de/10c41c06e83267b79574d96717eaedd7a11551": "51d9cedcc7d8c3c88bc2bd3c0b516502",
".git/objects/df/09f3730c36813f9f5d9988d56c51bf09257ecd": "b7f99fecbe47ae95b96eecf2fa4b6c36",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e7/7b60f92a1443445ca666125902ec302c8d63ba": "622428f07d7ba7377882cd2145284250",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/ca65d0042414ff7a87dbbae06ac9f47ede4e2c": "28be55566b2a5afd5cc9d1aa3b118c1e",
".git/refs/heads/main": "b60be6ee99c78840298bc058b5a3b180",
".git/refs/remotes/origin/main": "b60be6ee99c78840298bc058b5a3b180",
"assets/AssetManifest.bin": "be366ee748d1ac9e0f9f8d3d2e9d1a82",
"assets/AssetManifest.bin.json": "870dff6f47c36f2c223140a985e93a0a",
"assets/AssetManifest.json": "e5ab0fd974fbfa532474ece2fed35f46",
"assets/assets/background.mp4": "1ccfa3d24893b09c6f414c677f620b0f",
"assets/assets/hycop_config.json": "ca7586771c10717bc7b106b276bb720f",
"assets/assets/logo.png": "a6de38b7f004ea361acfbc9ed98a447e",
"assets/FontManifest.json": "c5f01a82ec105e6c115ef6b74114feb6",
"assets/fonts/GodoRounded/godoRounded-R.ttf": "c4a61e69569e01a5fffaa79cbfbf265e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "63bcaca74072ebca537b9930687372b6",
"assets/packages/creta_common/assets/lang/creta_lang_en.json": "72bbacec01a6ff64b060ae314201479b",
"assets/packages/creta_common/assets/lang/creta_lang_jp.json": "901a690e7f58f85f800087d3186621fc",
"assets/packages/creta_common/assets/lang/creta_lang_kr.json": "78d1c1657b3f62ec42de1c8e91e2e27d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "748a515819e08f9bda1c73299911fc4e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c866c2d5b8a08a70fa61a69c52cda02",
"/": "7c866c2d5b8a08a70fa61a69c52cda02",
"main.dart.js": "cde9ba8ff73f3a74303bf656f64a462b",
"manifest.json": "d8332988d3120a85c312e7d7f2a372de",
"version.json": "bc144c5674a6227a69eb3092f7658ddd"};
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
