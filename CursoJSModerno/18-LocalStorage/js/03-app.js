localStorage.removeItem('nombre');

//___Como Actualizar un registro___

const mesesArray = JSON.parse (localStorage.getItem ('meses'));
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify (mesesArray));

localStorage.clear(); //Borra todo lo almacenado