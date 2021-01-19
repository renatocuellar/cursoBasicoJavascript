// Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:
// for - recorre un bloque de código varias veces
// for/in - recorre las propiedades de un objeto
// for/of - recorre los valores de un objeto iterable
// while - recorre un bloque de código mientras se cumple una condición específica
// do/while - también recorre un bloque de código mientras se cumple una condición específica

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiantes) {
  console.log(`Hola!, ${estudiantes}`);
}

//Forma 1
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

//Forma 2
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}```