// función principal para determinar si un numero es primo
// Validar número
function validarNumero(numero) {
    return numero > 1;
}

// Contar divisores
function contarDivisores(numero) {
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    return contador;
}

// función principal para determinar si un numero es primo
function esPrimo(numero) {
    // Validar primero
    if (!validarNumero(numero)) {
        return false;
    }
    
    // Contar divisores
    let divisores = contarDivisores(numero);
    
    // Un número primo tiene exactamente 2 divisores
    if (divisores === 2) {
        return true;
    } else {
        return false;
    }
}

export default esPrimo;