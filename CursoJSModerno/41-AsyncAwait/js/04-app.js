
function descargarNuevosClientes() {
    return new Promise (resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes se descargaron');
        }, 5000);
    });
};

function descargarNuevosPeddidos() {
    return new Promise (resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos se descargaron');
        }, 3000);
    });
};

const app = async() => {
    try {
        
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPeddidos()]);

        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
};

app();

