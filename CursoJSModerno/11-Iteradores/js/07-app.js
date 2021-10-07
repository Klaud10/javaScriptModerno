
//___FOR OFF___

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

/*====================================*/

const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Móvil', precio: 700},
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre);
}
