const header = document.querySelector("header");

window.addEventListener ("scroll" , function(){
    header.classList.toggle ("stick", window.scrollY > 120);
});


var typed = new Typed('.element', {
    strings: ["Graphic Designer.","Professinolity MS Office.","Front-End-develoer","Wordpress  Managment."],
    typeSpeed: 70,
    backspeed: 65,
    loop:true,
  });

  
  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist'); 

    menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
  };

  window.onscroll = () =>{
    menu.classList.remove('bx-x')
    navlist.classList.remove('active');
  }