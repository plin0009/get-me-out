$(function() {

  var mainL = $("#main");
  var mainL2 = mainL.offset().top / 2;
  console.log(mainL2);
  console.log($(window).scrollTop());

  if ($(window).scrollTop() >= mainL2 ){
    console.log(window.scrollTo(0,750));
  }

 
});
function goToMap(){
      console.log(window.scrollTo(0,750));
}
