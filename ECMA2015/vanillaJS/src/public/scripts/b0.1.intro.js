// Tudo que vem depois de duas barras é um comentario
/**
 * Tudo que fica dentro da estrutura de barra, asterisco, asterisco, barra tambem se torna um comentario não interpretado para a
 * engine do ECMAScript
 */

/**
 * 
## Tipos de erros

O JavaScript possui os seguintes tipos de erros nativos que podem ser lançados:

### ReferenceError
Lançado quando uma referência a uma variável ou função inexistente ou inválida é detectada.

### TypeError
Lançado quando um operador ou argumento passado para a função é de um tipo diferente do esperado.

### SyntaxError
Lançado quando ocorre algum erro de sintaxe ao interpretar o código, por exemplo ao realizar o parse de um JSON.

### URIError
Lançado quando ocorre algum erro no tratamento de URI, por exemplo, enviando parâmetros inválidos no decodeURI() ou encodeURI().

### RangeError
Lançado quando um valor não está no conjunto ou intervalo de valores permitidos. Por exemplo, um valor em string num array número.

Todos os erros nativos do JavaScript, são extensões do objeto Error, partindo deste principio, você também pode criar seus próprios tipos de erros.

 */

// Variaveis são declarada com o rotulo VAR
var variavel;

// Tambem podem ser rotulados, definindo seu escopo local de declaração com outros dois rotulos LET e CONST
let varEscopoLocal;
const constEscopoLocal = "Local";

// Os valores são atribuidos com o operador de atribuição '='.
let valor = 15;

/* JavaScript possui tipagem dinamica, o que não exige que seja declarado seu tipo de dado atribuido na sua declaração,
pois sua engine realizar o casting automaticamente, baseado no valor atribuido.
*/

// Uma variavel, depois de declarada, pode receber qualquer tipo de valor.
valor = 1; // Inteiro tipo Number
valor = 5.5; // Decimal/Real tipo Number
valor = "Hello world."; // string tipo String que pode ser declarada com aspas duplas, aspas simples ou com back sticks [crase]
valor = true; // valor verdadeiro tipo boolean
valor = false; // valor falso tipo boolean
valor = null; // valor null que significa sem valor ou nulo.
valor = undefined; // valor que significa valor atribuido sem tipo definido ou esteja vazio.

// O JavaScript possui dois tipos complexos que podem ser manipulado, conforme suas caracteristicas.
const bruxo = {
  nome: "Harry Potter",
  idade: 12,
  casa: "Grifinolia",
  showBruxo() {
    console.log(this);
    return `O bruxo ${this.nome} possui ${this.idade} anos e pertence a casa ${this.casa}.`;
  },
};

// Objetiso podem ser acessados via a notação '.' ou  '[]'
console.log(bruxo.showBruxo());
for (let atr in bruxo) {
  console.log(bruxo[atr]);
}

/**
 * JavaScript tambem possui uma estrutura de lista chamada Array
 */

const lista = ["cereais", "frutas", "legumes", "verduras", "bebidas em geral"];
for (let item of lista) {
  console.log(item);
}

/**
 * Arrays pode conter outros arrays assim como objetos como seu conteudo. Asscim como um objeto pode conter arrays como valores de seus atributos.
 */

const funcionarios = [
  {
    funcionario1: "jose",
    cargo: "pintor",
    logradouro: {
      endereco: "qd 20 casa 13",
      bairro: "etapa c",
      telefone: ["61981805532", "6130252522"],
    },
  },
  {
    funcionario2: "joão",
    cargo: "pedreiro",
    logradouro: {
      endereco: "qd 50 casa 18",
      bairro: "etapa A",
      telefone: ["61981805532", "6130252522"],
    },
  },
  {
    funcionario3: "maria",
    cargo: "cozinheira",
    logradouro: {
      endereco: "qd 33 casa 22",
      bairro: "etapa D",
      telefone: ["61981805532", "6130252522"],
    },
  },
];

/**
 * JavaScript pode realizar diversas operações aritmeticas
 */

let num1 = 5;
let num2 = 10;

let soma = num1 + num2;
let subtracao = num2 - num1;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num2 / num1;
let potenciacao = num1 ** 2;

console.log(`A soma é: ${soma}`);
console.log(`A subtração é: ${subtracao}`);
console.log(`A multiplicação é: ${multiplicacao}`);
console.log(`A divisao é: ${divisao}`);
console.log(`O resto é: ${resto}`);
console.log(`A potenciação é: ${potenciacao}`);

/**
 * JavaScript possui um arcabouço de funções para aplicar nos codigos.
 */
function somar(a, b) {
  return a + b;
}

const subtr = function (a, b) {
  return a - b;
};

const multip = (a, b) => a * b;

console.log(somar(5, 5));
console.log(subtr(9, 6));
console.log(multip(5, 3));
