import Citas from '../js/classes/Citas'


describe('Probar la calse de citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Juan',
            telefono: '654654654',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita(citaObj);

        //___Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Juan',
            telefono: '654654654',
            fecha: '10-12-2021',
            hora:'10:30',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});