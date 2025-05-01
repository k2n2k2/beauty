
$(function () {

    $(".pyo ul li.cl ").click(function () {
        $(this).next().slideToggle().siblings("p.c").hide();

        var srcVal = $(this).find("i").attr("class");
        console.log(srcVal);

        if (srcVal == "fa-solid fa-chevron-down") {
            $(this).find("i").attr({ "class": srcVal.replace("down", "up") })
        } else {
            $(this).find("i").attr({ "class": srcVal.replace("up", "down") })
        }

        $(this).siblings().find("i").attr({ "class": srcVal.replace("up", "down") })

    });


});