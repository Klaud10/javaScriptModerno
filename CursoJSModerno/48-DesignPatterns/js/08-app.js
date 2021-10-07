
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
};
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el artículo: ${articulo}, con un precio de inicio de €${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
};
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: €${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//___Crear Objetos
const claudio = new Comprador('Claudio');
const juan = new Comprador('Juan');
const vendedor = new Vendedor('Vendedor de coches');
const subasta = new Subasta();

//___Tienes que registrarlos
subasta.registrar(juan);
subasta.registrar(claudio);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

juan.oferta(350, juan);
claudio.oferta(450, claudio);
juan.oferta(500, juan);
claudio.oferta(700, claudio);

vendedor.vendido('Claudio');
