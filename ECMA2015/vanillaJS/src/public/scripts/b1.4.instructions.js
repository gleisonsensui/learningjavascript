'use strict'

let nameUser = "Fulano";
// Instruções de expressão são instruções que geram efeitos colaterais, seja alterando valores, estados ou comportamento.
let greetings = "Hello " + nameUser;
console.log(greetings);


let increment= 2;
console.log(increment);

increment *= 2; 
console.log(increment);

// Instruções compostas ou vazias

{
    let x = Math.PI;
    let cx = Math.cos(x);
    console.log("cons () = " + cx );
}

let a= [];

for(let i = 0; i < a.lenght; a[i++] = 0);

console.log(a);


// Instruções de Declaração
let variavel = 'string';


const funcao = () => {
    console.log('instrução de declaração funcional anonima');
}

funcao()












