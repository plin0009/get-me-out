$(document).ready(function(){
  $("#mapButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#map").offset().top-40
   }, 500);
  });
  $("#aboutButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top-40
   }, 500);
  });
  $("#startButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#start").offset().top-1000
   }, 500);
  });

  

});


