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

//___Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenida() { //Reescribir el método
        return `Bienvenido a Empresas`;
    }
}

//Instanciar la clase
const claudio = new Cliente('Claudio', 400);
const empresa = new Empresa('Código con Juan', 500, 678678678, 'tecnologica');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());