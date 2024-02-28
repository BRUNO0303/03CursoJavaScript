class Producto{
    //Contador
    static contadorProductos = 0;
    //Constructur
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    //geters and setters
    get idProducto(){
            return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    //Metodo toString
    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
    
}
module.exports = Producto;