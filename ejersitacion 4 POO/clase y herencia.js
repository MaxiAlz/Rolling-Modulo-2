/*creando un objeto a travez de una clase:
vamos a crear un objeto con una clase y luego armar nuevos objetos con las
clases que ya estan creadas. Esto es para ahorrar mucho codigo a la
hora de programar

en otras palabras, vamos a crear un objeto con una clase, y luego 
vamos a crear un nuevo objeto que va a heredar las propiedaes y metodos
del primer
*/



///creando obejeto con la clase

class Persona{
    constructor(nombre,edad){
        //declarando propiedades
        this.nombre=nombre,
        this.edad=edad
    }
    //metodos del objeto
    hablar(){
        console.log(`${this.nombre} esta hablando`)
    }
}

let juan=new Persona("juan",35);
let pedrito=new Persona ("Pedrito",25);

//creando un nuevo ojeto que va a heredar las pripiedades y metodos de personas

//aca estamos creando un nuevo objeto que es profesor, la palabra extens
//hace referencia a que va a usar las propiedades y metodos de Persons
// a su vez le vamos a agregar otras propiedades y metodos

class Profesor extends Persona{
    constructor(nombre,edad,tipo){
        //super hace referencia a que profesor es una superclase
        //y que voy a estar usando las propiedades de otra
        //y le agregamos los parametros que va a usasr
        super (nombre,edad)
        this.tipo=tipo;
    }
    TipodeContratacion(){
        return `tipo de contratacion: ${this.tipo}`
    }
}

let pablo=new Profesor("pablo",35,"Full Time");
