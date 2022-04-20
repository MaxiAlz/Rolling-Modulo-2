class Persona{
    constructor(name,edad,dni,sexo,fechafechaNacimiento,peso,altura){
        this.name=name;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.fechafechaNacimiento=fechafechaNacimiento;
        this.peso=peso;
        this.altura=altura;
    }
    mostrarGeneracion(){
        if(this.fechaNacimiento>=1994 && this.fechaNacimiento<=2010){
            console.group(`generacion Z`)
            console.log(`poblacion 7800000 hab`)
            console.log(`Expansion del internet`)
            console.groupEnd(`Rasgo: Irrelevancia`)
        }if(this.fechaNacimiento>=1981 && this.fechaNacimiento<=1993){
            console.group(`generacion Y`)
            console.log(`poblacion 7.200.000 hab`)
            console.log(`inicio de la digitalizacion`)
            console.groupEnd(`Rasgo: Frustracion`)
        }if(this.fechaNacimiento>=1969 && this.fechaNacimiento<=1980){
            console.group(`generacion X`)
            console.log(`poblacion 9.300.000 hab`)
            console.log(`Crisis del 73 y trasicion española`)
            console.groupEnd(`Obsesion por el exito`)
        }else if(this.fechaNacimiento<1969){
            console.log("Es un fantasma o mas viejo que el pan")
        }
    }    
    esMayorDeEdad(){
        if(this.edad>=18){
            alert(`${this.name} Es MAyor de edad`)
        }else{
            alert(`${this.name} Es Menor de edad`)
        }
    }
    mostrarDatos(){
        alert(`Datos de ela persona \n 
        Nombre: ${this.name}. \n
        Edad: ${this.edad}\n
        dni: ${this.dni}\n
        Sexo: ${this.sexo}\n
        Nacimiento: ${this.fechaNacimiento}\n
        Peso: ${this.peso}\n
        Altura: ${this.altura}\n `)
    }  
    generarDni(){
        this.dni=Math.round(Math.random())*1000000000;
        alert(`tu nuevo DNI Aleatorio es ${this.dni}`)
    } 
}

let persona=null;

const crearPersona=()=>{
    let name=document.getElementById("name").value,
    age=document.getElementById("age").value,
    sex=document.getElementById("sex").value,
    dni=document.getElementById("dni").value,
    weight=document.getElementById("weight").value,
    height=document.getElementById("height").value,
    dateOfBirth=document.getElementById("dateOfBirth").value,
    persona=new Persona(name,age,sex,dni,dateOfBirth,height,weight);
    console.log(persona);
}

//que me lea los metodos
const aplicarMetodo=(nombreMetodo)=>{
    persona[nombreMetodo]();
}
