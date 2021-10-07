//___Mixins___

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
};

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre= ${this.nombre}, Email= ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}; 

//___Añadir funcionesPersona a la clase persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion()
cliente.mostrarNombre()

const cliente2 = new Cliente('Cliente', 'clienet@correo.com');
console.log(cliente2);
cliente2.mostrarInformacion()
cliente2.mostrarNombre()