
$(function(){
            
            $("#menu > ul.txt > li").hover(function(){
                $(this).children("ul.sub").stop().slideDown();
            }, function(){
                $(this).children("ul.sub").stop().slideUp();
            });

        });
        
// $(function(){
          
//     $("#menu > ul.txt > li").hover(function(){
//                $("ul.sub").stop().slideDown();
//        }, function(){
//               $("ul.sub").stop().slideUp();
//     });
// });
