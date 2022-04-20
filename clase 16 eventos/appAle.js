/*Crea una web con bootstrap y js, que contenga un botón 
comenzar el juego, en ese momento se crea un número aleatorio que el 
usuario deberá adivinar, la interfaz del usuario debe tener además un 7
input para ingresar un número y un botón enviar, al presionar el botón 
enviar mostrar en un alert si el usuario adivino o no el número mágico,
 si no lo adivino indicarle con un alert si el numero que ingreso es 
 mayor o menor al número mágico.

Cuando el usuario adivine el numero mostrar un mensaje indicando al 
usuario que adivino el numero.
 */

const adivinarNumero=(numero)=>{
    const numeroRandom=Math.round(Math.random() * 10);
    const numeroInput= numero.value;
    
    //compruebo si el numero es ingresado esta en el rango de 1 a 10
    if (numeroInput<=10 && !isNaN(numeroInput)) {
        if (numeroInput==numeroRandom) {
            alert(`Adivinaste Rey! El numero era ${numeroRandom}`)
        }else{
            alert(`perdiste Gil! el numero era ${numeroRandom}`)
        }
    }else{
        alert("ingresa numero del 1 al 10 unicamente")
    }
}