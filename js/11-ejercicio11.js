// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

const num = parseInt(prompt("Ingrese un número:"));

if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 2, 3, 5 y 7.`);
} else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
  console.log(`El número ${num} es divisible por 2, 3 y 5.`);
} else if (num % 2 === 0 && num % 3 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 2, 3 y 7.`);
} else if (num % 2 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 2, 5 y 7.`);
} else if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 3, 5 y 7.`);
} else if (num % 2 === 0 && num % 3 === 0) {
  console.log(`El número ${num} es divisible por 2 y 3.`);
} else if (num % 2 === 0 && num % 5 === 0) {
  console.log(`El número ${num} es divisible por 2 y 5.`);
} else if (num % 2 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 2 y 7.`);
} else if (num % 3 === 0 && num % 5 === 0) {
  console.log(`El número ${num} es divisible por 3 y 5.`);
} else if (num % 3 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 3 y 7.`);
} else if (num % 5 === 0 && num % 7 === 0) {
  console.log(`El número ${num} es divisible por 5 y 7.`);
} else if (num % 2 === 0) {
  console.log(`El número ${num} es divisible por 2.`);
} else if (num % 3 === 0) {
  console.log(`El número ${num} es divisible por 3.`);
} else if (num % 5 === 0) {
  console.log(`El número ${num} es divisible por 5.`);
} else if (num % 7 === 0) {
  console.log(`El número ${num} es divisible por 7.`);
} else {
  console.log(`El número ${num} no es divisible por 2, 3, 5 o 7.`);
}
    
