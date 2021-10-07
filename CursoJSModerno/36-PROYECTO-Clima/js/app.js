
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario  = document.querySelector('#formulario');

window.addEventListener('load',() => {
    formulario.addEventListener('submit',buscarClima);
});

function buscarClima(e) {
    e.preventDefault();
    
    //Validar
    const ciudad = document.querySelector('#ciudad').value;; 
    const pais = document.querySelector('#pais').value; 
    
    if (ciudad === '' || pais === '') {
        //Hubo un error
        mostrarError('Ambos campos son obligatorios'); 
        return;
    };

    //Consultar la API
    consultarAPI(ciudad, pais);
};    

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bg-red-100');
    
    if (!alerta) {
    //___Crear una Alerta
        const alerta = document.createElement('div');
        
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);
       
            setTimeout(() => {
            alerta.remove();
        }, 5000);
    };
};

function consultarAPI(ciudad, pais) {
    
    const appId = 'e724fc481986e8aa3e45aa4e4bdb9dc1';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=es&appid=${appId}`;

    console.log(url);

    Spinner();

    fetch(url)
        .then (respuesta => respuesta.json())
        .then (datos => {

            limpiarHTML(); //___Limpia el HTML previo

            if (datos.cod == "404") {
                mostrarError('Ciudad no encontrada');
                return;
            };
            //___Imprime la respuesta en el HTML
            mostrarClima(datos);
        });
};

function mostrarClima(datos) {
    const { name, sys: {country}, main: { temp, temp_max, temp_min, feels_like, humidity }, weather: [{description, icon}], wind: {deg, speed }} = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);
    const termica = kelvinACentigrados(feels_like);
    
    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `${name} ${country}`;
    nombreCiudad.classList.add('uno', 'font-bold', 'text-3xl');



    const icono = document.createElement('div');
    icono.innerHTML = `<img src ="img/${icon}.png">`;
    icono.classList.add('tres', 'text-xl'); 

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('cuatro', 'font-bold', 'text-6xl');
    
    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;
    tempMaxima.classList.add('cinco', 'text-xl', 'maxymin'); 
    
    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`;
    tempMinima.classList.add('seis', 'text-xl', 'maxymin'); 
    
    const sensacion = document.createElement('p');
    sensacion.innerHTML = `Sensación térmica: ${termica} &#8451;`;
    sensacion.classList.add('siete', 'text-xl'); 

    // const descripcion = document.createElement('p');
    // descripcion.textContent = `${description}`;
    // descripcion.classList.add('ocho', 'text-xl'); 
    
    // const humedad = document.createElement('p');
    // humedad.textContent = `Humedad: ${humidity}%`;
    // humedad.classList.add('nueve', 'text-xl'); 
    
    // const direccionViento = document.createElement('p');
    // direccionViento.innerHTML = `Viento de: ${deg}&#176;`;
    // direccionViento.classList.add('diez', 'text-xl'); 
    
    // const velocidadViento = document.createElement('p');
    // velocidadViento.textContent = `a: ${speed} m/s`;
    // velocidadViento.classList.add('once', 'text-xl'); 
    


    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white', 'grid-crf');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(icono);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    resultadoDiv.appendChild(sensacion);
    // resultadoDiv.appendChild(descripcion);
    // resultadoDiv.appendChild(humedad);
    // resultadoDiv.appendChild(direccionViento);
    // resultadoDiv.appendChild(velocidadViento);
    
    resultado.appendChild(resultadoDiv);
};

const kelvinACentigrados = grados =>  parseFloat (grados - 273.15).toFixed(1);



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
