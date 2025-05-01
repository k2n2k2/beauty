$(function(){
  
    $("").hover(function(){
        $(this).children("ul.sub").stop().slideDown();
    }, function(){
        $(this).children("ul.sub").stop().slideUp();
    });

});