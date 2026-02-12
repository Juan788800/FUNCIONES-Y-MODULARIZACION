import promptSync from "prompt-sync";
const prompt = promptSync();


import { validarNumero, mostrarResultado, esPrimo , contarDivisores } from './operaciones/index.js';

console.log(" verificar si un numero es primo o no ");

let numero = parseInt(prompt("Ingrese un número entero: "));

// Verificar si es primo
let resultado = esPrimo(numero);

// imprimimos los resultados
mostrarResultado(numero, resultado);
