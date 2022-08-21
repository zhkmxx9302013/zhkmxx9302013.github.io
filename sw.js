/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d6ea7b998505bb0e42108cea0f30a74c"],["/archives/2019/01/index.html","7146e8599e85fda1d6898492ac27848b"],["/archives/2019/01/page/2/index.html","634f5193276c195ab8f385409c192146"],["/archives/2019/02/index.html","fa11ee15043056b7071bec9039ffea9c"],["/archives/2019/03/index.html","1d3e705136a50ac92b87a9b8a6b690bf"],["/archives/2019/04/index.html","0154197932d5d75bd7851a86aab17235"],["/archives/2019/06/index.html","830d7932c08b1ae1de124837a9f98ec6"],["/archives/2019/07/index.html","37f8b7380fdc21372ace359f159ae25a"],["/archives/2019/index.html","985e869e6a7e5029cf115e226f659051"],["/archives/2019/page/2/index.html","53fa3182defde6540a11f8410464d975"],["/archives/2019/page/3/index.html","c8353237ab1fd59443319406e01130af"],["/archives/2019/page/4/index.html","f459e4be4f0ae70578e8a817a36a9eca"],["/archives/index.html","ff7f23de11580e89710296ace6411ed4"],["/archives/page/2/index.html","f0e846023a55eef74fc4e71fbf9c2132"],["/archives/page/3/index.html","8a8816f596235080237aaddb127a0f62"],["/archives/page/4/index.html","2b4e554511d950d7a7cd6528a52e23cb"],["/categories/index.html","bd9fb9b72ae36d56582083b520fa9ad2"],["/css/main.css","4597b47a6dbd0bd61fb0026342ac9ba5"],["/friendlink/index.html","00a3fa29ef9ef8c7062bd0de4d9b2dc2"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5c6b0f4feeaa91908456b125c290886c"],["/images/apple-touch-icon-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/apple-touch-icon-next1.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","8c08ab3cf4fc2b45303067adc190d7db"],["/images/banner.png","7447839b93d7d67be2467469e2d32242"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-16x16-next1.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","9590c6368e0d216fcc869cedfdec158a"],["/images/favicon-32x32-next1.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","088d82b9acc3ee7956fab0c711498c72"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","f06ffce70453ad3a4d9611fdde5ca6c3"],["/lib/fancybox/README.html","6f038e019801325a15b32b5b3b7fd0d2"],["/lib/fancybox/source/jquery.fancybox.css","980b0ca09f135048f3ffd6d1f042345c"],["/lib/fancybox/source/jquery.fancybox.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/fancybox/source/jquery.fancybox.min.css","c873f743d0cc3d3833e9ae3447c4b75e"],["/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/lib/fancybox/source/jquery.fancybox.pack.js","6db039c0a0eb14f5631682b8e33ed9f9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/page/2/index.html","f6fdfaa68db0666a91229b77c8058dee"],["/page/3/index.html","9120dbcc0200129a9c96d559e014324a"],["/page/4/index.html","71caabf214a48dd0f299fa4c81e2bdc5"],["/post/0.html","116a4422d2d42936d07020c0b9c0c337"],["/post/10696.html","bc87d0c0940ace2164c8d6b7361cc2ff"],["/post/10845.html","7a1ecc128911d8bcada5bdf5bfc9733e"],["/post/17172.html","f3dcd31857e377db57b0c588d2306f98"],["/post/177e574f.html","96948d1a297f26b15f129fee12e3b819"],["/post/19fc17a4.html","ed0234e5f2e7fa205e8de2b92a154be5"],["/post/1eda57ac.html","6cdd72f9b0502aa4cbb40d2e98d3ed76"],["/post/1edace88.html","11e9b15489fb1d594d3fd88d3d95b6ba"],["/post/20206.html","81f8bc86515077bfb04dddbea7bf6f8e"],["/post/21152.html","19b61e70f864e1405dfaca99a24601e2"],["/post/22518.html","fc8147fc6b6af826419fa73218f1116d"],["/post/24621.html","6621f10c81f4a8f8d5fe91383b422f17"],["/post/2ee983bb.html","ac0de5df6784a6cb737bb55ef86c1926"],["/post/2f107dda.html","1ad372d75adc9cabbcfd45d267927bc6"],["/post/33864.html","c2987c70d7b61ecd11a7f24715ff232a"],["/post/34931.html","b9a3f728c4eb7d200f7ff2c1409afb50"],["/post/3cc694a0.html","9d20d3a8e7e46c5b6597c407ac90eeed"],["/post/3df84f8.html","41934cfbe67409ab0a97497ee8f2d36c"],["/post/46919.html","1229d325f26d0802e19e99d1792647d7"],["/post/4ed814e8.html","abc60e33c5f4adca6e2b4a77dbf501d0"],["/post/57092.html","65be7ad42b694deab681f3d2d87e3e34"],["/post/64ddacfe.html","37024effea1cd9fab49b214310a60d57"],["/post/76e180f5.html","1da7327a38a0e21f591f1bb1c4001c15"],["/post/7a6400a0.html","08423670f71dba4cc8d8699f8848a31e"],["/post/8cb158ac.html","50f1c60750937c149b95a78613379322"],["/post/97601234.html","0fd71da4803061fabbbdc9dc5dab9fab"],["/post/9e924caa.html","ff13a1ba39bdda30c3b57b910c727845"],["/post/a80d0031.html","76d60d4bd4e9140f86a7698b6b013d61"],["/post/b1fd4278.html","8c06b8f620e234d1a345180c47dd4abc"],["/post/b8a74939.html","0896376a5d6eb35dc6e3c76c6df82fb8"],["/post/c0e17f81.html","46218805e314813e9ed4b71e8711b2e6"],["/post/cf8dbd9a.html","91080751884189fe68b2dfbcb519df58"],["/post/d42ca19b.html","0e2ee836d7c5d07f0c731b3ab5a04bc9"],["/post/d42edc1.html","49a3c048b7567fd22e177be8483738df"],["/post/d4f958cd.html","516543dd3ccf9318fc2fe342ebb1fba9"],["/post/dad17569.html","7df610137904db9b97b08b11b8761a06"],["/post/db3d6a7.html","a69ab430c6433f67d12a8bd490e6647f"],["/post/e567270d.html","c241513e41e9b1d90d062aeec88bfce9"],["/post/f77f0066.html","9e26c20ea39c4bc00a82563b535c9c44"],["/schedule/index.html","b33f81d1663a246cd22164514a87be56"],["/sw-register.js","9652919106dca6bad0f37d743d8c38d8"],["/tags/Docker/index.html","0e87850503b9bca7bc7da27c834e0a90"],["/tags/GANs/index.html","49e2879942601f30548051bcca8849c2"],["/tags/Linux/index.html","95e7a0704a8f614f56240ad26860f26f"],["/tags/MPC/index.html","25f0ccef3de995d3046f1fd56f3fe579"],["/tags/Mysql/index.html","46801ff41f08c540482611093261ddcf"],["/tags/Scala/index.html","ca05764fd22f8613146c0c72be3db7c6"],["/tags/index.html","810a7ebb984e3fda645f2a83a8348dc8"],["/tags/元学习/index.html","79a08e9cfc4c9b14bb270ebaa8627fe8"],["/tags/决策规划/index.html","eb0e7384dc3578935aa16d65a78f255d"],["/tags/分层强化学习/index.html","647ab05b76e75cf9d0cbf2b303e4617b"],["/tags/干货分享/index.html","ded89d455ead0eaead684bb9a4ed9fca"],["/tags/平台/index.html","7a1111d74b859e98d6a40f10917e20dc"],["/tags/强化学习/index.html","a56df04f225aa8f0c1c209e627985103"],["/tags/循环神经网络/index.html","ddd7645d90999bdd3b40062067001e37"],["/tags/数据结构与算法/index.html","ab579e5e5dc8733e88d87b327527a987"],["/tags/机器学习/index.html","7432161ea3bbe47569f96a18b23ea7ac"],["/tags/深度学习基础/index.html","85d673057efa9d897489271e5ac7a968"],["/tags/路径规划算法/index.html","7dc9a92296c3c63b1f79fcff64e720c9"],["/top/index.html","074df081591dca6f0b8c2d07f4b520ab"]];
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
