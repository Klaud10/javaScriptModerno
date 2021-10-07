
const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Móvil', precio: 700},
]

const nuevoArreglo = carrito.map( function (producto) { //___.map: crea un nuevo arreglo
    return `${producto.nombre} - Precio: ${producto.precio}`;        
})

const nuevoArreglo2 = carrito.forEach( function (producto) { //___.forEach: No crea nuevos arreglos
    return `${producto.nombre} - Precio: ${producto.precio}`;        
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);