//clases: ES6 para definir una clase usamos la palabra clave Class
//sirve para crear objetos mas facilmente


/*ahora los obejetos siempre se van a crear mediante una clse*/
class Moto {
    //aca colocamos las propiedades a crear
    constructor(marca,modelo, color){
        this.marca=marca;
        this.modelo=marca;
        this.color=color;
    }
    //los metodos van fuera del contructor
    encender(){
        alert("la moto esrtta encendida");
    }
    apagar(){
        alert("La moto esta apagada");
    }
    cambiarColor(nuevoColor){
        this.color=nuevoColor
    }
}

const moto =new Moto("ktm","duke 200","negro");
//cambiar propiedad desde afuera del objeto
moto.color="rojo"
console.log(moto);

