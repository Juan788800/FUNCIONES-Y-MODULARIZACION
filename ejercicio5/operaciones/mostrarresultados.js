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

export default mostrarResultado