const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const URL = 'https://picsum.photos/list';

    fetch (URL)
        .then (respuesta => respuesta.json())
        .then (resultado => mostrarHTML(resultado))
};

function mostrarHTML (datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver imagen <a>
        `; 
    });
    contenido.innerHTML = html;
};