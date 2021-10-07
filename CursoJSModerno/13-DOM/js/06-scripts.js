
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// console.log(encabezado.innerText); //___Si en el css visibility:hidden; no se muestra
// console.log(encabezado.textContent);//___Lo muestra igual
// console.log(encabezado.innerHTML); //___Se trae el HTML

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';