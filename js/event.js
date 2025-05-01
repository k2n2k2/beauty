$(function)(){
    $("#banner_btn")
        .click(function () {
            $("#banner_btn ").
                removeClass(".btn");
            $(this).addClass(".btn");

            $("ul li.click p.btn").removeClass(".btn");
            $(this).next("ul li.click p.btn").addClass(".btn");

        });


};