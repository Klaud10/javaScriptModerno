localStorage.setItem('nombre', 'Claudio');

// ___________________________________

const producto ={
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
};
const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

// __________________________________

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));




