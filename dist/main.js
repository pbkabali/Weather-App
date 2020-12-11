(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(165, 90, 235);\n}\n\ninput {\n  margin: 20px;\n  padding: 10px;\n}\n\nbutton {\n  padding: 10px;\n  margin: 20px;\n}\n\n.property {\n  font-weight: bold;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.text-margin {\n  margin: 1vw 3vw 3vw 3vw;\n}\n\n.display-none {\n  display: none;\n}\n\n.loading {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 5;\n  background-color: rgb(95, 93, 93);\n  background-color: rgba(95, 93, 93, 0.4);\n  color: #fff;\n  font-size: xx-large;\n}\n\n.form-heading {\n  text-align: center;\n  padding-top: 10vh;\n  color: gold;\n}\n\n.data-section {\n  background-color: aqua;\n  flex-direction: column;\n  border-radius: 5px;\n  min-width: 80%;\n}\n\n.actions-section {\n  margin: 5vh 0 5vh 0;\n}\n\n.temp-switch {\n  border-bottom: 1px solid gold;\n  border-radius: 3px;\n  margin-left: 40px;\n  color: rgb(165, 90, 235);\n}\n\n.temp-switch:hover {\n  cursor: pointer;\n  color: rgb(204, 97, 48);\n}\n\n.bottom-margin {\n  margin-bottom: 1vh;\n}\n\n.notice-modal {\n  z-index: 10;\n}\n\n.notice {\n  width: 40%;\n  position: fixed;\n  z-index: 10;\n  padding: 20px;\n  left: 30%;\n  top: 5vh;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  border-radius: 5px;\n  color: gainsboro;\n  font-size: large;\n}\n\n.close-btn {\n  display: inline-block;\n  padding: 0 5px 0 5px;\n  border: 1px gold solid;\n  border-radius: 2px;\n  margin: 5px;\n}\n\n.close-btn:hover {\n  color: #fff;\n  cursor: pointer;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=a(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(m)):i.push({identifier:l,updater:f(m,n),references:1}),o.push(l)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var u=null,g=0;function f(e,n){var t,o,r;if(n.singleton){var i=g++;t=u||(u=d(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=d(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(28);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const r="http://api.openweathermap.org/data/2.5/weather?",i="4347f0deab7bf2bc00588ae06c3ea1b0",a="Show temperature on Fahrenheit scale";let c="";window.changeScale=()=>{const e=document.getElementById("temperature"),n=document.getElementById("temp-switch"),t=document.getElementById("temp-units");if(parseFloat(c)===parseFloat(e.innerText)){const o=9*c/5+32;e.innerText=o.toFixed(2),t.innerText="℉;",n.innerHTML="Show temperature on Celcius scale"}else e.innerText=c,t.innerText="℃",n.innerHTML=a};const d=()=>{document.getElementById("notice").classList.toggle("display-none")},s=e=>{d(),document.getElementById("notice-msg").innerText=e},l=()=>{document.getElementById("loading-component").classList.toggle("display-none")},p=e=>{const n=document.getElementById("data-div");let t;if(l(),"name"===e){const e=document.getElementById("name").value;t=fetch(`${r}q=${e}&appid=${i}&units=${"metric"}`,{mode:"cors"}).then((e=>e.json()))}else"coordinates"===e&&(o=document.getElementById("latitude").value,d=document.getElementById("longitude").value,t=fetch(`${r}lat=${o}&lon=${d}&appid=${i}&units=metric`,{mode:"cors"}).then((e=>e.json())));var o,d;t.then((e=>{var t;200===e.cod?n.innerHTML=(e=>{const{name:n,country:t,condition:o,temperature:r,pressure:i,humidity:d,windSpeed:s}=e;return c=r,`<h1 class="text-margin">Weather information for ${n}, ${t}</h1>\n  <div class="text-margin">\n    <p class="bottom-margin"><span class = "property">Name: </span>${n}</p>\n    <p class="bottom-margin"><span class = "property">Country code: </span>${t}</p>\n    <p class="bottom-margin"><span class = "property">General weather condition: </span>${o}</p>\n    <p class="bottom-margin">\n      <span class = "property">Temperature: </span>\n      <span id = "temperature">${r}</span>\n      <span id = "temp-units">℃</span>\n      <span id = "temp-switch" class = "temp-switch" onclick="changeScale()" >${a}</span>\n    </p>\n    <p class="bottom-margin"><span class = "property">Pressure: </span>${i} Pa</p>\n    <p class="bottom-margin"><span class = "property">Humidity: </span>${d} %</p>\n    <p class="bottom-margin"><span class = "property">Wind speed: </span>${s} km/hr</p>\n  </div>\n`})({condition:(t=e).weather[0].description,temperature:t.main.temp,pressure:t.main.pressure,humidity:t.main.humidity,windSpeed:t.wind.speed,country:t.sys.country,name:t.name}):s(`Oops! ${e.message}`),l()})).catch((e=>{s(`Oops! ${e}`)}))},m="Enter a city name to get it's weather details",u="Request by coordinates instead",g=()=>{const e=document.createElement("div");e.id="name-form";const n=document.createElement("input");n.placeholder="Enter a city name",n.id="name";const t=document.createElement("button");return t.innerText="Request Weather data",t.onclick=()=>p("name"),e.append(n,t),e},f=()=>{const e=document.getElementById("form-div"),n=document.getElementById("form-heading"),t=document.getElementById("switch-form");document.getElementById("name-form")?(e.innerText="",e.appendChild((()=>{const e=document.createElement("div");e.id="coord-form";const n=document.createElement("input");n.placeholder="Enter Latitude (deg)",n.id="latitude";const t=document.createElement("input");t.placeholder="Enter Longitude (deg)",t.id="longitude";const o=document.createElement("button");return o.innerText="Request Weather data",o.onclick=()=>p("coordinates"),e.append(n,t,o),e})()),n.innerText="Enter coordinates to get the location's weather details",t.innerText="Request by name instead"):(e.innerText="",e.appendChild(g()),n.innerText=m,t.innerText=u)},h=g,b=document.getElementById("container");(()=>{const e=document.createElement("h2");e.id="form-heading",e.classList.add("form-heading"),e.innerText=m;const n=document.createElement("div");n.id="actions-div",n.classList.add("flex","actions-section");const t=document.createElement("div");t.classList.add("flex"),t.id="form-div",t.appendChild(h());const o=document.createElement("button");o.id="switch-form",o.innerText=u,o.onclick=f,n.append(t,o);const r=document.createElement("div");r.classList.add("flex");const i=document.createElement("div");i.classList.add("flex","data-section"),i.id="data-div",r.appendChild(i),b.append((()=>{const e=document.createElement("div");e.id="notice",e.classList.add("loading","notice-modal","display-none");const n=document.createElement("div");n.classList.add("notice");const t=document.createElement("p");t.id="notice-msg";const o=document.createElement("div");return o.classList.add("close-btn"),o.innerText="Close",o.onclick=()=>d(),n.append(t,o),e.appendChild(n),e})(),(()=>{const e=document.createElement("div");return e.id="loading-component",e.innerText="Loading ...",e.classList.add("loading","flex","display-none"),e})(),e,n,r)})()})()})();