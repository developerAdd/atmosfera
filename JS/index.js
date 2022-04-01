"use strict"

document.addEventListener('DOMContentLoaded', function(){


  //__error для инпута
  const screenWidth = window.screen.width;


  if (screenWidth<=540){
  function time__1(){
    function set_time_1(){
      text.innerText ="Изготавливаем красивые надёжные вывески, дорожные знаки, LED-панели, наружную рекламу и многое другое!";
    }
    set_time_1();
    setInterval(set_time_1,10000);
  }
  function time__2(){
    function set_time_2(){
      text.innerText ="Свяжитесь с нами, если вам нужна эффективная наружная реклама.";
    }
    set_time_2();
    setInterval(set_time_2,10000);
  }
  function time__3(){
    function set_time_3(){
      text.innerText ="Найдём эффективное решение для рекламы в рамках вашего бюджета. ";
    }
    set_time_3();
    setInterval(set_time_3,10000);
  }
  function time__4(){
    function set_time_4(){
      text.innerText ="Главное в работе для нас — найти удобный, простой и красивый способ решения задачи заказчика.";
    }
    set_time_4();
    setInterval(set_time_4,10000);
  }

  setTimeout(time__1, 0);
  setTimeout(time__2, 5000);
  setTimeout(time__3, 10000);
  setTimeout(time__4, 15000);
  }


  const popup = document.querySelector('.pop-up');
  const __sending = document.querySelector('.__sending');
  const page = document.querySelector('.page');
   const remove = document.querySelector('.remove');
   const button = document.querySelector('.up__form__button');

  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
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

  one.addEventListener("mouseenter", function(event){
   two.style.opacity = "30%";
   foo.style.opacity = "30%";
   text.innerText ="Мир меняется. Меняется реклама и технологии её изготовления, которые мы успеваем осваивать, чтобы о вашей компании узнали все.";
  });
  one.addEventListener("mouseleave", function(event){
   two.style.opacity = "";
   foo.style.opacity = "";
   text.innerText ="Изготавливаем красивые надёжные вывески, дорожные знаки, LED-панели, наружную рекламу и многое другое!";
  });

  two.addEventListener("mouseenter", function(event){
   one.style.opacity = "30%";
   foo.style.opacity = "30%";
   text.innerText ="Главное в работе для нас — найти удобный, простой и красивый способ решения задачи заказчика.";
  });
  two.addEventListener("mouseleave", function(event){
   one.style.opacity = "";
   foo.style.opacity = "";
   text.innerText ="Изготавливаем красивые надёжные вывески, дорожные знаки, LED-панели, наружную рекламу и многое другое!";
  });

  foo.addEventListener("mouseenter", function(event){
   two.style.opacity = "30%";
   one.style.opacity = "30%";
   text.innerText ="Свяжитесь с нами, если вам нужна эффективная наружная реклама.";
  });
  foo.addEventListener("mouseleave", function(event){
   two.style.opacity = "";
   one.style.opacity = "";
   text.innerText ="Изготавливаем красивые надёжные вывески, дорожные знаки, LED-панели, наружную рекламу и многое другое!";
  });


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
    }
});
});
