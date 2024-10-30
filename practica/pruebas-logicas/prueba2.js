/*
Ejercicio:
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece la frase en ella.
La frase y la palabra deben ser parametros de una función.

Ejemplo:
coincidencias('Hola soy una palabra en una frase, PALABRA.','palabra') // Devuelve: 2
coincidencias('soy la frase'.'victor') // 0
*/

//Forma 1: 

function coincidencias(frase, palabra){
      
     let fraseMinuscula = frase.toLowerCase();

     let numeroCoincidencias = fraseMinuscula.match(new RegExp(palabra, 'gi'));

     return numeroCoincidencias ? numeroCoincidencias.length : 0;

} 

console.log(coincidencias('Hola soy una palabra en una frase, PALABRA.','PALABRA'));

