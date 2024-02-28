/* Mensaje por consola */
console.log("Hola Mundo");

/* 
Variables en JS 
tipo nombreVariable = valor
Tipos: let y var
Reglas: Letra minuscula al inicio o simbolo $
*/
let miVariable = 10;
miVariable = "Hola";
console.log(miVariable);

/*
Tipos de dato:
Number:  10, -40, 3.9
String:  "Hola", 'Adios', `Saludos`
Boolean: true / false
Null:    null
Undefined: Undefined
*/
miVariable = `Adios`

/* Typeof: Nos deja saber el tipo de dato */
console.log(typeof miVariable);

/*Hoisting: Podemos usar una variable y despues declararla (Solo con var)*/
/* `use strict` es una linea que quta el Hoisting */
x = 10;
var x;
console.log(x)

/*Constantes: Variable en mayuscula y no cambia el valor */
const CONSTANTE_MINUTOS = 60;
console.log(CONSTANTE_MINUTOS);
console.log(Math.PI);