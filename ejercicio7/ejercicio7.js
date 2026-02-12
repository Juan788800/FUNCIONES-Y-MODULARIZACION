// Diseña un sistema que permita simular las siguientes operaciones:
// • Depositar dinero, retirar dinero y consultar saldo.
// Cada operación debe estar representada por una función diferente y el saldo debe
// mantenerse actualizado entre operaciones.
// Aplica ciclos para permitir múltiples operaciones hasta que el usuario decida salir.



import promptSync from "prompt-sync";
const prompt = promptSync();
import {consultarSaldo , depositar, retirar} from './operaciones/index.js';
let saldo = 0;


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
