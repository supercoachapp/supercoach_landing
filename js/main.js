
$(function() {

  $(".tab-trigger a").on("click", function() {
    var id = $(this).data("target");
    $(".tab-trigger").closest("li").removeClass("active");
    $(this).closest("li").addClass("active");
    $(".tabs").find(".tab-target").slideUp(200)
      .delay(400)
      .end().find(".tab-target-" + id).slideDown(200);
  });

  $('.js-scroll').click(function(e) {
    e.preventDefault();
    var target = $(this).data("target");
    console.log(target);
    var offset = 0;
    if (target != "") {
      offset = $("#" + target).offset().top - 100;
    }
    $('html, body').animate({
      scrollTop: offset
    }, 400);
  });

  $(function () {
    $('.gallery a').fluidbox({ viewportFill: 0.8 });
  });
});
