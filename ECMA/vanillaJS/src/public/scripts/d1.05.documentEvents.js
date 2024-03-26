"use strict";

const btn = document.querySelector("#btn-register");

// EventListener
btn.addEventListener("click", (evn) => {
  evn.preventDefault();
  console.log(evn);
});

// Target Listener
const menu = document.querySelector("#menu");

menu?.addEventListener("click", (evn) => {
  const { target } = evn;

  switch (target.getAttribute('class')) {
    case 'home':
        console.log('Home page');
        break;
    case 'sobre':
        console.log('Quem somos');
        break;
    case 'contato':
        console.log('Contate-nos');
        break;
  
    default:
        break;
  }


});
