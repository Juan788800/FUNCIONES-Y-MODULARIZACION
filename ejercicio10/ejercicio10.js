// Propón y desarrolla un programa propio donde apliques los conceptos de:
// • Funciones tradicionales y funciones flecha.
// • Parámetros y argumentos.
// • Retorno de valores.
// • Modularización y buenas prácticas.



// calculadora
import promptSync from "prompt-sync";
const prompt = promptSync();
import { sumar, restar, multiplicar, dividir } from './operaciones/index.js';

console.log("calculadora");
var continuar = true;

// hacemos un while para que el usuario pueda registrar cuales de las opciones quiere escojer
while (continuar) {
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
    
    var opcion = prompt("Opción: ");
    
    if (opcion == "5") {
        console.log("gracias por usar la calculadora");
        continuar = false;
    } else {
        // le pedimos al usaurio que ingrese  un numero
        var num1 = parseFloat(prompt("Número 1: "));
        var num2 = parseFloat(prompt("Número 2: "));
        
        var resultado; // variable para guardar el resultado
        
        if (opcion == "1") { // si elije opcion 1 suma
            resultado = sumar(num1, num2);
        } else if (opcion == "2") { // si elije opcion 2 resta
            resultado = restar(num1, num2);
        } else if (opcion == "3") { // si elije opcion 3 multiplica
            resultado = multiplicar(num1, num2);
        } else if (opcion == "4") { // si elije opcion 4 divide
            resultado = dividir(num1, num2);
        } else {
            resultado = "Error"; // si ingresa una opcion invalida le arroja error
        }
        
        // imprimimos los resultados
        console.log("Resultado: " + resultado);
        
        
    }
}