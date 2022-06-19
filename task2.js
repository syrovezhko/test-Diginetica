// черновик
function getOriginalPrice() {
  let classArr = document.getElementsByClassName("total")[0].lastChild;
  let originalPrice = classArr.textContent.split("");
  let originalPriceNum = [];
  for(let i = 0; i < originalPrice.length; i++){
    if (originalPrice[i] !== " " && originalPrice[i] !== "₽") {
      originalPriceNum.push(originalPrice[i]);
    }
  }
  return originalPriceNum.join("");
}

function makeQuarterPrice(originalPrice) {
  let quarterPriceArr = [];
  if (originalPrice > 30000) {
    quarterPriceArr = ["25%", "25%"]
  } else {
    partPrice = Math.floor(originalPrice / 4);
    partPriceLast = originalPrice - Math.floor(originalPrice / 4) * 3;
    quarterPriceArr.push(partPrice.toLocaleString('ru') + " ₽");
    quarterPriceArr.push(partPriceLast.toLocaleString('ru') + " ₽")
  }
  return quarterPriceArr;
}

function addChild(arr) {
  let parent = document.getElementsByClassName('ctrl')[3];
  console.log("parent is", parent);
  let content = document.createElement("div");
  content.textContent = `2 недели: ${arr[0]}, 4 недели: ${arr[0]}, 6 недель: ${arr[0]}, 8 недель: ${arr[1]}`;
  content.className = "price price-custom";
  parent.after(content);
}

// TODO: доделать 
// function isCheckout (originalPrice) {
//   if (document.getElementsByTagName("body")[0].className.split("-")[0] === "product"){
//     return isPrice (originalPrice);
//   } else {
//     return false;
//   }
// }


document.addEventListener('mousedown',  function (event){
  // нахожу способ оплаты "Долями"
  let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
  // сохраняю элемент, на который нажал
  let check = event.composedPath()[4].getElementsByTagName('input')[0];
  // узнаю, кликнул ли я на способ оплаты "Долями"
  if (sharesPayment === check) {
    let toRemove = document.getElementsByClassName("price-custom")[0]
    let isToRemove = toRemove ? true : false;
    if (isToRemove) {
      toRemove.remove()
      console.log("quarterPrice has been removed")
    }
    console.log('yes');
    originalPrice = getOriginalPrice();
    quarterPrice = makeQuarterPrice(originalPrice);
    // console.log("originalPrice was:", originalPrice);
    // console.log("quarterPrice is:", quarterPrice)
    setTimeout(() => addChild(quarterPrice), 7000);
    // addChild(quarterPrice);
  } else {
    let toRemove = document.getElementsByClassName("price-custom")[0];
    let isToRemove = toRemove ? true : false;
    if (isToRemove) {
      toRemove.remove()
      console.log("quarterPrice has been removed")
    }
    console.log('no')
  }
})

console.log(document.getElementsByClassName("total")[0].lastChild.textContent.split(""));
let isToRemove = document.getElementsByClassName("price-custom")[0] ? true : false
console.log(isToRemove)
console.log('otherPayment.includes(check))', otherPayment.includes(check))