document.addEventListener("DOMContentLoaded", (event) => {
const thumbnails = document.querySelectorAll('.thumbnail img');
      const mainImage = document.querySelector('#main-image');

      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
          const currentMainImageSrc = mainImage.src;
          mainImage.src = thumbnail.src;
          // thumbnail.src = currentMainImageSrc;
        });
      });



let bodyButton = document.getElementById("product-description-body-button");
let footerButton = document.getElementById("product-description-footer-button");
let feetbacksButton = document.getElementById("product-description-feetbacks-button");

let bodyButtonmobile = document.getElementById("product-description-body-button-mobile");
let footerButtonmobile = document.getElementById("product-description-footer-button-mobile");
let feetbacksButtonmobile = document.getElementById("product-description-feetbacks-button-mobile");

let descriptionBody = document.getElementById("product-description-body");
let descriptionFooter = document.getElementById("product-description-footer");
let descriptionFeetbacks = document.getElementById("product-description-feetbacks");


function hideAllSectionsDescription() {
  descriptionBody.style.display = "none";
  descriptionFooter.style.display = "none";
  descriptionFeetbacks.style.display = "none";

  bodyButton.style.background = "#1A2027";
  footerButton.style.background = "#1A2027";
  feetbacksButton.style.background = "#1A2027";
  bodyButtonmobile.style.background = "#1A2027";
  footerButtonmobile.style.background = "#1A2027";
  feetbacksButtonmobile.style.background = "#1A2027";
}

bodyButton.addEventListener("click", function () {
  hideAllSectionsDescription();
  descriptionBody.style.display = "block";
  bodyButton.style.background = "#90C8EB";
});
footerButton.addEventListener("click", function () {
  hideAllSectionsDescription();
  descriptionFooter.style.display = "block";
  footerButton.style.background = "#90C8EB";
});
feetbacksButton.addEventListener("click", function () {
  hideAllSectionsDescription();
  descriptionFeetbacks.style.display = "block";
  feetbacksButton.style.background = "#90C8EB";
});
bodyButtonmobile.addEventListener("click", function () {
    hideAllSectionsDescription();
    descriptionBody.style.display = "block";
    bodyButtonmobile.style.background = "#90C8EB";
  });
  footerButtonmobile.addEventListener("click", function () {
    hideAllSectionsDescription();
    descriptionFooter.style.display = "block";
    footerButtonmobile.style.background = "#90C8EB";
  });
  feetbacksButtonmobile.addEventListener("click", function () {
    hideAllSectionsDescription();
    descriptionFeetbacks.style.display = "block";
    feetbacksButtonmobile.style.background = "#90C8EB";
  });

});