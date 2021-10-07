//___EVENTOS CON SCROLL___

window.addEventListener('scroll',() => {
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    
    // console.log(ubicacion);

    if (ubicacion.top < 900) {
        console.log('El elemento ya es visible');
    } else {
        console.log('Todavia no se ve');
    }
    
});