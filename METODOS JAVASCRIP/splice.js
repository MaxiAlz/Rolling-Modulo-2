/*El método splice() podría ser el mejor método que podemos usar para eliminar 
el objeto de un array. Cambia el contenido de un array eliminando o reemplazando 
elementos existentes o agregando nuevos elementos en su lugar. La sintaxis del 
método splice() se muestra a continuación. 

Array.splice(index, count, items1, ... , itemX)

La opción index se refiere a un número entero que especifica en qué posición agregar / eliminar elementos
La opción count es opcional e indica el número de elementos que se eliminarán.
La opción items1, ..., itemX también es opcional y se puede usar para agregar nuevos elementos a el array.
*/

let arreglodeObj=[
    {nombre:"juan",codigo:0},
    {nombre:"mario",codigo:1},
    {nombre:"pedro",codigo:2},
    {nombre:"jose",codigo:2},
];

const arrayobjet=arreglodeObj.splice(0,1);

console.log(arrayobjet)
//me elimona el objeto de array original guarda con eso

//para que  no me modifique el array original debo usar slice()

let myArray = [
    {id:1, name:'Morty'},
    {id:2, name:'Rick'},
    {id:3, name:'Anna'}
];
var newArray = myArray.slice(0, 1);//dme va a devolver los elementos elimonades desde la posicion 1 a 3

console.log(newArray)




