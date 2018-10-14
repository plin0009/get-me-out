$(document).ready(function () {
  $('#fullpage').fullpage({
      sectionsColor:['','rgb(26, 24, 41)','rgb(26, 24, 41)'],
      css3:true
  });

  $("#homeButton").click(function () {
    $.fn.fullpage.moveTo(1);
  });

  $("#mapButton").click(function () {
    $.fn.fullpage.moveTo(2);
  });

  $("#aboutButton").click(function () {
    $.fn.fullpage.moveTo(3);
  });


});
