/*Funciones
Sintaxis:
    function nombreFuncion(<parametros>){
        return valorRetorno;
    }
*/

//Procedimiento
function imprimir(parametro){
    console.log(parametro);
}
//Funcion
function sumar(a,b){
    let resultado = a + b;
    return resultado;
}
imprimir(100);
imprimir("Hola");
imprimir(sumar(10,20));
//Tipos de funciones: Definidas por usuario y Definidas pro JS (Built-in)

//Funcion recursiva: Llamar a una funcion dentro de la misma funcion
function miFuncionRecursiva(n){
    console.log(n);
    if(n == 1){
        return console.log(n);
    }
    else{
        miFuncionRecursiva(n-1);
    }
}
miFuncionRecursiva(10);

//Funciones incorporadas en JS
let cadena1 = "Hola";
console.log(cadena1.length); //Regresa la dimension de la cadena

//Recorrer cadena
for(let i = 0; i < cadena1.length; i++){
    console.log(cadena1[i]);
}

//Subcadenas
let cadena2 = "Hola Mundo";
let cadena3 = cadena2.substring(5,10); // imprime "Mundo"
console.log(cadena3);

//Concatenacion de cadenas
cadena2 = "Hola";
cadena3 = "Mundo"
let cadena4 = cadena2 + ' ' + cadena3;
console.log(cadena4);
cadena4 = `${cadena2} ${cadena3}`;
console.log(cadena4);

//Casteo string a numero
cadena4 = "10";
cadena4 = parseInt(cadena4);
let suma = cadena4 + 30;
console.log(suma);

//Casteo numero a string
let num1 = 10;
let cadnum1 = num1.toString() + "10";
console.log(cadnum1);

//Valor absoluto
let num2 = -10;
let vAbs = Math.abs(num2);
console.log(vAbs);