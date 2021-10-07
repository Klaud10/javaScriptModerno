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

//___Formas IMPERATIVAS___
carrito.push(producto); 
carrito.push(producto2); 
carrito.unshift(producto3); //___Lo agrega al principio del arreglo

console.table(carrito);

