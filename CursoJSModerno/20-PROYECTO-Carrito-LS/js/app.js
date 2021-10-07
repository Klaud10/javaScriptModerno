//___Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []; 

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos del local Storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    });

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Reseteamos el arreglo
        limpiarHTML(); //Eliminamos el HTML
    } )
};

//___Funciones
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };
};

//Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        //Elimina del arreglo por el data Id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }
};

//___Lee el contenido del HTML al que le dimos click y 
// extrae la informacion del curso
function leerDatosCurso(curso) {
    
    // Crear un OBJETO con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };
    
    //___ Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        //Actualizamos cantidad
        const cursos = articulosCarrito.map ( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //___retorna el objeto actualizado
            } else {
                return curso; //___retorna los objetos que no estan duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agregamos el curso
        articulosCarrito = [...articulosCarrito, infoCurso];
    };

    console.log(articulosCarrito);

    carritoHTML();
};

//___Muestra el carrito en el HTML
function carritoHTML() {

    //Limpiar el HTML previo
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width = "120"></td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td><a href="#" class ="borrar-curso" data-id="${id}"> X </a> </td>
            `;

        //Agrega el HTML del carrito en el t-body
        contenedorCarrito.appendChild(row);
    });

    //Agregar el carrito al storage
    sincronizarStorage();
};

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//___Elimina los cursos  del t-body
function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    // Forma rapida
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};
