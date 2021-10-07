//___HOISTING___

obtenerCliente('Claudio');
function obtenerCliente(nombre) {                         //___SI funciona
    console.log(`El nombre del cliente es: ${nombre}`);
};


const obtenerCliente2 = function (nombre) {               //___SI funciona
    console.log(`El nombre del cliente es: ${nombre}`);
};
obtenerCliente2('Juan');


obtenerCliente3('Pedro');                                
const obtenerCliente3 = function (nombre) {               //___NO funciona
    console.log(`El nombre del cliente es: ${nombre}`);
};



