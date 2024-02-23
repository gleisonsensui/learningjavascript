const canvas = document.getElementById('invaders');
console.log(canvas)

const context = canvas.getContext('2d');

/**
 * Definindo preenchimento <context>.fillRect(x, y, largura, altura);
 */
/*
context.fillStyle = 'red';
context.fillRect(50, 50, 50, 50);
*/

/**
 * Definindo contorno <context>.strokeRect(x, y, largura, altura);
 */
/*
context.lineWidth = 3;
context.strokeStyle = 'blue';
context.strokeRect(50, 50, 100, 100);
*/



/**
 * Estrelas
 */
/*
context.beginPath();

context.moveTo(70, 170);
context.lineTo(115, 50);
context.lineTo(155, 170);
context.lineTo(50, 80);
context.lineTo(180, 80);
context.lineTo(70, 170);


context.lineWidth = 2;
context.strokeStyle = 'red';

context.stroke();
*/

/**
 * Circunferencia - <context>.arc(x, y, raio, radInit, radEnd);
 */

/*
let raio = 40;
let init = 90;
let end = 270;
let radInit = init * Math.PI/180;
let radEnd = end * Math.PI/180;

context.fillStyle = 'gray';
context.strokeStyle = 'black';
context.lineWidth = 2;

// Duas metades de circunferencia
context.beginPath();
context.arc(50, 50, raio, radInit, radEnd, false);
context.arc(150, 50, raio, radInit, radEnd, true);
context.fill();
context.stroke()

// Circunferencia completa
context.beginPath();
context.arc(50, 150, raio, 0, 2 * Math.PI);
context.fill();
context.stroke()
*/



/**
 * Desenhando imagens
 */

let imagem = new Image();
imagem.src = '../public/img/ufo.png'; // <a href='https://pt.pngtree.com/freepng/alien-ufo-clip-art_6125636.html'>imagem PNG de pt.pngtree.com/</a>
imagem.onload = function() {
    let x = 20;

    for(let i = 1; i <= 5; i++) {
        context.drawImage(imagem, x, 20, 40, 25);
        x += 35;
    }
}
























