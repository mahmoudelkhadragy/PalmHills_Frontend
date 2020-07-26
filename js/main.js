$(document).ready(function () {

  var scrollButton = $('.scrole_up_icon'),
    specialPopup = $('.special_popup');

  $('.close_sidebar').click(function () {
    $('.sidebar').animate({
      'left': "-3000px"
    });
  });

  $('.sidebar_icon').click(function () {
    $('.sidebar').animate({
      'left': "0"
    });
  });

  $('.plus').click(function () {
    $(this).hide();
    $(this).siblings('.minus').show();
    $(this).siblings('.sub_sidebar_ul').show();
  });

  $('.minus').click(function () {
    $(this).hide();
    $(this).siblings('.plus').show();
    $(this).siblings('.sub_sidebar_ul').hide();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 250) {
      $('.sub_div').css('top', '35px');
    } else {
      $('.sub_div').css('top', '-120px');
    }
  });

  // submenu
  $('.main_li a').hover(function (e) {
    if ($(this).text() !== 'Home') {
      $(this).siblings('.sub_div').show();
    }
  }, function (e) {
    var subMenu = $(this).siblings('.sub_div');
    if ($(this).text() !== 'Home') {
      subMenu.hide();
    }
  });

  $('.sub_div').hover(function (e) {
    $(this).show();
  }, function (e) {
    $(this).hide();
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
  }, 10000);
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

  // video slider
  $('.video_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.video_prev'),
    nextArrow: $('.video_next'),
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
        draggable: true,
      }
    }, ]
  });

  // image slider
  $('.slider').slick({
    centerMode: true,
    centerPadding: '260px',
    slidesToShow: 1,
    arrows: false,
    draggable: false,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        draggable: true,
      }
    }, ]
  });



  $('.slider_popup').slick({
    prevArrow: $('.btn_prev'),
    nextArrow: $('.btn_next')
  });

  // slider in contactUs for Mobile only
  $('.slider_images_info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 500,
    fade: true,
  });

  // show popup slider
  $('.center_items').click(function (e) {
    e.stopPropagation();
    // var currentAttr = $(this).find('img').attr("src");
    $('.slider_popup').resize();
    $('.slider_popup_section').show();
  });

  $('.close_popup').click(function () {
    $('.slider_popup_section').hide();
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
  $('.heart_not_solid').click(function (e) {
    e.stopPropagation();
    $(this).hide();
    $(this).siblings('.heart_solid').show();
  });
  $('.heart_solid').click(function (e) {
    e.stopPropagation();
    $(this).hide();
    $(this).siblings('.heart_not_solid').show();
  });

  // show share links
  $('.share_icon').click(function (e) {
    e.stopPropagation();
    $(this).parent().hide();
    $(this).parent().siblings('.social_share_links').show();
  });
  $('.social_share_links').hover(function () {
    $(this).show();
  }, function () {
    var that = $(this);
    var icons = $(this).siblings('.social_share_container');
    setTimeout(function () {
      that.hide();
      icons.show();
    }, 1200);
  });

  // like in slider popup

  $('.heart_not_solid_popup').click(function () {
    var likes = +$(this).siblings('.heart_solid_popup').find('.likes_number').text();
    likes += 1;
    console.log(likes);
    $(this).hide();
    $(this).siblings('.heart_solid_popup').show();
    $(this).siblings('.heart_solid_popup').find('.likes_number').text(likes);
  });
  $('.heart_solid_popup').click(function () {
    var likes = +$(this).find('.likes_number').text();
    likes -= 1;
    $(this).hide();
    $(this).siblings('.heart_not_solid_popup').show();
    $(this).find('.likes_number').text(likes);
  });

  //show share div icons
  $('.share_icon_popup').hover(function () {
    $('.share_controls_part').show();
  }, function () {
    $('.share_controls_part').hide();
  });
  // when hover share_controls_part
  $('.share_controls_part').hover(function () {
    $(this).show();
  }, function () {
    $(this).hide();
  });

  $('.slider_popup').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var imageName = $('.slick-current').find('.img_slider_popup img').attr("src");
    imageName = imageName.slice(4);
    $('.image_name').text(imageName);
  });

  // video handle share icons

  $('.vjs-big-play-button').html('<h2 class="mb-4">The Crown - King</h2><p class="v_player"><span class="icon"><i class="far fa-play-circle"></i></span><span class="text">Play Video</span></p>');

  $('.bar_video').click(function () {
    $(this).hide();
    $(this).siblings('.controls_video_div').show();
  });

  $('.close_v_icon').click(function () {
    $(this).parent().hide();
    $(this).parent().siblings('.bar_video').show();
  });

});