/*
pedir al usuario 2 numeros
crear una funcion que reciba 2 numeros y me devuelva el mayor
llamar a la funcion con los numeros que ingreso el usuario
------
Con el mayor devuelto por la funcion, que muestre por consola los sucesivos hasta llegar a cero

---------
determinar si el numero devuelto por la funcion es  par o impar
----------
*/

function DeterminarElMayorDeDosNumeros(numero1,numero2){
  
    if(numero1>numero2){
        mayor = numero1;
        // console.log("el mayor es: "+ mayor);
    }else {
        mayor = numero2;
        // console.log("el mayor es: "+ mayor);
    }
    return mayor
}

let numero1 = prompt("ingrese un numero: ")
let numero2 = prompt("ingrese otro numero: ")

console.log('los numeros ingresados son: '+numero1 +" y "+ numero2);

let ResultadoFuncion = DeterminarElMayorDeDosNumeros(numero1,numero2);

console.log('el mayor es: '+ ResultadoFuncion);
if(ResultadoFuncion%2==0){
    console.log('!el numero es par!')
}else console.log('!el numero es impar!')

for(let i=ResultadoFuncion; i>=0 ; i--){
    console.log(i)
}

