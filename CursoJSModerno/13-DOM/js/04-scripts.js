
const card = document.querySelector('.card'); //___Sólo selecciona el primero de su clase
console.log(card);

const card = document.querySelectorAll('.card'); //___Selecciona todos los de su clase
console.log(card);

//___Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);


const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log(segundoCard);

//___Seleccion por id
const formulario = document.querySelector('#formulario');
console.log(formulario); //___Selecciona solo el primer id que encuentra


//___Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

