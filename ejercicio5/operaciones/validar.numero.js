// funcion para verificar si el numero es primo o no
function validarNumero(numero) {
    // Un número primo debe ser mayor que 1
    if (numero <= 1) {
        return false;
    }
    return true;
}

export default validarNumero;