//array 
const numeros=[10,20,5,3,5]

let total=0;
for(let i=0; i<numeros.length;i++){
    total=total+numeros[i];
    console.log("la suma en la vuelta ${i} es: ${total}");
}

//hace que los datos que ingreso el usuario los tranforme de string a numero
Number(prompt("ingrese un numero: "))


//sirve para agregar elementos a un arreglo luego de los que ya estan

push

//si no uso el push los datos se van a reemplazar en los elementos, se van a borrar. no se vana a agregar


/*
splice agrega o quita elementos desde una posicion en particular
me puedo posicionar en febrero para agregar marzo
*/
const months=["jun","feb","april"]
months.splice(1,0,"march");

//funciones

function nombreDeLaFuncion(parametro1,parametro2){

}
//aca estamos creando la funcion que suma dos numeros
function SumarNumeros(numero1,numero2){
    const total=numero1+numero2;
    //el return es para podes sacar de la funcion los valores
    return total;
}
//aca hay que guardar el valor que salio de la funcion para poder mostrarlo
const totalDeLaSuma = SumarNumeros(10,20);
console.log(totalDeLaSuma);
