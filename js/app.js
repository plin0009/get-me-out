//$(function(){
   //$("#About").slideUp(1000);
//});
$(function(){
    $(window).scroll(function() {
        if ($(this).width() < 992) {
            if ($(this).height() <= 768) {
                if($(this).scrollTop() > 1000) {
                    $('#map').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
                }
            }
        }
    });
});


