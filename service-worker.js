"use strict";var precacheConfig=[["/duolingo/index.html","218e22c2b1c278c837753399e403947c"],["/duolingo/static/css/main.613552ab.css","3d40ebe0f5362ec7ed9adab7593baa89"],["/duolingo/static/js/main.5d1f325c.js","a046ba5b9f940af1edcc0a040bd7648a"],["/duolingo/static/media/arrowLeft.7db3f5d2.svg","7db3f5d24256ec83d3984d0a90141270"],["/duolingo/static/media/arrowLeftBlack.75ac5d60.svg","75ac5d6039146bd3b4147ab27d88eb25"],["/duolingo/static/media/arrowUpCircle.4fc690ed.svg","4fc690ed6f52db36128fc82dbda8d55e"],["/duolingo/static/media/chartBar.bc80627c.svg","bc80627c1bc111624401cdcdd35ecc88"],["/duolingo/static/media/chartLine.57ee1add.svg","57ee1add416c36e304853e7c857779be"],["/duolingo/static/media/cloud.c463bf98.svg","c463bf98e4be3e1df43bf9a92362020f"],["/duolingo/static/media/dotCircle.43b3349e.svg","43b3349e7c5942b8cf439964c2219251"],["/duolingo/static/media/facebook.6e44d7bf.svg","6e44d7bf6d12c86731b097cb89ab59e7"],["/duolingo/static/media/gamepad.89dab58d.svg","89dab58dfffe167c8aa0cfa83e654502"],["/duolingo/static/media/google.b916321a.svg","b916321ac01d51af119b4f966b4406b9"],["/duolingo/static/media/heart.a9aefbbb.svg","a9aefbbb0fa68bbcbb548c7475505124"],["/duolingo/static/media/trophy.97f541b7.svg","97f541b7c7aca3878b643ae3545a8af9"],["/duolingo/static/media/volumeUp.98bfff3e.svg","98bfff3e8e938ab50162648c834f5f34"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/duolingo/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});