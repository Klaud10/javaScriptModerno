//___SCOPE___

const cliente = 'Manuel'; 

function mostrarCliente() {
    const cliente = 'Pedro';  //___Este tiene prioridad por estar dentro de las llaves
    console.log(cliente);     //___si falta, se imprime el global 
};

mostrarCliente();

const login = true; 

function clienteLogueado() {
    const cliente = 'Juan'; 
    console.log(cliente);

    if (login) {
        const cliente = 'Admin'; 
        console.log(cliente);
    };  
    
    
};

clienteLogueado();
