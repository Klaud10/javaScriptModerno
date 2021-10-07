"use strict";

const producto = {
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1 kg',
    medida: '1mt',
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

// Spread o Rest Operator
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);