$(document).ready(function() {
    $(".about-content").hide();
    $(".internet-content > p").hide();
    
    $('.hero-typo > span').hide();

    $(document).scroll(function() {
        var docScroll = $(document).scrollTop();
        var boxCntOfset = $(".quick-navigation").offset().top - 100;
        var boxCntOfsetInternet = $(".internet1").offset().top - 100;
        var boxCntOfsetContact = $(".reference-block3").offset().top - 100;

        if (docScroll >= boxCntOfset) {
            $(".about-content").fadeIn(600);
        }
        if (docScroll >= boxCntOfsetInternet) {
         $(".internet-photo-left").animate({left: '0px'},200);
         $(".internet-photo-right").delay(100).animate({right: '0px'},200);
            $("h2").delay(200).animate({top: '80px'},200);
            // console.log("h2 fired");
            $(".internet-content > p").delay(250).fadeIn(600);
        }
        if (docScroll >= boxCntOfsetContact) {
            $(".personal-details").animate({left: '0px'},200);
            $(".datas").delay(100).delay(100).animate({right: '0px'},200);
        }

    });
});