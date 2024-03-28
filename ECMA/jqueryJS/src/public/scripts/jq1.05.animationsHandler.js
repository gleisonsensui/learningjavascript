$().ready(function() {

    // Animação para ocultar um elemento
    $('.quadrado-1').hide(2000);

    // Animação para mostrar um elemento
    $('.quadrado-1').show(1000);

    // Animação para fazer aparecer de cima-para-baixo ou vice-versa
    $('.quadrado-2').slideDown(3000);
    $('.quadrado-2').slideToggle(3000);
    $('.quadrado-2').slideToggle(5000);
    $('.quadrado-2').slideUp(3000);
    
    $('.quadrado-3').fadeOut(2500);
    $('.quadrado-3').fadeIn(3500);
    $('.quadrado-3').fadeToggle();
    $('.quadrado-3').fadeToggle(4500, 0.5);
    
    // Amimação para fazer o elemento se mover pela tela
    $('.quadrado-4').animate({height: '100px'}, 1000);  

})