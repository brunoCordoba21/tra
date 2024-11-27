/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.



*/
let numeroDivisible = parseInt(prompt('Ingresar número a Dividir'))
if (numeroDivisible % 2 === 0) {
    document.write(`El número ${numeroDivisible} es par y divisible por 2 `)
}else{
    document.write(`El número ${numeroDivisible} no es par y no es divisible por 2`)
}