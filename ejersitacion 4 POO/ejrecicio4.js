/*
4- Escribe una clase Producto para crear objetos. Estos objetos, 
deben presentar las propiedades código, nombre y precio, además del
 método imprime datos, el cual escribe por pantalla los valores de sus
  propiedades.
  Posteriormente, cree tres instancias de este objeto y guárdalas en
   un array.
Por último, utilice el método imprime datos para mostrar por pantalla
 los valores de los tres objetos instanciados.
 */

class Producto{
    //propiedades
    constructor(codigo,nombre,precio){
        this.codigo=codigo,
        this.nombre=nombre,
        this.precio=precio;
    }
    //metodos
    Imprimirdatos(){
        
        }
    }
}

let producto1=new Producto(001,"leche",152);
let producto2=new Producto(002,"cafe",50);