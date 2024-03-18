// Scrollify Functions Desktop
$(function() {
  $.scrollify({
    section : ".scrollify-panel",
    before:function(index, section) {
      var sno = index+4;
      $(".scrollify-panel").removeClass("active");
      $(".scrollify-panel:nth-child("+sno+")").addClass("active");
    },
    after:function(index, section) {
      var sno = index+4;
      $(".scrollify-panel").removeClass("active");
      $(".scrollify-panel:nth-child("+sno+")").addClass("active");
    },
  });

  // Menu
  $(".tarAboutUs").click(function(){
    $.scrollify.move("#tar-About-Us");
  });
  $(".tarWordsFromArchitects").click(function(){
    $.scrollify.move("#tar-Words-From-Architects");
  });
  $(".tarAwards").click(function(){
    $.scrollify.move("#tar-Awards");
  });
  $(".tarBuildingFeatures").click(function(){
    $.scrollify.move("#tar-Building-Features");
  });
  $(".tarFloorPlan").click(function(){
    $.scrollify.move("#tar-Floor-Plan");
  });
  $(".tarLocation").click(function(){
    $.scrollify.move("#tar-Location");
  });
  $(".tarReachUs").click(function(){
    $.scrollify.move("#tar-Reach-Us");
  });
  // End Menu

  // Top Down
  $(".goDown").on("click",function() {
    $.scrollify.move("#tar-About-Us");
  });
  $(".goTop").on("click",function() {
    $.scrollify.move("#tar-Header");
  });
  // End Top Down

  // Building Features
  $(".buildingFeatures01 .compBFTarget a").click(function(){
    $.scrollify.move("#tar-Building-Features");
  });
  $(".buildingFeatures02 .compBFTarget a").click(function(){
    $.scrollify.move("#tar-Building-Features-02");
  });
  $(".buildingFeatures03 .compBFTarget a").click(function(){
    $.scrollify.move("#tar-Building-Features-03");
  });
  $(".buildingFeatures04 .compBFTarget a").click(function(){
    $.scrollify.move("#tar-Building-Features-04");
  });
  // End Building Features

  // $('.panel27').remove();

});

// Scrollify Functions Mobile
// if (screen.width < 846) {
//   $(function() {
//     $.scrollify({
//       section : ".scrollify-panel",
//       before:function(index, section) {
//         var sno = index+4;
//         $(".scrollify-panel").removeClass("active");
//         $(".scrollify-panel:nth-child("+sno+")").addClass("active");
//       },
//       after:function(index, section) {
//         var sno = index+4;
//         $(".scrollify-panel").removeClass("active");
//         $(".scrollify-panel:nth-child("+sno+")").addClass("active");
//       },
//     });
//     $('.panel27').add();
//   });
// }