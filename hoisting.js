// Cuando las variables y las funciones se procesa antes que cualquier otro tipo de codigo, pasa mucho con ecmascript 5 para abajo
// Se corrije el error luego de ecmascript6

// sucede cuando se manda a llamar una variable sin declararla o inicializarla

console.log(miNombre)

var miNombre = "Mateo";

//El resultado será Unidefined, esto ya que aún no se ha declarado la variable para poder hacer el console.log