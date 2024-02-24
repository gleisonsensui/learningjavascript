"use strict";

let nameUser = "Fulano";
// Instruções de expressão são instruções que geram efeitos colaterais, seja alterando valores, estados ou comportamento.
let greetings = "Hello " + nameUser;
console.log(`Instrução de expressão: ${greetings}`);

let increment = 2;
console.log(`Instrução de expressão: ${increment}`);

increment *= 2;
console.log(`Instrução de expressão: ${increment}`);

// Instruções compostas ou vazias

{
  let x = Math.PI;
  let cx = Math.cos(x);
  console.log("cons () = " + cx);
}

let a = [];

for (let i = 0; i < a.lenght; a[i++] = 0);

console.log(`Instrução de compostas ou vazias: ${a}`);

// Instruções de Declaração
let variavel = "string"; // Declaração de variaveis

const funcao = () => {
  // Declaração de função
  console.log("instrução de declaração funcional anonima");
};

funcao();

function factorial(n) {
  // função recursivo
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(`Fatorial: ${factorial(5)}`);

// Instrução condicional
let idade = 20;
if (!nameUser) nameUser = "siclano";
console.log(`Instrução condicional: ${nameUser}`);

if (!nameUser) {
  nameUser = "siclaninho";
} else {
  nameUser = "fulanão";
}
console.log(`Instrução condicional: ${nameUser}`);

if (idade > 65) {
  console.log(`Instrução condicional: ${"Idoso"}`);
} else if (idade < 65 && idade >= 18) {
  console.log(`Instrução condicional: ${"Adulto"}`);
} else {
  console.log(`Instrução condicional: ${"Criança"}`);
}

switch (nameUser) {
  case "siclano":
    console.log(`Instrução condicional: ${nameUser}`);
    break;

  case "fulano":
    console.log(`Instrução condicional: ${nameUser}`);
    break;

  case "fulanão":
    console.log(`Instrução condicional: ${nameUser}`);
    break;

  default:
    console.log("ixi, não é ninguem.");
    break;
}

/**
 * Laços
 */

while (idade > 18) {
  console.log(`Instrução Laço: ${idade}`);
  idade--;
}

for (let i = 18; i < 20; i++) {
  idade = i;
  console.log(`Instrução Laço: ${idade}`);
}

do {
  console.log(`Instrução Laço: ${idade}`);
  idade--;
} while (idade > 18);

// for...in
// for...of

/**
 * Instruções rotuladas - identificador: instrução
 */
let counter = 0;
let token = 0;

function rotulo() {
  console.log(token, counter);
  while (token != null) {
    if (counter <= 9) {
      token = counter;
      console.log(`Instrução rotulada: ${token}`);
    } else {
      token = null;
      console.log(`Instrução rotulada: ${token}`);
    }
    counter++;
  }
}

rotulo();

/**
 * Break - Instrução de interrupção de iteração
 */
const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = Math.floor(Math.random() * 10);

function breaker(tgt) {
  console.log(`elemento de parada: ${tgt}`);
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === tgt) {
      break;
    } else {
      console.log(`Instrução de interrupção: ${numberList[i]}`);
    }
  }
}

breaker(target);

/**
 * Continue - intrução de salto de iteração
 */
function continuation(tgt) {
  console.log(`elemento de salto: ${tgt}`);
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === tgt) {
      continue;
    } else {
      console.log(`Instrução de continue iteração: ${numberList[i]}`);
    }
  }
}

continuation(target);

/**
 * Return - Instrução de retorno a quem invoca
 */
function retornar(tgt) {
  console.log(`elemento de retorno: ${tgt}`);
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === tgt) {
      return;
    } else {
      console.log(`Instrução de continue iteração: ${numberList[i]}`);
    }
  }
}

retornar(target);

/**
 * Try/catch/finally - throw
 */

function erroHandler(tgt) {
  console.log(`elemento de error: ${tgt}`);
  try {
    for (let i = 0; i < numberList.length; i++) {
      if (numberList[i] === tgt) {
        throw new Error(`Isso é uma exceção injetada pelo Throw`);
      } else {
        console.log(`Instrução de continue iteração: ${numberList[i]}`);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log(`Instrução de error throw/finally: ${numberList}`);
  }
}

erroHandler(target);

/**
 * Strict mode
 */
let hasStrictMode = (function () {
  console.log(`The background in moment is global: ${this === global}`);
  return `Strict mode is activated: ${this === undefined}`;
})();

console.log(hasStrictMode);