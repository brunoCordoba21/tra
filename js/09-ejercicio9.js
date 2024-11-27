
let frase = prompt('Ingresar una cadena de texto')
let vocales = ""                                   
for(let i = 0 ; i <= frase.length ; i++ ){

    const caracteres = frase.charAt(i).toLowerCase ();

    if('a,e,i,o,u' .includes(caracteres)){

   vocales += caracteres
    }
}
console.log(`Las vocales de la palabra ${frase} son ${vocales}`);