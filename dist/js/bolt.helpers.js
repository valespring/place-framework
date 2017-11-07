/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgpositionshorthand-bgsizecover-boxshadow-boxsizing-cssgradients-csstransforms-csstransforms3d-csstransitions-generatedcontent-input-inputtypes-opacity-placeholder-shapes-video-addtest-domprefixes-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(C?"svg":"body"),e.fake=!0),e}function d(e,n,r,o){var i,a,l,c,d="modernizr",f=s("div"),p=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:d+(r+1),f.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=c,w.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function g(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function v(e,t,o,i){function a(){d&&(delete q.style,delete q.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=g(e,o);if(!r(u,"undefined"))return u}for(var d,f,p,m,h,v=["modernizr","tspan","samp"];!q.style&&v.length;)d=!0,q.modElem=s(v.shift()),q.style=q.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],h=q.style[m],l(m,"-")&&(m=c(m)),q.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{q.style[m]=o}catch(y){}if(q.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+M.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+k.join(a+" ")+a).split(" "),p(s,t,n))}function b(e,t,r){return y(e,n,n,t,r)}var x=[],S=[],T={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr;var E=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=E;var w=t.documentElement,C="svg"===w.nodeName.toLowerCase();C||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=w.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),w.elements=n+" "+e,c(t)}function i(e){var t=E[e[S]];return t||(t={},T++,e[S]=T,E[T]=t),t}function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||b.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function c(e){e||(e=t);var r=i(e);return!w.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(d(t)));return a}function d(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+_+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!k||e.printShived?e:("undefined"==typeof s[_]&&s.add(_),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,c=[],d=l.length,p=Array(d);d--;)p[d]=l[d];for(;s=p.pop();)if(!s.disabled&&C.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(d=0;a>d;d++)p.push(i[d]);try{c.push(s.cssText)}catch(m){}}c=f(c.reverse().join("")),o=u(e),r=n(e,c)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,g,v="3.7.3",y=e.html5||{},b=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,S="_html5shiv",T=0,E={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,g=!0}}();var w={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:o};e.html5=w,c(t);var C=/^$|\b(?:all|print)\b/,_="html5shiv",k=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();w.type+=" print",w.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=w)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",k=T._config.usePrefixes?_.toLowerCase().split(" "):[];T._domPrefixes=k;var P;!function(){var e={}.hasOwnProperty;P=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=a}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("bgpositionshorthand",function(){var e=s("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=E.length-1;i>o;o++)e=0===o?"to ":"",r+=t+E[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var z=s("input"),N="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),j={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)j[t[n]]=!!(t[n]in z);return j.list&&(j.list=!(!s("datalist")||!e.HTMLDataListElement)),j}(N);var $="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};Modernizr.inputtypes=function(e){for(var r,o,i,a=e.length,s="1)",l=0;a>l;l++)z.setAttribute("type",r=e[l]),i="text"!==z.type&&"style"in z,i&&(z.value=s,z.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&z.style.WebkitAppearance!==n?(w.appendChild(z),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(z,null).WebkitAppearance&&0!==z.offsetHeight,w.removeChild(z)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?z.checkValidity&&z.checkValidity()===!1:z.value!=s)),A[e[l]]=!!i;return A}($);var F="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;Modernizr.addTest("supports",F||L);var M=T._config.usePrefixes?_.split(" "):[];T._cssomPrefixes=M;var D=T.testStyles=d;D('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)});var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var q={style:O.elem.style};Modernizr._q.unshift(function(){delete q.style});T.testProp=function(e,t,r){return v([e],n,t,r)};T.testAllProps=y,T.testAllProps=b,Modernizr.addTest("backgroundsize",b("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",b("backgroundSize","cover")),Modernizr.addTest("boxshadow",b("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",D(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",b("transition","all",!0)),Modernizr.addTest("shapes",b("shapeOutside","content-box",!0)),o(),i(x),delete T.addTest,delete T.addAsyncTest;for(var B=0;B<Modernizr._q.length;B++)Modernizr._q[B]();e.Modernizr=Modernizr}(window,document);
// Improved version of JavaScript fix for the iOS viewport scaling bug. See https://gist.github.com/901295
(function (doc) {

    "use strict";

    // Variables
    var addEvent = "addEventListener",
        type = "gesturestart",
        qsa = "querySelectorAll",
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    // Functions
    function fix() {
        meta.content = "width=device-width,minimum-scale=" + scales[0] + ",maximum-scale=" + scales[1];
        doc.removeEventListener(type, fix, true);
    }

    // Create
    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
        fix();
        scales = [0.25, 1.6];
        doc[addEvent](type, fix, true);
    }
}(document));
/**
* Responsive Comments
* -------------------
* A client-side solution to conditional loading in #RWD
* http://responsivecomments.com/
*
* @author Adam Chambers (@chambaz)
* @author Digital Surgeons (@digitalsurgeons)
* @license MIT
*/
(function() {

	// data attributes
	var attrs = {
		'media' : 'data-responsive-comment-media',
		'supports' : 'data-responsive-comment-supports',
		'insert' : 'data-responsive-comment-insert'
	};

	// cache responsive comments nodes and data
	function prepNodes(nodes) {
		var i = 0, l = nodes.length, mqs = [], el, ins, obj;
		for(; i < l; i++) {
			el = nodes[i];
			// beforeend default insert type
			ins = el.getAttribute(attrs.insert) || 'beforeend';
			// store element, insert type, media query / support test
			obj = {
				'element' : el,
				'insert' : ins,
				'media' :  el.getAttribute(attrs.media) || false,
				'supports' :  el.getAttribute(attrs.supports) || false
			};

			mqs.push(obj);
		}
		return mqs;
	}

	// call required function (media/supports) on each array element
	function testNodes(type) {
		type = typeof type === 'string' ? type : false;

		// test support/media query nodes if not already tested and completed
		this.forEach(function(x) {
			if((type === 'supports' || !type) && Modernizr && x.supports &&
				x.supports !== 'complete' && x.supports !== 'failed') {

				testSupportNodes.apply(x);
			}
			if((type === 'media' || !type) && window.matchMedia && x.media &&
				x.media !== 'complete') {

				testMediaNodes.apply(x);
			}
		});
	}

	// test media query nodes, requires matchMedia
	function testMediaNodes() {
		// this node had a feature detection that failed so end tests now
		if(this.supports === 'failed') {
			this.media = 'complete';
			return false;
		}

		// media query passes and attribute not already set to complete
		if(window.matchMedia(this.media).matches) {
			this.media = 'complete';
			childNodes.apply(this);
			return true;
		}

		return false;
	}

	// test feature detection nodes, requires Modernizr
	function testSupportNodes() {
		// feature detection passed
		if(featureDetection(this.supports.split(','))) {
			this.supports = 'complete';

			// no media query to test so insert comment into DOM
			if(!this.media) {
				childNodes.apply(this);
			}

			return true;
		}

		// set feature detection state to failed
		this.supports = 'failed';
		return false;
	}

	// handle Modernir feature detection
	// if multiple features hand off to multiFeatureDetection
	function featureDetection(features) {
		// multiple feature detections
		if(features.length > 1) {
			return multiFeatureDetection(features);
		}

		// single feature detection
		return Modernizr[features];
	}

	// handle multiple modernizr feature detections
	function multiFeatureDetection(features) {
		var passed = true;
		features.forEach(function(feature) {
			if(!Modernizr[feature]) {
				passed = false;
			}
		});
		return passed;
	}

	// loop round child nodes, find commented content
	function childNodes() {
		var l = this.element.childNodes.length,
			i = 0;

		for(; i < l; i++) {
			// node type 8 is comment
			if(this.element.childNodes[i].nodeType === 8) {
				insertComment.apply(this, [i]);
			}
		}
	}

	// insert commented content into DOM, mark as complete and trigger event
	function insertComment(index) {
		this.element.insertAdjacentHTML(this.insert, this.element.childNodes[index].textContent);
		dispatchEvent.apply(this);
	}

	// dispatch CustomEvent if supported with media query and insert type detail
	function dispatchEvent() {
		var ev;

		// try custom events
		if(typeof CustomEvent === 'function') {
			ev = new CustomEvent('responsiveComment', {
				detail : {
					mediaQuery: this.media,
					insert: this.insert
				}
			});

		// if not use creatEvent
		} else if(document.createEvent) {
			ev = document.createEvent('Event');
			ev.initEvent('responsiveComment', true, true);

		// neither supported so fail
		} else {
			return false;
		}

		this.element.dispatchEvent(ev);
	}

	// initiate when DOM ready
	document.addEventListener("DOMContentLoaded", function(event) {
		// find and cache responsive comments nodes
		var els = prepNodes(
			document.querySelectorAll('['+attrs.media+'],['+attrs.supports+']')
		);

		// test media nodes only on resize
		window.addEventListener('resize', testNodes.bind(els, 'media'));
		// test media and support nodes on load
		window.addEventListener('load', testNodes.bind(els));
	});

})();