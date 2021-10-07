const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    const URL = 'data/empleado.json';
    fetch (URL)
        .then (respuesta => respuesta.json())
        .then (resultado => mostrarHTML(resultado)) 
};

function mostrarHTML({ id, nombre, empresa, trabajo }) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
};

