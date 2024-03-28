$().ready(function() {
    /**
     * Eventos comuns
     * 
     * Mouse:
     * > click
     * > dblclick
     * > hover
     * 
     * Navegador:
     * > scroll
     * > resize
     * 
     * Teclado:
     * > keydown
     * > keypress
     * > keyup
     * 
     * Form:
     * > focus
     * > blur
     * > change
     * > submit
     */

    //Eventos diversos
    $('.btn-click').click(function() {
        $('.output-area').append('<h2>Isso é o resultado do botão com o evento de 1 click.</h2>')
    })
    $('.btn-dbclick').dblclick(function() {
        $('.output-area').append('<h2>Isso é o resultado do botão com o evento de 2 clicks.</h2>')
    })
    $('.btn-hover').hover(function() {
        $('.output-area').append("<h2>Isso é o resultado do botão com o evento de Hover.</h2>")
    })

    // Passar o evento para se exibido ou tratado
})