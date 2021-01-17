// Cuando ejecutas cualquier código, en el navegador comienza a correrlo y a este proceso se llama Scope. Hay dos tipos de scope
//Global y Local

//GLOBAL

var nombre = "diego"; // Esta es una función global, dek scope global

function (){
    var apellido = "Cuellar";
    return nombre+" "+apellido
} // Una variable dentro d euna función es un ejemplo perfecto de scope local