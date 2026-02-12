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

export default esPositivo;