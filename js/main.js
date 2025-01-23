
$(".slide-items").slick({
  autoplay: true, 
  centerMode: true,
  centerPadding: '20%',
  slideToShow: 4,
  arrow:false,
});

$(function () {
  $('.toggle__btn').on('click', function () {
    $('header').toggleClass('open')
  });


  $(".mask").on("click", function () {
    $("header").toggleClass("open");
  });

  $("nav a").on("click", function () {
    $("header").toggleClass("open");
  });

});

$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
  return false;
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

