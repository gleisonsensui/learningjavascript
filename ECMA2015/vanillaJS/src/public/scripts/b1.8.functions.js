"use strict";

// statement function
function printProps(obj) {
  for (let p in obj) {
    console.log(`${p}: ${obj[p]}`);
  }
}
printProps({ x: 10, y: 15 });

// expression anonimous function
const factorial = function (x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};
console.log(factorial(5));

// Arrow function
const square = (x) => x * x;
console.log(square(5));

// IIFE
const tenSquare = (function (x) {
  return x * x;
})(10);
console.log(tenSquare);

// Constructor function
function Pessoa(nome, sobrenome, idade = 18) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Joshua", "do Céu");
console.log(pessoa1);

// Factory function
function impressora() {
  return {
    isActive: true,
    isOnLine: true,
  };
}

const impressora1 = new impressora();
console.log(impressora1);
const impressora2 = new impressora();
console.log(impressora2);

// Generator function
function* generator() {
  yield "isso é demais";
}

const gene = generator();
console.log(gene.next());

// Arguments function
function args() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

args(1, 2, 3);

// Rest function

function rest(...list) {
  list.forEach((item) => {
    console.log(item);
  });
}
rest(10, 11, 12);

// callback function
function soma (num1, num2) {
  return num1 + num2;
}

console.log(soma(soma(5, 3), soma(9, 15), soma(10, 6)));

// asynchronous callback function

function hello(msg) {
  // document.write(`${msg}<br>`);
  console.log(`${msg}`);
}

async function processUserInput(callback) {
  const bradock = await fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((json) => callback(json.value));
  return bradock;
}

processUserInput(hello);

// Temporal funciont
let temporizador = 3;
function showTimer() {
  console.log(
    `Executando um set timeout function e a requisição responde após 3 segundos`
  );
  setTimeout(() => {
    processUserInput(hello);
  }, temporizador * 1000);
}

showTimer();

//  Payload function : para enviar dados nas nossas requisições - Factory function
const criarPayload = (marca, modelo, ano) => {
  return {
    marca,
    modelo,
    ano,
  };
};


criarPayload('fiat', 'uno', '2006');



// Spread operator in function
const obj1 = { foo1 : 'Adocica' , x: 42};
const obj2 = { foo2: 'Azeda', y: 53};

function Spread(obj1, obj2) {
  let objAgregaded = {...obj1, ...obj2};
  console.log(objAgregaded);
}

Spread(obj1, obj2);



// Contexto de arrow e function

const sandwichGiraffas = {
  pao: 'brioch',
  queijo: 'prato',
  makeSandwich () { setTimeout(function () {
      console.log(`Seu sanduiche de pão ${this.pao} e queijo ${this.queijo}`);
      console.log(this);
  }.bind(this), 5000)
}
}

const sandwichDogpoint = {
  pao: 'branco',
  queijo: 'cheddar',
  makeSandwich () { setTimeout(() => {
    console.log(`Seu sanduiche de pão ${this.pao} e queijo ${this.queijo}`);
    console.log(this);
  }, 7000)
}
}

sandwichDogpoint.makeSandwich();
sandwichGiraffas.makeSandwich();












