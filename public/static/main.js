/**
 * Template Name: NewBiz - v3.0.0
 * Template URL: https://bootstrapmade.com/newbiz-bootstrap-business-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
console.log("Hello World");

(function ($) {
	"use strict";

	// Preloader (if the #preloader div exists)
	$(window).on("load", function () {
		if ($("#preloader").length) {
			$("#preloader")
				.delay(100)
				.fadeOut("slow", function () {
					$(this).remove();
				});
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".backTotop").fadeIn("slow");
		} else {
			$(".backTotop").fadeOut("slow");
		}
	});
	$(".backTotop").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500,
			"easeInOutExpo",
		);
		return false;
	});

	// Header scroll class
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#header").addClass("header-scrolled");
		} else {
			$("#header").removeClass("header-scrolled");
		}
	});

	if ($(window).scrollTop() > 100) {
		$("#header").addClass("header-scrolled");
	}

	var scrolltoOffset = $("#header").outerHeight() - 21;
	if (window.matchMedia("(max-width: 991px)").matches) {
		scrolltoOffset += 20;
	}
	$(document).on("click", ".mainNav a, .mobileNav a, .scrollto", function (e) {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top - scrolltoOffset;

				if ($(this).attr("href") == "#header") {
					scrollto = 0;
				}

				$("html, body").animate(
					{
						scrollTop: scrollto,
					},
					1500,
					"easeInOutExpo",
				);

				if ($(this).parents(".mainNav, .mobileNav").length) {
					$(".mainNav .active, .mobileNav .active").removeClass("active");
					$(this).closest("li").addClass("active");
				}

				if ($("body").hasClass("mobileNav-active")) {
					$("body").removeClass("mobileNav-active");
					$(".mobileNav-toggle i").toggleClass("fa-times fa-bars");
					$(".mobileNav-overly").fadeOut();
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top - scrolltoOffset;
				$("html, body").animate(
					{
						scrollTop: scrollto,
					},
					1500,
					"easeInOutExpo",
				);
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $("section");
	var main_nav = $(".mainNav, .mobileNav");

	$(window).on("scroll", function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find("li").removeClass("active");
				}
				main_nav
					.find('a[href="#' + $(this).attr("id") + '"]')
					.parent("li")
					.addClass("active");
			}
			if (cur_pos < 300) {
				$(".nav-menu ul:first li:first").addClass("active");
			}
		});
	});

	// Mobile Navigation
	if ($(".mainNav").length) {
		var $mobile_nav = $(".mainNav").clone().prop({
			class: "mobileNav d-lg-none",
		});
		$("body").append($mobile_nav);
		$("body").prepend('<button type="button" class="mobileNav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
		$("body").append('<div class="mobileNav-overly"></div>');

		$(document).on("click", ".mobileNav-toggle", function (e) {
			$("body").toggleClass("mobileNav-active");
			$(".mobileNav-toggle i").toggleClass("fa-times fa-bars");
			$(".mobileNav-overly").toggle();
		});

		$(document).on("click", ".mobileNav .dropDown > a", function (e) {
			e.preventDefault();
			$(this).next().slideToggle(300);
			$(this).parent().toggleClass("active");
		});

		$(document).click(function (e) {
			var container = $(".mobileNav, .mobileNav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($("body").hasClass("mobileNav-active")) {
					$("body").removeClass("mobileNav-active");
					$(".mobileNav-toggle i").toggleClass("fa-times fa-bars");
					$(".mobileNav-overly").fadeOut();
				}
			}
		});
	} else if ($(".mobileNav, .mobileNav-toggle").length) {
		$(".mobileNav, .mobileNav-toggle").hide();
	}

	// jQuery counterUp (used in Whu Us section)
	$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
		time: 1000,
	});

	// Porfolio isotope and filter
	$(window).on("load", function () {
		var portfolioIsotope = $(".portfolio-container").isotope({
			itemSelector: ".portfolio-item",
		});
		$("#portfolio-flters li").on("click", function () {
			$("#portfolio-flters li").removeClass("filter-active");
			$(this).addClass("filter-active");

			portfolioIsotope.isotope({
				filter: $(this).data("filter"),
			});
			aos_init();
		});
	});

	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
	});

	// Initiate venobox (lightbox feature used in portofilo)
	$(document).ready(function () {
		$(".venobox").venobox();
	});

	// Testimonials carousel (uses the Owl Carousel library)
	$(".testimonials-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}
	$(window).on("load", function () {
		aos_init();
	});
})(jQuery);
