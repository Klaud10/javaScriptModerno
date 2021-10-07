//___Implicit Binding___

const usuario = {
    nombre: 'Juan',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es: ${this.nombre} y mi edad es: ${this.edad} años`);
    },
    mascota: {
        nombre: 'Simba',
        edad: 4,
        informacion() {
            console.log(`Mi nombre es: ${this.nombre} y mi edad es: ${this.edad} años`);
        }
    }
};

usuario.informacion();
usuario.mascota.informacion();