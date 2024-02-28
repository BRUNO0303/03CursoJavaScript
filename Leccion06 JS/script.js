/*Objetos*/
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);

/*Metodo dentro de objeto */
let persona2 = {
    nombre3: 'Juan',
    apellido2: 'Perez',
    edad2: 25,
    nombreCompleto: function(){
        let nombreCompleto1 = this.nombre3 + this.apellido2;
        console.log(nombreCompleto1);
    }
}
persona2.nombreCompleto();

/* Crear un objeto con new*/
let persona3 = new Object();
persona3.nombre = "Carlos";
persona3.app = "H";
persona3.tel = '555255358'

/*Acceder a propiedades como arreglo */
console.log(persona['nombre']);

/*for in para recorrer las propiedades */
for(prop in persona){
    //Imprime el nombre de los atributos
    console.log(prop);
    //Imprime el valor del atributo
    console.log(persona [prop]);
}

/*Agregar o eliminar atributos */
persona.tel = '5519256725'
console.log(persona);
delete persona.tel;
console.log(persona);

/*Imprimir un objeto*/
//Concatenar cada valor
console.log(persona.nombre + ', ' + persona.apellido);
//For in
for (nomProp in persona){
    console.log(persona[nomProp]);
}
//Sintaxis object
let personaArray = Object.values(persona);
console.log(personaArray);
//Cadena JSON
let personaString = JSON.stringify(persona);
console.log(personaString);
//Metodo Get y Set
let persona4 ={
    nombre: '',
    app: '',
    email: '',
    edad: null,
    idioma: 'as',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + this.app;
    },
    set lang (lang){
        this.idioma = lang.toUpperCase();
    }
}
console.log(persona4.lang);
persona4.lang = 'en';
console.log(persona4.idioma);
/*Constructor */
function Persona(nombre, app, email){
    this.nombre = nombre;
    this.app = app;
    this.email = email;
    this.nombreCompleto = function(){
        let nombreCompletoPersona = this.nombre + this.app;
        console.log(nombreCompletoPersona);
    }
    this.nombreMayusucula = function(){
        return this.nombre.toUpperCase();
    }
}
let padre1 = new Persona('Juan', 'Perez', 's@.com');
console.log(padre1);
padre1.nombreCompleto();
console.log(padre1.nombreMayusucula());

/*Agregar atrobitp */
Persona.prototype.tel = '';
let padre2 = new Persona('Juan', 'Perez', 's@.com');
console.log(padre2);
