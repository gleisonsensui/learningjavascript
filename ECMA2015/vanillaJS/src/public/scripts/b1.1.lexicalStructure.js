'use strict'
/**
 * A estrutura lexica é um conjutno de regras elementares que especificam o modo de escrever programas nessa linguagem.
 * O programa JavaScript são escritos com conjunto de caracteres Unicode.
 * JavaScript é uma linguagem Case sensitive
 */

/**
 * o JavaScript é uma linguagem de alto nivel.
 * Pode ser utilizado para programar no Client-side, para serem interpretados pelo browser, V8 Engine. 
 * Server-side - para serem interpretados pelo servidor, pela plataforma Nodejs
 * Desktop, controlando o processo principal, que é executado em um ambiente NodeJS  pelo ElectronJS
 * Mobile, para ser nterpreta o JavaScript escrito pelos desenvolvedores) diretamente no dispositivo final 
 e se comunica com a plataforma nativa por meio de uma serialização, uma ponte assíncrona e em lote. pelo React Native.
 */

// Escape Unicodes
let palavra = "caf\u00e9";
console.log(palavra)
console.log('café' === 'caf\u00e9');

// Literais são valores que aparece diretamente no programa. O termo literal, normalmente, é o valor atribuido a uma variavel.
const arr = [1, 2, 3, 4, 5]; // array literal
const obj = {attr1: 'valor'}; // objeto literal
let str = 'string'; // String literal
let number = 150; // Numero literal


/** PALAVRAS RESERVADAS para identificadores de variaveis e constantes
 * break    case    catch   continue    debugger    default     delete      do  else    false   finally for function    if  in
 * instanceof   new null    return  switch  this    throw   true    try typeof  var void    while   with 
 * class    const enum  export extends  import  super
 * implements interface let package private protected public static
 * arguments eval
 */

/** VARIAVEIS DE AMBIENTE e FUNÇÕES GLOBAIS
 * arguments    Array   Boolean Date    decodeURI   decodeURIComponent  encodeURI   encodeURIComponent  Error   eval    EvalError
 * Function Infinity    isFinite    isNaN   JSON    Math    NaN Number  Object  parseFloat  parseInt    RangeError  ReferenceError  
 * RegExp   String  SyntaxError TypeError   undefined   URIError
 */


/**
 * O JavaScript pode ser incorporado a um documento HTML de duas formas
 * Pode ser incorporado diretamente ao documento, por meio da tag '<script></script>' onde o codigo javascript será inserido no corpo
 * dessa tag ou
 * Pode ser importado a partir de um arquivo externo por meio da tag '<script src="caminho absoluto ou relativo"></script>' informando
 * a localiação do arquivo no atributo nativo 'src' da tag.
 */



/**
 * Obs.: Cuidado com a precedencia de arquivos JavaScript importados/carregados por meio da tag '<script></script>' com o atributo 'src'.
 * Os scripts que tiverem a dependencia entre os arquivos podem não funcionar conforme a ordem que forem carregados. Ou mesmo se o 
 * script que for influenciar no comportamento de algum elemento html é necessário que seu carregamento seja realizado após o elemento
 * que sera manipulado pelo script carregado.
 */






