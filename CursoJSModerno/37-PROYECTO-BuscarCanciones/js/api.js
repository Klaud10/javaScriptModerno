import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI() {
        const urlLyrics = `https://private-9d457-lyricsovh.apiary-mock.com/v1/${this.cancion}/${this.artista}` ;
        // const urlLyrics = `https://api.lyrics.ovh/v1/${this.cancion}/${this.artista}`;
        const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(urlLyrics) }`;

        Spinner();

        fetch(url)
            .then ( respuesta => respuesta.json())
            .then ( resultado => {

                if (resultado.lyrics) {
                    const {lyrics} = resultado;
                    UI.divResultado.textContent = lyrics; 
                    UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
                } else {
                    UI.divMensajes.textContent = 'No pudimos encontrar esa cancion';
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            });
    }
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    };
};

function Spinner() {

    limpiarHTML();
    
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    
    resultado.appendChild(divSpinner);

};

export default API;
