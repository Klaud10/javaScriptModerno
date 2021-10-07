//___Probar 2 valores

function suma(a, b) {
    return a + b;
};

function restar(a, b) {
    return a - b;
};

let resultado = suma(2, 2); 
let esperado = 3; 

if (resultado !== esperado) {
    console.error(`El resultado: ${resultado} es diferente del esperado`);
} else {
    console.log('Resultado correcto');
}

resultado = restar(10, 5);
esperado = 5;

if (resultado !== esperado) {
    console.error(`El resultado: ${resultado} es diferente del esperado`);
} else {
    console.log('Resultado correcto');
}
