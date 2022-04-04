//objetos

//crear objetos con notacion literal
let auto={
    color: ["rojo","negro"],
    modelo:"argo",
    potencia:"120bhp",
    marca: "fiat"
}

//crear objetos con FUNCION CONTRUSTORA
function persona(name,lastname,age,height){
    this.nombre = name;
    this.apellido=lastname;
    this.propiedad=age;
    this.altura=height;
}

//datos guardados:
const nombre1="jose";
const apellido1="lopez";
const edad1=23;
const altura=1.8;

let jose=new persona()

console.log
//imprimir el arreglo de la propiedad color
console.log(auto.color[1]);

//agregar propiedades
auto.numeroPuertas = 5;

//modificar propiedades
auto.modelo="cronos"

auto.color[0]="amarillo"

//eliminar propiedades
delete auto.numeroPuertas;

//-----------ARRAY DE OBJETOS---------

let personas=[
    {
        name:"milton",
        lastName:"Peña",
        peso: 75,
        altura:1.7,
    },

    {
        name:"milton",
        lastName:"Peña",
        peso: 75,
        altura:1.7,
    }
]

//recorrer  los items del array

personas.map(propiedad=> {
    console.group(propiedad.name);
    console.log(`apellido: ${propiedad.lastName}`);
    console.log(`peso: ${propiedad.peso}`);
    console.groupEnd();
    
})

// recorrer un objeto de mejor manera
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
  