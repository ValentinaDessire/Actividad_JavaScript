let cantidadEstudiantes = 3; // cantidad de estudiantes para ingresar datos
let estudiantes = []; // arreglo para almacenar los datos de los estudiantes
let sumaNotasMatematicas = 0;
let sumaNotasFisica = 0;
let sumaNotasProgramacion = 0;
let aprobadosMatematicas = 0;
let aprobadosFisica = 0;
let aprobadosProgramacion = 0;
let aplazadosMatematicas = 0;
let aplazadosFisica = 0;
let aplazadosProgramacion = 0;
let aprobadosTodasMaterias = 0;
let aprobadosUnaSolaMateria = 0;
let aprobadosDosMaterias = 0;
let notaMaximaMatematicas = 0;
let notaMaximaFisica = 0;
let notaMaximaProgramacion = 0;

for (let i = 0; i < cantidadEstudiantes; i++) {
    let estudiante = {};
    estudiante.cedula = prompt("Ingrese la cédula del estudiante " + (i + 1) + ":");
    estudiante.nombre = prompt("Ingrese el nombre del estudiante " + (i + 1) + ":");
    estudiante.notaMatematicas = parseFloat(prompt("Ingrese la nota de Matemáticas del estudiante " + (i + 1) + ":"));
    estudiante.notaFisica = parseFloat(prompt("Ingrese la nota de Física del estudiante " + (i + 1) + ":"));
    estudiante.notaProgramacion = parseFloat(prompt("Ingrese la nota de Programación del estudiante " + (i + 1) + ":"));
    estudiantes.push(estudiante);

    sumaNotasMatematicas += estudiante.notaMatematicas;
    sumaNotasFisica += estudiante.notaFisica;
    sumaNotasProgramacion += estudiante.notaProgramacion;

    if (estudiante.notaMatematicas >= 3.0) {
        aprobadosMatematicas++;
        if (estudiante.notaFisica >= 3.0 && estudiante.notaProgramacion >= 3.0) {
            aprobadosTodasMaterias++;
        } else if (estudiante.notaFisica >= 3.0 || estudiante.notaProgramacion >= 3.0) {
            aprobadosUnaSolaMateria++;
        }
    } else {
        aplazadosMatematicas++;
        if (estudiante.notaFisica >= 3.0 && estudiante.notaProgramacion >= 3.0) {
            aprobadosDosMaterias++;
        } else if (estudiante.notaFisica < 3.0 && estudiante.notaProgramacion < 3.0) {
            aplazadosFisica++;
            aplazadosProgramacion++;
        } else if (estudiante.notaFisica >= 3.0) {
            aprobadosFisica++;
        } else {
            aprobadosProgramacion++;
        }
    }

    if (estudiante.notaMatematicas > notaMaximaMatematicas) {
        notaMaximaMatematicas = estudiante.notaMatematicas;
    }
    if (estudiante.notaFisica > notaMaximaFisica) {
        notaMaximaFisica = estudiante.notaFisica;
    }
    if (estudiante.notaProgramacion > notaMaximaProgramacion) {
        notaMaximaProgramacion = estudiante.notaProgramacion;
    }
}

let promedioMatematicas = sumaNotasMatematicas / cantidadEstudiantes;
let promedioFisica = sumaNotasFisica / cantidadEstudiantes;
let promedioProgramacion = sumaNotasProgramacion / cantidadEstudiantes;

console.log("Promedio de Matemáticas: " + promedioMatematicas.toFixed(2));
console.log("Promedio de Física: " + promedioFisica.toFixed(2));
console.log("Promedio de Programación: " + promedioProgramacion.toFixed(2));
console.log("Número de aprobados en Matemáticas: " + aprobadosMatematicas);
console.log("Número de aprobados en Física: " + aprobadosFisica);
console.log("Número de aprobados en Programación: " + aprobadosProgramacion);
console.log("Número de estudiantes que aprobaron todas las materias: " + aprobadosTodasMaterias);
console.log("Número de estudiantes que aprobaron al menos una materia: " + aprobadosUnaSolaMateria);
console.log("Número de estudiantes que aprobaron exactamente dos materias: " + aprobadosDosMaterias);
console.log("Nota máxima en Matemáticas: " + notaMaximaMatematicas);
console.log("Nota máxima en Física: " + notaMaximaFisica);
console.log("Nota máxima en Programación: " + notaMaximaProgramacion);
console.log("Número de estudiantes que aplazaron Matemáticas: " + aplazadosMatematicas);
console.log("Número de estudiantes que aplazaron Física: " + aplazadosFisica);
console.log("Número de estudiantes que aplazaron Programación: " + aplazadosProgramacion); 