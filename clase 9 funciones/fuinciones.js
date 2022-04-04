//funciones declarativas Son las que menos se usan

/* */
saludar();
function saludar(){
  let saludo='hola bichito';
 return saludo;
}


/*funcion anonima */
/*
const saludarcomision = function(){
    console.log('hola comision')
}

let num1 = parseInt(prompt('ingrese numero1: '));
let num2 = parseInt(prompt('ingrese numero2: '));
let resultadoDeLaSuma;

const sumaNumeros=function(primervalor, segundovalor){
    let resultado=primervalor+segundovalor;
    return resultado;
}

resultadoDeLaSuma= sumaNumeros(num1, num2);
console.log(`el resultado es: ${resultadoDeLaSuma}`);
*/

//funcion flecha o arrow function

const saludo = ()=> console.log(`esto es una funcion Flecha`);


const suma2= (a, b)=>{
    let resultado=a+b;
    console.log(`el resultado de la suma es: ${resultado}`)
}

const futas=["banana", "manzana", "pera"]

const frutasfuncion=()=>{
    console.log(frutasfuncion.join(" + "))
}

//SCOOPE

/*Es la vida que tiene una variable segun donde este declarada */

//soope Local: nace vive y muere en un bloque de codigo


const pais =()=>{
    let nombrepaises=["argentina", "peru", "venezuela"]

    for(let i=0; i<nombrepaises.length; i++){
        console.log(nombrepaises[i])
    }
}

//scoope global

let nombrePaises = ["argentina", "peru" , "chile"]
const paises2= (arr) =>{
    
}
