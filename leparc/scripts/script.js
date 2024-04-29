gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// for a horizontal version, see https://codepen.io/GreenSock/pen/rNmQPpa?editors=0010
const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);
const panels = selectAll(".panel_p")
function startAnim() {
  panels.forEach((panel_p, i) => {
    let imageWrappers = panel_p.querySelectorAll(".col__image-wrap")
    console.log(imageWrappers)
    gsap.fromTo(imageWrappers, {
      y: "-130vh"
    }, {
      y: "130vh",
      scrollTrigger: {
        trigger: panel_p,
        scrub: true,
        start: "top bottom", // position of trigger meets the scroller position
      },
      ease: 'none'
    })
  })
}
function init() {
  startAnim();
}
window.onload = () => init()
const smoother = ScrollSmoother.create({
	content: ".viewport",
	smooth: 1,
	effects: true
});

// Navigation
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    $('nav').addClass('hide');
  }else{
    $('nav').removeClass('hide');
  }
  lastScrollTop = scrollTop;
})

// Carousel
$('.sliderHomeUSP').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	autoplay: true,
	loop: true,
	nav: true,
	dots: false,
	animateOut: 'fadeOut',
	navText: [
		"<span class='arrowLeft'></span>",
		"<span class='arrowRight'></span>"
	],
	responsive:{
		0: {
			items: 1,
			touchDrag: true,
			mouseDrag: true
		},
		600: {
			items: 1,
			touchDrag: false,
			mouseDrag: false
		},
		1000: {
			items: 1,
			touchDrag: false,
			mouseDrag: false
		}
	}
});
$('.sliderHomeGallery').addClass('owl-carousel owl-theme').owlCarousel({
  center:true,
  loop:true,
	nav: true,
	dots: false,
	navText: [
		"<span class='arrowLeft'></span>",
		"<span class='arrowRight'></span>"
	],
  responsive:{
    0:{
      stagePadding:30,
      margin:15,
      items:1
    },
    600:{
      stagePadding:300,
      margin:30,
      items:1
    },
    1000:{
      stagePadding:300,
      margin:30,
      items:1
    }
  }
});
$('.sliderHomeNeighbourhood').addClass('owl-carousel owl-theme').owlCarousel({
  stagePadding:100,
  margin:20,
  loop:false,
	nav: true,
	dots: false,
	navText: [
		"<span class='arrowLeft'></span>",
		"<span class='arrowRight'></span>"
	],
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:3
    }
  }
});
$('.sliderHomeAmenities').addClass('owl-carousel owl-theme').owlCarousel({
	margin: 0,
	responsiveClass: true,
	// autoplay: true,
	loop: true,
	nav: true,
	dots: false,
	animateOut: 'fadeOut',
	navText: [
		"<span class='arrowLeft'></span>",
		"<span class='arrowRight'></span>"
	],
	responsive:{
		0: {
			items: 1,
			touchDrag: true,
			mouseDrag: true
		},
		600: {
			items: 1,
			touchDrag: false,
			mouseDrag: false
		},
		1000: {
			items: 1,
			touchDrag: false,
			mouseDrag: false
		}
	}
});

// Animation Move
$(document).ready(function(){
  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
    $('.move-topcontact').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
});

// Go Down
$('#chevronDown').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1500);
});

// Amenities
$('.pin01').hover(function() {
  $('.pin01').addClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').addClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').addClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin02').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').addClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').addClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').addClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin03').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').addClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').addClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').addClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin04').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').addClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').addClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').addClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin05').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').addClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').addClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').addClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin06').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').addClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').addClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').addClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin07').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').addClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').addClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').addClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin08').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').addClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').addClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').addClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin09').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').addClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').addClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').addClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin10').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').addClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').addClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').addClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin11').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').addClass('active');
  $('.pin12').removeClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').addClass('active');
  $('.dot12').removeClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').addClass('active');
  $('.imgd12').removeClass('active');
});
$('.pin12').hover(function() {
  $('.pin01').removeClass('active');
  $('.pin02').removeClass('active');
  $('.pin03').removeClass('active');
  $('.pin04').removeClass('active');
  $('.pin05').removeClass('active');
  $('.pin06').removeClass('active');
  $('.pin07').removeClass('active');
  $('.pin08').removeClass('active');
  $('.pin09').removeClass('active');
  $('.pin10').removeClass('active');
  $('.pin11').removeClass('active');
  $('.pin12').addClass('active');
  $('.dot01').removeClass('active');
  $('.dot02').removeClass('active');
  $('.dot03').removeClass('active');
  $('.dot04').removeClass('active');
  $('.dot05').removeClass('active');
  $('.dot06').removeClass('active');
  $('.dot07').removeClass('active');
  $('.dot08').removeClass('active');
  $('.dot09').removeClass('active');
  $('.dot10').removeClass('active');
  $('.dot11').removeClass('active');
  $('.dot12').addClass('active');
  $('.imgd01').removeClass('active');
  $('.imgd02').removeClass('active');
  $('.imgd03').removeClass('active');
  $('.imgd04').removeClass('active');
  $('.imgd05').removeClass('active');
  $('.imgd06').removeClass('active');
  $('.imgd07').removeClass('active');
  $('.imgd08').removeClass('active');
  $('.imgd09').removeClass('active');
  $('.imgd10').removeClass('active');
  $('.imgd11').removeClass('active');
  $('.imgd12').addClass('active');
});
// Button Mobile Amenities
$('.btnMHA01').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 0)
});
$('.btnMHA02').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 1)
});
$('.btnMHA03').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 2)
});
$('.btnMHA04').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 3)
});
$('.btnMHA05').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 4)
});
$('.btnMHA06').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 5)
});
$('.btnMHA07').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 6)
});
$('.btnMHA08').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 7)
});
$('.btnMHA09').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 8)
});
$('.btnMHA10').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 9)
});
$('.btnMHA11').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 10)
});
$('.btnMHA12').click(function(){
  $('.sliderHomeAmenities').trigger('to.owl.carousel', 11)
});
$('.sliderHomeAmenities .owl-prev').click(function(){
  $('.sliderHomeAmenities .item .siteplan .dot').removeClass('active');
});
$('.sliderHomeAmenities .owl-next').click(function(){
  $('.sliderHomeAmenities .item .siteplan .dot').removeClass('active');
});

// Housings Title
$('.homeHousingsTable').hover(
  function(e){
    $('.compTitle.homeHousingsTitle').addClass('hide');
  },
  function(e){
    $('.compTitle.homeHousingsTitle').removeClass('hide');
  }
);
// Housings Item 01
$('.table__cell01').hover(
  function(e){
    $('.table__cell01 .ovHousing').addClass('ovHover');
  },
  function(e){
    $('.table__cell01 .ovHousing').removeClass('ovHover');
  }
);
// Housings Item 02
$('.table__cell02').hover(
  function(e){
    $('.table__cell02 .ovHousing').addClass('ovHover');
  },
  function(e){
    $('.table__cell02 .ovHousing').removeClass('ovHover');
  }
);
// Housings Item 03
$('.table__cell03').hover(
  function(e){
    $('.table__cell03 .ovHousing').addClass('ovHover');
  },
  function(e){
    $('.table__cell03 .ovHousing').removeClass('ovHover');
  }
);

// Housings Toggle
var section = $('div.table__cell');
function toggleAccordion(){
  $('.compTitle.homeHousingsTitle').addClass('active');
  $('.table__cell01').addClass('changeOv');
  $('.table__cell02').addClass('changeOv');
  $('.table__cell03').addClass('changeOv');
  section.removeClass('active');
  $(this).addClass('active');
}
section.on('click', toggleAccordion);