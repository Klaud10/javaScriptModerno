
//___FOR LOOP___

for (let i = 0; i <= 10; i ++ ) {
    console.log(`numero: ${i}`);    
}

for (let i = 1; i <= 20; i++) {
    if ( i % 2 === 0 ) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }    
}

const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Móvil', precio: 700},
]

console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

  