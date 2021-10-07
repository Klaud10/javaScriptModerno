//___COHERCION___

const numero1 = 20; 
const numero2 = '40';

console.log(numero1 + numero2);
//___Resultado = 2040 en un string__Coherción implícita 


console.log(Number(numero2));
//___Resultado = 40 en numero__Coherción explícita 

console.log(numero1.toString()); //___Explícita

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido)); //___Explícitas