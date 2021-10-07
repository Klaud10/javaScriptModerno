//___Singleton___No permite multiples instancias de la misma clase

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        };
    };
};

const persona = new Persona('Juan', 'email@correo.com');
console.table(persona);

const persona2 = new Persona('Claudio', 'mail@correo.com');
console.table(persona2);

// 4o4
