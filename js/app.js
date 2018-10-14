$(document).ready(function () {

  $("#homeButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#start").offset().top+40
    }, 500);
  });
  $("#mapButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#main").offset().top+40
    }, 500);
  });
  $("#aboutButton").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top+40
    }, 500);
  });
  $('#downArrow').click(function(){
    $('html, body').animate({
      scrollTop: $("main").offset().top+40
  }, 500);
  });


});
