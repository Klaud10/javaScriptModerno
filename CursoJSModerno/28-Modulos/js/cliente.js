
// (function() {
   
//     console.log('Desde IIFE');
//     window.nombreCliente = 'Claudio';
    
// })();

export const nombreCliente = 'Claudio'; 
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} -Ahorro: ${ahorro}`;
};

export function tieneSaldo( ahorro ) {
    if (ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
};

export class Cliente{
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} -Ahorro: ${this.ahorro}`;
    }
};

export default function nuevaFuncion() {   //___Solo puede haber un export default por archivo
    console.log('Este es el export default');
}



 