$().ready(function () {
    // Adicionar classes
    $('article').addClass('article-box');

    // Remover classes
    $('article').removeClass('article-box');

    // Alternar Classes
    $('article').click(function () {
        $(this).toggleClass('article-box')
    })
})