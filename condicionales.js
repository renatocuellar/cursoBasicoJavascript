var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if (user != cpu){
        if (
		(user === op1 && cpu === op3) || 
		(user === op2 && cpu === op1) || 
		(user === op3 && cpu === op2) 
){
            console.log("el usuario GANO")
        }
        else{
            console.log("La CPU Gano!!")
        }
    }
    else if(user === cpu){
        console.log("Empate")
    }
};

conditional ? true : false; //es lo mismo que if, else

vae numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";