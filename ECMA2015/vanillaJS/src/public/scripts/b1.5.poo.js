"use strict"

/**
 * Criando objetos
 */

let portifolio = {};
let literalBook = {};
let authorBook = {};
let literalObj = {keyAtrr: 'value'};
let instanceObj = new Object(); // cria um objetio vazio
let instanceArr = new Array();  // cria um array vazio
let instanceDate = new Date();  // cria um objeto date representando a hora atual
let instanceRegex = new RegExp('js');   // cria um objetio regex para comparação de padrão
let createdObj = Object.create(literalObj);
let createdObjEmpty = Object.create(Object.prototype);



console.log(`Objeto literal: ${literalObj} - ${literalObj.keyAtrr}`, `/ Objeto instanciado: ${instanceObj} - ${instanceObj.constructor}`, `/ Objeto criado: ${createdObj} - ${createdObj.keyAtrr}`);
console.log(literalObj, instanceArr, instanceDate, instanceObj, instanceRegex, createdObj, createdObjEmpty);
console.log(`Objeto criado vazio: ${createdObjEmpty} - ${createdObjEmpty.constructor}`);

/**
 * SIMULANDO UMA HERANÇA PROTOTIPAL
 */
function inherit (obj) {
    if(obj === null) throw TypeError();
    if(Object.create) return Object.create(obj);
    let typeObj = typeof obj;

    if(typeObj !== 'object' && typeObj !== 'function') throw TypeError();

    function construct() {};
    construct.prototype = obj;
    return new construct();
}


let objInherited = inherit(literalObj);
console.log(`Objeto criado com herança: ${objInherited.keyAtrr}`);

/**
 * Configurando propriedades de objetos
 */

authorBook.name = 'Douglas';
authorBook.surname = 'Crockford';
literalBook.author = `${authorBook.name} ${authorBook.surname}`;
literalBook.edition = 6;
literalBook['mainTitle'] = 'ECMAScript';
authorBook.author = literalBook.author;
console.log(`book data template string: ${literalBook}`);
console.log(`book data template string: ${authorBook}`);

console.log('book data string console: ', literalBook)
console.log('book data string console: ', authorBook)

/**
 * notação arrays associativos
 */
let customer = {};
customer['address0'] = 'Address 01';
customer['address1'] = 'Address 02';
customer['address2'] = 'Address 03';
customer['address3'] = 'Address 04';

let addr = '';
for(let i = 0; i < 4; i++) {
    addr += customer["address" + i] + '\n';
}

console.log(addr);

/**
 * Adicionando metodos via prototipo
 */
function addStock (portifolio, stockName, shares) {
    portifolio[stockName] = shares;
}

console.log(portifolio);
addStock(portifolio, 'IBM', 50);
console.log(portifolio);
addStock(portifolio, 'Microsoft', 350);
console.log(portifolio);


let produto = {
    _nome: 'caneta BIC',
    preco: 9.99,
    estoque: true
}

console.log(produto);
produto.nome  = 'notebook Lenovo';
console.log(produto);






















