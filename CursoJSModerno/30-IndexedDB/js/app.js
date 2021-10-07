let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    //Crear base de datos v:1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error al crear la base de datos');
    }
    //Si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');

        DB = crmDB.result;
    }

    //Configuración de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });
        //Definir las columnas
        objectStore.createIndex('nombre','nombre', { unique: false });
        objectStore.createIndex('email','email', { unique: true });
        objectStore.createIndex('telefono','telefono', { unique: false });

        console.log('Columnas creadas...');
    };
};

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transacción completada');
    }

    transaction.onerror = function () {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 654654654,
        nombre: 'Claudio',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    
    console.log(peticion);
}