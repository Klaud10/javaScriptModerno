"use strict";

// Object literal
const producto = {
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true,
}

// Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24"', 500);
console.log(producto2);

const producto3 = new Producto('Monitor de 32"', 700);
console.log(producto3);