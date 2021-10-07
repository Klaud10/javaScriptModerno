//___forEach___

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (pendiente, indice ) => {
    console.log(`${indice} : ${pendiente}`);
});

/*====================================*/

const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Móvil', precio: 700},
]
carrito.forEach( producto => console.log ( producto.nombre )); 

/*====================================*/

carrito.map( producto => console.log ( producto.nombre )); 


