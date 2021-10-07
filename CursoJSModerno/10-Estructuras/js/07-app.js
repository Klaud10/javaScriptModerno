
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo >= totalAPagar || credito >= totalAPagar || disponible >= totalAPagar) { //___Se cumple una u otra
    console.log('Puede pagar');
} else {
    console.log('Saldo Insuficiente');
}
