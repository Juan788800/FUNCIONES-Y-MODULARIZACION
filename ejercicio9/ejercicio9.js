// Crea un programa que reciba un número entero y determine:
// • Si es par o impar.
// • Si es positivo o negativo.
// • Si es primo.
// Cada validación debe estar contenida en una función diferente, y el resultado final
// debe mostrarse mediante una función principal.

import promptSync from "prompt-sync";
const prompt = promptSync();

// Funcion 1 Verificar si es par o impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "IMPAR";
    }
}

// Funcion 2 Verificar si es positivo o negativo
function esPositivo(numero) {
    if (numero > 0) {
        return "POSITIVO";
    } else if (numero < 0) {
        return "NEGATIVO";
    } else {
        return "CERO";
    }
}

// Funcion 3 Verificar si es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

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
