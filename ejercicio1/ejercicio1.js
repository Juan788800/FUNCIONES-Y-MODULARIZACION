// Crea una función llamada saludoPersonalizado que reciba un nombre como
// parámetro y retorne un mensaje de bienvenida.

// importamos el módulo prompt-sync para poder solicitar al usuario que ingrese su nombre
import promptSync from "prompt-sync";
const prompt = promptSync();

// Función tradicional
// creamos la función saludoPersonalizado que recibe un parámetro llamado nombre
function saludoPersonalizado(nombre) {
    // verificamos si el nombre es no esta vacio
    if (!nombre === "") {
        // si el nombre no es valido retornamos un mensaje indicando que se debe proporcionar un nombre valido
        return "Por favor, proporciona un nombre válido.";
    }
    // si el nombre es valido retornamos un mensaje de bienvenida 
    return "Bienvenido " + nombre + " Es un gusto tenerte aqui.";
}

let resultado = saludoPersonalizado("Juan Manuel");
console.log(resultado); 