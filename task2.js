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


document.addEventListener('mousedown',  function (event){
  // нахожу способ оплаты "Долями"
  let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
  // сохраняю элемент, на который нажал
  let check = event.composedPath()[4].getElementsByTagName('input')[0];
  // узнаю, кликнул ли я на способ оплаты "Долями"
  if (sharesPayment === check) {
    console.log('yes')
    console.log(getOriginalPrice())
  } else {
    console.log('no')
  }
})

console.log(document.getElementsByClassName("total")[0].lastChild.textContent.split(""))