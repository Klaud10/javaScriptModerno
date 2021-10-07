
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado')
    } else {
        reject('No se pudo aplicar el descuento')
    };
});

aplicarDescuento
    .then(resultado => descuento (resultado))
    .catch (error => console.log(error))

function descuento(mensaje) {
    console.log(mensaje);
};

//___Hay 3 valores posibles___

//___fulfilled - El promise se cumplió
//___rejected - El promise NO se cumplió
//___pending - El promise no se ha cumplido ni rechazado