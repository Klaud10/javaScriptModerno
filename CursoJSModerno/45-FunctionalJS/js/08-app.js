//___Closures___

const obtenerCliente = () => {
    const nombre = "Claudio";

    function muestraNombre() {
        console.log(nombre);
    };

    return muestraNombre;
};

const cliente = obtenerCliente();

cliente();