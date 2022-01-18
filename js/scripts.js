// javascript
let loadLazyLoadScript = false;

document.addEventListener('DOMContentLoaded', function () {
	lazyLoad();
	correctVh();
	correctVw();
	initSamplesSlider();

	// dev2
	// dev3
});

window.addEventListener('resize', function () {
	correctVh();
	correctVw();

	// dev2
	// dev3
});

// replaseInlineSvg
function replaseInlineSvg(el) {
	var imgID = el.getAttribute('id');
	var imgClass = el.getAttribute('class');
	var imgURL = el.getAttribute('src');
	fetch(imgURL).then(function(data) {
		return data.text();
	}).then(function(response) {
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(response, 'text/html');
		var svg = xmlDoc.querySelector('svg');
		if (typeof imgID !== 'undefined') {
			svg.setAttribute('id', imgID);
		}
		if (typeof imgClass !== 'undefined') {
			svg.setAttribute('class', imgClass + ' replaced-svg');
		}
		svg.removeAttribute('xmlns:a');
		el.parentNode.replaceChild(svg, el);
	});
}

// lazyLoad
function lazyLoad() {
	if ('loading' in HTMLImageElement.prototype) {
		var images = document.querySelectorAll('img.lazyload');
		images.forEach(function (img) {
			img.src = img.dataset.src;
			img.onload = function () {
				img.classList.add('lazyloaded');
			};
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	} else {
		if (!loadLazyLoadScript) {
			loadLazyLoadScript = true;
			var script = document.createElement('script');
			script.async = true;
			script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js';
			document.body.appendChild(script);
		}
		document.addEventListener('lazyloaded', function (e) {
			var img = e.target;
			if (img.classList.contains('svg-html')) {
				replaseInlineSvg(img);
			}
		});
	}
}

// correctVh
function correctVh() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

// correctVw
function correctVw() {
	let vw = document.documentElement.clientWidth * 0.01;
	document.documentElement.style.setProperty('--vw', vw + 'px');
}

function initSamplesSlider() {
	const sliderEl = document.querySelector('.samples-slider');
	
	if (sliderEl) {
		const ARROW_NEXT = sliderEl.querySelector('.swiper-button-next');
		const ARROW_PREV = sliderEl.querySelector('.swiper-button-prev');
		const CURRENT_NUM = sliderEl.querySelector('.samples-slider__counter');

		const samplesSlider = new Swiper(sliderEl, {
			effect: 'fade',
			fadeEffect: {
			  crossFade: true,
			},
			navigation: {
				nextEl: ARROW_NEXT,
				prevEl: ARROW_PREV,
			},
			on: {
				slideChange: function(swiper) {
					let index = swiper.realIndex + 1;
					let formatted = index >= 10 ? index : `0${index}`;
					CURRENT_NUM.innerHTML = formatted;
				}
			}
		});

		const previewSlider = new Swiper(('.preview-slider'), {
			effect: 'fade',
			fadeEffect: {
			  crossFade: true,
			},
			slideToClickedSlide: true,
			on: {
				click: function(swiper) {
					swiper.slideNext();
				}
			}
		});

		previewSlider.appendSlide('<div class="swiper-slide preview-slider__slide"></div>');

		previewSlider.controller.control = samplesSlider;
		samplesSlider.controller.control = previewSlider;
	}
}

// dev2
// dev3
// dev4

// jQuery
(function ($) {
	'use strict';

	$(document).ready(function () {

		// dev2
		// dev3
	}); // ready

	$(window).on('resize', function () {

		// dev2
		// dev3
	}); // resize

	$(window).on('load', function () {

		// dev2
		// dev3
	}); // load

	// functions

	// dev2
	// dev3

})(this.jQuery);