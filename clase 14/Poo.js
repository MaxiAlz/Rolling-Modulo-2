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
// moto.color="rojo"
console.log(moto);

//setter y getter
//permiten acceder a valores o propiedades. 

//son atajos sintacticos pra obeter o establecer valores de propiedades.

//NO SE SUELEN USAR MUCHO

class Rectangulo{
    constructor(height=0,width=0){
        this.height= height;
        this.width=width;
    }
    set changeHeight(value){
        this.height=value;
    }
    
}

