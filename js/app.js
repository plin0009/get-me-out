$(document).ready(function(){
  $("#homeButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#start").offset().top-1000
   }, 500);
  });

  $("#mapButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#map").offset().top-40
   }, 500);
  });
    

  $("#aboutButton").click(function(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top+40
   }, 500);
  });
    
    
  
});
