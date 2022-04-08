//objetos, funcion constructora
//repasod e objetos

// let auto = {
//     color: "verde",
//     modelo: "bravo",
//     marca:"fiat",
//     potencia: "1800bjp"
// }

// console-console.log(auto);

// let products = [
//     { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//     { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//     { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
//   ];
  
//   for (var i=0; i < products.length; i++) {
//     var product = products[i];
//     console.log(product.name);
//     console.log("  Id: " + product.id);
//     console.log("  Precio: " + product.price);
//     console.log("  Categorías: " + product.categories.join(", "));
//   }
  

//   products.map((product)=>{
//     console.log(product.name);
//     console.log("  Id: " + product.id);
//     console.log("  Precio: " + product.price);
//     console.log("  Categorías: " + product.categories.join(", "));
  
//  }) 

 //funcion contructora

 function personas(name,lastname,age){
     this.nombre = name;
     this.apellido=lastname;
     this.edad=age;
     this.comer = (x="con un amigo")=>{
         alert(`soy ${this.nombre} estoy comiendo`)
     }

 }

 //obejeto constructor
 //permite crear objetos vacios genericos, luego se le puede agregar 
 //las propiedades que querramos

 const persona3= new Object();
 persona3.nombre="masi"
 persona3.correr=
 console.log(persona3);

// objet.create nos se suele usar practicamente

const auto2=Object.create(auto);
console.log(auto2)

/*comparar objetos: si comparamos dos objetos siempre va a dar false*/
let persona1={nombre: "juan"};
let persona2={nombre: "juan"};

persona1==persona2 //esto retorna False, por mas que tengan las mismas propiedades
/*por que lo que se compara es espacio en memoria, no ocupan la misma direccion de 
memoria cada objeto*/

/*pero si podemos comparar las propiedades de los objetos y si son
iguales vana a retortar un true*/



