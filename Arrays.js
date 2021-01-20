Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.
.lenght devuelve la longitud del array.
.push() agrega elementos al final de array.
.pop() elimina un elemento del array.
.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
**.shift() **elimina el elemento que está en el inicio del array.
**.indexOf ** devuelve la posición de un elemento del array.


var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas);

console.log(frutas.length); // lingitud o numero de elementos
console.log(frutas[n]); // acceder al elemento por medio de index

//Mutar o alterar Array
var masFrutas = frutas.push("Uvas") //añadir elementos al final del array
var ultimo = frutas.pop()//Eliminar el último elemento del Array
var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array
var borrarFruta = frutas.shift("Uvas");//Borrar elemento
var posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento```


// Estructura de datos --> tipo objeto --> guarda mas valores adentro
//Puede guardar numero,string, objetos, incluso otros arrays esto se conoce como estructura de datos

// Sintasix
var frutas = ["Manzana", "Platano", "Fresa"];

// Estos elementos se separan por coma,
//podemos llamar a todo nuestro objeto que internamente tiene elementos

console.log(frutas); // me mostrar todo el array y sus elementos

// Podemos versu longitud osea cuantos elementos tengo dentro de este array

console.log(frutas.length); // con len sabemos cuantos elemntos hay en el array

// Para acceder a un elemento en especifico en el array

console.log(frutas[0]);

// Recordemos que el index del array arranca en 0, si queremos llegar a fresa seria 2

// Cuando hablamos de arrays hablamos de 2 metodos mas comunes

//Estos metodos nos ayudan a generar cosas con los arrays
// 1 es agregar elementos
//Sintaxis

var masFrutas = frutas.push("Uvas"); // Añade lun elemento al final del array

// Ahora si queremos quitar un elemento

var quitarFruta = fruta.pop("Uvas");

// Para agregar un elemento al array pero al principio, parecido a .push pero al inicio

var nuevaFruta = fruta.unshift("Uvas");

// Ahora para eliminar un elemento al inicio

var borrarFruta = fruta.shift("Uvas");

// De igual manera asi no pongamos el string y usamos shift se borrara el 1re elemento

// Podemos saber la posicion de un melemento del array tan solo con su nombre en string

//Ejemplo

var posicion = frutas.indexOf("Fresa");

console.log(posicion);

// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información, 
// como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos 
// este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays 
// para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo 
// y año respectivamente.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos 
// ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por 
// razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, 
// esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// Así obtenemos nuestra lista de marcas recientemente ingresadas c:

/* A modo de recopilación:

find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
Acá te dejo la documentación de cada uno: find() - foreach() - some() - filter()  */

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//filter Genera un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500; //articulos con precio menor a 500 pesos
});

//map Ayuda a mapear ciertos elementos de los articulos, es necesario generar nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//find Ayuda a encontrar algo dentro del array articulos
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//forEach No es necesario generar nuevo array, se utiliza para realizar un recorrido de un array principal
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//some Se genera nuevo array, regresa un condición en Boolean
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});


// splice y shift sirven para eliminar objetos

var frutas = ["pera", "banana", "manzana", "trigo"]
//posicion  	0 		1		 2		 3

frutas.splice(pos,nº de elementos por eliminar)// metodo

//EJM:
frutas.splice(2,1)
frutas // [“pera”, “banana”, “trigo”]

//EJM 2: mismo array
frutas.splice(2,2)
frutas // [“manzana”, “trigo”]
>
