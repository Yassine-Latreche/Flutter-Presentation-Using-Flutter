'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b2201d1896cedcdb37e79530c08e7d69",
"/": "b2201d1896cedcdb37e79530c08e7d69",
"main.dart.js": "5f07beeba4354eba86e7f336aa118937",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe25cc0e87d855e58656aa32140acb2f",
"Flutter-Presentation-Using-Flutter/index.html": "b2201d1896cedcdb37e79530c08e7d69",
"Flutter-Presentation-Using-Flutter/main.dart.js": "b68f2ae93879bbf6e24ffe09e39236bf",
"Flutter-Presentation-Using-Flutter/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Flutter-Presentation-Using-Flutter/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Flutter-Presentation-Using-Flutter/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Flutter-Presentation-Using-Flutter/manifest.json": "fe25cc0e87d855e58656aa32140acb2f",
"Flutter-Presentation-Using-Flutter/.git/config": "69d85efc7659c90b2cb3093d96c0281f",
"Flutter-Presentation-Using-Flutter/.git/objects/61/5b49970574a0e46e268b1a50798fc0dd51a296": "bfaae5db820bce4b03557dfd9faf11f6",
"Flutter-Presentation-Using-Flutter/.git/objects/61/515bd3a153c63a23a98cc09476cbc73c85e2e7": "51cc7300392de3fa3a1ae47e6b999d27",
"Flutter-Presentation-Using-Flutter/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "d5ecdc8392c829094d6189bd66885588",
"Flutter-Presentation-Using-Flutter/.git/objects/66/dcef1854fd566bb0c247b480550bfded5cde70": "ac5fdd99440eb22c2155916112ff95b3",
"Flutter-Presentation-Using-Flutter/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c3ed1be52deaa5a5334678c624ecf031",
"Flutter-Presentation-Using-Flutter/.git/objects/6f/aee8c5a32abe51b16c6cd56eb94c205c5cba36": "7c7f53904d937efa80168fcced0b08fc",
"Flutter-Presentation-Using-Flutter/.git/objects/03/6c78bdd33c2838d818245852eefb8fa5e8f8c4": "b0a17f575b1f65de09bbbbc0a45e6cee",
"Flutter-Presentation-Using-Flutter/.git/objects/04/a2ea16960ddbf59f4e49eeb0409d8944cc29c3": "4df449d93966097b4aed07d12ba2ed81",
"Flutter-Presentation-Using-Flutter/.git/objects/3c/23942d4ffc4bf2cec86251ff971b268223f3e8": "defa549faec69f3244b2c5980bcb50f8",
"Flutter-Presentation-Using-Flutter/.git/objects/58/a923eebce0d27939428a636b35635ed1d5d1be": "081c35279b595cbfc6d7dc657f0c4a3e",
"Flutter-Presentation-Using-Flutter/.git/objects/67/d90021c8c7f1ea79a5e2266b0daf97839c9969": "0c93576c87d581a5ddadbded5e524c7f",
"Flutter-Presentation-Using-Flutter/.git/objects/33/c6f787b90099a6a404361d6df071127d656425": "ba996b6238fe5fe69a773e3b0e02d97a",
"Flutter-Presentation-Using-Flutter/.git/objects/02/9960ec8c5673da41169074e2989856167da8fc": "70826ef3b55afdacb95574824649cf16",
"Flutter-Presentation-Using-Flutter/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "c394bb349d5f6a6517986a0734827215",
"Flutter-Presentation-Using-Flutter/.git/objects/ab/694ba0906fa053af6d1be462de8c2e64778578": "b1decf472909f1ec8b98b678f4cc7890",
"Flutter-Presentation-Using-Flutter/.git/objects/c7/1b549e2374c664f5677229531c520390dc9db0": "aa79776ca8e2d1c1ad7257893c1deb00",
"Flutter-Presentation-Using-Flutter/.git/objects/c0/55e85837f9bc4071112c4f48e86d4c0c88d5ad": "8fe328d816d9bb1a3914edf692fcea9f",
"Flutter-Presentation-Using-Flutter/.git/objects/c0/0a214cba7d689f203cec2097969b6c28084786": "98c14a84f3ff2ae17641b427ee1de7cc",
"Flutter-Presentation-Using-Flutter/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "b2242c86d61d8f963a3f361fdcb70e01",
"Flutter-Presentation-Using-Flutter/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "8775c4597d2b2b82c58620a2b6e4f1d2",
"Flutter-Presentation-Using-Flutter/.git/objects/42/945a24bdba7bd72afe6a327477a1761840b87d": "f4a295a62f7ef116d771423fea8b6b8d",
"Flutter-Presentation-Using-Flutter/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
"Flutter-Presentation-Using-Flutter/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "f33fa1cbb6bd4cd17909713edfb6e43f",
"Flutter-Presentation-Using-Flutter/.git/objects/2a/7892bf4ca0d44a5c91143c3320dee281149dd6": "88c6fe7a8836496f3e7796caaa474d5f",
"Flutter-Presentation-Using-Flutter/.git/objects/2a/1801ef71b483773d9bf932098573e0f21c2e3f": "f66ee174b949e9de65f29d709ff702c8",
"Flutter-Presentation-Using-Flutter/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
"Flutter-Presentation-Using-Flutter/.git/objects/6e/ca11dbe664608db4e1c113c6740f695c09ff98": "8f4de8d92edd5f8625c63568828409f0",
"Flutter-Presentation-Using-Flutter/.git/objects/09/fd22e829144926a041257660fa88612fb13473": "5930022e06c9b539ad4b0562809cacca",
"Flutter-Presentation-Using-Flutter/.git/objects/3f/dcd4e9c7ee6b121ae3396bfcdf772bb3f82ac0": "34ec97d9b472e084ff251f64f57ae003",
"Flutter-Presentation-Using-Flutter/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "c8b5c74b0bb362a851f947573d3232a5",
"Flutter-Presentation-Using-Flutter/.git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "7ae117c2a9c43f4d8f89d2f3edabfdc0",
"Flutter-Presentation-Using-Flutter/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3c021fa0efb3cfa5d4c7a8004cab7ab8",
"Flutter-Presentation-Using-Flutter/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
"Flutter-Presentation-Using-Flutter/.git/objects/a8/6d73aee2ab6eb08b8086ae2a8d8d5d7a75334b": "b6393f888e038a76153fba5bb97a66a1",
"Flutter-Presentation-Using-Flutter/.git/objects/b9/35cb5a7690f5fc3174917c246147df54f233d0": "073ad135d26828674b47e808f9da05c1",
"Flutter-Presentation-Using-Flutter/.git/objects/c4/1460f988bb8a5d2b3805f1ade5a4e285422031": "56676f7a0ab30f57f93c0c3908cb1421",
"Flutter-Presentation-Using-Flutter/.git/objects/f9/dec11869204e044cd638aa9a9ff06be28aa323": "abd6e939f84b8170b4bf561459193e31",
"Flutter-Presentation-Using-Flutter/.git/objects/c5/c3b295a0267e4fb7b8ec28044cc61661bd20ad": "8fc0ef4234a81c0a33114410d9a2ff97",
"Flutter-Presentation-Using-Flutter/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "c209b1de871a52c7676fd051ea381357",
"Flutter-Presentation-Using-Flutter/.git/objects/71/58970d2bbeb127ac1ec8c7123c8aa574c31ac7": "13b26425c9ba1d049bff91db8b8ea7ce",
"Flutter-Presentation-Using-Flutter/.git/objects/78/1fc5c407cc05dee16470669f9ba1bdd57e645b": "5ba2731d31438e7ed5d6d5f220585c1f",
"Flutter-Presentation-Using-Flutter/.git/objects/13/f93062c30890c0dfb359ff8bfb57b4a680f181": "9bbd81bb92b626a000724e4772f09840",
"Flutter-Presentation-Using-Flutter/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"Flutter-Presentation-Using-Flutter/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Flutter-Presentation-Using-Flutter/.git/logs/HEAD": "ec835a8388baf7079a4886b3e119aa73",
"Flutter-Presentation-Using-Flutter/.git/logs/refs/heads/master": "ec835a8388baf7079a4886b3e119aa73",
"Flutter-Presentation-Using-Flutter/.git/logs/refs/remotes/origin/master": "d5f9186fe60c9fe9ef1b3eb2fa1366bc",
"Flutter-Presentation-Using-Flutter/.git/description": "7542190b1d3f00e3f810de8a14487097",
"Flutter-Presentation-Using-Flutter/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Flutter-Presentation-Using-Flutter/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Flutter-Presentation-Using-Flutter/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"Flutter-Presentation-Using-Flutter/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Flutter-Presentation-Using-Flutter/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"Flutter-Presentation-Using-Flutter/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Flutter-Presentation-Using-Flutter/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Flutter-Presentation-Using-Flutter/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Flutter-Presentation-Using-Flutter/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Flutter-Presentation-Using-Flutter/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"Flutter-Presentation-Using-Flutter/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"Flutter-Presentation-Using-Flutter/.git/refs/heads/master": "35449bb98c12cd2668ad5bd6e0e68e72",
"Flutter-Presentation-Using-Flutter/.git/refs/remotes/origin/master": "35449bb98c12cd2668ad5bd6e0e68e72",
"Flutter-Presentation-Using-Flutter/.git/index": "eddba55df792876fc7cef4f9a17c4e26",
"Flutter-Presentation-Using-Flutter/.git/COMMIT_EDITMSG": "cac9fbf9efe56b674ec0e259b5676c77",
"Flutter-Presentation-Using-Flutter/.git/FETCH_HEAD": "a11370b3f7cd803f146fc6b2283999b6",
"Flutter-Presentation-Using-Flutter/assets/LICENSE": "2909ef0d49d0f4d9bb78eff192ef95ee",
"Flutter-Presentation-Using-Flutter/assets/images/logo.png": "1472724d6c027ff78fff1a560bd9bb08",
"Flutter-Presentation-Using-Flutter/assets/images/logo_white.png": "a2a00bc684bfc6c1ee0f558edc22720b",
"Flutter-Presentation-Using-Flutter/assets/images/logo_small.png": "aadd3e5796e19ee7512498688b5febf5",
"Flutter-Presentation-Using-Flutter/assets/images/image1.jpg": "0a232e11544a3d0c49bc84c0f5f461ae",
"Flutter-Presentation-Using-Flutter/assets/AssetManifest.json": "e576cd99157eec8fdd636cf35fc41e1f",
"Flutter-Presentation-Using-Flutter/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"Flutter-Presentation-Using-Flutter/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"Flutter-Presentation-Using-Flutter/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "2909ef0d49d0f4d9bb78eff192ef95ee",
"assets/images/logo.png": "1472724d6c027ff78fff1a560bd9bb08",
"assets/images/logo_white.png": "a2a00bc684bfc6c1ee0f558edc22720b",
"assets/images/logo_small.png": "aadd3e5796e19ee7512498688b5febf5",
"assets/images/image1.jpg": "0a232e11544a3d0c49bc84c0f5f461ae",
"assets/AssetManifest.json": "e576cd99157eec8fdd636cf35fc41e1f",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
