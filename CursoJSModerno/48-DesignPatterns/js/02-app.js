//___Constructor Pattern___

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
};

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    };
};

const persona = new Persona('Juan', 'persona@correo.com'); 
console.log(persona);


const cliente = new Cliente('Claudio', 'correo@correo.com', 'Empresa');
console.log(cliente);

// 4o4

