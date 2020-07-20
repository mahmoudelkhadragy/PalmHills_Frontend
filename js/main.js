$(document).ready(function () {

  var scrollButton = $('.scrole_up_icon'),
    specialPopup = $('.special_popup');

  $('.sidebar_icon').click(function () {
    $('.sidebar').animate({
      left: "0"
    });
  });

  $(document).mouseup(function (e) {
    var sidebar = $('.sidebar');
    if (sidebar.css('left') === "0px") {
      // If the target of the click isn't the container
      if (!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
        sidebar.animate({
          left: "-220px"
        });
      }
    }
  });

  // scroll up in mobile screens
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      scrollButton.show();
      setTimeout(function () {
        scrollButton.hide();
      }, 3000);
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 600);
  });

  // show special offer popup after web is loading
  setTimeout(function () {
    specialPopup.fadeIn();
  }, 8000);
  // make popup disapper when click close icon
  $('.close_special_popup').click(function () {
    specialPopup.fadeOut();
  });
  // make popup disapper when click outside the div with special_popup_content
  $(document).mouseup(function (e) {
    var specialPopUpConent = $('.special_popup_content');
    // If the target of the click isn't the container
    if (!specialPopUpConent.is(e.target) && specialPopUpConent.has(e.target).length === 0) {
      specialPopup.fadeOut();
    }
  });



  // image slider
  $('.slider').slick({
    centerMode: true,
    centerPadding: '260px',
    slidesToShow: 1,
    arrows: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }, ]

  });

  // popup image slider
  $('.slider_popup').slick({
    
  });

  // Custom Prev Arrow
  $('.carousel_prev').click(function () {
    $(this).parent().find('.slider').slick('slickPrev');
  });
  // Custom Next Arrow
  $('.carousel_next').click(function (e) {
    e.preventDefault();
    $(this).parent().find('.slider').slick('slickNext');
  });

  // show social_share when hover on the slider
  $('.center_items').hover(function () {
    $(this).find('.social_share').show();
  }, function () {
    $(this).find('.social_share').hide();
  });

  // handle red heart like
  $('.heart_not_solid').click(function () {
    $(this).hide();
    $(this).siblings('.heart_solid').show();
  });
  $('.heart_solid').click(function () {
    $(this).hide();
    $(this).siblings('.heart_not_solid').show();
  });

});