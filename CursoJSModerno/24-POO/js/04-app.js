
//___Class Declaration
class Cliente {

    #nombre;                     //Esto convierte a la propiedad en privada

    constructor(nombre, saldo){  //===========================================
        this.#nombre = nombre;   //Estas propiedades son públicas pq se pueden  
        this.saldo = saldo;      //acceder desde la clase y desde el objeto 
    }                            //===========================================

    // Método (son funciones)
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de: ${this.saldo}€`
    }

    // Propiedades estáticas
    static bienvenida() {
        return `Bienvenido`;
    }
};

const claudio = new Cliente('Claudio', 5000);

console.log(claudio.mostrarInformacion());

//==============================================================================

class Cliente2 {
    #nombre;

    setNombre(nombre) {
         this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
};

const juan = new Cliente2();
juan.setNombre('Juan')

console.log(juan.getNombre());