const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos); //___Carga al hacer click

//document.addEventListener('DOMContentLoaded', obtenerDatos); //___Para cargar automaticamente al entrar

function obtenerDatos() {
    const URL = 'data/empleados.json';
    fetch (URL)
        .then (respuesta => respuesta.json())
        .then (resultado => mostrarHTML(resultado))

};

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>ID: ${id}</p>
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>    
        `;
    });

    contenido.innerHTML = html;
};
