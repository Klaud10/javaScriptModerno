//___SWITCH CASE___

const metodoPago = 'efectivo';

switch (metodoPago) {
    
    case 'efectivo':
        pagar();
        break;
    
    case 'cheque':
        console.log(`Pago con ${metodoPago}`);
        break;
    
    case 'tarjeta':
        console.log(`Pago con ${metodoPago}`);
        break;
    
    case 'bitcoin':
        console.log(`Pago con ${metodoPago}`);
        break;

    default:
        console.log('Aún no has seleccionado metodo de pago');
        break;
}

function pagar() {
    console.log('pagando...');
}