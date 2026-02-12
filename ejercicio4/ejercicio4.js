// Crea un pequeño programa que calcule el valor total de una compra.
// • Debes usar al menos tres funciones:
// o Una función para calcular el subtotal (cantidad × precio).
// o Otra función para calcular el IVA (19%).
// o Una tercera función que retorne el total a pagar.
// • Usa retornos de valor y combina los resultados entre funciones.


// Función 1: Calcular subtotal
function calcularSubtotal(cantidad, precio) {
    let subtotal = cantidad * precio;
    return subtotal;
}

// Función 2: Calcular IVA (19%)
function calcularIVA(subtotal) {
    let iva = subtotal * 0.19;
    return iva;
}

// Función 3: Calcular total a pagar
function calcularTotal(subtotal, iva) {
    let total = subtotal + iva;
    return total;
}

// combinamos las funciones para calcular el total de una compra dada una cantidad y un precio
let cantidad = 5;
let precio = 10000;

let subtotal = calcularSubtotal(cantidad, precio);
let iva = calcularIVA(subtotal);
let total = calcularTotal(subtotal,iva);

// imprimimos los resultados
console.log("Cantidad: " + cantidad);
console.log("Precio unitario: $" + precio);
console.log("Subtotal: $" + subtotal);
console.log("IVA (19%): $" + iva);
console.log("Total a pagar: $" + total);