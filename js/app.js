//$(function(){
   //$("#About").slideUp(1000);
//});
$(function(){
<<<<<<< HEAD
    $(window).scroll(function() {
        if ($(this).width() < 992) {
            if ($(this).height() <= 768) {
                if($(this).scrollTop() > 1000) {
                    $('#map').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
                }
            }
=======
  $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('#map').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
>>>>>>> 866c9e541d813caf5cffb13bb74e5cf4c03e4240
        }
      })
    }
  );
