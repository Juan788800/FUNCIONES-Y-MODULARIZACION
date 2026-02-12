// Diseña una función llamada calcularPromedio que reciba tres notas y retorne el
// promedio final del estudiante.

// definimos una funcion llamada calcular promedio en el cual recibe las 3 notas que son los parametros
function calcularPromedio(nota1, nota2, nota3) {
    // Calcular la suma de las tres notas
    let suma = nota1 + nota2 + nota3;
    
    // Calcular el promedio dividiendo entre 3
    let promedio = suma / 3;

    // calcular promedio
    let promedio_para_pasar = promedio;
    
    // Determinar si aprobó o reprobó usando condicional
    let estado = "";
    if (promedio_para_pasar >= 3.0) {
        estado = "felicitaciones aprobo ";
    } else {
        estado = "reprobado ";
    }
    
    // Retornar mensaje completo
    return " Promedio:"  + promedio_para_pasar +  " Estado: "  + estado;
}

// llamamos ala funcion para calcular el promedio de las 3 notas 
let promedio1 = calcularPromedio(4.5, 3.8, 4.2);
console.log("El promedio de las 3 notas es: " + promedio1);