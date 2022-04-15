//molde para crear contactos
class Contacto{
    constructor(nombre,telefono){
        this.nombre=nombre
        this.telefono=telefono
    }
}
//molde para crear agendas
class AgendaDeContactos{
    constructor(tamañoAgenda=10){
        this.tamañoAgenda=tamañoAgenda
        this.arrayContactos=[];
    }

    crearContacto(nombre,telefono){
        if(this.arrayContactos.length<this.tamañoAgenda){
            this.arrayContactos.push(new Contacto(nombre,telefono));
        }
        else{this.agendaLlena()}
    }
    listarContactos(){
        this.arrayContactos.map(arrayRecorrer=>console.log(`Nombre:${arrayRecorrer.nombre}; Telefono: ${arrayRecorrer.telefono}`))
    }
    agendaLlena(){
            console.log("La agenda esta llena");
            alert("¡La agenda esta llena!")
    }
    buscarContacto(nombreDelcontacto){
        const match=this.arrayContactos.find((objeto)=>{
            objeto.nombre==nombreDelcontacto
        return objeto.nombre==nombreDelcontacto;
    });
    if(match==undefined){
        console.log(`no se encontro a ${nombreDelcontacto}`)
    }else{
        return match.telefono;
    }
    // return console.log(`Se encontro a: ${match.nombre} Telefono: ${match.telefono}`)
    }
    existeContacto(nombreParaComparar){
        const match= this.arrayContactos.find((objeto)=>{
            return objeto.nombre==nombreParaComparar
        })
    if(match==undefined){
        return console.log(`el contacto ${nombreParaComparar} no existe en la agenda`)
    }else{
        return console.log(`El contacto ${nombreParaComparar} Existe en la agenda`)
    }
    }
    //consultar por que choto no me toma la pisicion que pongo por tantalla
    eliminarContactoForma1(){
        this.listarContactos();
        let posicion=prompt("ingrese posicion a borrar");
        this.arrayContactos.splice(posicion,1);
        return console.log(`se elimino el contacto "${this.arrayContactos[posicion].nombre}"`)
    }
    eliminarContactoBuscando(NombreDelContactoABorrar){
        //validar si existe el constacto ingresado
        let i=0;
        const match=this.arrayContactos.find((arrObjetos)=>{
            i++;
            console.log(i)
            return NombreDelContactoABorrar==arrObjetos.nombre
        })
        if(match==undefined){
            console.log(`el contacto "${NombreDelContactoABorrar}" no existe en la agenda`)
        }else{
            this.arrayContactos.splice(i-1,1)
            console.log(`se borro el contacto: ${match.nombre}`)
        }
    }
    huecosLibres(){
        const espacios=(this.tamañoAgenda-this.arrayContactos.length)
        if(espacios>0){
            console.log(`Puedes agregar ${espacios} contacto mas`)
        }else{
            console.log("No se puede agregar mas Contactos");
            this.agendaLlena();
        }
    }
}

// let tamaño=prompt("ingrese el tamaño de la agenda a crear: ");
let agenda1=new AgendaDeContactos(5);
agenda1.crearContacto("maxi",3834665588);
agenda1.crearContacto("pedro",383465896);
agenda1.crearContacto("mario",3834336652);
agenda1.crearContacto("luis",3834665588);
// let maxiContacto=new Contacto("maxi",123654);


// let arreglodeObj=[
//     {nombre:"juan",codigo:0},
//     {nombre:"mario",codigo:1},
//     {nombre:"pedro",codigo:2},
//     {nombre:"jose",codigo:2},
//     {nombre:"pedro",codigo:2}
// ];

// const buscarenarreglo1=(palabra)=>{
//     //el find tiene que retornar un true o false. Que es la considion que esta entre parentesis
//     //cuando eso de true me va a guardar el objeto entero en la variable resultadoBusqueda
//     // y siempre tiene que tener un return
//     let resultadoBusqueda = arreglodeObjetos.find((interaccion)=> {
//         console.log(interaccion.nombre === palabra );
//         return interaccion.nombre === palabra
//     });
//     return resultadoBusqueda
// }