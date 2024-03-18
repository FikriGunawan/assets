/* ======================================================= */
/*                          BASE                           */
/* ======================================================= */
// Preloader
$(window).on("load", () => {
  $(".preloader").delay(1500).fadeOut();
});

// Navigation
$(document).ready(function() {
  $('#main-nav').removeClass("show");
  // Fixed Show and Hide
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.querySelector('#main-nav').classList.add('show');
    }else{
      document.querySelector('#main-nav').classList.remove('show');
    }
    prevScrollPos = currentScrollPos;
  });
  // Remove nav active
  $(function () {
    $(window).scroll(function () {
      if ($('#main-nav').scrollTop() = 0) {
        $('#main-nav').removeClass("show");
      }
    });
  });
  $('#main-nav .menu').click(function() {
    $("#main-sidenav").addClass("active");
    $('#preloader-image').addClass("hide");
  })
  $('#main-sidenav .cross').click(function() {
    $("#main-sidenav").removeClass("active");
    $('#preloader-image').removeClass("hide");
  })
  $('#main-sidenav ul li a').click(function() {
    $("#main-sidenav").removeClass("active");
    $('#preloader-image').removeClass("hide");
  })
  $('.tarReachUs').click(function() {
    $("#main-sidenav").removeClass("active");
    $('#preloader-image').removeClass("hide");
  })
});
/* ======================================================= */
/*                      END BASE                           */
/* ======================================================= */



/* ======================================================= */
/*                        CAROUSEL                         */
/* ======================================================= */
$(document).ready(function() {
  // About Us Slider
  $('.secaboutus-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    loop: true,
    nav: true,
    dots: true,
    navText: ["<span class='owl-icon-box-left'></span>","<span class='owl-icon-box-right'></span>"],
    responsive:{
      0:{items: 1},
      600:{items: 1},
      1000:{items: 1}
    }
  })
  // Floor Plan Slider
  $('.secfloorplan-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    loop: true,
    nav: true,
    dots: true,
    navText: ["<span class='owl-icon-left-gold'></span>","<span class='owl-icon-right-gold'></span>"],
    responsive:{
      0:{items: 1},
      600:{items: 1},
      1000:{items: 1}
    }
  })
  // Floor Plan Slider Custom Navigation
  var navSecfloorplan = $('.secfloorplan-carousel');
  navSecfloorplan.owlCarousel();
  // Go to the previous item
  $('.navsecfloorplanPrevBtn').click(function() {
    navSecfloorplan.trigger('prev.owl.carousel');
  })
  // Go to the next item
  $('.navsecfloorplanNextBtn').click(function() {
    navSecfloorplan.trigger('next.owl.carousel');
  })
  // Building Features Slider
  $('.secbuildingfeatures-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsiveClass: true,
    loop: true,
    nav: true,
    dots: true,
    navText: ["<span class='owl-icon-left-linegold'></span>","<span class='owl-icon-right-linegold'></span>"],
    responsive:{
      0:{items: 1},
      600:{items: 1},
      1000:{items: 1}
    }
  })
  // Facilities Slider
  $('.secfacilities-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: ["<span class='owl-icon-left-linegold'></span>","<span class='owl-icon-right-linegold'></span>"],
    responsive:{
      0:{
        items: 1,
        stagePadding: 20,
        margin: 0
      },
      600:{
        items: 3,
        stagePadding: 122,
        margin: 0
      },
      1000:{
        items: 3,
        stagePadding: 122,
        margin: 0
      }
    }
  })  
  // Facilities Slider Custom Navigation
  var navSecfacilities = $('.secfacilities-carousel');
  navSecfacilities.owlCarousel();
  // Go to the previous item
  $('.navsecfacilitiesPrevBtn').click(function() {
    navSecfacilities.trigger('prev.owl.carousel');
  })
  // Go to the next item
  $('.navsecfacilitiesNextBtn').click(function() {
    navSecfacilities.trigger('next.owl.carousel');
  })
  // Awards Slider
  $('.secawards-carousel').addClass('owl-carousel owl-theme').owlCarousel({
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: ["<span class='owl-icon-box-left'></span>","<span class='owl-icon-box-right'></span>"],
    responsive:{
      0:{items: 1},
      600:{items: 1},
      1000:{items: 1}
    }
  })
  // Awards Slider Custom Navigation
  var navSecawards = $('.secawards-carousel');
  navSecawards.owlCarousel();
  // Go to the previous item
  $('.navsecawardsPrevBtn').click(function() {
    navSecawards.trigger('prev.owl.carousel');
  })
  // Go to the next item
  $('.navsecawardsNextBtn').click(function() {
    navSecawards.trigger('next.owl.carousel');
  })
});
/* ======================================================= */
/*                    END CAROUSEL                         */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 01                        */
/* ======================================================= */
$(function() {
  var panel01Effect01 = $("#mainWrap .panel01 .ornament");
  var panel01Effect02 = $("#mainWrap .panel01 .background");
  var panel01Effect03 = $("#mainWrap .panel01 .brief");
  var panel01Effect04 = $("#mainWrap .panel01 .goDown");
  var panel01Effect05 = $("#mainWrap .panel01 .image");
  var panel01Effect06 = $("#mainWrap .panel01 .heading");
  var panel01Effect07 = $("#mainWrap .panel02 .slider");
  setTimeout(function() {
    panel01Effect01.addClass("effect01");
    panel01Effect02.addClass("effect01");
    panel01Effect05.addClass("effect01");
    panel01Effect06.addClass("effect01");
    panel01Effect07.addClass("effect01");
  }, 3000);
  setTimeout(function() {
    panel01Effect03.addClass("effect01");
    panel01Effect04.addClass("effect01");
  }, 5000);
});
$(function ($) {
  const $el01 = $('.panel01');
  var mutationObserver01 = new MutationObserver(function(mutations) {
    if ($el01.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel01 .background").removeClass("effect02");
      $("#mainWrap .panel01 .image").removeClass("effect02");
    }
  });
  mutationObserver01.observe($el01[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 01                        */
/* ======================================================= */


/* ======================================================= */
/*                         PANEL 02                        */
/* ======================================================= */
$(function ($) {
  const $el02 = $('.panel02');
  var mutationObserver02 = new MutationObserver(function(mutations) {
    if ($el02.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel01 .ornament").addClass("effect02");
      $("#mainWrap .panel01 .background").addClass("effect02");
      $("#mainWrap .panel01 .brief").addClass("effect02");
      $("#mainWrap .panel01 .goDown").addClass("effect02");
      $("#mainWrap .panel01 .image").addClass("effect02");
      $("#mainWrap .panel01 .heading").addClass("effect02");
      $("#mainWrap .panel02 .slider").addClass("effect02");
      $("#mainWrap .panel03 .building").removeClass("show");
      $("#mainWrap .panel03 .heading").removeClass("show");
      $("#mainWrap .panel03 .compLine").removeClass("show");
    } else {
      $("#mainWrap .panel01 .ornament").removeClass("effect02");
      $("#mainWrap .panel01 .brief").removeClass("effect02");
      $("#mainWrap .panel01 .goDown").removeClass("effect02");
      $("#mainWrap .panel01 .heading").removeClass("effect02");
      $("#mainWrap .panel02 .slider").removeClass("effect02");
    }
  });
  mutationObserver02.observe($el02[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 02                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 03                        */
/* ======================================================= */
  // AUTOGRAPH TOWER
  $(function () {
    $('#towerWrap01 .SFPBT01').mouseout(function(){
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT01').mouseover( function(){
      $("#towerWrap01 .floor-CAMPANILE").addClass("active");
      $("#towerWrap01 .SFPBF01").addClass("active");
      $("#towerWrap01 .SFPD01").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
    });
    $('#towerWrap01 .SFPBT02').mouseout(function(){
      $("#towerWrap01 .floor-SKY-GARDEN").removeClass("active");
      $("#towerWrap01 .SFPBF02").removeClass("active");
      $("#towerWrap01 .SFPD02").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT02').mouseover( function(){
      $("#towerWrap01 .floor-SKY-GARDEN").addClass("active");
      $("#towerWrap01 .SFPBF02").addClass("active");
      $("#towerWrap01 .SFPD02").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT03').mouseout(function(){
      $("#towerWrap01 .floor-WALDORF-ASTORIA-HOTEL").removeClass("active");
      $("#towerWrap01 .SFPBF03").removeClass("active");
      $("#towerWrap01 .SFPD03").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT03').mouseover( function(){
      $("#towerWrap01 .floor-WALDORF-ASTORIA-HOTEL").addClass("active");
      $("#towerWrap01 .SFPBF03").addClass("active");
      $("#towerWrap01 .SFPD03").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT04').mouseout(function(){
      $("#towerWrap01 .floor-OBSERVATORY-DECK").removeClass("active");
      $("#towerWrap01 .SFPBF04").removeClass("active");
      $("#towerWrap01 .SFPD04").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT04').mouseover( function(){
      $("#towerWrap01 .floor-OBSERVATORY-DECK").addClass("active");
      $("#towerWrap01 .SFPBF04").addClass("active");
      $("#towerWrap01 .SFPD04").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT05').mouseout(function(){
      $("#towerWrap01 .floor-PENTHOUSE-OFFICE-ZONE").removeClass("active");
      $("#towerWrap01 .SFPBF05").removeClass("active");
      $("#towerWrap01 .SFPD05").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT05').mouseover( function(){
      $("#towerWrap01 .floor-PENTHOUSE-OFFICE-ZONE").addClass("active");
      $("#towerWrap01 .SFPBF05").addClass("active");
      $("#towerWrap01 .SFPD05").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT06').mouseout(function(){
      $("#towerWrap01 .floor-OFFICE-HIGH-ZONE").removeClass("active");
      $("#towerWrap01 .SFPBF06").removeClass("active");
      $("#towerWrap01 .SFPD06").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT06').mouseover( function(){
      $("#towerWrap01 .floor-OFFICE-HIGH-ZONE").addClass("active");
      $("#towerWrap01 .SFPBF06").addClass("active");
      $("#towerWrap01 .SFPD06").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT07').mouseout(function(){
      $("#towerWrap01 .floor-OFFICE-MID-ZONE").removeClass("active");
      $("#towerWrap01 .SFPBF07").removeClass("active");
      $("#towerWrap01 .SFPD07").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT07').mouseover( function(){
      $("#towerWrap01 .floor-OFFICE-MID-ZONE").addClass("active");
      $("#towerWrap01 .SFPBF07").addClass("active");
      $("#towerWrap01 .SFPD07").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap01 .SFPBT08').mouseout(function(){
      $("#towerWrap01 .floor-OFFICE-LOW-ZONE").removeClass("active");
      $("#towerWrap01 .SFPBF08").removeClass("active");
      $("#towerWrap01 .SFPD08").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap01 .SFPBT08').mouseover( function(){
      $("#towerWrap01 .floor-OFFICE-LOW-ZONE").addClass("active");
      $("#towerWrap01 .SFPBF08").addClass("active");
      $("#towerWrap01 .SFPD08").addClass("active");
      $("#towerWrap01 .SFPBF00").addClass("opc");
      $("#towerWrap01 .floor-CAMPANILE").removeClass("active");
      $("#towerWrap01 .SFPBF01").removeClass("active");
      $("#towerWrap01 .SFPD01").removeClass("active");
      $("#towerWrap01 .SFPBF00").removeClass("opc");
    });
  });
  // LUMINARY TOWER
  $(function () {
    $('#towerWrap02 .SFPBT01').mouseout(function(){
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT01').mouseover( function(){
      $("#towerWrap02 .floor02-HELIPAD").addClass("active");
      $("#towerWrap02 .SFPBF01").addClass("active");
      $("#towerWrap02 .SFPD01").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
    });
    $('#towerWrap02 .SFPBT02').mouseout(function(){
      $("#towerWrap02 .floor02-OBSERVATORY-DECK").removeClass("active");
      $("#towerWrap02 .SFPBF02").removeClass("active");
      $("#towerWrap02 .SFPD02").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT02').mouseover( function(){
      $("#towerWrap02 .floor02-OBSERVATORY-DECK").addClass("active");
      $("#towerWrap02 .SFPBF02").addClass("active");
      $("#towerWrap02 .SFPD02").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT03').mouseout(function(){
      $("#towerWrap02 .floor02-PAN-PACIFIC-HOTEL").removeClass("active");
      $("#towerWrap02 .SFPBF03").removeClass("active");
      $("#towerWrap02 .SFPD03").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT03').mouseover( function(){
      $("#towerWrap02 .floor02-PAN-PACIFIC-HOTEL").addClass("active");
      $("#towerWrap02 .SFPBF03").addClass("active");
      $("#towerWrap02 .SFPD03").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT04').mouseout(function(){
      $("#towerWrap02 .floor02-PARKROYAL-SERVICED-SUITES").removeClass("active");
      $("#towerWrap02 .SFPBF04").removeClass("active");
      $("#towerWrap02 .SFPD04").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT04').mouseover( function(){
      $("#towerWrap02 .floor02-PARKROYAL-SERVICED-SUITES").addClass("active");
      $("#towerWrap02 .SFPBF04").addClass("active");
      $("#towerWrap02 .SFPD04").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT05').mouseout(function(){
      $("#towerWrap02 .floor02-OFFICE-MID-ZONE").removeClass("active");
      $("#towerWrap02 .SFPBF05").removeClass("active");
      $("#towerWrap02 .SFPD05").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT05').mouseover( function(){
      $("#towerWrap02 .floor02-OFFICE-MID-ZONE").addClass("active");
      $("#towerWrap02 .SFPBF05").addClass("active");
      $("#towerWrap02 .SFPD05").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT06').mouseout(function(){
      $("#towerWrap02 .floor02-OFFICE-LOW-ZONE").removeClass("active");
      $("#towerWrap02 .SFPBF06").removeClass("active");
      $("#towerWrap02 .SFPD06").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT06').mouseover( function(){
      $("#towerWrap02 .floor02-OFFICE-LOW-ZONE").addClass("active");
      $("#towerWrap02 .SFPBF06").addClass("active");
      $("#towerWrap02 .SFPD06").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT07').mouseout(function(){
      $("#towerWrap02 .floor02-PARKROYAL-HOTEL").removeClass("active");
      $("#towerWrap02 .SFPBF07").removeClass("active");
      $("#towerWrap02 .SFPD07").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT07').mouseover( function(){
      $("#towerWrap02 .floor02-PARKROYAL-HOTEL").addClass("active");
      $("#towerWrap02 .SFPBF07").addClass("active");
      $("#towerWrap02 .SFPD07").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT08').mouseout(function(){
      $("#towerWrap02 .floor02-MUSIC-HALL").removeClass("active");
      $("#towerWrap02 .SFPBF08").removeClass("active");
      $("#towerWrap02 .SFPD08").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT08').mouseover( function(){
      $("#towerWrap02 .floor02-MUSIC-HALL").addClass("active");
      $("#towerWrap02 .SFPBF08").addClass("active");
      $("#towerWrap02 .SFPD08").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
    $('#towerWrap02 .SFPBT09').mouseout(function(){
      $("#towerWrap02 .floor02-AGORA-LIFESTYLE-MALL").removeClass("active");
      $("#towerWrap02 .SFPBF09").removeClass("active");
      $("#towerWrap02 .SFPD09").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    }),
    $('#towerWrap02 .SFPBT09').mouseover( function(){
      $("#towerWrap02 .floor02-AGORA-LIFESTYLE-MALL").addClass("active");
      $("#towerWrap02 .SFPBF09").addClass("active");
      $("#towerWrap02 .SFPD09").addClass("active");
      $("#towerWrap02 .SFPBF00").addClass("opc");
      $("#towerWrap02 .floor02-HELIPAD").removeClass("active");
      $("#towerWrap02 .SFPBF01").removeClass("active");
      $("#towerWrap02 .SFPD01").removeClass("active");
      $("#towerWrap02 .SFPBF00").removeClass("opc");
    });
  });
$(function ($) {
  const $el03 = $('.panel03');
  var mutationObserver03 = new MutationObserver(function(mutations) {
    if ($el03.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel03 .building").addClass("show");
      $("#mainWrap .panel03 .heading").addClass("show");
      $("#mainWrap .panel03 .compLine").addClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver03.observe($el03[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 03                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 04                        */
/* ======================================================= */
$(function ($) {
  const $el04 = $('.panel04');
  var mutationObserver04 = new MutationObserver(function(mutations) {
    if ($el04.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .stickyWrapper .buildingFeatures01 .compBFTarget a").addClass("active");
    } else {
      $("#mainWrap .stickyWrapper .buildingFeatures01 .compBFTarget a").removeClass("active");
    }
  });
  mutationObserver04.observe($el04[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 04                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 05                        */
/* ======================================================= */
$(function ($) {
  const $el05 = $('.panel05');
  var mutationObserver05 = new MutationObserver(function(mutations) {
    if ($el05.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .stickyWrapper .buildingFeatures02 .compBFTarget a").addClass("active");
    } else {
      $("#mainWrap .stickyWrapper .buildingFeatures02 .compBFTarget a").removeClass("active");
    }
  });
  mutationObserver05.observe($el05[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 05                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 06                        */
/* ======================================================= */
$(function ($) {
  const $el06 = $('.panel06');
  var mutationObserver06 = new MutationObserver(function(mutations) {
    if ($el06.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .stickyWrapper .buildingFeatures03 .compBFTarget a").addClass("active");
    } else {
      $("#mainWrap .stickyWrapper .buildingFeatures03 .compBFTarget a").removeClass("active");
    }
  });
  mutationObserver06.observe($el06[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 06                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 07                        */
/* ======================================================= */
$(function ($) {
  const $el07 = $('.panel07');
  var mutationObserver07 = new MutationObserver(function(mutations) {
    if ($el07.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .stickyWrapper .buildingFeatures04 .compBFTarget a").addClass("active");
      $("#mainWrap .panel08 .compLine01").removeClass("show");
      $("#mainWrap .panel08 .compLine02").removeClass("show");
      $("#mainWrap .panel08 .heading").removeClass("show");
      $("#mainWrap .panel08 .navSlider").removeClass("show");
      $("#mainWrap .panel08 .slider").removeClass("show");
    } else {
      $("#mainWrap .stickyWrapper .buildingFeatures04 .compBFTarget a").removeClass("active");
    }
  });
  mutationObserver07.observe($el07[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 07                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 08                        */
/* ======================================================= */
$(function ($) {
  const $el08 = $('.panel08');
  var mutationObserver08 = new MutationObserver(function(mutations) {
    if ($el08.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel08 .compLine01").addClass("show");
      $("#mainWrap .panel08 .compLine02").addClass("show");
      $("#mainWrap .panel08 .heading").addClass("show");
      $("#mainWrap .panel08 .navSlider").addClass("show");
      $("#mainWrap .panel08 .slider").addClass("show");
      $("#mainWrap .panel09 .navSlider").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver08.observe($el08[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 08                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 09                        */
/* ======================================================= */
  $(function(){
    $('.panel09 .nspnb01').show();
    $('.panel09 .nspnb02').hide();
    $('.panel09 .nsppb01').hide();
    $('.panel09 .nsppb02').hide();
    
    $('.panel09 .nspnb01').click(function(){
      $('.panel09 .spWrap').css({'left': -50 +'vw'});
      $('.panel09 .nspnb01').hide();
      $('.panel09 .nspnb02').show();
      $('.panel09 .nsppb01').show();
      $('.panel09 .nsppb02').hide();
    });
    $('.panel09 .nspnb02').click(function(){
      $('.panel09 .spWrap').css({'left': -100 +'vw'});
      $('.panel09 .nspnb01').hide();
      $('.panel09 .nspnb02').hide();
      $('.panel09 .nsppb01').hide();
      $('.panel09 .nsppb02').show();
    });
    $('.panel09 .nsppb02').click(function(){
      $('.panel09 .spWrap').css({'left': -50 +'vw'});
      $('.panel09 .nsppb01').show();
      $('.panel09 .nsppb02').hide();
      $('.panel09 .nspnb01').hide();
      $('.panel09 .nspnb02').show();
    });
    $('.panel09 .nsppb01').click(function(){
      $('.panel09 .spWrap').css({'left': 0 +'vw'});
      $('.panel09 .nsppb01').hide();
      $('.panel09 .nsppb02').hide();
      $('.panel09 .nspnb01').show();
      $('.panel09 .nspnb02').hide();
    });
  });
$(function ($) {
  const $el09 = $('.panel09');
  var mutationObserver09 = new MutationObserver(function(mutations) {
    if ($el09.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel09 .navSlider").addClass("show");
      $("#mainWrap .panel10 .ornament01").removeClass("show");
      $("#mainWrap .panel10 .ornament02").removeClass("show");
      $("#mainWrap .panel10 .heading").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver09.observe($el09[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 09                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 10                        */
/* ======================================================= */
$(function ($) {
  const $el10 = $('.panel10');
  var mutationObserver10 = new MutationObserver(function(mutations) {
    if ($el10.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel10 .ornament01").addClass("show");
      $("#mainWrap .panel10 .ornament02").addClass("show");
      $("#mainWrap .panel10 .heading").addClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver10.observe($el10[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 10                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 11                        */
/* ======================================================= */
$(function ($) {
  const $el11 = $('.panel11');
  var mutationObserver11 = new MutationObserver(function(mutations) {
    if ($el11.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver11.observe($el11[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 11                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 12                        */
/* ======================================================= */
$(function ($) {
  const $el12 = $('.panel12');
  var mutationObserver12 = new MutationObserver(function(mutations) {
    if ($el12.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver12.observe($el12[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 12                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 13                        */
/* ======================================================= */
$(function ($) {
  const $el13 = $('.panel13');
  var mutationObserver13 = new MutationObserver(function(mutations) {
    if ($el13.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver13.observe($el13[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 13                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 14                        */
/* ======================================================= */
$(function ($) {
  const $el14 = $('.panel14');
  var mutationObserver14 = new MutationObserver(function(mutations) {
    if ($el14.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver14.observe($el14[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 14                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 15                        */
/* ======================================================= */
$(function ($) {
  const $el15 = $('.panel15');
  var mutationObserver15 = new MutationObserver(function(mutations) {
    if ($el15.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").addClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC16").addClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver15.observe($el15[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 15                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 16                        */
/* ======================================================= */
$(function ($) {
  const $el16 = $('.panel16');
  var mutationObserver16 = new MutationObserver(function(mutations) {
    if ($el16.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move02");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move03");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move04");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move05");
      $("#mainWrap .stickyWrapper .locationCar .itemSC16").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC17").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC18").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC19").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC20").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver16.observe($el16[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 16                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 17                        */
/* ======================================================= */
$(function ($) {
  const $el17 = $('.panel17');
  var mutationObserver17 = new MutationObserver(function(mutations) {
    if ($el17.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .car").addClass("move02");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move03");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move04");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move05");
      $("#mainWrap .stickyWrapper .locationCar .itemSC17").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC18").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC19").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC20").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver17.observe($el17[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 17                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 18                        */
/* ======================================================= */
$(function ($) {
  const $el18 = $('.panel18');
  var mutationObserver18 = new MutationObserver(function(mutations) {
    if ($el18.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .car").addClass("move03");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move04");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move05");
      $("#mainWrap .stickyWrapper .locationCar .itemSC18").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC19").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC20").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver18.observe($el18[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 18                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 19                        */
/* ======================================================= */
$(function ($) {
  const $el19 = $('.panel19');
  var mutationObserver19 = new MutationObserver(function(mutations) {
    if ($el19.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .car").addClass("move04");
      $("#mainWrap .stickyWrapper .locationCar .car").removeClass("move05");
      $("#mainWrap .stickyWrapper .locationCar .itemSC19").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .itemSC20").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver19.observe($el19[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 19                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 20                        */
/* ======================================================= */
$(function ($) {
  const $el20 = $('.panel20');
  var mutationObserver20 = new MutationObserver(function(mutations) {
    if ($el20.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar .car").addClass("move05");
      $("#mainWrap .stickyWrapper .locationCar .itemSC20").addClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("out");
      $("#mainWrap .panel21 .button").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver20.observe($el20[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 20                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 21                        */
/* ======================================================= */
$(function ($) {
  const $el21 = $('.panel21');
  var mutationObserver21 = new MutationObserver(function(mutations) {
    if ($el21.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").addClass("out");
      $("#mainWrap .panel21 .button").addClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver21.observe($el21[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 21                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 22                        */
/* ======================================================= */
$(function ($) {
  const $el22 = $('.panel22');
  var mutationObserver22 = new MutationObserver(function(mutations) {
    if ($el22.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel22 .SACompBrief").addClass("active");
        $("#mainWrap .panel22 .SAImage").addClass("active");
        $("#mainWrap .panel22 .SACompLogo").addClass("active");
    } else {
      $("#mainWrap .panel22 .SACompBrief").removeClass("active");
        $("#mainWrap .panel22 .SAImage").removeClass("active");
        $("#mainWrap .panel22 .SACompLogo").removeClass("active");
    }
  });
  mutationObserver22.observe($el22[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 22                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 23                        */
/* ======================================================= */
$(function ($) {
  const $el23 = $('.panel23');
  var mutationObserver23 = new MutationObserver(function(mutations) {
    if ($el23.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel23 .SACompBrief").addClass("active");
        $("#mainWrap .panel23 .SAImage").addClass("active");
        $("#mainWrap .panel23 .SACompLogo").addClass("active");
        $("#mainWrap .panel22 .SAOrnament").addClass("active");
    } else {
      $("#mainWrap .panel23 .SACompBrief").removeClass("active");
        $("#mainWrap .panel23 .SAImage").removeClass("active");
        $("#mainWrap .panel23 .SACompLogo").removeClass("active");
        $("#mainWrap .panel22 .SAOrnament").removeClass("active");
    }
  });
  mutationObserver23.observe($el23[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 23                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 24                        */
/* ======================================================= */
$(function ($) {
  const $el24 = $('.panel24');
  var mutationObserver24 = new MutationObserver(function(mutations) {
    if ($el24.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel24 .SACompBrief").addClass("active");
      $("#mainWrap .panel25 .ornament01").removeClass("show");
      $("#mainWrap .panel25 .ornament02").removeClass("show");
      $("#mainWrap .panel25 h2").removeClass("show");
      $("#mainWrap .panel25 .tabsAnimation01").removeClass("show");
      $("#mainWrap .panel25 .tabsAnimation02").removeClass("show");
    } else {
      $("#mainWrap .panel24 .SACompBrief").removeClass("active");
    }
  });
  mutationObserver24.observe($el24[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 24                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 25                        */
/* ======================================================= */
  $(".panel25 #tabsNav .navList:first-child").addClass("active");
  $(".panel25 #tabsNav .tabsContent:first-child").addClass("active");
  $('.panel25 #tabsNav .navList').click(function(){
    $('.panel25 #tabsNav .tabsContent').hide();
    $(".panel25 #tabsNav .navList").removeClass("active");
    $(this).addClass("active");
    var $targetTab = $('#tabsTar-'+$(this).attr('target'));
    $targetTab.fadeIn(200);
  });
$(function ($) {
  const $el25 = $('.panel25');
  var mutationObserver25 = new MutationObserver(function(mutations) {
    if ($el25.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
      $("#mainWrap .panel25 .ornament01").addClass("show");
      $("#mainWrap .panel25 .ornament02").addClass("show");
      $("#mainWrap .panel25 h2").addClass("show");
      $("#mainWrap .panel25 .tabsAnimation01").addClass("show");
      $("#mainWrap .panel25 .tabsAnimation02").addClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver25.observe($el25[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 25                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 26                        */
/* ======================================================= */
$(function ($) {
  const $el26 = $('.panel26');
  var mutationObserver26 = new MutationObserver(function(mutations) {
    if ($el26.hasClass('active')) {
      $("#mainWrap .stickyWrapper .buildingFeatures").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk01").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk02").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk03").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk04").removeClass("show");
      $("#mainWrap .stickyWrapper .locationWalk05").removeClass("show");
      $("#mainWrap .stickyWrapper .locationCar").removeClass("show");
    } else {
      // Source Code Here
    }
  });
  mutationObserver26.observe($el26[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 26                        */
/* ======================================================= */



/* ======================================================= */
/*                         PANEL 00                        */
/* ======================================================= */
$(function ($) {
  const $el27 = $('.panel27');
  var mutationObserver27 = new MutationObserver(function(mutations) {
    if ($el27.hasClass('active')) {
      // Source Code Here
    } else {
      // Source Code Here
    }
  });
  mutationObserver27.observe($el27[0], {
    attributes: true
  });
});
/* ======================================================= */
/*                     END PANEL 00                        */
/* ======================================================= */


