$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});

$(document).ready(function () {
  $(window).scroll(function (event) {
    const s = $(this).scrollTop();
    const w = $(this).outerWidth();
    const h = $(".content").outerHeight();
    const h_b = $(".parallax").outerHeight();
    const p = (s / h) * 50;
    const p_b = (s / h_b) * 100;
    const o = 1 - (1 / 100) * p_b;

    const z_1 = 1 + (w / 15000) * p_b;
    $(".parallax__fog").css("transform", "scale(" + z_1 + ")");
    $(".parallax__fog").css("opacity", 0.8 * o);

    const z_2 = 1 + (w / 5000000) * p;
    $(".space").css("transform", "scale(" + z_2 + ")");

    const hr = (w / 15000) * p_b;
    const z_3 = 1 + w * 0.000003 * p_b;
    $(".parallax__mountain_2").css(
      "transform",
      "translate3d(" + hr + "px,0,0) " + "scale(" + z_3 + ")"
    );

    const hr_2 = (w / 4000) * p_b;
    const z_4 = 1 + w * 0.000001 * p_b;
    $(".parallax__mountain_3").css(
      "transform",
      "translate3d(" + hr_2 + "px,0,0) " + "scale(" + z_4 + ")"
    );
  });
});
