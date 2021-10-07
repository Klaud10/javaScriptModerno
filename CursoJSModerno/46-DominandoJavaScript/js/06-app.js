//___NEW BINDING___

function Auto(modelo, color) {
    this.modelo = modelo,
    this.color = color
};

const auto = new Auto('Camaro', 'Rojo');

console.table(auto);

//___WINDOW BINDING___

window.color = 'Rojo';

function hola() {
    console.log(color);
};

hola();