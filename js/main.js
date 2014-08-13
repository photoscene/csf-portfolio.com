$(document).ready(function() {
    $(".about-content").hide();
    $(".internet-content > p").hide();

    $(document).scroll(function() {
        var docScroll = $(document).scrollTop();
        var boxCntOfset = $(".about").offset().top - 100;
        var boxCntOfsetInternet = $(".internet1").offset().top - 100;

        if (docScroll >= boxCntOfset) {
            $(".about-content").fadeIn(600);
        }
        if (docScroll >= boxCntOfsetInternet) {
         $(".internet-photo-left").animate({left: '0px'},200);
         $(".internet-photo-right").delay(100).animate({right: '0px'},200);
            $("h2").delay(200).animate({top: '1050px'},200);
            // console.log("h2 fired");
            $(".internet-content > p").delay(250).fadeIn(600);
        }

    });
});