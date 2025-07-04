$(function () {
  $(function () {
    function bindGnbHover() {
      if ($(window).width() > 1280) {
        $('.gnb-menu > li').on('mouseenter.gnb', function () {
          $('.gnb-draw').stop(true).slideUp(200);
          $(this).find('.gnb-draw').stop(true).slideDown(200);
        });

        $('.gnb').on('mouseleave.gnb', function () {
          $('.gnb-draw').stop(true).slideUp(200);
        });
      } else {
        // 1280 이하일 땐 이벤트 제거!
        $('.gnb-menu > li').off('mouseenter.gnb');
        $('.gnb').off('mouseleave.gnb');
        $('.gnb-draw').hide(); // 혹시 열려있던 거 닫기
      }
    }

    // 최초 실행
    bindGnbHover();

    // 창 크기 바뀔 때마다 다시 체크
    $(window).on('resize', function () {
      bindGnbHover();
    });


  });



  //슬라이드
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  const swiper = new Swiper(".HeraSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    rewind: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    /* loop: true, */
  });

  pauseBtn.addEventListener("click", () => {
    swiper.autoplay.stop();
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
  });

  playBtn.addEventListener("click", () => {
    swiper.autoplay.start();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
  });


  //햄버거메뉴
  $(document).ready(function () {
  const line = $('.searchBox .mobile > div');
  const nav = $('.gnb');
  const sub = $('.gnb-draw');

  $('.searchBox .mobile').on('click', function (e) {
    e.preventDefault(); // a 태그 이동 막기
    line.toggleClass('active');
    nav.toggleClass('active');
  });

  $(window).on('resize', function () {
    line.removeClass('active');
    nav.removeClass('active');
    sub.slideUp();
  });
});

//+-토글
$(document).ready(function () {
  $('.depth1').on('click', function (e) {
    e.preventDefault();

    const $li = $(this).closest('li');
    const $draw = $li.find('.gnb-draw');
    const $icon = $(this).find('.icon');

    if ($draw.is(':visible')) {
      $draw.slideUp();
      $icon.text('+');
    } else {
      // 다른 서브메뉴 모두 닫기
      $('.gnb-draw').slideUp();
      $('.icon').text('+');

      // 현재 서브메뉴 열기
      $draw.slideDown();
      $icon.text('-');
    }
  });
});






  //section02 글자
  $('.renew2024_tab a').click(function (e) {
    e.preventDefault(); // 링크 이동 막기

    $('.renew2024_tab a').removeClass('active'); // 모든 탭 비활성화
    $(this).addClass('active'); // 클릭한 애만 활성화
  });





  $('.renew2024_tab a').click(function (e) {
    e.preventDefault();

    // 탭 스타일 적용
    $('.renew2024_tab a').removeClass('active');
    $(this).addClass('active');

    const tab = $(this).text().toLowerCase(); // 텍스트를 소문자로 비교: all, makeup, skincare

    // 이미지와 텍스트 변경
    if (tab === 'skincare') {
      const skincareData = [
        {
          img: 'img/skincare01.png',
          text: '클렌징 폼 퓨어네스',
          num: './img/num1.svg'
        },
        {
          img: 'img/skincare02.png',
          text: '에센스 스킨 부스터',
          num: './img/num2.svg'
        },
        {
          img: 'img/skincare03.png',
          text: '리프팅 세럼 엘릭서',
          num: './img/num3.svg'
        },
        {
          img: 'img/skincare04.png',
          text: '수분 크림 아쿠아밤',
          num: './img/num4.svg'
        }
      ];

      $('.product_list li').each(function (i) {
        $(this).find('.product_img').attr('src', skincareData[i].img);
        $(this).find('.number-badge').attr('src', skincareData[i].num);
        $(this).find('a').last().text(skincareData[i].text);
      });

    } else if (tab === 'all') {
      // 다시 원래 이미지로 돌아오게 할 수도 있어
      location.reload(); // 페이지 새로고침으로 복원
    }
  });




  //section04 슬라이드

  const swiper1 = new Swiper(".customSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /* loop: true, */
  });





  //토글
  $('.footer_dropdown .btn').click(function() {
  $(this).toggleClass('on');
  $(this).siblings('.sitebox').toggleClass('on');
});




[...document.querySelectorAll('*')].forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log('넘침 👉', el);
  }
});

});
