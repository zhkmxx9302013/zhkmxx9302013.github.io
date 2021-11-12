/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a612c9a3e42c879d6d88b87b2ad681f4"],["/archives/2019/01/index.html","e7d5d4ac560f6019c49022bf2e13d8ea"],["/archives/2019/01/page/2/index.html","11baf83654c14bb7ee57c163a186fe47"],["/archives/2019/02/index.html","5726f0e354ee0d68c8c06f8a6fb78b23"],["/archives/2019/03/index.html","a07095dd27a6c2f519d471a0721b9c2c"],["/archives/2019/04/index.html","0f2b39330b0529d3d618c862bc3746f6"],["/archives/2019/06/index.html","74e6d5d7fd319c5fffb51727965cb9dc"],["/archives/2019/07/index.html","3d97c589bd466f70f67ea3e55cc93152"],["/archives/2019/index.html","70ae0d2abd9df01c3aab1a1c36e426da"],["/archives/2019/page/2/index.html","15f4d918730ebfa08bfbe6dbf281255c"],["/archives/2019/page/3/index.html","4a02517c50d7774f034ce5bc68d5be29"],["/archives/2019/page/4/index.html","b8a29648723336729dac1e82ca652ee6"],["/archives/2021/11/index.html","da1c2778f930df612845fb21d2077823"],["/archives/2021/index.html","755d0ef88594a3e6d044cb78e63b755a"],["/archives/index.html","fd8a20b8168a62ca1b7246a3faf3d325"],["/archives/page/2/index.html","560b39c9d0fb5bc435f206cf9c202ad5"],["/archives/page/3/index.html","a651498c9b31a46e8ead5c998c07c645"],["/archives/page/4/index.html","cb5af3e7883bfffda1f49b9afeca53a4"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","f994d026ad1927c7b0af207717c8ee2c"],["/categories/index.html","9b57257020bf65e70b31404ff27842aa"],["/categories/购房/index.html","9ed8766261a84a4d4b4345971408a3ce"],["/css/main.css","3d8e30a8142104cdfce773cfd92bc634"],["/friendlink/index.html","4ab2dac86597d4b172b479c1ff9db0a9"],["/games/index.html","120ac9983b4eaecdb91cd430b035a9ec"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5c6b0f4feeaa91908456b125c290886c"],["/images/apple-touch-icon-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/apple-touch-icon-next1.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8c08ab3cf4fc2b45303067adc190d7db"],["/images/banner.png","7447839b93d7d67be2467469e2d32242"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-16x16-next1.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-32x32-next1.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","815fa918cbc4fe3aaa18ecce7caab768"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/movies/index.html","5566d69394d2ce938b4cb676ad1f539a"],["/page/2/index.html","6aaad4c042314dbffddf6fe0a5b6fd68"],["/page/3/index.html","eb81b314a76dedc610b56a46697f695c"],["/page/4/index.html","ba880c9d2e57672379ff95f789201e37"],["/post/0.html","857d46af7ef4dcfbe1445d8877e49c66"],["/post/10696.html","92af942de9ec27d0c3d0caf6f1cf3ee3"],["/post/10845.html","c028f7cfdeaeb22e2341218926c61a86"],["/post/17172.html","5ccafe89525e2dc1932c32de03df3441"],["/post/177e574f.html","c4b790cf78ac06293bf83e5e3b2ee6c5"],["/post/19fc17a4.html","362c04165fe94258b1f637e4382a10ae"],["/post/1eda57ac.html","28b671fd5b8198f4ec92e31ef3ec924b"],["/post/1edace88.html","1b59ef7ec8641b506a55db853452f6da"],["/post/20206.html","b01d00d39f9c4ab8c6f1fda5324e5026"],["/post/21152.html","df9516f36058e6652932e610735641bf"],["/post/22518.html","0f135d667a5b4bab2cd95c88b9b61b14"],["/post/24621.html","fd29a38412109202c00e034d2a601929"],["/post/2ee983bb.html","c599eab4091ba0599a3679939c1f679c"],["/post/2f107dda.html","69aaf37853137a3819e223842cbe66a2"],["/post/33864.html","b10c634f2a94ed3499e92a96ccbd5d4d"],["/post/34931.html","233953e9527ee820e8f8731ed0c77452"],["/post/3cc694a0.html","2fbdb56ca39a2cc385dd3ae35e1bc7bf"],["/post/3df84f8.html","9fbcd9f7a9741304bba03d59cbf3eb59"],["/post/46919.html","d0ff4e6f3f5912a1b9efa85dc836222a"],["/post/4ed814e8.html","d41411f8a443dbf3222594d4289bde88"],["/post/57092.html","0fb2d27fe08728a561cd727a732c39fa"],["/post/64ddacfe.html","329991683d69b38839e16733cc2250f9"],["/post/76e180f5.html","6b2da1ce0fb03ef330394ec8665d94fd"],["/post/7a6400a0.html","e423ae5c459324571c6bfcb2c01e3f79"],["/post/8cb158ac.html","f87244147fb5e2382cc2854e3e2fd52d"],["/post/97601234.html","3b93411fd24e0d470a47d9a78e92a991"],["/post/9e924caa.html","03a2fa2524fa222b443578fbd04f21d7"],["/post/a80d0031.html","ceb6d928f93d8b670b731b722740a054"],["/post/b1fd4278.html","065705853928549b6a6401b6bcab8086"],["/post/b372d2fa.html","177a02459901a36c3b24d6854b565385"],["/post/b8a74939.html","0a56e8d81f6a88dca75ec39ce22a50ba"],["/post/c0e17f81.html","c2dd8e96d73211496774f1f01d115da3"],["/post/cf8dbd9a.html","88939d864d00c4a76a718f8264cb40ab"],["/post/d42ca19b.html","5de3990727e221636eb90e90fc3ce9b2"],["/post/d42edc1.html","83887da8013d23b577f4f46a9b2ee59d"],["/post/d4f958cd.html","a04b84a77a1eefbc7f8d4df1664174b2"],["/post/dad17569.html","42fd4f209f13104e9b0c580c8d0ca39e"],["/post/db3d6a7.html","520a4adff87afd8635f31124d7932722"],["/post/e567270d.html","cd5e70d2a866e83541d188239f9c1b57"],["/post/f77f0066.html","4d4dfe82e30c8f3b2939285b50746917"],["/schedule/index.html","bb360203752806ee99022d42f29cc58d"],["/sw-register.js","286c47b6ec1ca602d70c4e630e173293"],["/tags/Docker/index.html","4ec5bd5376e2fcad48cd00a749c45658"],["/tags/GANs/index.html","49430339ff364ad4aeba1f07249694bb"],["/tags/Linux/index.html","0091eceed9165e5cdcbfd0196e3e02a0"],["/tags/MPC/index.html","f7c7858ef884aabcbb6530e45aa35a75"],["/tags/Mysql/index.html","1351d7e89325d3ed3a182681cd1d5bdb"],["/tags/Scala/index.html","b1bd19983bb0b51134b21fef267ff642"],["/tags/index.html","25683419be249fa3d37343b30c07532b"],["/tags/元学习/index.html","8e995ca9b1efc125538fa0955022a67b"],["/tags/决策规划/index.html","b9630a9e5c438f1ce8d9ddb2add3cb8e"],["/tags/分层强化学习/index.html","a9f498fa088cc73f952ecb40a065927a"],["/tags/干货分享/index.html","a0a767c7d42e6c04bed7122fb4c866a3"],["/tags/平台/index.html","2ff0ae5cb49155161bf3a3fa7c255c08"],["/tags/强化学习/index.html","14b4cf8284e65395666603d49352d9d8"],["/tags/循环神经网络/index.html","9295301a06988a6a84dac1c8005cc71c"],["/tags/数据结构与算法/index.html","d852b703d2f9646aa1f4e32c4a007ddb"],["/tags/机器学习/index.html","5aba024ef9e0fb27687baf07a99aed15"],["/tags/深度学习基础/index.html","95c680a0eac6879e291807b764532cc0"],["/tags/购房/index.html","4dd70dbc8c01aefbd30284a13e912673"],["/tags/路径规划算法/index.html","b6edd9ee0392b4098f4fe0e731b35d84"],["/top/index.html","91d16e04949365e254798d435509cb21"]];
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
