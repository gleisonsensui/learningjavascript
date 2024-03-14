'use strict'

// statement function
function printProps(obj) {
    for(let p in obj) {
        console.log(`${p}: ${obj[p]}`);
    }
}
printProps({x: 10, y: 15});


// anonimous function
const factorial = function(x) {
    if(x <= 1) return 1;
    return x * factorial(x - 1);
};
console.log(factorial(5));


// Arrow function
const square = (x) => x * x;
console.log(square(5))


// IIFE
const tenSquare = (function(x) {return x*x})(10)
console.log(tenSquare)

// Constructor function
function Pessoa (nome, sobrenome, idade = 18) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const pessoa1 = new Pessoa('Joshua', 'do Céu');
console.log(pessoa1)


// Factory function
function impressora() {
    return {
        isActive: true,
        isOnLine: true
    }
}

const impressora1 = new impressora();
console.log(impressora1)
const impressora2 = new impressora();
console.log(impressora2)

// Generator function
function* generator() {
    yield 'isso é demais'
}

const gene = generator();
console.log(gene.next());







