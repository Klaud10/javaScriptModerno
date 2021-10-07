
for (let i = 0; i <= 10; i ++ ) {
    if (i === 5) {
        console.log('Aqui está el CINCO');
        break;
    }   
    console.log(`numero: ${i}`);    
}
for (let i = 0; i <= 10; i ++ ) {
    if (i === 5) {
        console.log('Aqui está el CINCO');
        continue;
    }   
    console.log(`numero: ${i}`);    
}

const carrito = [
    {nombre: 'Monitor de 27"', precio: 500},
    {nombre: 'Televisor', precio: 100},
    {nombre: 'Tablet', precio: 200 ,descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Móvil', precio: 700},
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`${carrito[i].nombre}: Este articulo tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}