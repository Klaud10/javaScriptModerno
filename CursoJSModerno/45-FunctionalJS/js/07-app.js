//___Funciones que retornan una funcion___

const obtenerCliente = () => () => console.log('Claudio'); 

const fn = obtenerCliente();

fn();