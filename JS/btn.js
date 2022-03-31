let formReq_2 = document.querySelectorAll('._btn');;
for (let index = 0; index < formReq_2.length; index++) {
  const button = formReq_2[index];
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    button.classList.add('_touch');
  }else{
    button.classList.add('_touchNot');
  }
}
