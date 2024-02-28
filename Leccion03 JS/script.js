/*Sentencia if*/
let miNumero = -4;
// Revisar si el numero es positivo
if(miNumero > 0){
    console.log(`Valor positivo ${miNumero}`);
}else{
    console.log(`Valor cero o negativo: ${miNumero}`);
}

/*Sentencia while*/
let band = true, contador= 0, repeticiones = 5;
while(band){
    console.log(contador);
    contador++;
    if(contador > repeticiones){
        band = false;
    }
}

/*Sentencia do while*/
let password = "Hola", pass = "Hola";
do{
    console.log("Son iguales")
}while(password != pass);

/*Sentencia for*/
for(let i = 1; i<=5; i = i + 3){
    console.log(`contador ${i}`);
}

let acumulador = 0;
for(let i = 1; i <= 5; i = i + 1 ){
    acumulador += i;
    console.log(acumulador);
}