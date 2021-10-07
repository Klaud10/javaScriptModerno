//___ WeakSet ___

const weakset = new WeakSet(); 

const cliente = {
    nombre: 'Claudio',
    saldo: 100
};


weakset.add(cliente);//___WeakSet solo admite OBJETOS___

// console.log(weakset.has(cliente));

// weakset.delete(cliente);



console.log(weakset);

