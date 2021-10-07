

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];
for (let pendiente of pendientes) {
    console.log(pendiente);
}

//______________________________________________

const automovil = {
    modelo: 'Camaro',
    año: '1969',
    motor: 'v8 6.0'
}
for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

//______________________________________________

for( let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}



