function suma(a, b) {
    return a + b;
};

function restar(a, b) {
    return a - b;
};

let resultado = suma(1, 2); 
let esperado = 3; 

expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

function expected( esperado ) {
    return {
        toBe( resultado ) {
            if (resultado !== esperado) {
                console.error(`El resultado: ${resultado} es diferente del esperado`);
            } else {
                console.log('Resultado correcto. Pasa la prueba');
            }
        },
        toEqual(resultado) {
            if (resultado !== esperado) {
                console.error(`El resultado: ${resultado} no es igual al esperado`);
            } else {
                console.log('Resultado correcto. Pasa la prueba');
            }
        }
    }
};