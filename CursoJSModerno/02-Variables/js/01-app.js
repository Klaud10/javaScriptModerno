// Inicializar Variable
var producto = "Monitor de 24 pulgadas";
console.log(producto);
// Las variables se pueden reasignar
producto = 'Monitor de 19 pulgadas';
console.log(producto);
// JavaScript es un lenguaje dinamico, no se especifican tipos de datos.
producto = 20;
console.log(producto);

// Variables se pueden inicializar sin un valor y reasignarlas despues
var disponible;
disponible = true;

disponible = false;

// Inicializar Multiples variables
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5; 

// Algunas reglas (No pueden iniciar con numeros)
// var 99dias; // NO  
var dias99; // SI 

// var 01_; // NO
var _01; // SI

var nombreProducto; // camellCase es la forma mas tradicional 
var nombre_producto; // Underscore o snake, no es tan comun
var NombreProducto; // PascalCase, se usa en clases 

