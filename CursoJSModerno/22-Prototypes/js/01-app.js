//___Object Literal
const cliente = {
    nombre: 'Claudio',
    saldo: 500
};

console.log( cliente );
console.log( typeof cliente );

//___Objeto CONSTRUCTOR
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

const Claudio = new Cliente('Claudio', 500);

console.log(Claudio);