const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda:'',
    criptomoneda:''
};

//___Crear el PROMISE
const obtenerCriptomonedas = criptomonedas => new Promise (resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit',submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);

});

//___Fin PROMISE

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => obtenerCriptomonedas(resultado.Data))
        .then( criptomonedas => selectCriptomonedas(criptomonedas)) 
};

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    });
};

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
};

function submitFormulario(e) {
    e.preventDefault();

    //Validar
    const {moneda, criptomoneda} = objBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    
    //___Consultar la API
    consultarAPI();

};

function mostrarAlerta(msj) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = msj;
        formulario.appendChild(divMensaje);
        
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    };
};

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then ( cotizacion => {
            mostrarCotizacionHTLM(cotizacion.DISPLAY[criptomoneda][moneda]);
        });
};

function mostrarCotizacionHTLM(cotizacion) {

    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, OPENDAY } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `Precio Actual: <span>${PRICE}</span>`;
    
    const precioApertura = document.createElement('p');
    precioApertura.innerHTML = `Precio de apertura : <span>${OPENDAY}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio mas alto hoy: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio mas bajo hoy: <span>${LOWDAY}</span>`;
    
    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas 24Hs.: <span>${CHANGEPCT24HOUR} %</span>`;
  
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Última actualización : <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioApertura);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
};

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
};

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('sk-chase');

    spinner.innerHTML = `
    
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        
        `; 

    resultado.appendChild(spinner);
};