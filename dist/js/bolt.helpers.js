!function(e,t,n){function r(e,t){return typeof e===t}function i(e){var t=S.className,n=w._config.classPrefix||"";if(C&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?S.className.baseVal=t:S.className=t)}function o(e,t){if("object"==typeof e)for(var n in e)z(e,n)&&o(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),a=w[r[0]];if(2==r.length&&(a=a[r[1]]),void 0!==a)return w;t="function"==typeof t?t():t,1==r.length?w[r[0]]=t:(!w[r[0]]||w[r[0]]instanceof Boolean||(w[r[0]]=new Boolean(w[r[0]])),w[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),w._trigger(e,t)}return w}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function d(e,n,r,i){var o,s,l,d,u="modernizr",p=a("div"),f=c();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=i?i[r]:u+(r+1),p.appendChild(l);return o=a("style"),o.type="text/css",o.id="s"+u,(f.fake?f:p).appendChild(o),f.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",d=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),s=n(p,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=d,S.offsetHeight):p.parentNode.removeChild(p),!!s}function u(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return!1===n?e[o]:(i=t[e[o]],r(i,"function")?u(i,n||t):i);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;null!==i?r&&(i=i.getPropertyValue(r)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+f(t[i])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,i,o){function c(){u&&(delete H.style,delete H.modElem)}if(o=!r(o,"undefined")&&o,!r(i,"undefined")){var d=h(e,i);if(!r(d,"undefined"))return d}for(var u,p,f,m,v,g=["modernizr","tspan","samp"];!H.style&&g.length;)u=!0,H.modElem=a(g.shift()),H.style=H.modElem.style;for(f=e.length,p=0;f>p;p++)if(m=e[p],v=H.style[m],s(m,"-")&&(m=l(m)),H.style[m]!==n){if(o||r(i,"undefined"))return c(),"pfx"!=t||m;try{H.style[m]=i}catch(e){}if(H.style[m]!=v)return c(),"pfx"!=t||m}return c(),!1}function g(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,i,o):(s=(e+" "+k.join(a+" ")+a).split(" "),p(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var b=[],E=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},w=function(){};w.prototype=x,w=new w;var T=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=T;var S=t.documentElement,C="svg"===S.nodeName.toLowerCase();C||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=x.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=E[e[y]];return t||(t={},b++,e[y]=b,E[b]=t),t}function o(e,n,r){if(n||(n=t),m)return n.createElement(e);r||(r=i(n));var o;return!(o=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||v.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return x.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(x,t.frag)}function s(e){e||(e=t);var r=i(e);return!x.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||a(e,r),e}function l(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(c(t)));return a}function c(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)(t=n[r]).specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function d(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}function u(e){for(var t=e.length;t--;)e[t].removeNode()}function p(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,c=e.parentWindow;return!S||e.printShived?e:(void 0===s[T]&&s.add(T),c.attachEvent("onbeforeprint",function(){t();for(var i,a,s,c=e.styleSheets,u=[],p=c.length,f=Array(p);p--;)f[p]=c[p];for(;s=f.pop();)if(!s.disabled&&w.test(s.media)){try{i=s.imports,a=i.length}catch(e){a=0}for(p=0;a>p;p++)f.push(i[p]);try{u.push(s.cssText)}catch(e){}}u=d(u.reverse().join("")),o=l(e),r=n(e,u)}),c.attachEvent("onafterprint",function(){u(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var f,m,h=e.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,y="_html5shiv",b=0,E={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){f=!0,m=!0}}();var x={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==h.shivCSS,supportsUnknownElements:m,shivMethods:!1!==h.shivMethods,type:"default",shivDocument:s,createElement:o,createDocumentFragment:function(e,n){if(e||(e=t),m)return e.createDocumentFragment();for(var o=(n=n||i(e)).frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o},addElements:function(e,t){var n=x.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),x.elements=n+" "+e,s(t)}};e.html5=x,s(t);var w=/^$|\b(?:all|print)\b/,T="html5shiv",S=!m&&function(){var n=t.documentElement;return!(void 0===t.namespaces||void 0===t.parentWindow||void 0===n.applyElement||void 0===n.removeNode||void 0===e.attachEvent)}();x.type+=" print",x.shivPrint=p,p(t),"object"==typeof module&&module.exports&&(module.exports=x)}(void 0!==e?e:this,t);var _="Moz O ms Webkit",k=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=k;var z;!function(){var e={}.hasOwnProperty;z=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),x._l={},x.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),w.hasOwnProperty(e)&&setTimeout(function(){w._trigger(e,w[e])},0)},x._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},w._q.push(function(){x.addTest=o}),w.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),w.addTest("bgpositionshorthand",function(){var e=a("a").style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t}),w.addTest("cssgradients",function(){for(var e,t="background-image:",n="",r=0,i=T.length-1;i>r;r++)e=0===r?"to ":"",n+=t+T[r]+"linear-gradient("+e+"left top, #9f9, white);";w._config.usePrefixes&&(n+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var o=a("a").style;return o.cssText=n,(""+o.backgroundImage).indexOf("gradient")>-1}),w.addTest("opacity",function(){var e=a("a").style;return e.cssText=T.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),w.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea"));var P=a("input"),N="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),j={};w.input=function(t){for(var n=0,r=t.length;r>n;n++)j[t[n]]=!!(t[n]in P);return j.list&&(j.list=!(!a("datalist")||!e.HTMLDataListElement)),j}(N);var A="search tel url email datetime date month week time datetime-local number range color".split(" "),L={};w.inputtypes=function(e){for(var r,i,o,a=e.length,s=0;a>s;s++)P.setAttribute("type",r=e[s]),(o="text"!==P.type&&"style"in P)&&(P.value="1)",P.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&P.style.WebkitAppearance!==n?(S.appendChild(P),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(P,null).WebkitAppearance&&0!==P.offsetHeight,S.removeChild(P)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?P.checkValidity&&!1===P.checkValidity():"1)"!=P.value)),L[e[s]]=!!o;return L}(A);var $="CSS"in e&&"supports"in e.CSS,M="supportsCSS"in e;w.addTest("supports",$||M);var F=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=F;var q=x.testStyles=d;q('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){w.addTest("generatedcontent",e.offsetHeight>=6)});var D={elem:a("modernizr")};w._q.push(function(){delete D.elem});var H={style:D.elem.style};w._q.unshift(function(){delete H.style}),x.testProp=function(e,t,r){return v([e],n,t,r)},x.testAllProps=g,x.testAllProps=y,w.addTest("backgroundsize",y("backgroundSize","100%",!0)),w.addTest("bgsizecover",y("backgroundSize","cover")),w.addTest("boxshadow",y("boxShadow","1px 1px",!0)),w.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),w.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),w.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=w._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n;w.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),q("#modernizr{width:0;height:0}"+(n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),w.addTest("csstransitions",y("transition","all",!0)),w.addTest("shapes",y("shapeOutside","content-box",!0)),function(){var e,t,n,i,o,a,s;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],(t=E[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],1===(s=a.split(".")).length?w[s[0]]=i:(!w[s[0]]||w[s[0]]instanceof Boolean||(w[s[0]]=new Boolean(w[s[0]])),w[s[0]][s[1]]=i),b.push((i?"":"no-")+s.join("-"))}}(),i(b),delete x.addTest,delete x.addAsyncTest;for(var O=0;O<w._q.length;O++)w._q[O]();e.Modernizr=w}(window,document),function(e){"use strict";function t(){o.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1],e.removeEventListener(n,t,!0)}var n="gesturestart",r="querySelectorAll",i=[1,1],o=r in e?e[r]("meta[name=viewport]"):[];(o=o[o.length-1])&&"addEventListener"in e&&(t(),i=[.25,1.6],e.addEventListener(n,t,!0))}(document),function(){function e(e){for(var t,n,r=0,i=e.length,o=[];r<i;r++)n={element:t=e[r],insert:t.getAttribute(c.insert)||"beforeend",media:t.getAttribute(c.media)||!1,supports:t.getAttribute(c.supports)||!1},o.push(n);return o}function t(e){e="string"==typeof e&&e,this.forEach(function(t){"supports"!==e&&e||!Modernizr||!t.supports||"complete"===t.supports||"failed"===t.supports||r.apply(t),"media"!==e&&e||!window.matchMedia||!t.media||"complete"===t.media||n.apply(t)})}function n(){return"failed"===this.supports?(this.media="complete",!1):!!window.matchMedia(this.media).matches&&(this.media="complete",a.apply(this),!0)}function r(){return i(this.supports.split(","))?(this.supports="complete",this.media||a.apply(this),!0):(this.supports="failed",!1)}function i(e){return e.length>1?o(e):Modernizr[e]}function o(e){var t=!0;return e.forEach(function(e){Modernizr[e]||(t=!1)}),t}function a(){for(var e=this.element.childNodes.length,t=0;t<e;t++)8===this.element.childNodes[t].nodeType&&s.apply(this,[t])}function s(e){this.element.insertAdjacentHTML(this.insert,this.element.childNodes[e].textContent),l.apply(this)}function l(){var e;if("function"==typeof CustomEvent)e=new CustomEvent("responsiveComment",{detail:{mediaQuery:this.media,insert:this.insert}});else{if(!document.createEvent)return!1;(e=document.createEvent("Event")).initEvent("responsiveComment",!0,!0)}this.element.dispatchEvent(e)}var c={media:"data-responsive-comment-media",supports:"data-responsive-comment-supports",insert:"data-responsive-comment-insert"};document.addEventListener("DOMContentLoaded",function(n){var r=e(document.querySelectorAll("["+c.media+"],["+c.supports+"]"));window.addEventListener("resize",t.bind(r,"media")),window.addEventListener("load",t.bind(r))})}();