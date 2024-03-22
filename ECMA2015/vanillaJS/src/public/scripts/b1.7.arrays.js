'use strict'

const listTest = ['Gosto de jogar video-game', 'Fulano', 40, true, () => {console.log('Trabalho com TI')}];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const palavras = ['O', 'senhor', 'é', 'meu', 'pastor']

listTest.forEach((item, index) => {
    if(typeof item === "function") {
        item()
    } else {
        console.log(index, item);
    }
})


// Operadores de Array
const listMap = listTest.map(item => {
    if(typeof item !== 'string') {
        return '';
    } else {
        return item
    }
})
console.log(listMap);


const listReduce = numbers.reduce((acc, item) => {
    return acc += item;
})
console.log(listReduce);



































