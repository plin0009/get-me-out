$(document).ready(function () {

  $("#homeButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#start").offset().top
    }, 500);
  });
  $("#mapButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#main").offset().top-100
    }, 500);
  });
  $("#aboutButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
  });
  $('#downArrow').click(function(){
    $('html, body').animate({
      scrollTop: $("main").offset().top-100
  }, 500);
  });

  $('#findRoute').click(
    calculateRouteFromAtoB(42.2747974,-83.7359662, 42.3770921,-83.5387994)
  );


});
