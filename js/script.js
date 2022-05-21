// global menu 点滅
$(function () {
  setInterval(function () {
    $(".btn-gNav").css("transform", "scale(1.2, 1.2)");
    $(this).toggle(500, function () {
      $(".btn-gNav").css("transform", "scale(1.0, 1.0)");
    });
  }, 1000);
});

$(function () {
  $(".btn-gNav").on("click", function () {
    $(this).toggleClass("open");
    $("#gNav").toggleClass("open");
  });
});

// メニューとバツをクリックされたら、非表示にする
$(function () {
  $(".btn-gNav_open").on("click", function () {
    $("#gNav").removeClass("open");
  });
});
$(function () {
  $("gNav-menu li a").on("click", function () {
    $("#gNav").removeClass("open");
  });
});
