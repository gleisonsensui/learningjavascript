'use strict'
/**
 * O JavaScript possui um grupo de tipos de valores que ele aceita.
 * A maneira como uma linguagem de programa armazena um tipo de valor é por meio de uma variavel que recebe o valor como atribuição. Ou seja,
 * a variavel passa a ser responsavel pelo valor que lhe foi atribuido, tendo todas informações que esse valor possui como caracteristicas.
 * O identificador dado a variavel oferece identidade ao valor.
 */

// Tipos primitivos
let number = 10;
let str = 'string';
let booleano = true;

// Tipos primitivos especiais
let nulo = null;
let indefinido = undefined;


// Tipos objeto
const obj = new Object();
const arr = new Array();
const fn = new Function();

// Valores literais
let palavra = "adocica";


// Aritimetica no JavaScript
let x, y, z;
Math.pow(2,53); // => 9007199254740992: 2 elevado à potência 53
Math.round(.6); // => 1.0: arredonda para o inteiro mais próximo
Math.ceil(.6);  // => 1.0: arredonda para cima para um inteiro
Math.floor(.6); // => 0.0: arredonda para baixo para um inteiro
Math.abs(-5);   // => 5: valor absoluto
Math.max(x,y,z);    // Retorna o maior argumento
Math.min(x,y,z);    // Retorna o menor argumento
Math.random();  // Número pseudoaleatório x, onde 0 <= x < 1.0
Math.PI;    // π: circunferência de um círculo / diâmetro
Math.E; // e: A base do logaritmo natural
Math.sqrt(3);   // A raiz quadrada de 3
Math.pow(3, 1/3);   // A raiz cúbica de 3
Math.sin(0);    // Trigonometria: também Math.cos, Math.atan, etc.
Math.log(10);   // Logaritmo natural de 10
Math.log(100)/Math.LN10;    // Logaritmo de base 10 de 100
Math.log(512)/Math.LN2; // Logaritmo de base 2 de 512
Math.exp(3);    // Math.E ao cubo

/**
 *   Strings
 **/
var s = "hello, world"; // Começa com um texto.
var caixaDagua = "caixa d'agua";
s.charAt(0);    // => "h": o primeiro caractere. Metodo que retorna o valor do indice passado como argumento
s.charAt(s.length-1);   // => "d": o último caractere. Metodo que retorna o valor do indice passado como argumento
s.substring(1,4);   // => "ell": o 2º, 3º e 4º caracteres. Metodo que retorna os valores dos caracteres entre os argumentos de inicio e final da coleta.
s.slice(1,4);   // => "ell": a mesma coisa. Metodo que retorna os valores dos caracteres entre os argumentos de inicio e final da coleta.
s.slice(-3);    // => "rld": os últimos 3 caracteres. Metodo que retorna os valores dos caracteres entre os argumentos de inicio e final da coleta.
s.indexOf("l"); // => 2: posição da primeira letra l. Metodo que retorna os o indice do argumento informado.
s.lastIndexOf("l"); // => 10: posição da última letra l.
s.indexOf("l", 3);  // => 3: posição do primeiro "l" em ou após 3. Metodo que retorna os valores dos caracteres entre os argumentos de inicio e final da coleta.
s.split(", ");  // => ["hello", "world"] divide em substrings
s.replace("h", "H");    // => "Hello, world":
s.toUpperCase();    // => "HELLO, WORLD"

let concatenado = s + " toma uma " + caixaDagua; // Concatenação de strings

let templateStr = `Template string`; // Template string que ofereces suporte a interpolação de variaveis e expressões
let interpolado = `A soma de 150 e 90 é: ${150 + 90}`;
//console.log(interpolado)

let comparacao = 'a'.localeCompare('a', 'pt-BR'); // Comparar se o valor em 
let comparacao2 = 'b'.localeCompare('a', 'pt-BR'); // Comparar se o valor em 
let comparacao3 = 'b' > 'a'; // Comparar se o valor em 

// console.log(comparacao)
// console.log(comparacao2)
// console.log(comparacao3)


//  Comparações de cadeia de caracteres por meio de padrões textuais
//  Esses padrões são descritos com expressões regulares, sendo que JavaScript adota a sintaxe da Perl para expressões regulares.

let pattern1 = /^HTML/; //Corresponde às letras H T M L no início de uma string
let avaliada1 = "HTML";
let avaliada2 = "hTML";
let test1 = pattern1.test(avaliada1);
let test2 = pattern1.test(avaliada2);
//console.log(test1, test2);


pattern.test(text); // => verdadeiro: existe uma correspondência
text.search(pattern);   // => 9: posição da primeira correspondência
text.match(pattern);// => ["1", "2", "3"]: array de todas as correspondências
text.replace(pattern, "#");// => "testing: #, #, #"
text.split(/\D+/);  // => ["","1","2","3"]: divide em não dígitos


//  Valores booleanos
let verdadeiro = true;
let falso = false;


// Objeto global]
/**
 * Variavel Window no browser
 * Variavel Global no Node
 */


/**
 * Escape Strings - A contra barra é um caractere de escape.
 */
'\' '


/**
 * REGEX - Strings
 */

const regExpression = `
Havia um tempo
Em que eu vivia
Um sentimento QUASE INFANTIL
`
const teste = /sentimento/g.test(regExpression);
//console.log(teste)


let text = "testing: 1, 2, 3";  // Exemplo de texto
let pattern = /\d+/g;   // Corresponde a todas as instâncias de um ou mais dígitos


































