const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Pago solo con tarjeta');
} else if (cheque) {
    console.log('Pagar con cheque');
} else {
    console.log('Fondos insuficientes');
}
