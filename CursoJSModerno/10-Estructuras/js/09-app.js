
const autenticado = false; 
const puedePagar = true; 

console.log(autenticado && puedePagar ? 'Autenticado' : 'No es usuario o sin saldo');

console.log(autenticado ? puedePagar ? 'Autenticado y puede pagar' : 'Autenticado y no puede pagar' : 'No autenticado');




