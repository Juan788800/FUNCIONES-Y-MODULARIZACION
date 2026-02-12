import promptSync from "prompt-sync";
const prompt = promptSync();


import {calcularPromedio, determinarEstado,mostrarResultado  } from './operaciones/index.js';



// registro de notas del estudiante
console.log("Registro de notas del estudiante");

let nombre = prompt("Nombre: ");
let nota1 = parseFloat(prompt("Nota 1: "));
let nota2 = parseFloat(prompt("Nota 2: "));
let nota3 = parseFloat(prompt("Nota 3: "));

let promedio = calcularPromedio(nota1, nota2, nota3);
let estado = determinarEstado(promedio);

mostrarResultado(nombre, promedio, estado);
