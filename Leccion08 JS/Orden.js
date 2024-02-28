const Producto = require('./Producto');
//const Producto = require('./VentasTest');
const p1 = new Producto('Pantalon', 200);
const p2 = new Producto('Chamarra', 200);

class Orden{
    static contadorOrdenes  = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log(`No se pueden agregar mas productos`);
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = ``;
        for(let producto of this._productos){
            productosOrden += `\n`+ producto.toString() + ` `;
        }
        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()} Productos: ${productosOrden}`);
    }
}
module.exports = Producto;
let orden1 = new Orden();
orden1.agregarProducto(p1);
orden1.agregarProducto(p2);
orden1.mostrarOrden();

let p = new Promise()