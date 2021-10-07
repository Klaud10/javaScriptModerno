
const nav = document.querySelector('.navegacion');

//___registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de nav');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', () => {
    console.log('entrando en nav');
    nav.style.backgroundColor = 'white';
});

//___mousedown - similar al click
//___mouseup - cuando sueltas el mouse
//___click
//___dblclick - doble click

