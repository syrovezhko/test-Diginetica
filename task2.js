// черновик
document.addEventListener('mousedown',  function (event){
  // нахожу способ оплаты "Долями"
  let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
  // сохраняю элемент, на который нажал
  let check = event.composedPath()[4].getElementsByTagName('input')[0];
  // узнаю, кликнул ли я на способ оплаты "Долями"
  if (sharesPayment === check) {
    console.log('yes')
  } else {
    console.log('no')
  }
})