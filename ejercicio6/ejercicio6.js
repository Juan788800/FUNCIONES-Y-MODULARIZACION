import promptSync from "prompt-sync";
const prompt = promptSync();

// Funcion 1 Calcular promedio
function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

// Funcion 2 Determinar si aprueba o reprueba
function determinarEstado(promedio) {
    if (promedio >= 3.0) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

// Funcion 3 Mostrar resultado final
function mostrarResultado(nombre, promedio, estado) {
    console.log("resultados del estudiante");
    console.log("Estudiante: " + nombre);
    console.log("Promedio: " + promedio);
    console.log("Estado: " + estado);
}

// registro de notas del estudiante
console.log("Registro de notas del estudiante");

let nombre = prompt("Nombre: ");
let nota1 = parseFloat(prompt("Nota 1: "));
let nota2 = parseFloat(prompt("Nota 2: "));
let nota3 = parseFloat(prompt("Nota 3: "));

let promedio = calcularPromedio(nota1, nota2, nota3);
let estado = determinarEstado(promedio);

mostrarResultado(nombre, promedio, estado);
