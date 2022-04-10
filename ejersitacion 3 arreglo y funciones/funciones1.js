/*1- Escribir el código de una función a la que se pasa como
 parámetro un número entero y devuelve como resultado una cadena
  de texto que indica si el número es par o impar. Mostrar por pantalla 
  el resultado devuelto por la función. */

  const convertirnumerotexto=(numero)=>{
      if(numero%2==0){
          alert("el numero es par!")
        }else{
            alert("el numero es impar!")
        }     
    }

    let numero=prompt("ingrese un numero: ")
    convertirnumerotexto(numero);