/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */

let num1 = parseInt(prompt('Ingresar un Numero'))
let num2 = parseInt(prompt('Ingresar otro Numero'))
console.log(`La suma de ${num1} + ${num2} = ${num1+num2}`)