/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","16d6de4af000a2cfc1e49f063def4ae2"],["/archives/2019/01/index.html","c9418d57f52ccdbdfe0ce2e8fac56c87"],["/archives/2019/01/page/2/index.html","c63fa6ae8854c71c1707f358df5c1ef9"],["/archives/2019/02/index.html","78d5087200c4e450d4dbbb7741df623b"],["/archives/2019/03/index.html","b388dacfc967fad9ac692a262be6f0a2"],["/archives/2019/04/index.html","7294ee6471f6ac2a5c78b85a46f4e5be"],["/archives/2019/06/index.html","d36e67146aaa0aff471cf023d5e4493d"],["/archives/2019/07/index.html","a50fab4fa82bf8864b33a423867aec17"],["/archives/2019/index.html","1e5a2b7444202e8da007f28ec571d772"],["/archives/2019/page/2/index.html","49844db819576f4d1c7b88b45ad1cc5c"],["/archives/2019/page/3/index.html","87c0bca0d29265abdc275a8b63507391"],["/archives/2019/page/4/index.html","9fca8b60898c291bd0c1279a55f136fc"],["/archives/2021/11/index.html","04b27ac4d81d71ed00b3129fe47a286b"],["/archives/2021/index.html","aa232ca5f9a950e3747cd8f78c4f0fd1"],["/archives/index.html","73b1d3d3d27bc97982af685a9b9bfa46"],["/archives/page/2/index.html","ad6c659feaedf6c203724b7d5379067e"],["/archives/page/3/index.html","1cc113f6a060f100c3b23ee8eee68745"],["/archives/page/4/index.html","876bbb3203f0ed2ab63a33dae54da9e4"],["/categories/index.html","fe5ea87610dfbacc25a2432640d61feb"],["/categories/购房/index.html","abae7a8373b4b22c6a10875f07c85904"],["/css/main.css","8e2468cae5f68c5a6b8f5d09e608796b"],["/friendlink/index.html","5ade1ade07133ffa5c65603d9b11371f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5c6b0f4feeaa91908456b125c290886c"],["/images/apple-touch-icon-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/apple-touch-icon-next1.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8c08ab3cf4fc2b45303067adc190d7db"],["/images/banner.png","7447839b93d7d67be2467469e2d32242"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-16x16-next1.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-32x32-next1.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","416bcdcd4a7560c9c6c35bf359654097"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","5d44a19ad1994d4ada789dc9f6ec4ff5"],["/page/3/index.html","1263a427405572eebaf2c79898eac474"],["/page/4/index.html","0a0c790af3386b284fcfc93bd1e682af"],["/post/0.html","de608ec7e28f5fda0fe80aace5f249ea"],["/post/10696.html","f15716d57650c9cc89b0c071de4ee1e4"],["/post/10845.html","42c86916ae769c9041cf584438bb8500"],["/post/17172.html","2a5f41fc4a964f8b400d10406dbe0d27"],["/post/177e574f.html","2f04253683101c544524b453240b423b"],["/post/19fc17a4.html","86abeb4dbda543760d1ba98072aea08b"],["/post/1eda57ac.html","60ea9e2c8c33e3de349161646d7cc551"],["/post/1edace88.html","8ac1c5fe30eb01324308927040ac8d8e"],["/post/20206.html","e21cfc57be4631bbfc610d5e3a69cf19"],["/post/21152.html","e182279b42e821ff2373a35620d6fc49"],["/post/22518.html","a74ac6711783427100a93a27ebd2ee9d"],["/post/24621.html","8c34941933e42c86b1a278e8cc49ac85"],["/post/2ee983bb.html","661d4d172941a38b7da29b0d8f61a3d7"],["/post/2f107dda.html","5976d5ee6a7b6dd4e5163d947ece69d5"],["/post/33864.html","bb85aa6300b0952d5b64737d2f50c922"],["/post/34931.html","75f59818c57a3a52ce7d6bdd155d1268"],["/post/3cc694a0.html","38f5e60b08b200c04c67693d605c1fe7"],["/post/3df84f8.html","91f7aecd6a00e340a6ca278c9e9f3207"],["/post/46919.html","5bd17731bc55a2630693a5afcc22e449"],["/post/4ed814e8.html","15dbfd93d512a87469c3c1a86a11db4f"],["/post/57092.html","e4ba597ba4f8992b1c712cff7977444d"],["/post/64ddacfe.html","0e83a6f32943be81a16e5ab72629fc7f"],["/post/76e180f5.html","408a6142c6042963f97868452447eac0"],["/post/7a6400a0.html","1feaa4b6b2543de5c3c09a035079775a"],["/post/8cb158ac.html","5805920f73d9ffcbddc2147faca62518"],["/post/97601234.html","c3262adb2d30eb5e7f3281f1ad2bf3ab"],["/post/9e924caa.html","1221a2c0dbd61125258ecf7d0e15ebdd"],["/post/a80d0031.html","556fd3a3589fa03f9ea68ae5d1ebdaa8"],["/post/b1fd4278.html","acd447745c495b85463d07b484ccbf4d"],["/post/b372d2fa.html","1fe3cde58ca91beac2df0090eba4385b"],["/post/b8a74939.html","068d5337085addad632ea5458588aaa3"],["/post/c0e17f81.html","cf06280c1cc37a2cfe43093e9a8e01be"],["/post/cf8dbd9a.html","6f11b0f62bb2e700d374d3b2abab95c9"],["/post/d42ca19b.html","285a1437e092037f69f91410468478c8"],["/post/d42edc1.html","055b8b71adeedc9ffb045853c53d0213"],["/post/d4f958cd.html","9e4a1350ac35daf2e9130f1d898ab367"],["/post/dad17569.html","9506f3cff5861a796a999ab3d21f055d"],["/post/db3d6a7.html","3280721600054f40880fe1507f359083"],["/post/e567270d.html","3a72dde28734ff106f87c3860ad65f19"],["/post/f77f0066.html","f472450946a0759ee3646c7ddb1f83a7"],["/schedule/index.html","1b27a649246e6552234b989a15795503"],["/sw-register.js","9b94158886e15e4e2f69ab208fdcdf4c"],["/tags/Docker/index.html","3db4449e5f7a0473625d9e538e03b4da"],["/tags/GANs/index.html","8eaf1f320617ef81350bc5ab73140921"],["/tags/MPC/index.html","0407d5c07cc6d245cdfc5ed6cf9e3ad7"],["/tags/Mysql/index.html","6248ecaf1d215526436973464a22ae1f"],["/tags/Scala/index.html","9f164c701c9cc911b1313408add236f9"],["/tags/index.html","1b252801026317ba41d183cbe52834b1"],["/tags/linux/index.html","fda17f9c3bcc72bfc9ab4fdde53616f3"],["/tags/元学习/index.html","34c5a4e11bc2ba67f714547065d0188f"],["/tags/决策规划/index.html","fd0642f7d1d46f8c0ca41f5c588a5d4b"],["/tags/分层强化学习/index.html","0f57e1865bf0ed0c11e19e84cbfc9f35"],["/tags/干货分享/index.html","4d19d9cd3a6b2b83877748e7ccf567e9"],["/tags/平台/index.html","04b5ddb3d3ddc1967bd7ecb22b2868e2"],["/tags/强化学习/index.html","2af2e13fc827e5a9bfab5ec25502594a"],["/tags/循环神经网络/index.html","519bfa7b5a516a999ad105b59fdb6f6d"],["/tags/数据结构与算法/index.html","c2708e98629672d630987d200efa8c8e"],["/tags/机器学习/index.html","e6f70861084b37ce5684aa1520fcbefe"],["/tags/深度学习基础/index.html","59e6bbc5bb182c1734de1d172f4d8587"],["/tags/购房/index.html","a389a3e90c5ab0370eff26374952e608"],["/tags/路径规划算法/index.html","444cee201757c43b5c726a76f503856f"],["/top/index.html","64d02d8deaae5822ca358b08ea533eb9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
