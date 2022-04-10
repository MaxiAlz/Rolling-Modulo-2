/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */
const calcularperimetro=(a,b)=>{
    let perimetro=2*(a+b);
    return perimetro;
}

let ladoA=Number(prompt("ingrese el lado A del rectangulo: ")) ;
let ladoB=Number(prompt("ingrese el lado B del rectagulo: "));

alert(`el perimetro=${calcularperimetro(ladoA,ladoB)}`) 
