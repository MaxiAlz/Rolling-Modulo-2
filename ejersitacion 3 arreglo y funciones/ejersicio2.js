/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades=[];

do {
    ciudades.push(prompt("ingrese ciudad: "));

} while (confirm("ingrese ciudad,precione aceptar"));

//Mostrar la longitud del arreglo.
document.write(`longitud del arreglo ${ciudades.length}`);
document.write("<br/>-------------------<br/>");

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`posicion 1° : ${ciudades[0]}`);
document.write("<br/>-------------------<br/>");
document.write(`posicion 3° : ${ciudades[2]}`);
document.write("<br/>-------------------<br/>");
document.write(`posicion ultima : ${ciudades[ciudades.length-1]}`);
document.write("<br/>-------------------<br/>");

//Añade en última posición la ciudad de París.
ciudades.push("paris");

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("la segunda posicion la ocupa: " + ciudades[1]);
document.write("<br/>---------------------------<br/>")

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1]="barcelona";


ciudades.forEach(element => {
    document.write(element)
    document.write("<br/>")
});