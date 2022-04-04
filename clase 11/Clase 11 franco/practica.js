//Productos
const frutas = ["frutilla", "pera", "durazno"];
let listaDeProductosSeleccionados = [];

//Funciones
const buscarProducto = (texto) => {
  // Debe retornar "Encontramos el producto en tu lista" o "No encontramos el producto en tu lista, por favor revisa si esta bien escrito"
  // const encontro = listaDeProductosSeleccionados[0].includes(texto.toLowerCase()); // OPCIONAL Para buscar "fru" en lugar de la palabra completa
  const encontro = listaDeProductosSeleccionados.includes(texto.toLowerCase());

  return encontro;
};
// const eliminarProducto = () => {}; //Debe retornar "Se ha eliminado el producto" o "No encontramos el producto a eliminar"
const mostrarTodosProductosSeleccionados = () => {
  let mensaje = "";
  listaDeProductosSeleccionados.forEach((producto) => {
    // mensaje = mensaje + " " + producto;
    mensaje = `${mensaje} ${producto}`;
  });
  Swal.fire("Los productos seleccionados son: " + mensaje);
};
//Fin de funciones

do {
  const productoSeleccionado = prompt(
    "Seleccione un producto: 0=Frutilla, 1=Pera, 2=Durazno"
  );

  listaDeProductosSeleccionados.push(frutas[productoSeleccionado]);
} while (confirm("Quiere agregar otro producto?"));

mostrarTodosProductosSeleccionados();
// Preguntar en un ciclo si desea buscar un producto de su seleccion
const buscarProductoConfirm = confirm(
  "Quiere buscar algun producto seleccionado?"
);

if (buscarProductoConfirm) {
  const textoParaBuscar = prompt("Ingrese una palabra para buscar");
  const resultado = buscarProducto(textoParaBuscar);
  console.log(resultado);
}
// Fin de buscar producto
