/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

//los obejos que vaya creando se deben guardar en un arreglo

// let agendaDeContactos=[];

//molde para crear el contacto
class Contacto{
    constructor(nombre,telefono){
        this.nombre=nombre
        this.telefono=telefono
    }
}

//objeto de la agenda que tiene como propiedad un array
class AgendaDeContactos{
    constructor(tamañoAgenda=10){
        this.arraydeContactos=[];
        this.tamañoAgenda=tamañoAgenda;
    }
    aniadirContacto(cantacto){
        if(this.arraydeContactos.length<this.tamañoAgenda){
            this.arraydeContactos.push(cantacto);
        }else{
            alert("Agenda llena, no se puede agregar contacto")
        }
      }
      listarContactos(){
          this.arraydeContactos.map((contacto)=>{
            console.log(`contacto: ${contacto.nombre} Telefono:${contacto.telefono}`)
         });
      }
      buscarContacto(nombre){
          //el fin debe retortar si osi para funcionar un true o false
          let contactoEncontrado=this.arraydeContactos.find((contacto)=>{
            let comparacion=(nombre==contacto.nombre);
            return comparacion;
          })
          if(contactoEncontrado){
              console.log(contactoEncontrado.telefono);
          }else{
              console.log("no se encontro");
          }
          return 123;
          }
}

//cuando la row function tiene una sola linea no hace falta el return
// let buscar=contacto=>nombre==contacto.nombre;
  

//  let contacto=(contacto)=>{
//     console.log(`contacto: ${contacto.nombre} Telefono:${contacto.telefono}`)
//  }



let agenda1=new AgendaDeContactos(2);
let maxi=new Contacto("maxi",123654);//esto proviene del molde de Contacto
let pedro=new Contacto("pedro",123654);

agenda1.aniadirContacto(maxi);
agenda1.aniadirContacto(pedro);

// agendaDeContactos.push=new Contacto(prompt("ingrese Nombre",prompt("ingrese Telefoo: ")))
//generar un condicion de que si el agendaDeContactos.lenght>10 no se puede agregar mas contactos

console.log("anda")
