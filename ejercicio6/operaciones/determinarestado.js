// Funcion 2 Determinar si aprueba o reprueba
function determinarEstado(promedio) {
    if (promedio >= 3.0) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

export default determinarEstado;