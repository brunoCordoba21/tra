/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
 */

let numero1 = parseInt(prompt('Ingresar número 1'))
let numero2 = parseInt(prompt('Ingresar número 2'))
let numero3 = parseInt(prompt('Ingresar número 3'))

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`El mayor de los números ${numero1}, ${numero2} y ${numero3} es el primero que se ingreso que equivale a ${numero1}  `)

} else if (numero2 > numero1 && numero2 > numero3) {
    document.write(`El mayor de los números  ${numero1}, ${numero2} y ${numero3} es el segundo que se ingreso que equivale a ${numero2}`)

} else {
    document.write(`El mayor de los números ${numero1}, ${numero2} y ${numero3} es el tercero que se ingreso que equivale a ${numero3}`)
}
