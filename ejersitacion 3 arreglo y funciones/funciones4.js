/*Dificultad:  🟢🟡
4- Escriba un script que muestre la tabla de multiplicar de un
 número ingresado por pantalla, la creación de la tabla debe ser 
 realizada con una función y mostrar solo los resultados del 1 al 10 
 del número elegido por el usuario.
 */
const tablademultiplicar=(numero)=>{
    document.write(`La tabla de ${numero} es: <br/>`)
     for (let i = 1; i <=10; i++) {
         document.write(`${i}x${numero} = ${i*numero} <br/>`);
        }
}
let numero=Number(prompt("ingrese un numero para saber su tabla"))
tablademultiplicar(numero);