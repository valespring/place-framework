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