const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {  //___Se tienen que cumplir las dos
    console.log('Si puedes comprar');

} else if (!usuario && !puedePagar) {
    console.log('No puedes comprar');
    
} else if (!usuario) {
    console.log('Inicia seción');

} else if (!puedePagar) {
    console.log('fondos insuficientes');
}