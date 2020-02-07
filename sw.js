/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3c5bd2788e4da77fce2b0728ca0d951a"],["/archives/2019/01/index.html","ed555f675f20743a14e0c61138d165f7"],["/archives/2019/01/page/2/index.html","e092fc1d6ac479221cb500ffbb5fec67"],["/archives/2019/02/index.html","ecd2dd28d737eba2b703a60f1de74e14"],["/archives/2019/03/index.html","abd9b46772dafa473756c8d05fe98546"],["/archives/2019/04/index.html","d5044e685f3e56a3abb7b581e7008546"],["/archives/2019/06/index.html","3de4a5cdbc358b28157c6799b31fb943"],["/archives/2019/07/index.html","6dc81a700e31fd8a4e01bed03cf1f7d2"],["/archives/2019/index.html","d4494afd3a4dcae44a958b4f7a6d5819"],["/archives/2019/page/2/index.html","1f2b9944469c1b178b5bb4e73a26f76d"],["/archives/2019/page/3/index.html","89debebdff05193ad0aaba3ec7fd0672"],["/archives/2019/page/4/index.html","2df5f2decdf584dec465a76cd7b6b31a"],["/archives/index.html","aa2891ebdd3b0dac289452eb362c2348"],["/archives/page/2/index.html","bf03b0dc3e762b39a8f83e36bd780566"],["/archives/page/3/index.html","19988deecc7d1efda6610f4afdf1ba33"],["/archives/page/4/index.html","1d495d4c40cd8b36da1018a9500732b1"],["/categories/index.html","22e954268712ddd8e0606acca10b97bd"],["/css/main.css","1ddeac3f3014d3463c9a06019540496b"],["/friendlink/index.html","9a897faaa2d082819b1df627a1abb419"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5c6b0f4feeaa91908456b125c290886c"],["/images/apple-touch-icon-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/apple-touch-icon-next1.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8c08ab3cf4fc2b45303067adc190d7db"],["/images/banner.png","7447839b93d7d67be2467469e2d32242"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-16x16-next1.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-32x32-next1.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8e93c0af3b1e69970f131c284a72e1f4"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","4b75566469f4f1ea417323a6f8500d49"],["/page/3/index.html","f86ac01e41effaec399c22c4e881270f"],["/page/4/index.html","1ea93423acfeaa49fbe1d1ddd55d1524"],["/post/0.html","8db5ef1198a4fc3a104fa325a41c6821"],["/post/10696.html","6abb4cca5d643b5719b64407f9f045bf"],["/post/10845.html","17c6085183a14a0be9ad1edcefd63190"],["/post/17172.html","2e21219197cf1212d04f47e8267b2dfc"],["/post/177e574f.html","cba0f504957680bbbaeeaa63519a8ca4"],["/post/19fc17a4.html","79d30cf6a800462ec52036a224fd26b1"],["/post/1eda57ac.html","28e4890bb5aa16776cda2fed7405151f"],["/post/1edace88.html","27891ab039f6ca73d793c7830c2f95bb"],["/post/20206.html","5c9fa41db5f49a0e3fdbe1ff48056e48"],["/post/21152.html","cbaf3f4cc813d8af589d13b4a3c10629"],["/post/22518.html","7303faeaab0d982fdba0e6b1c89e27c5"],["/post/24621.html","8cc43aaa6249449dab754922bea55c0d"],["/post/2ee983bb.html","37c3cde5facc382f0321b56570747a13"],["/post/2f107dda.html","e958eab02fd3f27bd02ded077249a5be"],["/post/33864.html","f3dcd8718398625a8bedf2dc18b703de"],["/post/34931.html","f4fbd06c77c1ebe203cfd70e15af114b"],["/post/3cc694a0.html","e8aa454c1ee8a56d6108f9f7d39517dd"],["/post/3df84f8.html","1f3438a89e70c4e09eca7446e7e45042"],["/post/46919.html","a164b711deb0900f68b27fb9a857f819"],["/post/4ed814e8.html","f243cf73f99ea10f95aeab31043b8fb1"],["/post/57092.html","cdff87fd9f10f4ea115079b93193d6eb"],["/post/64ddacfe.html","3d5502fd012412cf9630050223d66cfd"],["/post/76e180f5.html","fe1ff1c23455cd2e63816e2adde9e237"],["/post/7a6400a0.html","80906e2c0b74776a501735a63155247d"],["/post/8cb158ac.html","f13ca9389fd8b9df53c1a0e1d601e1f2"],["/post/97601234.html","98f4c8ffefb5da8e6635db7f69e3b1c2"],["/post/9e924caa.html","65494a7bb5810c39055d218a48a5cf5a"],["/post/a80d0031.html","16b8e50a36b038ec45f0543c75b502aa"],["/post/b1fd4278.html","656f38e0a5a0fcfa65e393944b35fa6e"],["/post/b8a74939.html","bcb618550a4aa8c2979a0425f5620ca2"],["/post/c0e17f81.html","19c9c2fe2f07ab680372e6be3c517016"],["/post/cf8dbd9a.html","7606c28d9004d63a5307f960695c4ad7"],["/post/d42ca19b.html","6ffd3a20a69785cb7eac951be91e4027"],["/post/d42edc1.html","8d7b0c2f94224f3e1037ff40d19dcc44"],["/post/d4f958cd.html","c0690c46fe628ecdcf1ae1c72c6b4cda"],["/post/dad17569.html","ec0a54dd6272cb9519890a18db15f009"],["/post/db3d6a7.html","70181f7483945fdf8d0d4c1c5a7d6bf3"],["/post/e567270d.html","c71c672fcd7dd93a33b5a215d0219550"],["/post/f77f0066.html","1dfba122154a76df7f9ca197cfe593d3"],["/schedule/index.html","50072f257a4750dbd4bebabb8546f354"],["/sw-register.js","1ba447b7b1dd3a7eb2e91bf78b3e9ca5"],["/tags/Docker/index.html","b9dbc41e86c9b90449710c755c0c4909"],["/tags/GANs/index.html","8cb8e36db4e9ecfdac293bbdea236d1e"],["/tags/Linux/index.html","605534c3c841bf48eb4be0b45055bd31"],["/tags/MPC/index.html","47e525481629e166cc089b4fb6435a31"],["/tags/Mysql/index.html","8957d7384df86fa043e63cfd39d79768"],["/tags/Scala/index.html","92fde2b3ad07f2815ba22e793643b610"],["/tags/index.html","9be22ce0cc4f0d3372c8b5f7bf47e1b1"],["/tags/元学习/index.html","6f4a88559a88a83e5dffbae592befcf9"],["/tags/决策规划/index.html","a551d63cd448d4ec6f012eb3e641e4e8"],["/tags/分层强化学习/index.html","bf742860f16c837482f135e0947d1055"],["/tags/干货分享/index.html","f702d4c8b3f64dc1286ca8a5dd79bce8"],["/tags/平台/index.html","79d0ba7e389983af301e10dfee60f059"],["/tags/强化学习/index.html","e8080d98e82f8e122a5d3299e960f8eb"],["/tags/循环神经网络/index.html","f1732402f4a0442d3d2eab7197db8ed4"],["/tags/数据结构与算法/index.html","d0e81254a0f1e0ebe927381d0836f89d"],["/tags/机器学习/index.html","b88e91cda39bc832fe852718e687b808"],["/tags/深度学习基础/index.html","58e40440a03ad29cb25736eb35a0a305"],["/tags/路径规划算法/index.html","81d1824ba816251b2188bf92f0066376"],["/top/index.html","d99719cb24be98068eb4a0175afafbde"]];
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
