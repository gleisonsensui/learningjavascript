'use strict'

const titleOne = document.querySelector('#title-select');
const titleTwo = document.querySelector('#title-select-two')
const paragraph = document.querySelectorAll('.paragraph-select');

const parentTitleElement = titleOne.parentElement;
const parentTitleNode = titleOne.parentNode;

console.log(parentTitleElement);
console.log(parentTitleNode);

const firstChildElement = titleOne.firstElementChild;
const firstChildNode = titleOne.firstChild;

console.log(firstChildElement)
console.log(firstChildNode)

const lastChildElement = titleOne.lastElementChild;
const lastChildNode = titleOne.lastChild;

console.log(lastChildElement)
console.log(lastChildNode)

const nextSiblingElement = titleTwo.nextElementSibling;
const nextSiblingNode = titleOne.nextSibling;

console.log(nextSiblingElement)
console.log(nextSiblingNode)

const previousSinblingElement = titleTwo.previousSinblingElement;
const previousSinblingNode = titleTwo.previousSinbling;

console.log(previousSinblingElement)
console.log(previousSinblingNode)










