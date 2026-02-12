import promptSync from "prompt-sync";
const prompt = promptSync();
// funcion para verificar si el numero es primo o no
function validarNumero(numero) {
    // Un número primo debe ser mayor que 1
    if (numero <= 1) {
        return false;
    }
    return true;
}

// función para contar los divisores de un número
function contarDivisores(numero) {
    let contadorDivisores = 0;
    
    // Recorrer desde 1 hasta el número
    for (let i = 1; i <= numero; i++) {
        // Si el residuo es 0, entonces i es divisor
        if (numero % i === 0) {
            contadorDivisores++;
        }
    }
    
    return contadorDivisores;
}

// función principal para determinar si un numero es primo
function esPrimo(numero) {
    // Validar primero
    if (!validarNumero(numero)) {
        return false;
    }
    
    // Contar divisores
    let divisores = contarDivisores(numero);
    
    // Un número primo tiene exactamente 2 divisores: 1 y él mismo
    if (divisores === 2) {
        return true;
    } else {
        return false;
    }
}

// función para mostrar los resultados
function mostrarResultado(numero, resultado) {
    console.log("RESULTADO ");
    console.log("Numero analizado: " + numero);
    
    if (numero <= 1) {
        console.log("Estado: NO ES PRIMO ");
        console.log("Razon: Los números menores o iguales a 1 no son primos");
    } else if (resultado) {
        console.log("Estado: ES PRIMO ");
        console.log("Motivo: Solo es divisible por 1 y por " + numero);
    } else {
        console.log("Estado: NO ES PRIMO ");
        console.log("Motivo: Tiene mas de 2 divisores");
    }
}

console.log(" verificar si un numero es primo o no ");

let numero = parseInt(prompt("Ingrese un número entero: "));

// Verificar si es primo
let resultado = esPrimo(numero);

// imprimimos los resultados
mostrarResultado(numero, resultado);
