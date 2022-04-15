
//getter y setter metodos para setear informacion
//gener obtener valores
//setter setear valores

class Rectangulo{
    constructor(alto=0,ancho=0){
        this.alto=alto;
        this.ancho=ancho;
    }
    set setearAlto(x){
        this.alto=x;
    }
    set setearAncho(y){
        this.alto=y;
    }
    get obtenerArea(){
        return this.alto*this.ancho;
    }
}

const rectangulo1=new Rectangulo();
rectangulo1.setearAlto=5;
rectangulo1.ancho=15;

//DOM - el documento que esta dentro de la pagina web 
//  BOM es todo el aplicativo web, las opciones de navegador,propiedades etc

//bom todos los objetos que estan fuera del documento cargado,
console.log(window.location)
window.location
window.navigator


//eventos e tiempo
// const bucle = setInterval(() => {
//     console.log("Hola Wey")
// }, 1000);

// const detenerBucle=()=>{
//     clearInterval(bucle);
//     alert("se ah detenido el proceso")
// }

// setTimeout(() => {
//     alert("pasaron 5 seg wey")
// }, 5000);

///////
const elemento=document.getElementById("titulo")
console.log(elemento)

//crear elemento nuevo
const crearElemento=document.createElement("h3")
console.log(crearElemento);
//inyectar el elemento creado 
crearElemento.innerHTML="Hola soy el h3 nuevo creado desde js"
console.log(crearElemento)

//3)agregarlo el elemento nuevo al documento en pantalla
document.body.appendChild(crearElemento)
