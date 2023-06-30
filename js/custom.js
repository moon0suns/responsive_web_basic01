
const MainSlide = new Swiper('.main_slide', {
    loop: true
});

// document.querySelector = $달러랑 같음

const leftArrow = document.querySelector('#MainVisual .arrows .left');
leftArrow.addEventListener('click', function () {
    MainSlide.slidePrev()
});

const rightArrow = document.querySelector('#MainVisual .arrows .right');
rightArrow.addEventListener('click', function () {
    MainSlide.slideNext()
});

const proSlide = new Swiper('.pro_slide', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".sbar",
        type: "progressbar",
    },

    // 반응형갔을때
    breakpoints: {
        540: {
            slidesPerView: 4,
        },

    },

    scrollbar: {
        el: ".drag",
        draggable: true,
        dragSize: 150,
        hide: false,
    },
})

//반응형
//태그 선택자
const mobileBtn = document.querySelector('.mobile_btn');
const GNB = document.querySelector('#gnb');
const H1 = document.querySelector('h1');

// 모바일 버튼 클릭했을때 나오게 하기
mobileBtn.addEventListener('click', function () {
    GNB.classList.toggle('on');
    H1.classList.toggle('on');
})

// gnb버튼 눌렀을때 스크롤 안되게
GNB.addEventListener('wheel', function (e) {
    if (GNB.classList.contains('on')) {
        e.preventDefault();
    }
})

