$(document).ready(function () {
  
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


});