// creating pulse on arrow

$.extend($.fn.pulse = function() {
    var minOpacity = '.5';
    var fadeOutDuration = 1000;
    var fadeInDuration = 1000;
    $(this).attr('pulsing', 'y');

    $(this).animate({
        opacity: minOpacity
    }, fadeOutDuration, function() {
        $(this).animate({
            opacity: 1
        }, fadeInDuration, function() {
            if ($(this).attr('pulsing') === 'y') $(this).pulse();
        });
    });
    return $(this);
});
$.extend($.fn.stopPulse = function() {
    $(this).attr('pulsing', '').stop(true, true).animate({
        opacity: 1
    });
});

$(document).ready(function() {
    $(".about-content").hide();
    $(".internet-content > p").hide();
    
    $(".arrow").pulse();
    
    $('.hero-typo').children().first().animate({top: '0px'},200);
    $('.hero-typo').find(':nth-child(2)').delay(100).animate({right: '0px'},200);
    $('.hero-typo').find(':nth-child(3)').delay(150).animate({bottom: '0px'},150);

// animate effect on scroll

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

$('#contact-btn').click(function() {
  $('#user_message').hide();
  $.post(
    'ajax/contact.php', 
    {
      name: $('#form-name').val(),
      email: $('#form-email').val(),
      message: $('#form-message').val()
    }
  )
  .success(function(response) {
    if(response == 1) {
      $(this).addClass('disabled');
    } else {
      $('#user_message').text(response).show();
    }
  });
  
  return false;
});