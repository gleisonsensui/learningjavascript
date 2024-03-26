'use strict'

const listTest = ['Gosto de jogar video-game', 'Fulano', 40, true, () => {console.log('Trabalho com TI')}];
const numbers = [0, 3, 8, 1, 2, 9, 6, 5, 4, 7];
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

const listFilter = numbers.filter(item => item % 2 === 0);
console.log(listFilter);


const listEvery = listFilter.every(item => item % 2 === 0);
console.log(listEvery);

const listFind = numbers.find(item => item % 2 === 0);
console.log(listFind);

const listOrdened = numbers.sort((a, b) => a - b);
console.log(listOrdened);

const listUnordened = numbers.sort((a, b) => b - a);
console.log(listUnordened)

const listOrdenedCompare = palavras.sort((a, b) => a.localeCompare(b));
console.log(listOrdenedCompare)


const listUnordenedCompare = palavras.sort((a, b) => a.localeCompare(b)).reverse();
console.log(listUnordenedCompare)

const listSome = listFilter.some(item => item % 2 === 1);
console.log(listSome);


// Banchmarking loop
console.time()
for(let item of numbers) {
    if(item % 2 === 0) {
        console.log(item)
        continue;
    }
    if(item === 5) {
        console.log(item);
        break;
    }

    console.log('acabou a iteração')
}
console.timeEnd();


// Console Table
console.table(numbers)















