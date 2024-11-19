$(document).ready(function() {
    var carouselOne = $(".carousel-one");
    $('.carousel-one').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: true,
        dotsContainer: '#carousel-one-dots',
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".carousel-one-next").click(function () {
        carouselOne.trigger("next.owl.carousel");
    });
    $(".carousel-one-prev").click(function () {
        carouselOne.trigger('prev.owl.carousel', [300]);
    });
    $('.carousel-one-dot').click(function () {
        carouselOne.trigger('to.owl.carousel', [$(this).index(), 300]);
    });


});

$(document).ready(function() {
    var carouselTwo = $(".carousel-two");
    $('.carousel-two').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: false, //Отключаем точки
        center: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            370:{
                items:1.2
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $(".carousel-two-next").click(function () {
        carouselTwo.trigger("next.owl.carousel");
    });
    $(".carousel-two-prev").click(function () {
        carouselTwo.trigger('prev.owl.carousel', [300]);
    });
});


$(document).ready(function() {
    var carouselThree = $(".carousel-three");
    $('.carousel-three').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: false, //Отключаем точки
        center: false,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            370:{
                items:1.2
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $(".carousel-three-next").click(function () {
        carouselThree.trigger("next.owl.carousel");
    });
    $(".carousel-three-prev").click(function () {
        carouselThree.trigger('prev.owl.carousel', [300]);
    });
});

$(document).ready(function() {
    var carouselFour = $(".carousel-four");
    $('.carousel-four').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: false, //Отключаем точки
        center: false,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            370:{
                items:1.2
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    $(".carousel-four-next").click(function () {
        carouselFour.trigger("next.owl.carousel");
    });
    $(".carousel-four-prev").click(function () {
        carouselFour.trigger('prev.owl.carousel', [300]);
    });
});

$(document).ready(function() {
    var carouselFive = $(".carousel-five");
    $('.carousel-five').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:10, //Отступ от картинок если выводите больше 1
        nav:false, //Отключил навигацию
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда
        dots: false, //Отключаем точки
        center: false,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1.7
            },
            550:{
                items:3
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $(".carousel-five-next").click(function () {
        carouselFive.trigger("next.owl.carousel");
    });
    $(".carousel-five-prev").click(function () {
        carouselFive.trigger('prev.owl.carousel', [300]);
    });
});