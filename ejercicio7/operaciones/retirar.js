// Función 2 Retirar
function retirar(monto) {
    if (monto > saldo) {
        console.log("Saldo insuficiente");
    } else {
        saldo = saldo - monto;
        console.log("Retirado: $" + monto);
        console.log("Saldo actual: $" + saldo);
    }
}

export default retirar;