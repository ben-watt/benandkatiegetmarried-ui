"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/benandkatiegetmarried-ui/index.html","55493f8d1fc0ba27fef81760b8761049"],["/benandkatiegetmarried-ui/static/css/main.0c1d9413.css","b0ee639ee8a7381626cfb0c690e66d63"],["/benandkatiegetmarried-ui/static/js/main.804f30ce.js","c30747d7f469b40bae8ad1aba67823a7"],["/benandkatiegetmarried-ui/static/media/animal1.2fc0101e.jpg","2fc0101e06834946fd94120accf71a74"],["/benandkatiegetmarried-ui/static/media/animal1.8f7ffa08.png","8f7ffa08218e60ca0de12f3a8b83e6ac"],["/benandkatiegetmarried-ui/static/media/animal2.809c36fb.jpg","809c36fbe7e34cc9e7a4b985e2a6d2d4"],["/benandkatiegetmarried-ui/static/media/benFace.d10e9661.png","d10e9661401aa424d7cc43c110cb5f15"],["/benandkatiegetmarried-ui/static/media/catriona.09b3e8f0.png","09b3e8f0e11f39c3f829c3eb6a764044"],["/benandkatiegetmarried-ui/static/media/david3.42df2944.png","42df2944cf752d379e613371796cea41"],["/benandkatiegetmarried-ui/static/media/dress.ead418fa.svg","ead418fae0b4596f0dfdd2b763a7fb49"],["/benandkatiegetmarried-ui/static/media/eric4.be6af06c.png","be6af06c42b8f8a3e9a06914e2b64e5b"],["/benandkatiegetmarried-ui/static/media/img7.b49c86c0.png","b49c86c0a7a15c9e3ad9d012c7a3bde0"],["/benandkatiegetmarried-ui/static/media/img9.2d4553aa.png","2d4553aa8d6eb01a4c41890643b35c84"],["/benandkatiegetmarried-ui/static/media/janine.af4c216d.png","af4c216d1ec6d9c9004b27332b3c2b12"],["/benandkatiegetmarried-ui/static/media/katieFace.c405dbfa.png","c405dbfa83bf1cf2315e9f4ffa40132a"],["/benandkatiegetmarried-ui/static/media/loading.61aea1a1.svg","61aea1a1c49401f47af91e0343b0109e"],["/benandkatiegetmarried-ui/static/media/pic2.4d5811ba.jpg","4d5811ba73d46132f7c9bf22a27218cb"],["/benandkatiegetmarried-ui/static/media/sam4.32cee0c2.png","32cee0c237d5f909c579fe5a4f6ca6e6"],["/benandkatiegetmarried-ui/static/media/scott.9bdd02be.png","9bdd02bec0db47f6aaea9296ce49b4d0"],["/benandkatiegetmarried-ui/static/media/soph5.b5be27b9.png","b5be27b94af734cfdb379e07305eddd3"],["/benandkatiegetmarried-ui/static/media/suit.0face0bf.svg","0face0bfc070080eed025daaf8f91055"],["/benandkatiegetmarried-ui/static/media/trish3.afba4d27.png","afba4d277961f5cd7e55bc44eeb19dc7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),i=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/benandkatiegetmarried-ui/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});