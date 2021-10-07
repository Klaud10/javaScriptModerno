function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';          
    } else {
        tipo = 'Normal';
    }
    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

Cliente.prototype.retirarSaldo = function (retira) {
    this.saldo -= retira;
};

const claudio = new Cliente('Claudio', 6000); // instanciarlo
console.log(claudio.tipoCliente());
console.log(claudio.nombreClienteSaldo());
claudio.retirarSaldo(1000);
console.log(claudio.nombreClienteSaldo());

console.log(claudio);


