jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".menu-btn__btn").click(function () {
    $(".menu-btn__btn").toggleClass("menu-btn__btn--active");
    $(".menu-list").toggleClass("menu-list__open");
  });
});
