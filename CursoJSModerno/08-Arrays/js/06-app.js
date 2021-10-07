
const carrito = [];

//___Definir productos___
const producto = {
    nombre: 'Monitor 32"',
    precio: 500
}
const producto2 = {
    nombre: 'Móvil',
    precio: 700
}
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;

resultado = [...carrito, producto];
resultado = [...carrito, producto2];
resultado = [producto3, ...carrito];

console.table(resultado);