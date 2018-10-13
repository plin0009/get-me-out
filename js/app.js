$(function() {
    console.log(window.scrollTo(0, 50));

  var mainL = $("#main");
  var mainL2 = mainL.offset().top / 2;
  console.log(mainL2);
  if ($(window).scrollTop() >= mainL2);
     console.log('cancer');
 
});
