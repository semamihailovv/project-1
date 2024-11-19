document.addEventListener("DOMContentLoaded", (event) => {

    let popupGetCons = document.getElementById("popupGetCons");
    let popupBuy = document.getElementById("popupBuy");
    let closeBtn = document.querySelector(".close-btn");
    let closeBuyBtn = document.querySelector(".closeBuy-btn");
    let popupBuybuttons = document.querySelectorAll('.product-card-button');


    popupBuybuttons.forEach(button => {
        button.addEventListener("click", () => {
            popupBuy.style.opacity = '1';
            popupBuy.style.pointerEvents = "auto"
            document.body.classList.add("no-scroll"); 

        }
        )
    })

    openGetCons.addEventListener("click", () => {
        popupGetCons.style.opacity = '1';
        popupGetCons.style.pointerEvents = "auto"
        document.body.classList.add("no-scroll");

    })



    closeBtn.addEventListener("click", () => {
        popupGetCons.style.opacity = '0';
        popupGetCons.style.pointerEvents = "none"
        popupBuy.style.opacity = '0';
        popupBuy.style.pointerEvents = "none"
        document.body.classList.remove("no-scroll"); 
    })
    closeBuyBtn.addEventListener("click", () => {
        popupBuy.style.opacity = '0';
        popupBuy.style.pointerEvents = "none"
        document.body.classList.remove("no-scroll"); 
    })


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


    // Смена всех линий на мобильной версии
    function updateImagesSrc() {
        const images = document.querySelectorAll('.line');
        images.forEach(image => {
            if (window.innerWidth < 670) {
                image.src = './images/line-mobile.svg';
            } else {
                image.src = './images/line.svg';
            }
        });
    }
    window.addEventListener('load', updateImagesSrc);
    window.addEventListener('resize', updateImagesSrc);

    if(document.querySelector('.filter-dropdown') !== null){
        document.querySelector('.filter-dropdown').addEventListener('click', function() {
            const dropdown = this.querySelector('.dropdown-options');
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
          });
    }
});

