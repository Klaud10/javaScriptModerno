
function descargarClientes() {
    return new Promise ( (resolve, reject)=> {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error en la conección');
            }
        }, 3000);
    });
};


//___Async await____

// async function ejecutar() {  //___Declaration

// };


const ejecutar = async () => {  //___Expretion
    try {

        console.log(1+1);

        const respuesta = await descargarClientes();

        console.log(2+2);
        
        console.log(respuesta);

    } catch (error) {
        console.log(error);
    }
};

ejecutar();