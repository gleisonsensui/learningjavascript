'use strict'

//  Expressões
let expression1 = 1.23; //Um número literal
let expression2 = 'hello'; //Uma string literal
let expression3 = function(a, b) {return a + b;} // Uma expressão de definição funcional
let expression4 = /pattern/; // Uma expressão regular literal


// Expressões primarias
let primary1 = true; // É avaliado como o valor booleano true
let primary2 = false; // É avaliado como o valor booleano false
let primary3 = null; // É avaliado como o valor null
let primary4 = this; // É avaliado como o objeto "atual"

// Inicializadores de objeto e array são expressões cujo o valor é um objeto ou array recem-criado.
let inicializator1 = []; // Um array vazio: nenhuma expressão dentro dos colchetes significa nenhum elemento
let inicializator2 = [1 + 2, 3 + 4]; // Um array de 2 elementos. O primeiro elemento é 3, o segundo é 7
let inicializator3 = [[1,2,3], [4,5,6], [7,8,9]]; // Matriz com 3 dimensões de dados
let inicializator4 = { x:2.3, y:-1.2 }; // Um objeto com 2 propriedades
let inicializator5 = {}; // Um objeto vazio sem propriedades
inicializator5.x = 2.3; inicializator5.y = -1.2; // Agora q tem as mesmas propriedades de inicializador4
let inicializator6 = {upperLeft: {x: 2, y: 2}, lowerRight: {x: 4, y: 5}}; // Objeto aninhado ou complexo.

//  Uma expressão de definição de função define uma função JavaScript e o valor de tal expressão é a função recém-definida.
let definition1 = function(x) {return x * x}; // Esta função retorna o quadrado do valor passado a ela.


// Expressões de acesso à propriedade
let access1 = {x: 1, y: {z: 3}}; // Exemplo de objeto
let access2 = [o, 4, [5, 6]]; // Exemplo de array que contem objeto
access1.x; // => 1: propriedade x da expressão access1
access1.y.z; // => 3: propriedade z da expressão access1.y
access2[1]; // => 4: elemento no índice 1 da expressãoaccess2
access2[2]['1']; // => 6: elemento no índice 1 da expressão a[2]
 

// Uma expressão de invocação é uma sintaxe de JavaScript para chamar (ou executar) uma função ou um método.
Math.max(x,y,z); // Math.max é a função; x, y e z são os argumentos.
inicializator2.length(); // array.length é a função para saber qual o tamanho do array


//  Uma expressão de criação de objeto gera um novo objeto e chama uma função (denominada constru- tora) para inicializar as propriedades desse objeto.
new Object()
new Point(2,3)


// Operadores em JavaScript
// ++ //   Pré- ou pós-incremento    D   1   lval→num
// -- //   Pré- ou pós-decremento  D   1   lval→num
// - //    Nega o número   D   1   num→num
// + //    Converte para número    D   1   num→num
// ~ //    Inverte bits    D   1   int→int
// ! //    Inverte valor booleano  D   1   bool→bool




