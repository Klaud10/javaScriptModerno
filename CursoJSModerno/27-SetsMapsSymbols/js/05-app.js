//___SIMBOLS___

const sym = Symbol(1);   
const sym2 = Symbol(1);   

// console.log(Symbol() === Symbol());

// if (sym === sym2) {
//     console.log('Son iguales');
// } else {
//     console.log('Son diferentes');
// };

const nombre = Symbol(); 
const apellido = Symbol(); 

const persona = {}; 

//Agregar nonmbre y apellido como llaves del objeto

persona[nombre] = 'Claudio';
persona[apellido] = 'Falabella';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

//Las prpoiedades que usa un symbol no son iterables
for (let i in persona) {
    console.log(i);
}

//Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {}; 

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);




