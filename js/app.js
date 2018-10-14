$(document).ready(function(){
  $("#mapButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#map").offset().top-70
   }, 500);
  });
  $("#aboutButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top-70
   }, 500);
  });
  $("#startButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#start").offset().top-70
   }, 500);
  });
});


