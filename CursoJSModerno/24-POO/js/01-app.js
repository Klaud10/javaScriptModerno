//___POO___

//___Class Declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Método (son funciones)
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}€`
    }

    // Propiedades estáticas
    static bienvenida() {
        return `Bienvenido`;
    }
};

//Instanciar la clase
const claudio = new Cliente('Claudio', 400);
console.log(claudio.mostrarInformacion());
console.log(Cliente.bienvenida());

//===========================================

//___Class Expretion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    //Método (son funciones)
    mostrarInformacion(){
        return `Cliente2: ${this.nombre}, tu saldo es de: ${this.saldo}€`
    }
};

//Instanciar la clase
const claudio2 = new Cliente2('Claudio', 500);
console.log(claudio2.mostrarInformacion());
console.log(claudio2);