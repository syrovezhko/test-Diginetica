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
  let content = document.createElement("div");
  content.textContent = `2 недели: ${arr[0]}, 4 недели: ${arr[0]}, 6 недель: ${arr[0]}, 8 недель: ${arr[1]}`;
  content.className = "price price-custom";
  parent.after(content);
}

function isCheckout() {
  if (document.getElementsByTagName("h1")[0].textContent === "Оформление заказа"){
    return true;
  } else {
    return false;
  }
}

// проверяю  checkout ли это
if(isCheckout()) {
  document.addEventListener('mousedown',  function (event){
    // нахожу способ оплаты "Долями"
    let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
    // сохраняю элемент, на который нажал
    let check = event.composedPath()[4].getElementsByTagName('input')[0];
    // узнаю, кликнул ли я на способ оплаты "Долями"
    if (sharesPayment === check) {
      // сохраняю полную стоимость
      originalPrice = getOriginalPrice();
      // делю стоимость на 4 части
      quarterPrice = makeQuarterPrice(originalPrice);
      let toRemove = document.getElementsByClassName("price-custom")[0];
      let isToRemove = toRemove ? true : false;
      if (isToRemove) {
        toRemove.remove();
        addChild(quarterPrice);
      } else {
        // добавляю div через 7 секунд, как раз после перезагрузки страницы
        setTimeout(() => addChild(quarterPrice), 7000);
      }
    } else {
      let toRemove = document.getElementsByClassName("price-custom")[0];
      let isToRemove = toRemove ? true : false;
      if (isToRemove) {
        toRemove.remove();
        console.log("quarterPrice has been removed");
      }
      console.log('not a shares payment')
    }
  })
}