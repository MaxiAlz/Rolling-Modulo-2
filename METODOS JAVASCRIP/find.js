let arreglodeObj=[
    {nombre:"juan",codigo:0},
    {nombre:"mario",codigo:1},
    {nombre:"pedro",codigo:2},
    {nombre:"jose",codigo:2},
    
];

//el metodo fin va a ejecutar una funcion por cada indice de un array
//el metodo fin es un metodo que funciona con un buleano (true o false)
//find se va a ejecutar hasta que el parentesis de true (o haga match)
//si hace match find devuelve el valor del elemento(puede ser un obejto) caso contratio devuelce undefined

//creo una variable donde se va a almacenar la informacion si los aprentesis del fin dan true
//si los aprentesis dan true, me va almacenar el valor en la variable

// creo una funcion "buscar en el arreglo (find funciona solo con un array"
//la funcion "buscar objeto" recibe como parametro la palabra que quiero buscar
//esa palabra se va a comparar dentro del find

//defino una variable match que es donde se va almacenar el OBJETO si los parentesis de find dan true
//parentesis del find /((nombre de lo que va a recibir el find, esto representa cada interaccion que va a hacer el find))
// el primer parentesis hace referencia a cada vuelta, yo le puse de nombre Objeto, por que va a recibir un objeto por cada interaccion

//en la flecha, hay que hacer alguna comparacion para que le fin devuelva true o false
//en mi caso compare la palabra que ingrese como parametro de la funcion,con cada objeto que contiene el array(por eso lo llame objeto, nombre)
// primera vuelta palabra==""juan" segunda vuelta palara=="mario"....

//el retur tiene que ir si o si dentro de un find y ese retur tiene que retornar el true o false

//fuera del parentesis del find puedo acceder a lo que tiene la variable match
//en este caso la vraiable match almacena un objeto entero cuando el find dio true
// por eso si quiero acceder al nombre debo hacerlo con match.nombre
function buscarEnarreglo(palabra){
    const match= arreglodeObj.find((objeto)=>{
        console.log(palabra==objeto.nombre)
        return palabra==objeto.nombre;
    });
    return match.nombre;
}



// function callback(palabra){
//     return palabra=="juan";
//  }


class Contactoss{
    constructor(nombre,telefono){
        this.nombre=nombre;
        this.telefono=telefono;
    }
   
}

let agenda=[];

agenda.push(new Contactoss("juancho",123654));
agenda.push(new Contactoss("albert",62313));
agenda.push(new Contactoss("pedrin",32184));

const buscarenagenda=(palabra)=>{
    let match=agenda.find((objetoenAgenda)=>{
        return objetoenAgenda.nombre==palabra;
    })
    if(match==undefined){
        console.log(`no se encontro a ${palabra}`)
    }else{
        return match;
    }
}







