// Открытие и закрытие каталога

let catalogButton = document.querySelector(".catalog-button");
let catalog = document.querySelector(".catalog-window");
let closeCatalog = document.querySelector(".close-catalog");

catalogButton.addEventListener("click", function () {
    catalog.classList.toggle("active"); 
});

closeCatalog.addEventListener("click", function () {
    catalog.classList.remove("active");
});


// Функция для инициализации слайдера с возможностью переопределить настройки
function initSwiper(selector, additionalOptions = {}) {
    return new Swiper(selector, {
        slidesPerView: '1',
        spaceBetween: 22,
        grabCursor: true,
        loop: true,
        simulateTouch: true,
        // autoplay: {
        //     delay: 10000
        // },
        mousewheel: {
            sensitivity: 1,
        },
        navigation: {
            nextEl: '.swiper-button-next-team',
            prevEl: '.swiper-button-prev-team',
        },
        breakpoints: {
            768: {slidesPerView: '2'},
            1260: {slidesPerView: '2'},
            1920: {slidesPerView: '3'},
            ...additionalOptions.breakpoints // Переопределение breakpoints
        },
        ...additionalOptions // Переопределение других параметров
    });
}

const recommendProductSliderIndex = initSwiper('.slider-recommend-products-index');
const productSlider = initSwiper('.slider-product');
const recommendProductSlider = initSwiper('.slider-recommend-products');
const newProductSlider = initSwiper('.new-products-slider');
const popularBrandsSlider = initSwiper('.slider-popular-brands', {
    breakpoints: {
        1366: {slidesPerView: '4'}
    }
});


// Получаем элементы для всех секций
let boxAccount = document.getElementById("box-account");
let boxAccountContent = document.getElementById("box-account-content");
let boxBonuses = document.getElementById("box-bonuses");
let boxBonusesContent = document.getElementById("box-bonuses-content");
let boxOrders = document.getElementById("box-orders");
let boxOrdersContent = document.getElementById("box-orders-content");
let boxSelected = document.getElementById("box-selected");
let boxSelectedContent = document.getElementById("box-selected-content");
let boxCompare = document.getElementById("box-compare");
let boxCompareContent = document.getElementById("box-compare-content");

// Функция для скрытия всех секций
function hideAllSections() {
    boxAccountContent.style.display = "none";
    boxBonusesContent.style.display = "none";
    boxOrdersContent.style.display = "none";
    boxSelectedContent.style.display = "none";
    boxCompareContent.style.display = "none";

    boxAccount.style.background = "#262E37";
    boxBonuses.style.background = "#262E37";
    boxOrders.style.background = "#262E37";
    boxSelected.style.background = "#262E37";
    boxCompare.style.background = "#262E37";

}

// Добавляем обработчики для каждой секции
boxAccount.addEventListener("click", function () {
    hideAllSections();
    boxAccountContent.style.display = "flex";
    boxAccount.style.background = "#90C8EB";
});

boxBonuses.addEventListener("click", function () {
    hideAllSections();
    boxBonusesContent.style.display = "block";
    boxBonuses.style.background = "#90C8EB";
});

boxOrders.addEventListener("click", function () {
    hideAllSections();
    boxOrdersContent.style.display = "block";
    boxOrders.style.background = "#90C8EB";
});

boxSelected.addEventListener("click", function () {
    hideAllSections();
    boxSelectedContent.style.display = "block";
    boxSelected.style.background = "#90C8EB";
});

boxCompare.addEventListener("click", function () {
    hideAllSections();
    boxCompareContent.style.display = "block";
    boxCompare.style.background = "#90C8EB";
});



