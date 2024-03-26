'use strict'
let numero1= 0;
let numero2 = 0;
let signo = '';

const result = document.querySelector('.display');

const uno = document.querySelector('#boton1');
const dos = document.querySelector('#boton2');
const tres = document.querySelector('#boton3');
const cuatro = document.querySelector('#boton4');
const cinco = document.querySelector('#boton5');
const seis = document.querySelector('#boton6');
const siete = document.querySelector('#boton7');
const ocho = document.querySelector('#boton8');
const nueve = document.querySelector('#boton9');
const cero = document.querySelector('#boton0');
const sumar = document.querySelector('#botonS');
const restar = document.querySelector('#boton-');
const multi = document.querySelector('#botonx');
const dividir = document.querySelector('#botonD');
const raiz = document.querySelector('#botonV');
const elevar  = document.querySelector('#botonCor');
const borrar = document.querySelector('#botonC');
const punto = document.querySelector('#botonP');
const igual = document.querySelector('#botonI');

cero.onclick = function(e){
  result.textContent = result.textContent + '0';
  result.value = result.value + '0';
}
uno.onclick = function(e) {
  result.textContent = result.textContent + '1';
  result.value = result.value + '1';
}
dos.onclick = function(e) {
  result.textContent = result.textContent + '2';
  result.value = result.value + '2';
}

tres.onclick = function(e) {
  result.textContent = result.textContent + '3';
  result.value = result.value + '3';
}

cuatro.onclick = function(e) {
  result.textContent = result.textContent + '4';
  result.value = result.value + '4';
}

cinco.onclick = function(e) {
  result.textContent = result.textContent + '5';
  result.value = result.value + '5';
}

seis.onclick = function(e) {
  result.textContent = result.textContent + '6';
  result.value = result.value + '6';
}

siete.onclick = function(e) {
  result.textContent = result.textContent + '7';
  result.value = result.value + '7';
}

ocho.onclick = function(e) {
  result.textContent = result.textContent + '8';
  result.value = result.value + '8';
}

nueve.onclick = function(e) {
  result.textContent = result.textContent + '9';
  result.value = result.value + '9';
}
sumar.onclick = function(e){
    result.textContent = result.textContent + '+';
    result.value = result.value + '+';
    numero1 = result.textContent;
    signo = '+';
    limpiar();
}
restar.onclick = function(e){
    result.textContent = result.textContent + '-';
    result.value = result.value + '-';
    numero1 = result.textContent;
    signo = '-';
    limpiar();
}
multi.onclick = function(e){
    result.textContent = result.textContent + '*';
    result.value = result.value + '*';
    numero1 = result.textContent;
    signo = '*';
    limpiar();
}
dividir.onclick = function(e){
    result.textContent = result.textContent + "/";
    result.value = result.value + "/";
    numero1 = result.textContent;
    signo = '/';
    limpiar();
}
raiz.onclick = function(e) {
    result.textContent = result.textContent + '√';
    result.value = result.value + '√';
    numero1 = result.textContent;
    signo = '√';
    limpiar();
}
// raiz.onclick = function(e) {
//   numero1 = parseFloat(result.textContent);
//   signo = '√';
//   resolver();
// }
elevar.onclick = function(e) {
    result.textContent = result.textContent + '^';
    result.value = result.value + '^';
    numero1 = result.textContent;
    signo = '^';
    limpiar();
}
// elevar.onclick = function(e) {
//   numero1 = parseFloat(result.textContent); 
//   signo = '^';
//   limpiar();
// }
igual.onclick = function(e) {
  const numeros = result.textContent.split(signo);
  numero1 = parseFloat(numeros[0]); 
  numero2 = parseFloat(numeros[1]); 
  resolver();
punto.onclick = function(e){
  result.textContent = result.textContent + ".";
  result.value = result.value + '.';
  numero2 = result.textContent;
  signo = '.';
  limpiar();
}
borrar.onclick = function(e) {
  result.textContent = result.textContent.slice(0, -1);
  result.value = result.value.slice(0, -1);
}

function limpiar() {
  result.textContent = result.textContent + "";
  result.value = result.value + '';
}
function resetearValores() {
  result.value = '';
  numero1 = 0;
  numero2 = 0;
  signo = '';
  limpiar();
}

function resolver() {
 let fin = 0;

  switch(signo) {
    case '+':
        fin = parseFloat(numero1) + parseFloat(numero2); 
        break;
    case '-':
        fin = parseFloat(numero1) - parseFloat(numero2); 
        break;
    case '*':
        fin = parseFloat(numero1) * parseFloat(numero2); 
        break;
    case '/':
        fin = parseFloat(numero1) / parseFloat(numero2);
        break;
    case '√':
        fin = Math.sqrt(numero1);
        break;
    case '^':
        fin = Math.pow(numero1, numero2); 
        break;
    default:
        if(numero1 == 0) {
            fin = numero2;
        } else {
            fin = numero1;
        }
}
  resetearValores();
  result.textContent = fin;
  result.value =  fin;

}
}
