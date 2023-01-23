function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    return arr.sort(function(a, b) {return a.length - b.length  } )
   
  }
//for (let j=0;j<10;j++)


  console.log(sortArray(["You", "are", "beautiful", "looking"]))
//["You", "are", "beautiful", "looking"]
