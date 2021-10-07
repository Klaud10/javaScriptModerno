//___NAMESPACE___

const restaurantApp = {}; 

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hmburguesa',
        precio: 20
    },
    {
        platillo: 'Perrito',
        precio: 15
    }
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro manú`);

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} €${platillo.precio}`);
        });
    },
    
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se está preparando`);
    },

    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    } 
};

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo('Taco', 22);
const {platillos} = restaurantApp; 
restaurantApp.funciones.mostrarMenu(platillos);