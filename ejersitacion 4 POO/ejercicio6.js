/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con 
el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro{
    constructor(isbn,titulo,autor,numeroPaginas){
        this.isbn=isbn
        this.titulo=titulo
        this.autor=autor
        this.numeroPaginas=numeroPaginas
    }
    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN: ${this.isbn} 
        creado por el autor"${this.autor}" tiene paginas ${this.numeroPaginas}`)
    }
}

let libroConMasPaginas=(libro1,libro2)=>{
    if(libro1.numeroPaginas>libro2.numeroPaginas){
        console.log(`el libro ${libro1.titulo} es el de mayor paginas`)
    }if(libro1.numeroPaginas==libro2.numeroPaginas){
        console.log("Tienen la misma cantidad de paginas")
    }if(libro1.numeroPaginas<libro2.numeroPaginas){
        console.log(`el libro ${libro2.titulo} tiene mas paginas`)
    }
}

let los7habitos=new Libro("as256","Los 7 Habitos", "Pedro Castro", 1125);
let losSecretosDeLaMente=new Libro("esd1250","Los secretos de la mente","juan jose",256);
