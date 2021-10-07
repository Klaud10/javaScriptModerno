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
const producto4 = {
    nombre: 'Móvil2',
    precio: 900
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//___Formas IMPERATIVAS___

carrito.unshift(producto3); //___Lo agrega al principio del arreglo
console.table(carrito);

// carrito.pop();//___Eliminar el último elemento del arreglo
// console.table(carrito);

// carrito.shift(); //___Elimina del inicio del arreglo
// console.table(carrito);



carrito.splice(1, 1);
console.table(carrito);
