window.addEventListener('onLine', actualizarEstado);
window.addEventListener('offLine', actualizarEstado);

function actualizarEstado() {
    if (navigator.onLine) {
        console.log('Estas conectado...');
    } else {
        console.log('No estas conectado...');
    };
};