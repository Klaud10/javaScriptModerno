
// Objet literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades al  objeto
producto.imagen = "imagen.jpg";

// Quitar propiedades
delete producto.disponible;

console.log(producto);