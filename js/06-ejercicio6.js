/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 */

let num1 = parseInt(prompt('Ingresar un numero'))
let num2 = parseInt(prompt('Ingresar otro numero'))
if(num1 > num2){
    document.write(`El numero ${num1} es mayor al ${num2}`)
}else{
    document.write(`El numero ${num2} es mayor al numero ${num1}`)
}