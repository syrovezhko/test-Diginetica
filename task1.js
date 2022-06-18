function getOriginalPrice() {
  let classArr = document.getElementsByClassName("price");
  let index = 0;
  if (classArr.length !== 1) {
    if (classArr[0].classList.length === 2) {
      index = 1;
    }
  }
  let originalPrice = classArr[index].textContent.split("");
  let originalPriceNum = [];
  for(let i = 0; i < originalPrice.length; i++){
    if (originalPrice[i] !== " " && originalPrice[i] !== "₽") {
      originalPriceNum.push(originalPrice[i]);
    }
  }
  return originalPriceNum.join("");
}

function makeQuarterPrice(originalPrice) {
  return (originalPrice/4).toLocaleString('ru') + " ₽";
}

function addChild(value) {
  let parent = document.getElementsByClassName("product-prices-actions")[0];
  let content = document.createElement("div");
  content.textContent = value;
  content.className = "price";
  parent.prepend(content);
}

function isPrice(originalPrice) {
  if (originalPrice <= 30000) {
    let quarterPrice = makeQuarterPrice (originalPrice);
    return addChild(quarterPrice);
  } else {
    return false;
  }
}

function isProduct(originalPrice) {
  if (document.getElementsByTagName("body")[0].className.split("-")[0] === "product"){
    return isPrice (originalPrice);
  } else {
    return false;
  }
}

isProduct (getOriginalPrice())