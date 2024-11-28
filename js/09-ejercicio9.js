// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:



// input: Hola mundo
// Output: oauo

let frase = prompt('Ingresar una cadena de texto')
let vocales = ""

for (let i = 0; i <= frase.length; i++) {

    const caracteres = frase.charAt(i).toLowerCase();

    if ('a,e,i,o,u'.includes(caracteres)) {
        vocales += caracteres
    }
}
console.log(`Las vocales de la palabra ${frase} son ${vocales}`);



// const frase = prompt("escriba una frase de 20 caracteres");
// let cadenaDeVocales="";

// if (frase.charAt(0) == 'a' || frase.charAt(0) == 'e' || frase.charAt(0) == 'i' || frase.charAt(0) == 'o' || frase.charAt(0) == 'u') {
//     cadenaDeVocales = frase.charAt(0);
// }
// if (frase.charAt(1) == 'a' || frase.charAt(1) == 'e' || frase.charAt(1) == 'i' || frase.charAt(1) == 'o' || frase.charAt(1) == 'u') {
//     cadenaDeVocales += frase.charAt(1);
// }
// if (frase.charAt(2) == 'a' || frase.charAt(2) == 'e' || frase.charAt(2) == 'i' || frase.charAt(2) == 'o' || frase.charAt(2) == 'u') {
//     cadenaDeVocales += frase.charAt(2);
// }
// if (frase.charAt(3) == 'a' || frase.charAt(3) == 'e' || frase.charAt(3) == 'i' || frase.charAt(3) == 'o' || frase.charAt(3) == 'u') {
//     cadenaDeVocales += frase.charAt(3);
// }
// if (frase.charAt(4) == 'a' || frase.charAt(4) == 'e' || frase.charAt(4) == 'i' || frase.charAt(4) == 'o' || frase.charAt(4) == 'u') {
//     cadenaDeVocales += frase.charAt(4);
// }
// if (frase.charAt(5) == 'a' || frase.charAt(5) == 'e' || frase.charAt(5) == 'i' || frase.charAt(5) == 'o' || frase.charAt(5) == 'u') {
//     cadenaDeVocales += frase.charAt(5);
// }
// if (frase.charAt(6) == 'a' || frase.charAt(6) == 'e' || frase.charAt(6) == 'i' || frase.charAt(6) == 'o' || frase.charAt(6) == 'u') {
//     cadenaDeVocales += frase.charAt(6);
// }
// if (frase.charAt(7) == 'a' || frase.charAt(7) == 'e' || frase.charAt(7) == 'i' || frase.charAt(7) == 'o' || frase.charAt(7) == 'u') {
//     cadenaDeVocales += frase.charAt(7);
// }
// if (frase.charAt(8) == 'a' || frase.charAt(8) == 'e' || frase.charAt(8) == 'i' || frase.charAt(8) == 'o' || frase.charAt(8) == 'u') {
//     cadenaDeVocales += frase.charAt(8);
// }
// if (frase.charAt(9) == 'a' || frase.charAt(9) == 'e' || frase.charAt(9) == 'i' || frase.charAt(9) == 'o' || frase.charAt(9) == 'u') {
//     cadenaDeVocales += frase.charAt(9);
// }
// if (frase.charAt(10) == 'a' || frase.charAt(10) == 'e' || frase.charAt(10) == 'i' || frase.charAt(10) == 'o' || frase.charAt(10) == 'u') {
//     cadenaDeVocales += frase.charAt(10);
// }
// if (frase.charAt(11) == 'a' || frase.charAt(11) == 'e' || frase.charAt(11) == 'i' || frase.charAt(11) == 'o' || frase.charAt(11) == 'u') {
//     cadenaDeVocales += frase.charAt(11);
// }
// if (frase.charAt(12) == 'a' || frase.charAt(12) == 'e' || frase.charAt(12) == 'i' || frase.charAt(12) == 'o' || frase.charAt(12) == 'u') {
//     cadenaDeVocales += frase.charAt(12);
// }
// if (frase.charAt(13) == 'a' || frase.charAt(13) == 'e' || frase.charAt(13) == 'i' || frase.charAt(13) == 'o' || frase.charAt(13) == 'u') {
//     cadenaDeVocales += frase.charAt(13);
// }
// if (frase.charAt(14) == 'a' || frase.charAt(14) == 'e' || frase.charAt(14) == 'i' || frase.charAt(14) == 'o' || frase.charAt(14) == 'u') {
//     cadenaDeVocales += frase.charAt(14);
// }
// if (frase.charAt(15) == 'a' || frase.charAt(15) == 'e' || frase.charAt(15) == 'i' || frase.charAt(15) == 'o' || frase.charAt(15) == 'u') {
//     cadenaDeVocales += frase.charAt(15);
// }
// if (frase.charAt(16) == 'a' || frase.charAt(16) == 'e' || frase.charAt(16) == 'i' || frase.charAt(16) == 'o' || frase.charAt(16) == 'u') {
//     cadenaDeVocales += frase.charAt(16);
// }
// if (frase.charAt(17) == 'a' || frase.charAt(17) == 'e' || frase.charAt(17) == 'i' || frase.charAt(17) == 'o' || frase.charAt(17) == 'u') {
//     cadenaDeVocales += frase.charAt(17);
// }
// if (frase.charAt(18) == 'a' || frase.charAt(18) == 'e' || frase.charAt(18) == 'i' || frase.charAt(18) == 'o' || frase.charAt(18) == 'u') {
//     cadenaDeVocales += frase.charAt(18);
// }
// if (frase.charAt(19) == 'a' || frase.charAt(19) == 'e' || frase.charAt(19) == 'i' || frase.charAt(19) == 'o' || frase.charAt(19) == 'u') {
//     cadenaDeVocales += frase.charAt(19);
// }

// document.write(cadenaDeVocales);

