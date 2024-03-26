// Iniciando um arquivo JQuery: Por meio de uma chamada padrão que será executada a partir do momento que o documento estiver preparado. ready != onload
$(document).ready(() => {
    // Selecionando um elemento
    let title = $('#main-title');

    // Criando elementos
    let pEl = $("<p>Um novo elemento</p>");
    let pEl2 = $("<p>Oia nois aki traveiz</p>");
    let pEl3 = $("<p>Eita nois</p>");
    let pEl4 = $("<p>Caracas... JQuery</p>");
    let outroEl = $(document.createElement('p'));

    // Criando um objeto JQuery
    let objJQuery = $(pEl);

    // Inserindo elementos no corpo do documento html
    $('body').append(pEl);
    $(pEl2).appendTo('body');
    $(pEl2).prepend(pEl3);
    $(pEl4).prependTo(pEl)

    //  Coletar ou modificar dados de HTML e texto de uma seleção
    // console.log($('body').html());
    // console.log($('body').text());

    console.log(title);
})