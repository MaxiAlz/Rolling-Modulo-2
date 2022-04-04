// ejersicio 7, cual es el mayor de 3 numeros

let numero1 = parseInt(prompt("ingrese un numero: "));
let numero2 = parseInt(prompt("ingrese un numero: "));
let numero3 = parseInt(prompt("ingrese un numero: "));

if(numero1>numero2 && numero3 ){
    alert("mayor es: " + numero1);
}else if(numero2> numero1 && numero3){
    alert("el mayor es: "+numero2);
}else{
    alert("el mayor es el numero: "+numero3)
}

