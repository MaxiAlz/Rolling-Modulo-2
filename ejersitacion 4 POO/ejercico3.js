/*
3-Escribe una clase que permita crear distintos objetos 
“rectángulos”, con las propiedades de alto y ancho, mas los métodos 
necesarios para modificar y mostrar sus propiedades, calcular el 
perímetro y el área */

class Rectangulo{
    constructor(alto,ancho){
        this.alto=alto,
        this.ancho=ancho
    }
    modificarAlto(altoNuevo){
        this.alto=altoNuevo;
        console.log(`Alto nuevo: ${this.alto}`)
    }
    modificarAncho(anchoNuevo){
        this.ancho=anchoNuevo;
        console.log(`Ancho nuevo: ${anchoNuevo}`)
    }
    calcularArea(alto,ancho){
      let area=(alto*ancho)/2;
      return area;
    }
}

let rec1= new Rectangulo(10,15);

// let alto=10,ancho=15;

// let area=(alto,ancho)=>{
//      let resultado=(alto*ancho)/2;
//      return resultado;
// }