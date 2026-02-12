// Crea una función llamada contarHasta que reciba un número y, utilizando un ciclo,
// imprima todos los números desde 1 hasta el valor recibido.
// • Convierte luego esta función a función flecha.


// convertimos la funcion contarHasta a una funcion flecha
const contarHasta = (numero) => {
    // Validar que sea un número positivo
    if (numero <= 0) {
        console.log("Error: El número debe ser mayor a 0");
        return;
    }
    
    console.log("Contando desde 1 hasta el  " + numero + ":");
    
    // Ciclo for para contar desde 1 hasta el número
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
    
    console.log("Conteo completado");
}

contarHasta(10);