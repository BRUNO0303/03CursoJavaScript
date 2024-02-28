/* Arreglos */
// Inician con 0 hasta n -1
//Primera forma de definir:
let numerosArreglos = [];
numerosArreglos[0] = 10;
numerosArreglos[4] = 50;
console.log(`Elemento 1 del arreglo = ${numerosArreglos[0]}`);

//Segunda forma de definir:
let numerosArreglos2 = [10,5,4,2,50,"Hola"]
console.log(`Elemento 6 del arreglo = ${numerosArreglos2[5]} `)

//Iterar elementos del arreglo
let array = [10,20,30,40,50];
for(let i = 0; i < array.length; i++ ){
    console.log(`El elemento ${i} de nuetro arreglo vale: ${array[i]}`);
}

/* Matrices */
let matriz1 = [[],[]];
let matriz2 = [[],[]];
//Modificar valores
matriz1[0][0] = 100;
matriz1[0][1] = 200;
matriz1[0][2] = 300;
matriz1[1][0] = 400;
matriz1[1][1] = 500;
matriz1[1][2] = 400;
console.log(`El elemento del renglo 2 fila 0 es: ${matriz1[1][0]}`);
//Modificar valores
matriz2 = [[100,200,300], [400,500,600]]
console.log(`El elemento del renglo 2 fila 0 es: ${matriz2[1][0]}`);
//Iterar elementos del arreglo
//No. Renglones
console.log(matriz2.length);
//No. Columnas segun el renglon 0
console.log(matriz2[0].length);
//No. Columnas segun el renglon 1
console.log(matriz2[1].length);
// For que recorre los renglones
for(let ren = 0; ren < matriz2.length; ren++){
    // For que recorre las columnas
    for(let col = 0; col < matriz2[ren].length; col++){
        console.log(matriz2[ren][col]);
    }
}