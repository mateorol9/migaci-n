/*
Ejercicio:
Dada una cadena de texto, comprobar si es un palidromo o no.
Los palídromos son palabras que se leen igual aun estando invertidas.
Por ejemplo: ana, bob, otto, allivessevilla
-No tener en cuenta espacios o simbolos raros.

- Ejecuto una función:
palindromo('otto') // Devuelve true
palindromo('Pedro')// Devuelve false


*/

// Creo una función con un parámetro como texto:
// Separo el string en un array y lo invierto;
function palindromo(palabra) {
    let invertido = palabra.split("").reverse().join("")
    return palabra === invertido;
    
  }
  console.log(palindromo('otto'));
  