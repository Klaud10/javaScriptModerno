const producto = 'Monitor 20 pulgadas';

// .repeat: permite repetir una cadena de texto

const texto = ' en promoción'.repeat(3);

console.log(texto);
console.log(`${producto}${texto}!!!`);

// .split: dividir un string
const actividad = 'Estoy aprendiendo JS moderno';
console.log(actividad.split(' '));

const hobbies = 'leer, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(','));

const tweet = "Aprendiendo JS Moderno #JSModernoConJuan";
console.log(tweet.split('#'));

