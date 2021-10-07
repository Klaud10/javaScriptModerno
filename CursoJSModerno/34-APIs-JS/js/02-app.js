
document.addEventListener('DOMContentLoaded',() => {
    
    const observer = new IntersectionObserver ( entries => {
        if (entries[0].isIntersecting) {
            console.log('Ahora me ves');
        } else {
            console.log('Ahora no me ves');
        };
    });

    observer.observe(document.querySelector('.premium'));

});