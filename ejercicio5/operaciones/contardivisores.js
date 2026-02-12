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

export default contarDivisores;