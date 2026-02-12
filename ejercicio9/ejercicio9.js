// Crea un programa que reciba un número entero y determine:
// • Si es par o impar.
// • Si es positivo o negativo.
// • Si es primo.
// Cada validación debe estar contenida en una función diferente, y el resultado final
// debe mostrarse mediante una función principal.

import promptSync from "prompt-sync";
const prompt = promptSync();
import { esPar, esPositivo, esPrimo } from './operaciones/index.js';

// mostrar resultados
function mostrarResultado(numero) {
    console.log("resultados");
    console.log("Número: " + numero);
    console.log("Es " + esPar(numero));
    console.log("Es " + esPositivo(numero));
    
    if (esPrimo(numero)) {
        console.log("Es primo");
    } else {
        console.log("NO es primo");
    }
}

// resultados del numero
console.log("resultados del numero");

let numero = parseInt(prompt("Ingrese un número entero: "));

mostrarResultado(numero);
