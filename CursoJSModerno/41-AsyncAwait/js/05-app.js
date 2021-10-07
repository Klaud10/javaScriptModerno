const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

//___PROMISES___

// function obtenerDatos() {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error))
// };

//======================================


//___ASYNC AWAIT____

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url); 
        const resultado = await respuesta.json();
        console.log(resultado); 
    } catch (error) {
        console.log(error);
    }
};

//=======================================


