'use strict'

// Referenciando o formulario
const form = document.forms.namedItem('registration');
console.log(form.children);
/*
form.addEventListener('input', (evn) => {
    evn.preventDefault();
    const name = form.name.value;
    const password = form.password.value;

    // Instancia um objeto formData com o formulario ou bloco de dados que deseja tratar com formData
    const formData = new FormData(form);

    const newDivElement = document.querySelector('div');
    newDivElement.innerText = `${name} ${password}`;
    form.nextElementSibling.remove();
    form.after(newDivElement);
})
*/


form.addEventListener('submit', (evn) => {
    evn.preventDefault();
    const name = form.name.value;
    const password = form.password.value;

    // Instancia um objeto formData com o formulario ou bloco de dados que deseja tratar com formData
    const formData = new FormData(form);

    formData.forEach(res => {
        console.log(res)
    })

    const newDivElement = document.querySelector('div');
    newDivElement.innerText = `${name} ${password}`;
    form.nextElementSibling.remove();
    form.after(newDivElement);
})

















