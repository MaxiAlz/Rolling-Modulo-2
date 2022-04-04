/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la 
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
 lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array 
 el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

 
 //for que va cargando la sumatoria en el arreglo
 let sumatoria=[];
    
 for (let i = 0; i < 50; i++) {
     
     let dado1= Math.random();
     let dado2= Math.random();
     dado1= parseInt(dado1*=6);
     dado2= parseInt(dado2*=6);
    
    //  console.log(dado1, dado2 )

     sumatoria.push(dado1+dado2);
     document.write(`sumatoria${i}= ${dado1+dado2} <br/>`)
 }
 