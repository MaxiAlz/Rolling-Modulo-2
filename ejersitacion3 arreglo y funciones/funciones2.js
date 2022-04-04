
/*2- Definir una función que muestre información sobre una
 cadena de texto que se le pasa como argumento. A partir de la cadena 
 que se le pasa, la función determina si esa cadena está formada sólo
  por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

  const funcion=(texto)=>{
    //corroborar si es todo minuscula
      if(texto.toLowerCase()==texto){
          alert("cadena formada solo minusculas")
          //sino corroborar si es mayuscula
      }else if (texto.toUpperCase()==texto) {
          alert(("Formada solo por Mayusculas"))
      }
      
      let Mayusculas=0;
      let minusculas=0;
      //corrobora si hay mayusculas y minusculas
      for (let i = 0; i < texto.length; i++) {
          if (texto.charAt(i)== texto.charAt(i).toUpperCase() ) {
              Mayusculas++;
          }else if(texto.charAt(i)== texto.charAt(i).toLowerCase()){
              minusculas++;
          }   
      }
      if (Mayusculas>1 && minusculas>1) {
          alert("contiene Mayusculas y Minusculas");
      }
  }

funcion(prompt("ingrese un texto, para saber sus caracteres"));