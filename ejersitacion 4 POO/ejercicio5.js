/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
 pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
 */

class Persona{
    constructor(nombre, edad, DNI=100000000, sexo,peso,altura,nacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.DNI=DNI;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.nacimiento=nacimiento;
    }
    mostrarGeneracion(){
        if(this.nacimiento>=1994 && this.nacimiento<=2010){
            console.group(`generacion Z`)
            console.log(`poblacion 7800000 hab`)
            console.log(`Expansion del internet`)
            console.groupEnd(`Rasgo: Irrelevancia`)
        }if(this.nacimiento>=1981 && this.nacimiento<=1993){
            console.group(`generacion Y`)
            console.log(`poblacion 7.200.000 hab`)
            console.log(`inicio de la digitalizacion`)
            console.groupEnd(`Rasgo: Frustracion`)
        }if(this.nacimiento>=1969 && this.nacimiento<=1980){
            console.group(`generacion X`)
            console.log(`poblacion 9.300.000 hab`)
            console.log(`Crisis del 73 y trasicion española`)
            console.groupEnd(`Obsesion por el exito`)
        }else if(this.nacimiento<1969){
            console.log("Es un fantasma o mas viejo que el pan")
        }
    }
    mayordeEdad(){
        if(this.edad-2022>=18){
            console.log("El wachines Mayor de edad");
        }else{
            console.log("no es mayor de edad");
        }
    }
    mostrsarDatos(){
        console.group(`nombre: ${this.nombre}`)
        console.log(`edad: ${this.edad}`)
        console.log(`DNI: ${this.DNI}`)
        console.log(`sexo: ${this.sexo}`)
        console.log(`peso: ${this.peso}`)
        console.log(`altura: ${this.altura}`)
        console.log(`Fecha Nacimiento: ${this.nacimiento}`)
    }
    generarDNI(){
        this.DNI=parseInt((Math.random())*100000000);
    }
}

let juan=new Persona("juan",38,12345678,"H",85,1.80,1999);
let alberso=new Persona("Alberso Fernanez",55,12345678,"No Definido",71,1.65,1978)



