(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	$(".js-example-basic-single").select2();
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}

	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	$(".navigation a[href^='#']").on("click", function(e) {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
		return false;
	});

	$(".links-widget a[href^='#']").on("click", function(e) {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
		return false;
	});
	if ($(window.location.hash).length > 1) {
		$("html, body").animate({
			scrollTop: $(window.location.hash).offset().top+50
		}, 1000);
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW({
		mobile:       false
		});
		wow.init();
	}



	//Accordion Box
	if($('.faq-content').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.faq-content');
			var target = $(this).parents('.accordion');
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}else{
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				$(outerBox).find('.accordion .acc-btn').removeClass('active');

			}


			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').addClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


    //11.progressBarConfig
	function progressBarConfig () {
	  	var progressBar = $('.progress');
	  		if(progressBar.length) {
	    		progressBar.each(function () {
	      		var Self = $(this);
	      		Self.appear(function () {
	        	var progressValue = Self.data('value');

	        	Self.find('.progress-bar').animate({
	          	width:progressValue+'%'           
	        	}, 100);

	        	Self.find('span.value').countTo({
	          		from: 0,
	            	to: progressValue,
	            	speed: 100
	        		});
	     	 	});
	   		})
	  	}
	}


	//Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.small-column'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	
	enableMasonry();


	// Select menu 
	function selectDropdown() {
	    if ($(".selectmenu").length) {
	        $(".selectmenu").selectmenu();

	        var changeSelectMenu = function(event, item) {
	            $(this).trigger('change', item);
	        };
	        $(".selectmenu").selectmenu({ change: changeSelectMenu });
	    };
	}

	// Testimonial Carousel
	if ($('.brands-carousel').length) {
		$('.brands-carousel').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:4,
			loop:true,
			margin:10,
			dots:0,

			nav:true,
			smartSpeed: 300,
			autoplay: 3000,
			navText: [ '<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				1000:{
					items:4
				}
			}

		});
	}

	//three-column-carousel
	    if ($('.three-column-carousel').length) {
			$('.three-column-carousel').owlCarousel({
			loop:true,
			nav:false,
			center:true,
		    dots:0,
			smartSpeed: 3000,
			autoplay: true,
			navText: [ '<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1,
					margin:20,
					stagePadding: 20,
					center:false,



				},
				480:{
					items:1,
					margin:50,
					center:false,
					stagePadding:20,


				},
				600:{
					items:2,
					center:false,
					margin:30
				},
				800:{
					items:2,
					center:false,

				},
				1024:{
					items:3
				}
			}
		});
	}


	if($('.paroller').length){
		$('.paroller').paroller({
			  factor: 0.05,            // multiplier for scrolling speed and offset, +- values for direction control  
			  factorLg: 0.05,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
			  type: 'foreground',     // background, foreground  
			  direction: 'horizontal' // vertical, horizontal  
		});
	}


	// 6 pieChart RoundCircle
	function expertizeRoundCircle () {
		var rounderContainer = $('.piechart');
		if (rounderContainer.length) {
			rounderContainer.each(function () {
				var Self = $(this);
				var value = Self.data('value');
				var size = Self.parent().width();
				var color = Self.data('fg-color');

				Self.find('span').each(function () {
					var expertCount = $(this);
					expertCount.appear(function () {
						expertCount.countTo({
							from: 1,
							to: value*100,
							speed: 3000
						});
					});

				});
				Self.appear(function () {					
					Self.circleProgress({
						value: value,
						size: 270,
						thickness: 30,
						emptyFill: '#e1e1e1',
						animation: {
							duration: 3000
						},
						fill: {
							color: color
						}
					});
				});
			});
		};
	}


	if($('.timer').length){
	   $(function(){
		    $('[data-countdown]').each(function() {
		   var $this = $(this), finalDate = $(this).data('countdown');
		   $this.countdown(finalDate, function(event) {
		     $this.html(event.strftime('%D days %H:%M:%S'));
		   });
		 });
		});

	   $('.cs-countdown').countdown('').on('update.countdown', function(event) {
		  var $this = $(this).html(event.strftime('<div class="count-col"><span>%m</span><h3>Months</h3></div> <div class="count-col"><span>%D</span><h3>days</h3></div> <div class="count-col"><span>%H</span><h3>Hours</h3></div> <div class="count-col"><span>%M</span><h3>Minutes</h3></div> <div class="count-col"><span>%S</span><h3>Seconds</h3></div>'));
		});
	}


	//31.donate popup
	function donatepopup() {	
		if($('#donate-popup').length){
			
			//Show Popup
			$('.donate-box-btn').on('click', function() {
				$('#donate-popup').addClass('popup-visible');
			});
			
			//Hide Popup
			$('.close-donate').click(function() {
				$('#donate-popup').removeClass('popup-visible');
			});
		}
	}


	//BX-Slider
	if($('.events-slide').length){
		$('.events-slide').bxSlider({

			auto:true,
			mode:'vertical',
			nextSelector: '#slider-next',
			nextText: '',
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			maxSlides: 3,
			minSlides: 3,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pager: false
		});
	}


	function onHoverthreeDmovement() {
	    var tiltBlock = $('.js-tilt');
	    if(tiltBlock.length) {
	        $('.js-tilt').tilt({
	            maxTilt: 20,
	            perspective:700, 
	            glare: true,
	            maxGlare: 0
	        })
	    }
	}



	/*	=========================================================================
	When document is Scrollig, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			progressBarConfig ();
			selectDropdown();
			donatepopup();
			onHoverthreeDmovement();
		})(jQuery);
	});


	(function ($, window, document, undefined) {
		$('.inputfile').each(function () {
			var $input = $(this),
				$label = $input.next('label'),
				labelVal = $label.html();
			$input.on('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else if (e.target.value)
					fileName = e.target.value.split('\\').pop();
				if (fileName) {
					$label.find('.archive-name').html(fileName);
					$label.find('.archive-name2').html(fileName);
					$label.find('.archive-name3').html(fileName);
					$label.find('.btn-inputfile').html('');
					//$('.btn-inputfile').html('');
				} else
					$label.html(labelVal);
			});

			// Firefox bug fix
			$input
				.on('focus', function () {
					$input.addClass('has-focus');
				})
				.on('blur', function () {
					$input.removeClass('has-focus');
				});
		});
	})(jQuery, window, document);
	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		expertizeRoundCircle ();
	});


	// In the following example, markers appear when the user clicks on the map.
	// The markers are stored in an array.
	// The user can then click an option to hide, show or delete the markers.
	var map;
	var markers = [];


	var haightAshbury = {lat: 21.5529563, lng: 39.1769007};

	map = new google.maps.Map(document.getElementById('googleMap'), {
		zoom: 14,                     // Set the zoom level manually
		center: haightAshbury,
		mapTypeId: 'terrain'
	});

	// This event listener will call addMarker() when the map is clicked.
	map.addListener('click', function (event) {
		if (markers.length >= 1) {
			deleteMarkers();
		}

		addMarker(event.latLng);
		console.log(event.latLng.lat())
		console.log(event.latLng.lng())
	});


	// Adds a marker to the map and push to the array.
	function addMarker(location) {
		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
		markers.push(marker);
	}

	// Sets the map on all markers in the array.
	function setMapOnAll(map) {
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);
		}
	}

	$(".toggle-password").click(function() {

		$(this).toggleClass("fa-eye fa-eye-slash");
		var x = document.getElementById("password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	});

	// Removes the markers from the map, but keeps them in the array.
	function clearMarkers() {
		setMapOnAll(null);
	}

	// Deletes all markers in the array by removing references to them.
	function deleteMarkers() {
		clearMarkers();
		markers = [];
	}
})(window.jQuery);