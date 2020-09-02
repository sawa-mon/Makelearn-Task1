let mySwiper = new Swiper ('.swiper-container', {
  // 以下オプション
  loop: true,
 
  paginationClickable: true,
  speed: 1000,
  autoplay: 3000,
  spaceBetween: 10,
  effect: 'coverflow',

//以下自動再生時
//   autoplay: {
//     delay: 1000,
//     stopOnLastSlide: false,
//     disableOnInteraction: false,
//     reverseDirection: false
// },
 
  //ページネーション表示の設定
  pagination: { 
    el: '.swiper-pagination', //ページネーションの要素
    // type: 'bullets', //ページネーションの種類
    // clickable: true, //クリックに反応させる
  },
 
  //ナビゲーションボタン（矢印）表示の設定
  navigation: { 
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
 
  //スクロールバー表示の設定
  scrollbar: { 
    el: '.swiper-scrollbar', //要素の指定
  },
});