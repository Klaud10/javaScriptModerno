//___SELF___

// window.onload = () => {
//     console.log('Ventana lista');
// }

self.onload = () => {
    console.log('Ventana lista');
};


window.nombre = 'Monitor 20"';

const producto = {
    
    precio: 30,
    disponible: true,
    mostrarInfo: function () { 
        return `El producto: ${self.nombre}, tiene un precio de: ${this.precio} €`
    }
}; 

console.log(producto.mostrarInfo());