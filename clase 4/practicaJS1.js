// declaracion de variables
// espacio de un valor

// Declaracion
let NombreVariable = "valor";

// constantes
const NombreConstante = "Valor_cont";
const pi = 3.14;

// tipos de datos

// string
let string = "Esto es un string";

// Numero
let Numero = 25;

// boolean --> true o False
let HoyLlueve = true;

// Null
let ValorNulo = null

// Arreglos
let arreglos = [10, 15, 3, true]

// opbjetos conjunto de datos
let persona = {
    edad: 15,
    nombre: "franco",
    dni: 14523321
}

let suma = 15 + 15;

// Me muestra en consola el resultado de algo
console.log("Resultado de la suma es: " + suma);

// operadores unitarios
// ++
// --

let num1= 1;
num1++;
console.log("num1 es igual a "+ num1);

let num2= 2;
num2--;
console.log("num2 es igual a "+ num2);

// operadores relacionales (DEVUELVEN TRUE O FALSE)

let primernumero=10;
let segundonumero=15;
let tercernumero=20;
let cuartonumero=25;
// let quintonumero=10;

// console.log(
//     "Primer numero: 10 ,Segundo numero:15 -->  " + (primernumero==segundonumero)
//     );

console.log(primernumero==segundonumero);
console.log(primernumero===segundonumero);

// 10 es distinto de 15
console.log(primernumero != segundonumero);
// preguntando si 10>15?
console.log(primernumero>segundonumero);
//  10<15?
console.log(primernumero<segundonumero);

// 10<=15?
console.log(primernumero<=segundonumero);

let verdadero=true;
console.log("negacion de verdadero: ");
console.log(!verdadero);

let falso=false;
console.log("Negacion de falso: ");
console.log(!falso);

console.log()

let edad= prompt("ingrese su edad");
alert("su edad es: " + edad);
