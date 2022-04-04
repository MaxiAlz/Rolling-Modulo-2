//ejersicio carrito de compras

//el usuario debe ingresar un numero para elegir un producto y 
//agregarlo a un carrito de compras

/*necesito ver la lista de compras cargadas */

/*tener la opcion de agregar o quitar productos del carrito */

/*hacer todo mediante funciones*/


//productos:

const frutas = ["frutilla","pera","durazno"];
let listaDeProductosSeleccionados=[];

//funciones

const buscarproducto=(texto="")=>{
    const encontro=listaDeProductosSeleccionados.includes(texto.toLowerCase())
    
};
const mostrarproductos=()=>{
    
}

//fin de las funciones
do {
    const productoSeleccionado=prompt("seleccione un producto= 0=frutilla 1=pera 2=durazno");
    listaDeProductosSeleccionados.push(frutas[productoSeleccionado])
    
} while (confirm("aceptar para agregar otro producto"));

const buscarProductoconfirm=confirm("buscar algun producto?");

if (buscarProductoconfirm) {
    const textoparabuscar=prompt("ingrese una paralabra para buscar");
    buscarproducto(textoparabuscar);
}



