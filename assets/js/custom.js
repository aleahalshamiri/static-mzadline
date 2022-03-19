
/****** Get Time Now  */
timeNow = document.getElementById('timeNow');
date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
var strTime = hours + ':' + minutes + ' ' + ampm;
timeNow.innerHTML = strTime;





(function ($) {
	"use strict";

	jQuery('img.svg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});



	// ______________ Cover-image
	$(".cover-image").each(function () {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});
	var likeCounter = 12;
	$(".like").on("click", function (e) {
		e.preventDefault();
		// animation
		if ($(this).parent().hasClass("selected")) {
			// like counter
			if ($(this).hasClass("like")) {
				likeCounter--;
				$(this).find(".counter").text(likeCounter);
			};
		} else {
			// like counter
			if ($(this).hasClass("like")) {
				likeCounter++;
				$(this).find(".counter").text(likeCounter);
			};
		}
	});

	// ______________ Global Loader
	$(window).on("load", function (e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ Color-skin
	$(document).ready(function () {
		$("a[data-theme]").click(function () {
			$("head link#theme").attr("href", $(this).data("theme"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
		$("a[data-effect]").click(function () {
			$("head link#effect").attr("href", $(this).data("effect"));
			$(this).toggleClass('active').siblings().removeClass('active');
		});
	});


	// ______________Active Class
	$(document).ready(function () {
		$(".horizontalMenu-list li a").each(function () {
			var pageUrl = window.location.href.split(/[?#]/)[0];
			if (this.href == pageUrl) {
				$(this).addClass("active");
				$(this).parent().addClass("active"); // add active to li of the current link
				$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
				$(this).parent().parent().prev().click(); // click the item to make it drop
			}
		});
	});

	// ______________ Back to Top
	$(window).on("scroll", function (e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$("#back-to-top").on("click", function (e) {
		$("html, body").animate({
			scrollTop: 0
		}, 0);
		return false;
	});

	// ______________Quantity-right-plus
	var quantitiy = 0;
	$('.quantity-right-plus').on('click', function (e) {
		e.preventDefault();
		var quantity = parseInt($('#quantity').val());
		$('#quantity').val(quantity + 1);
	});
	$('.quantity-left-minus').on('click', function (e) {
		e.preventDefault();
		var quantity = parseInt($('#quantity').val());
		if (quantity > 0) {
			$('#quantity').val(quantity - 1);
		}
	});

	// ______________Chart-circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function () {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#f9faff',
				lineCap: ''
			});
		});
	}
	const DIV_CARD = 'div.card';
	// ___________TOOLTIP
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// __________POPOVER
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl)
	})
	// By default, Bootstrap doesn't auto close popover after appearing in the page
	$(document).on('click', function (e) {
		$('[data-bs-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false  // fix for BS 3.3.6
			}

		});
	});

	// ______________Card Remove
	$('[data-bs-toggle="card-remove"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________Card Collapse
	$('[data-bs-toggle="card-collapse"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________Card Full Screen
	$('[data-bs-toggle="card-fullscreen"]').on('click', function (e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
})(jQuery);


// ______________ Modal
$(document).ready(function () {
	$("#myModal").modal('show');

});



//___________________Switcher


// ______________Dark Theme
// $('body').addClass('dark-theme');

// ______________ RTL Version



const pathArray = window.location.pathname.split("/");
const segment_1 = pathArray[1];
let liMargin = document.getElementById("li-margin");
if (segment_1 == "en") {
	$('body').addClass('ltr');
	liMargin.style.setProperty("margin-right", "30px", "important");
}
else {
	$('body').addClass('rtl');
	liMargin.style.setProperty("margin-left", "30px", "important");
}




/***************** RTL *********************/

(function checkRtl() {
	let bodyRtl = $('body').hasClass('rtl');
	if (bodyRtl) {
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$("html[lang=en]").attr("dir", "rtl");
		$(".select2-container").attr("dir", "rtl");
		localStorage.setItem("rtl", "True");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});
		/* ReferenceError: directionCheck is not defined */
		// directionCheck('rtl');
	} else {
		$('body').addClass('ltr');
		$('body').removeClass('rtl');
		$("html[lang=en]").attr("dir", "ltr");
		$(".select2-container").attr("dir", "ltr");
		localStorage.setItem("rtl", "false");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = false; //don't know if both are necessary
			carouselData.options.rtl = false;
			$(element).trigger('refresh.owl.carousel');
		});
		/* ReferenceError: directionCheck is not defined */
		// directionCheck('ltr');
	};



})();
/***************** RTL *********************/



