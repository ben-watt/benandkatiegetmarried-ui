"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/benandkatiegetmarried-ui/index.html","62c135f2d5c01e53dd1431a3b7cb8e6e"],["/benandkatiegetmarried-ui/static/css/main.7b742fe2.css","fc5781c0caeae2c40dd6f9010c796afd"],["/benandkatiegetmarried-ui/static/js/main.933c5a63.js","e05172a102040e0ec0e65ffd1fbe0e78"],["/benandkatiegetmarried-ui/static/media/benFace.d001f106.png","d001f106bf8b7465a108066c03d8f2de"],["/benandkatiegetmarried-ui/static/media/catriona2.82f6e2e5.png","82f6e2e576991da7185a6337b69f86d2"],["/benandkatiegetmarried-ui/static/media/david3.912e56aa.png","912e56aa008bd62b9afd14a39ccaf876"],["/benandkatiegetmarried-ui/static/media/eric4.b6df508b.png","b6df508b37b68a2ddc5a72933d39a8b9"],["/benandkatiegetmarried-ui/static/media/janine.353fc928.png","353fc928b2958c36b2232a658dc0930f"],["/benandkatiegetmarried-ui/static/media/katieFace.cf172edc.png","cf172edc7f7c4d3d8eacec478c25750e"],["/benandkatiegetmarried-ui/static/media/loading.61aea1a1.svg","61aea1a1c49401f47af91e0343b0109e"],["/benandkatiegetmarried-ui/static/media/pic2.1b92db2e.jpg","1b92db2e84ac667e09ff011c39f071ca"],["/benandkatiegetmarried-ui/static/media/sam3.2e43ccb0.png","2e43ccb03ab88810128275fc3b2f9813"],["/benandkatiegetmarried-ui/static/media/scott.8632e403.png","8632e4038e758b90c566838a1ae5b653"],["/benandkatiegetmarried-ui/static/media/soph5.36770e1a.png","36770e1a8d7a7fd8e2e257aca2dd6f07"],["/benandkatiegetmarried-ui/static/media/texture-background.f2cff824.png","f2cff8242829f9afef30345bc693b358"],["/benandkatiegetmarried-ui/static/media/trish3.8de4e0ce.png","8de4e0ce3fe25b0a68f420d7126695ce"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/benandkatiegetmarried-ui/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});