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
 console.log(persona3);