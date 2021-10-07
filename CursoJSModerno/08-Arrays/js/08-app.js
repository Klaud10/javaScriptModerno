
// Objet literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre
// console.log(nombre);

// Destructuring
const { nombre } = producto;
console.log(nombre);

//___Destructuring con Arreglos___

const numeros = [10, 20, 30, 40, 50];

const [ primero, ...tercero ] = numeros;

console.log( primero );
console.log( tercero );
