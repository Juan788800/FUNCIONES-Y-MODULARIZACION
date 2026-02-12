// Diseña un sistema que permita simular las siguientes operaciones:
// • Depositar dinero, retirar dinero y consultar saldo.
// Cada operación debe estar representada por una función diferente y el saldo debe
// mantenerse actualizado entre operaciones.
// Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir.



import promptSync from "prompt-sync";
const prompt = promptSync();

let saldo = 0;

// Función 1 Depositar
function depositar(monto) {
    saldo = saldo + monto;
    console.log("Depositado: $" + monto);
    console.log("Saldo actual: $" + saldo);
}

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

// Función 3 Consultar
function consultarSaldo() {
    console.log( "Saldo: $" + saldo);
}

// Programa principal
console.log("cajero automatico");

let continuar = true;

while (continuar) {
    console.log("1. Depositar");
    console.log("2. Retirar");
    console.log("3. Consultar saldo");
    console.log("4. Salir");
    
    let opcion = parseInt(prompt("Opción: "));
    
    if (opcion === 1) {
        let monto = parseFloat(prompt("Monto: $"));
        depositar(monto);
        
    } else if (opcion === 2) {
        let monto = parseFloat(prompt("Monto: $"));
        retirar(monto);
        
    } else if (opcion === 3) {
        consultarSaldo();
        
    } else if (opcion === 4) {
        console.log("gracias por usar el cajero automatico. su saldo final: $" + saldo);
        continuar = false;
    }
}
