// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20


// Output: El 20 es divisible por 2.

let numeroUsuario = parseInt(prompt('Ingresar un número'))

if (numeroUsuario % 2 === 0) {
    document.write(`el número ${numeroUsuario} es divisible x 2`)
} else if (numeroUsuario % 3 === 0) {
    document.write(`el número ${numeroUsuario} es divisible x 3`)
} else if (numeroUsuario % 5 === 0) {
    document.write(`el número ${numeroUsuario} es divisible x 5`)
} else if (numeroUsuario % 7 === 0) {
    document.write(`el número ${numeroUsuario} es divisible x 7`)
} else {
    document.write(`el número ${numeroUsuario} no es divisible por los números requeridos`)
}