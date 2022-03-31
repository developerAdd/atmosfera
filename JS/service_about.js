"use strict"

document.addEventListener('DOMContentLoaded', function(){


  //__error для инпута
  const popup = document.querySelector('.pop-up');
  const __sending = document.querySelector('.__sending');
  const page = document.querySelector('.page');
   const remove = document.querySelector('.remove');
   const button = document.querySelector('.up__form__button');

  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const foo_qul = document.querySelectorAll('.foo');
  const foo = foo_qul[0];
  const popup__form = document.querySelector('.pop-up__form');


  const burger = document.querySelector('.burger');
  const popup_mobile = document.querySelector('.pop-up__mobile');
  const remove_popup_mobile = document.querySelector('.remove__pop-up__mobile');
  const ul = document.querySelector('.ul');


  const name = document.querySelector('.name');
  const tel = document.querySelector('.tel__form');


  const text = document.querySelector('.text__h1');



  burger.addEventListener("click", function(event){
    popup_mobile.classList.add('active');
    page.classList.add('__sending');
    ul.classList.add('active');
  });

for(let index = 0; index< foo_qul.length; index++){
  let foo_btn = foo_qul[index];
  foo_btn.addEventListener("click", function(event){
    popup.classList.add('active');
    page.classList.add('__sending');
  });
}


 remove_popup_mobile.addEventListener("click", function(event){
   popup_mobile.classList.remove('active');
   ul.classList.remove('active');
   page.classList.remove('__sending');
 });

  remove.addEventListener("click", function(event){
    popup.classList.remove('active');
    page.classList.remove('__sending');
  });

button.addEventListener("click", function(event){
 popup__form.innerHTML = `<h2>Спасибо!<br>Свяжемся с вами в течении 30 минут.</h2>`;
});

const inp__user = document.getElementById('username');
const inp__tel = document.getElementById('tel');
const error__1 = document.getElementById('error__1');


//все верно
inp__user.addEventListener("input", function(event){
if (inp__user.value.length > 0){
  name.classList.add('silver');
}else{
  name.classList.remove('silver');
}
});
// вывод ошибки
inp__tel.addEventListener("input", function(event){
if (inp__tel.value.length > 0){
  tel.classList.add('silver');
}else{
  tel.classList.remove('silver');
}
});
// вывод ошибки


$(document).mouseup(function (e) {
    var container = $(".pop-up");
    if (container.has(e.target).length === 0){
      popup.classList.remove('active');
    }
    if(popup.classList.contains('active')){
      page.classList.add('__sending');
    }else{
      page.classList.remove('__sending');
    }
});

$(document).mouseup(function (e) {
    var container = $(".pop-up__mobile");
    if (container.has(e.target).length === 0){
      popup_mobile.classList.remove('active');
      ul.classList.remove('active');
      if(popup.classList.contains('active')){
        page.classList.add('__sending');
      }else{
        page.classList.remove('__sending');
      }
    }
});

});
