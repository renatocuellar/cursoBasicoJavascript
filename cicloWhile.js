


// Se debe tener especial cuidado con el ciclo while(): si la condición siempre es verdadera, se genera un ciclo infinito, 
// produciendo algunas veces (según las acciones dentro del while) que el navegador se bloquee (por saturación de memoria) , 
// obligando a cerrar la pestaña/navegador a la fuerza.

var temperaturasPollo = [160, 140, 100, 80, 60, 20, 10, 0]


function masterPollon(temperatura) {
    if(temperatura < 140)
    {
        console.log("El pollo esta vivo");
    }
    else if (temperatura < 160) {
        console.log("Llamemoslo termino medio")
    }
    else {
        console.log("Listo el pollo!!")
    }
}

while(temperaturasPollo.length > 0) {
    var rostizado = temperaturasPollo.pop();
    masterPollon(rostizado)
}


// otro ejemplo

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)

//while
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}