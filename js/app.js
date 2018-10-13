$(function() {

    var mainEl=$('#main');
        mainEloffset=mainEl.offset().top/2,
        documentEl=$(document);
    
    documentEl.on('scroll',function(){
        if(documentEl.scrollTop()>mainEloffset); $('#main').fadein();

    });

  
});
