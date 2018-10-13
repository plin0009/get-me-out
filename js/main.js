window.onload = function() {
  // everything that happens on pageload goes here
  loadMap();
  useIP();
  /*
  $(window).scroll(function() {
    if ($(this).width() < 992) {
        if ($(this).height() <= 768) {
            if($(this).scrollTop() > 1000) {
                $('#map').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
            }
        }
    }
  });*/
  //useGeolocation();
}
