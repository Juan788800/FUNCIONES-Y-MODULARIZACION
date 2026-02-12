import validarNumero from './validarNumero.js';
import contarDivisores from './contardivisores.js';



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