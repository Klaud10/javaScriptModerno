//___Importar Cliente
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
//___Importar Empresa
import {Empresa} from './empresa.js';

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion());

//___Instanciar Empresa
const empresa = new Empresa('Codigo con Juan', 100, 'Tecnologia');

console.log(empresa.mostrarInformacion());
