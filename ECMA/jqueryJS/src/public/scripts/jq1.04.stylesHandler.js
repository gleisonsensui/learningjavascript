$().ready(() => {
    // Metodo css para ler e editar atributos do elementos html
   const articles =  $('article');

   // Informar 2 (dois) argumentos para editar os atributos css dos elementos html
   $(articles[0]).css({color: 'red', backgroundColor: '#000'})
   $(articles[0]).css()

   // Informar 1 (um) argumento para coletar os atributos css dos elementos html
   console.log($(articles[0]).css(['background-color', 'color']))
   console.log(articles.length)
//    articles.forEach(element => {
//     console.log($(element).css())
//    });

})



