// черновик
// let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');

while (document.getElementsByTagName('h1')[0].textContent === 'Оформление заказа'){
  let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
}
let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');
console.log(sharesPayment)
document.addEventListener('mousedown',  function (event){
  // let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');

  // let check = event.path[0]
  // console.log(event.path[0])
  // console.log("check")
  // console.log(check[0])
  // console.log("sharesPayment")
  // console.log(sharesPayment)
  if (sharesPayment in event.path[0]) {
    console.log('yes')
  } else {
    console.log('no')
  }
})


console.log( document.getElementsByTagName('h1')[0].textContent)