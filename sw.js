/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4e0ba8c35ceed8e4fbd6f92c402661d3"],["/archives/2019/01/index.html","184457d9106174abda44f9626b0df6b1"],["/archives/2019/01/page/2/index.html","c88fcad8dad7f209c988c17a8b645412"],["/archives/2019/02/index.html","be1fe848a0f25b031776a3e9d46ac5de"],["/archives/2019/03/index.html","a743bf929bc19e16df2b83f29db0143b"],["/archives/2019/04/index.html","130fb17ebd299433bae7b3c7c6b70138"],["/archives/2019/06/index.html","c3d2017b63d77ed4e8cc555f3bd8db15"],["/archives/2019/07/index.html","d069d774807fa909a329d00f35497378"],["/archives/2019/index.html","3b1ae83c4e714698dc6ec77d112bb2fc"],["/archives/2019/page/2/index.html","324611bdd6bb29ba1dba6f9b58e93119"],["/archives/2019/page/3/index.html","8d44d90724297a4a0615a666c6cb7999"],["/archives/2019/page/4/index.html","f22858e9ebd1b264426ed8c1e2a8b87e"],["/archives/index.html","f0bad5af384252a16d9de71a2cdc8525"],["/archives/page/2/index.html","abbdeffe858366260e3200a003b1e790"],["/archives/page/3/index.html","4453683ed982b9e69b7201d1812f43c9"],["/archives/page/4/index.html","14dc66bd6daad9842ed6a394a5295c1c"],["/categories/index.html","d0986f8365803333fd4de3bb8c28eb73"],["/css/main.css","494c05195a78ae4b215cb77267612f1f"],["/friendlink/index.html","215a21d7312929df5a6f1dd0fafadae3"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5c6b0f4feeaa91908456b125c290886c"],["/images/apple-touch-icon-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/apple-touch-icon-next1.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8c08ab3cf4fc2b45303067adc190d7db"],["/images/banner.png","7447839b93d7d67be2467469e2d32242"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-16x16-next1.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-32x32-next1.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","2fd4b435147638af03a56f1e4cc49752"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","f471ca8b2535c0f87e1828e3291a0a96"],["/page/3/index.html","a6b0cfc0887f57328449c5fa37ce9aea"],["/page/4/index.html","3c3e7b52eeae585a088081c940a8f6b5"],["/post/0.html","1b93a4d776483072b8f6c462def8a0b5"],["/post/10696.html","ee6815208790ff2a7d1c19bbab3820cf"],["/post/10845.html","8239e2a18f3c200c9ac7b65b8394c61c"],["/post/17172.html","654e8b9411e02609bcf46257e0e05075"],["/post/177e574f.html","0418600ba2faf07450b654e15d8f52ad"],["/post/19fc17a4.html","17e22c7c5a430e4ff0413a3a377391c7"],["/post/1eda57ac.html","bcf35d74440ba73f178cc1596aca5970"],["/post/1edace88.html","914e6ad4a67792b401ac3cddb5beeabf"],["/post/20206.html","38b61304801e21f921f29a084e007e4a"],["/post/21152.html","79c516e4d537447634123dd516a54ab4"],["/post/22518.html","84c85feb5a8d30147c27da268f37ce00"],["/post/24621.html","a5459ea2a27cf9d44141cc4bb9742481"],["/post/2ee983bb.html","05d7db2b6443345e9ccdd7f9b935e6ed"],["/post/2f107dda.html","85a4018f068a949eb9b4b5ff23924738"],["/post/33864.html","23bffd6ae6e9bfe65f7cea3373c526a3"],["/post/34931.html","44bf27ad02b3c0ba6e4d6bec93a26916"],["/post/3cc694a0.html","8717087b73fe962169cb374b45cff6da"],["/post/3df84f8.html","41f5200a41e696164d11cfc9424335a3"],["/post/46919.html","520f13896f843addfb5f638066ffe6a2"],["/post/4ed814e8.html","f3365b1dfdce391e9bfa94a9c3e6fde1"],["/post/57092.html","1ccd7f36e53765c847a2f7dfe97b78fc"],["/post/64ddacfe.html","611f07fc2a08794c176a74ae66a30e91"],["/post/76e180f5.html","889a8a36b4240c4fa8157f66584c1301"],["/post/7a6400a0.html","cb2caf54c58ce271a3caee080c851fa4"],["/post/8cb158ac.html","37d8c86741b3a7b8bc49afe4e8bee64b"],["/post/97601234.html","e8f031fe2b009086d6bfb3bc54b868cf"],["/post/9e924caa.html","4cb4005188c55a05109501905d1b3ce1"],["/post/a80d0031.html","3b02905cdd5daac16488a8cf4befa16a"],["/post/b1fd4278.html","5d07e3fc8e6d0f8e6cfcd6c9840da537"],["/post/b8a74939.html","3f7e6a5722eefd1b0e993913da1d258c"],["/post/c0e17f81.html","bb72535139c85ecbca9d8df101d7925b"],["/post/cf8dbd9a.html","cc4c12936764848f8b92b3f14f956d9e"],["/post/d42ca19b.html","36e6c060aebb73568b6d11eee8671727"],["/post/d42edc1.html","86408f67f5d30ae715ac5ab15c739af1"],["/post/d4f958cd.html","d30d8956036d6fb742c44234b10f0650"],["/post/dad17569.html","d2e33017e6938f73c500940db64bcc83"],["/post/db3d6a7.html","766965bc891697ac55d755c9c77fb5a1"],["/post/e567270d.html","7e0bf89d182dc588af71d7e8b5b13944"],["/post/f77f0066.html","ebf1767e2536730405abf2fe2a5b1ee9"],["/schedule/index.html","7282d7826798288d181665e286e0d318"],["/sw-register.js","a4f02fd26b03c1f40fbb6da9f41bd709"],["/tags/Docker/index.html","23e6a8f51831079680148b5ccedc9d64"],["/tags/GANs/index.html","d228a389e605bf7f813a9beade6e9c11"],["/tags/Linux/index.html","b16311daedd156fb8e5cea54ccdbf64f"],["/tags/MPC/index.html","1feb3fde22d7de6c099ee5d13aab5161"],["/tags/Mysql/index.html","d1a8017181358ebd0fbaad2fcde2fbe4"],["/tags/Scala/index.html","5ded3874df6d8c61caeadc91d3911abf"],["/tags/index.html","0e130696db5a4ae5a1fb572a3a0955e2"],["/tags/元学习/index.html","5c47f102289dfc1a3a3868c0f96f1539"],["/tags/决策规划/index.html","da02bd9333280ddab77b1e4521bee458"],["/tags/分层强化学习/index.html","15954536a8abadcba5db4b8e863cf367"],["/tags/干货分享/index.html","9d77e5ad68f50569359b116e2459106c"],["/tags/平台/index.html","0a8648ab90ed3883ed51fb2aaeba3144"],["/tags/强化学习/index.html","2069b1d6854614878faaacfdb8bf2aad"],["/tags/循环神经网络/index.html","ebd5cf412d19603d7211878a546f2e3c"],["/tags/数据结构与算法/index.html","af64a9653619ea759583ed2e6f70d306"],["/tags/机器学习/index.html","375847399bbf805db4cb43429a03cdb4"],["/tags/深度学习基础/index.html","157164bd24b13fb3dee94895f9673caf"],["/tags/路径规划算法/index.html","4a2d78ccb2c99d22323df9ccc89d5922"],["/top/index.html","43d45694a24654330bafdc3d8d7d0c63"]];
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
