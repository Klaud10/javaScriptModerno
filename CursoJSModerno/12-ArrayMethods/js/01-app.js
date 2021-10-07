const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//___Comprobar si un valor existe en un arreglo___

meses.forEach(mes => {
    if (mes === 'Enero') {
        console.log('Enero existe');
    }
});

const resultado = meses.includes ('Enero');
console.log(resultado);

const resultado2 = meses.includes ('Diciembre');
console.log(resultado2);

//___En un arreglo de objetos se usa .some___

const existe = carrito.some( producto => {
    return producto.nombre === 'Celular';
})

const existe2 = carrito.some( producto => producto.nombre === 'Celular');

console.log(existe);
console.log(existe2);

//___.some en un arreglo tradicional___

const existe3 = meses.some (mes => mes === 'Febrero');
console.log(existe3);