'use strict'

const list = ['arroz', 'feijão', 'macarrão', 'bife', 'salada'];
const handlerParagraph = document.querySelectorAll('.handler-paragraph');
const valuesHandler = document.querySelector('#values-handler');
const inputHandler = document.querySelector('#profissao');

// Fragment element
const fragment = document.createDocumentFragment();

let handler = 'paragrafo';
let contador = 1;

// Handler text content element
handlerParagraph.forEach(item => {
    item.textContent = `${handler} ${contador}`
    contador++;
})

// Handler created element document
const pCreated = document.createElement('p');
pCreated.textContent = `Isso é um paragrafo criado pelo CreateElement da API do DOM.`;
valuesHandler.appendChild(pCreated);

//valuesHandler.innerHTML = `<p>Isso é um paragrafo criado pelo InnerHTML da API do DOM</p>`

// Handler input values
setTimeout(() => {
    inputHandler.value = 'Desenvolvedor de software';
    console.log(inputHandler);
    
}, 5000);



// Handler Attributes
valuesHandler.setAttribute("style", "color:red")

// Handler Fragment documents
const ulFrag = document.createElement('ul');
valuesHandler.appendChild(ulFrag);

list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.append(li)
    ulFrag.appendChild(fragment)
})
















