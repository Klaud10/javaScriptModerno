const enlace = document.createElement('A');

//___Agregando texto
enlace.textContent = 'Facebook';

//___agregando href
enlace.href = 'https://es-es.facebook.com/';

//___agregando target
enlace.target = '_blanck';

//___agregando atributo personalizado
enlace.setAttribute('data-enlace', 'nuevo-enlace');

//___Agregando classe
enlace.classList.add('una-clase');

//___Agregando evento
enlace.onclick = miFuncion;

//___seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);  //___Lo agrega al final
navegacion.insertBefore(enlace, navegacion.children[1]); //___Lo agrega antes de la posicion elegida

function miFuncion() {
    alert('Diste click');
};

/********************/
//___Crear un CARD___
/********************/

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '80€ por persona';
parrafo3.classList.add('precio');

//___crear un div con la clase info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//___crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';
imagen.loading= 'lazy';

//___crear el card
const card = document.createElement('DIV');
card.classList.add('card'); 
card.appendChild(imagen);
card.appendChild(info);

//___Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);


console.log(card);