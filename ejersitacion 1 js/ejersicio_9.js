// Escribe un programa que pida una frase y escriba las vocales que aparecen

// tengo que almacenar la palabra en un string y despues comparar cada letra recorriendolo con un arreglo y comparando
// si es igual a una vical
/*tiene que ser un for para recorrer el arreglo y un if con varios or para comparar las letras*/

let palabra = [];

palabra = prompt("ingrese un palabra: ");

console.log("la palabra ingresada es: " + palabra);

for (let i = 0; i < palabra.length; i++) {
  if (
    palabra[i] == "a" ||
    palabra[i] == "e" ||
    palabra[i] == "i" ||
    palabra[i] == "o" ||
    palabra[i] == "u"
  ) {
    console.log("Usted ingreso la vocal: " + palabra[i]);
  }
}
