// Sistema de facturación
// Crea un programa que reciba una lista de productos (nombre, precio, cantidad) y calcule:
// • Subtotal por producto.
// • Total sin IVA.
// • IVA total (19%).


import promptSync from "prompt-sync";
const prompt = promptSync();
// Funciones
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularIVA(total) {
    return total * 0.19;
}

function calcularTotal(totalSinIVA, iva) {
    return totalSinIVA + iva;
}

// P
console.log("factura de compra");

let numero_productos = parseInt(prompt("¿Cuántos productos? "));

let totalSinIVA = 0;
let detalleProductos = "";

for (let i = 1; i <= numero_productos; i++) {
    console.log("Producto " + i + ":");
    let nombre = prompt("Nombre: ");
    let precio = parseFloat(prompt("Precio: $"));
    let cantidad = parseInt(prompt("Cantidad: "));
    
    let subtotal = calcularSubtotal(precio, cantidad);
    totalSinIVA = totalSinIVA + subtotal;
    
    
    detalleProductos = detalleProductos + i + ". " + nombre + ": $" + precio + " x " + cantidad + " = $" + subtotal + "\n";
}

let iva = calcularIVA(totalSinIVA);
let total = calcularTotal(totalSinIVA, iva);

// Mostrar
console.log("--- FACTURA ---");
console.log(detalleProductos);

console.log("Total sin IVA: $" + totalSinIVA);
console.log("IVA (19%): $" + iva);
console.log("TOTAL: $" + total);
