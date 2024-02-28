class Persona{

    static email1 = 'default';
    email2 = 'dafult';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this._nombre + ' ' + this._apellido;
    }
    static saludar(){
        console.log("Hola");
    }
}

let per1 = new Persona("Bruno", "Perez");

for(elementos in per1){
    console.log(per1[elementos]);
}

per1.nombre = "Brus";
console.log(per1.nombre);

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let em1 = new Empleado("Bruno", "Hdz", "Ico");
console.log(em1.nombreCompleto());
console.log(em1);
console.log(em1.toString())
Persona.saludar();
console.log(per1.email2);