console.log("App")
function sumar (){
    let forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoA"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = `La operacion no incluye numeros`
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}