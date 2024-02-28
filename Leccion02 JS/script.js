/*
Operadores en javaScript 
Suma:            +
Resta:           -
Multiplicacion:  *
Division:        /
Modulo:          %
Potencia:        **
Incremento:      ++
Decremento:      --
*/

let x = 10, y = 2, z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;
z = x % y;
z = x ** y;
x++;
y--;

/*Operador Compuesto: Suma un valor establecido*/
x += 5; // Equivalente a x = x + 5
console.log(x);

/*
Operador Relacionales (Comparacion)
==  Igual a 
=== Igual a tipo y dato
=!  Distinto a
!== Distinto a tipo y dato
>=  Mayor o igual que
<=  Menor o igual que
>   Mayor que
<   Menor que
*/

x = 1, y = "1";
console.log(x == y);
console.log(x === y);

/* Interpolacion de String */
console.log(`La comparacion estricta de x con y es: ${y === x}`);

/*
Operadores Logicos
AND: && (Se debe cumplir las dos condiciones)
OR:  || (Se debe cumplir una de las dos condiciones)
NOT: !  (Invierte la condicion)
*/

let valorMinimo = 0, valorMaximo = 10, dato = 11, dentroRango;
dentroRango = dato >= valorMinimo && dato <= valorMaximo;
console.log(`El dato esta dentro del rango: ${dentroRango}`);