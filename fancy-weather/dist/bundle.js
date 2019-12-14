!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(2)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){},function(e,t,n){"use strict";var o,r={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(f(o.parts[a],t))}else{for(var s=[];a<o.parts.length;a++)s.push(f(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=n.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var d,h=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function g(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function f(e,t){var n,o,r;if(t.singleton){var i=p++;n=m||(m=l(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=l(t),o=g.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i],l=r[a.id];l&&(l.refs--,o.push(l))}e&&c(s(e,t),t);for(var d=0;d<o.length;d++){var h=o[d];if(0===h.refs){for(var u=0;u<h.parts.length;u++)h.parts[u]();delete r[h.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);function o(e){return Math.round(e-273.15)}function r(e){return i(o(e))}function i(e){return 1.8*e+32}function a(e){return 5/9*(e-32)}const s=document.getElementById("searchBtn"),c=document.getElementById("reloadBtn"),l=document.getElementById("btnDeg"),d=document.getElementById("audioSearchBtn");let h=new class{constructor(e,t,n){this.latitude=e,this.longitude=t,this.city=n}getPosition(){navigator.geolocation.getCurrentPosition(e=>{let t=e.coords;this.latitude=t.latitude,this.longitude=t.longitude,this.renderCoord(),this.getNameArea()},(function(e){console.log("error of location"),console.warn(`ERROR(${e.code}): ${e.message}`)}))}getDeg(e){return Math.trunc(e)}getMinutes(e){return Math.trunc(60*(e-this.getDeg(e)))}renderCoord(){const e=document.getElementById("latitude"),t=document.getElementById("longitude");e.innerHTML=`${this.getDeg(this.latitude)}&deg; ${this.getMinutes(this.latitude)}&prime;`,t.innerHTML=`${this.getDeg(this.longitude)}&deg; ${this.getMinutes(this.longitude)}&prime;`}renderCity(){document.getElementById("city").innerText=this.city}renderCountry(){document.getElementById("country").innerText=this.country}getNameArea(){fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${this.longitude},${this.latitude}&kind=locality&lang=en_RU&results=1`).then(e=>e.json()).then(e=>{this.city=e.response.GeoObjectCollection.featureMember[0].GeoObject.name,this.country=e.response.GeoObjectCollection.featureMember[0].GeoObject.description,this.renderCity(),this.renderCountry()})}async getDataBySearch(e){fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=b58ea381-e37e-43d1-95fc-ec3da56fccd0&format=json&geocode=${e}&kind=locality&lang=en_RU&results=1`).then(e=>e.json()).then(e=>{this.city=e.response.GeoObjectCollection.featureMember[0].GeoObject.name,this.country=e.response.GeoObjectCollection.featureMember[0].GeoObject.description;let t=e.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ");this.latitude=t[0],this.longitude=t[1],this.renderCity(),this.renderCountry(),this.renderCoord()})}async getCity(){let e=await fetch("https://ipinfo.io?token=a4998744625b7b",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({})}),t=await e.json();this.city=t.city}},u=new class{constructor(){this.myMap}init(e){this.location=e}async render(){let e=()=>{this.myMap=new ymaps.Map("map",{center:[this.location.latitude,this.location.longitude],zoom:10})};try{ymaps.ready(e)}catch(e){console.log("error Map"),console.warn(`ERROR(${e.code}): ${e.message}`)}}reRender(){this.myMap.setCenter([this.location.longitude,this.location.latitude],6)}},g=new class{getDate(e=0){let t=new Date,n=t.getTime()+60*t.getTimezoneOffset()*1e3,o=new Date(n+1e3*e);return new Intl.DateTimeFormat("en",{weekday:"short",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}).format(o)}render(e){document.getElementById("date").innerHTML=this.getDate(e)}},m=new class{constructor(){this.temp,this.condition,this.windValue,this.humidity,this.sunrise,this.sunset,this.main,this.timeZone}init(e){this.location=e}async getWeather(e=this.location.city){try{let t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&lang=en&APPID=529de013e9d3c2c6528f81831ab3aa2f`),n=await t.json();console.log(n),localStorage.getItem("unit")||localStorage.setItem("unit","C"),this.temp="C"===localStorage.getItem("unit")?Math.round(o(n.main.temp)):Math.round(r(n.main.temp)),this.condition=n.weather[0].description,this.main=n.weather[0].main,this.windValue=n.wind.speed,this.humidity=n.main.humidity,this.sunrise=n.sys.sunrise,this.sunset=n.sys.sunset,this.timeZone=n.timezone,this.getIcon(n.weather[0].icon)}catch(e){console.log("error of getWeather")}}async getForecast(){try{let e=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.location.city}&cnt=26&lang=en&APPID=529de013e9d3c2c6528f81831ab3aa2f`),t=await e.json();this.renderForecast(t.list)}catch(e){console.log("error of forecast"),console.warn(`ERROR(${e.code}): ${e.message}`)}}async getIcon(e,t=!1){try{let n=await fetch(`http://openweathermap.org/img/wn/${e}@2x.png`),o=await n.blob();t?this.renderForecastIcon(o,t-1):this.renderIcon(o)}catch(e){console.log("error of geticon"),console.warn(`ERROR(${e.code}): ${e.message}`)}}renderIcon(e){const t=document.querySelector(".forecast");let n=document.createElement("img");n.classList.add("mainDegImg"),t.append(n),n.src=URL.createObjectURL(e)}renderForecastIcon(e,t){const n=document.querySelectorAll(".next-forecast__day");let o=document.createElement("img");o.classList.add("forecastImg"),n[t].append(o),o.src=URL.createObjectURL(e)}renderForecast(e){const t=document.getElementsByClassName("next-forecast__degr");for(let n=0;n<3;n++)t[n].innerHTML="C"===localStorage.getItem("unit")?Math.round(o(e[8*(n+1)].main.temp)):Math.round(r(e[8*(n+1)].main.temp)),this.getIcon(e[8*(n+1)].weather[0].icon,n+1)}render(){const e=document.getElementById("degToday"),t=document.getElementById("cast"),n=(document.getElementById("pressure"),document.getElementById("wind")),o=document.getElementById("humidity");e.innerText=this.temp,t.innerText=this.condition,n.innerText=this.windValue,o.innerText=this.humidity}},p=new class{constructor(){this.photoArray}init(e){this.weather=e}async getWallpaper(){console.log(this.getDayOrNight(),this.weather.main,this.getSeason());const e=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3ae54ce17ef1d06ba9a9aeb7a6e1579f&tags=\n    ${this.getDayOrNight(),this.weather.main}&tag_mode=all&sort=relevance&per_page=20&content_type=4&format=json&nojsoncallback=1`;try{let t=await fetch(e),n=await t.json();this.photoArray=n.photos.photo}catch(e){throw new Error(e)}}render(){let e=Math.floor(19*Math.random()),t=this.photoArray[e],n="http://farm"+t.farm+".static.flickr.com/"+t.server+"/"+t.id+"_"+t.secret+"_b.jpg";console.log("hi"),document.querySelector(".container").style.backgroundImage=`url(${n}) `}getNow(){return new Date}getDayOrNight(){return this.getNow()>this.weather.sunrise&&this.getNow()<this.weather.sunset?"day":"night"}getSeason(){return 11===this.getNow().getMonth()||this.getNow().getMonth()<2?"winter":this.getNow().getMonth()>1&&this.getNow().getMonth()<5?"spring":this.getNow().getMonth()>4&&this.getNow().getMonth()<8?"summer":"fall"}},f=new class{init(e,t,n,o,r){this.location=e,this.weather=t,this.wallpaper=n,this.map=o,this.dateNow=r}async searchApply(){const e=document.getElementById("searchInput");let t=e.value;e.value="",this.location.getDataBySearch(t),await this.weather.getWeather(t),await this.wallpaper.getWallpaper(),this.wallpaper.render(),await this.weather.render(),await this.weather.getForecast(),this.map.reRender(),console.log(this.weather.timeZone,777),this.dateNow.render(this.weather.timeZone)}},y=new class{constructor(){this.unit=localStorage.getItem("unit"),this.btnC=document.getElementById("btnC"),this.btnF=document.getElementById("btnF")}madeToggleBtnActive(){localStorage.getItem("unit")||this.btnC.classList.add("btn__deg--active"),"C"===localStorage.getItem("unit")?this.btnC.classList.add("btn__deg--active"):this.btnF.classList.add("btn__deg--active")}toggleToC(){localStorage.setItem("unit","C"),this.btnC.classList.add("btn__deg--active"),this.btnF.classList.remove("btn__deg--active")}toggleToF(){localStorage.setItem("unit","F"),this.btnF.classList.add("btn__deg--active"),this.btnC.classList.remove("btn__deg--active")}reRender(){this.reRenderMain(),this.reRenderForecast()}reRenderMain(){const e=document.getElementById("degToday");let t="F"===localStorage.getItem("unit")?a(e.innerText):i(e.innerText);e.innerText=Math.round(t)}reRenderForecast(){const e=document.getElementsByClassName("next-forecast__degr");for(let t=0;t<3;t++)"F"===localStorage.getItem("unit")?e[t].innerText=Math.round(a(e[t].innerText)):e[t].innerText=Math.round(i(e[t].innerText))}},w=new class{speechRecognitionInit(){console.log("l"),window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const e=new SpeechRecognition;e.interimResults=!0;document.getElementById("searchInput");e.addEventListener("result",e=>{console.log(e)}),e.start}};!async function(){y.madeToggleBtnActive(),h.getPosition(),await h.getCity(),u.init(h),await u.render(),g.render(),m.init(h),await m.getWeather(),p.init(m),await p.getWallpaper(),p.render(),await m.render(),await g.render(m.timeZone),await m.getForecast(),f.init(h,m,p,u,g)}(),setInterval(()=>{g.render(m.timeZone)},6e3),s.addEventListener("click",e=>{f.searchApply()}),c.addEventListener("click",e=>{p.render()}),l.addEventListener("click",e=>{"btnC"===e.target.id&&(console.log(localStorage.getItem("unit")),"F"===localStorage.getItem("unit")&&y.reRender(),y.toggleToC()),"btnF"===e.target.id&&(console.log(localStorage.getItem("unit")),"C"===localStorage.getItem("unit")&&y.reRender(),y.toggleToF())}),d.addEventListener("click",e=>{w.speechRecognitionInit()})}]);