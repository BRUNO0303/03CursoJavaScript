let personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
    new Persona('Karla', 'Lara'),
]

function mostrarPersonas(){
    let texto = '';
    for(let i of personas){
        console.log(i);
        texto += `<li> ${i.nombre} ${i.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    let forma = document.forms["forma"];
    let nombre = forma["nombre"];
    let apellido = forma["apellido"];
    if(nombre.value !== '' && apellido.value !== ''){
        let persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("No hay personas")
    }
}

function quitarPersona(){
    personas.pop();
    mostrarPersonas();
}