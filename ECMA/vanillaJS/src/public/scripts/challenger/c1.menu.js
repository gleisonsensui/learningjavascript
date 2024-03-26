$(document).ready(function() {
    $('.burguer-container').on('click', function() {
        $('.main-navigation').toggle('slow');
    })
})


const burguerMenu = document.querySelector('#burguer-menu');
burguerMenu.addEventListener('click', menufn);

function menufn() {

    let splitBurguer = burguerMenu.getAttribute('class').split(' ');

    if(!splitBurguer.includes('change')){
        burguerMenu.classList.add('change')
    } else {
        burguerMenu.classList.remove('change')
    }

}









