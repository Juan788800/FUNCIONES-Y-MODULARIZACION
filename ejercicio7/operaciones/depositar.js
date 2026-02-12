// Función 1 Depositar
function depositar(monto) {
    saldo = saldo + monto;
    console.log("Depositado: $" + monto);
    console.log("Saldo actual: $" + saldo);
}

export default depositar;