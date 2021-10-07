
const autenticado = true;

if (autenticado === true) {   //___INCORRECTO
    console.log('Usuario autenticado');
}

if (autenticado) {   //___CORRECTO
    console.log('Usuario autenticado');
}


const puntaje = 401;

// ================================
if (puntaje >= 400) {
    console.log('Execelente');
} else if (puntaje >= 300) {
    console.log('Muy bien');
}

// ===============================
if (puntaje >= 300 && puntaje <= 400) {
    console.log('Buena puntuación');
} else if (puntaje >= 401) {
    console.log('Excelente!!!');
}

// ================================
function revisarPuntaje () {
    if (puntaje > 400) {
        console.log('EXCELENTE!!!');
        return;
    }
    if (puntaje > 300) {
        console.log('BUEN TRABAJO');
        return;
    }
}
revisarPuntaje();
