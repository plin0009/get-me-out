$(function() {
  $(window).scroll(function() {});
    if($(this).scrollTop()<0){
        $('#header').fadeIn('slow',function(){
            $('#header').animate({'opacity':'show','paddingTop':0},2000);
        });
    }
});
