// черновик
document.addEventListener('mousedown',  function (event){
  let sharesPayment = document.getElementsByClassName('ctrl')[3].querySelector('input');

  let check = event.composedPath()[4].getElementsByTagName('input')[0];
  if (sharesPayment === check) {
    console.log('yes')
  } else {
    console.log('no')
  }
})