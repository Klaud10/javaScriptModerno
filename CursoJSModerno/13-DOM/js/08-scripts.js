
const navegacion = document. querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes);//___Los espacios en blanco se convierten en elementos
// console.log(navegacion.children);//___No lee los espacios en blanco


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo Título desde traversing the doom';

// card.children[0].src = 'img/hacer4.jpg';


// console.log(card.children[0]);

//___Traversing de hijo a padre___

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard); 
// console.log(ultimoCard.previousElementSibling); 
// console.log(ultimoCard.previousElementSibling.previousElementSibling); 
// console.log(ultimoCard.previousElementSibling.previousElementSibling.previousElementSibling); 