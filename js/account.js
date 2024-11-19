  // Личный кабинет

  let boxAccount = document.getElementById("box-account");
  let boxAccountContent = document.getElementById("box-account-content");
  let boxAccountmobile = document.getElementById("box-account-mobile");

  let boxBonuses = document.getElementById("box-bonuses");
  let boxBonusesmobile = document.getElementById("box-bonuses-mobile");
  let boxBonusesContent = document.getElementById("box-bonuses-content");

  let boxOrders = document.getElementById("box-orders");
  let boxOrdersmobile = document.getElementById("box-orders-mobile");
  let boxOrdersContent = document.getElementById("box-orders-content");


  let boxSelected = document.getElementById("box-selected");
  let boxSelectedmobile = document.getElementById("box-selected-mobile");
  let boxSelectedContent = document.getElementById("box-selected-content");


  let boxCompare = document.getElementById("box-compare");
  let boxComparemobile = document.getElementById("box-compare-mobile");
  let boxCompareContent = document.getElementById("box-compare-content");
  
  function hideAllSections() {
      boxAccountContent.style.display = "none";
      boxBonusesContent.style.display = "none";
      boxOrdersContent.style.display = "none";
      boxSelectedContent.style.display = "none";
      boxCompareContent.style.display = "none";
  
      boxAccountmobile.style.background = "#262E37";
      boxAccount.style.background = "#262E37";
      boxBonuses.style.background = "#262E37";
      boxBonusesmobile.style.background = "#262E37";
      boxOrders.style.background = "#262E37";
      boxOrdersmobile.style.background = "#262E37";
      boxSelected.style.background = "#262E37";
      boxCompare.style.background = "#262E37";
      boxSelectedmobile.style.background = "#262E37";
      boxComparemobile.style.background = "#262E37";
  
  }

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


  boxBonusesmobile.addEventListener("click", function () {
      hideAllSections();
      boxBonusesContent.style.display = "block";
      boxBonusesmobile.style.background = "#90C8EB";
  });
  boxOrdersmobile.addEventListener("click", function () {
      hideAllSections();
      boxOrdersContent.style.display = "block";
      boxOrdersmobile.style.background = "#90C8EB";
  });
  boxSelectedmobile.addEventListener("click", function () {
      hideAllSections();
      boxSelectedContent.style.display = "block";
      boxSelectedmobile.style.background = "#90C8EB";
  });

  boxComparemobile.addEventListener("click", function () {
      hideAllSections();
      boxCompareContent.style.display = "block";
      boxComparemobile.style.background = "#90C8EB";
  });
  boxAccountmobile.addEventListener("click", function () {
      hideAllSections();
      boxAccountContent.style.display = "flex";
      boxAccountmobile.style.background = "#90C8EB";
  });
  


