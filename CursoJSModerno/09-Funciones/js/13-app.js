

const reproductor = {

    cancion: '',
    reproducir: id => console.log(`Reproduciendo canación: ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id =>console.log (`Borrando canción...${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist de: ${nombre}`),
    reproducirPlaylist: nombre =>console.log (`Reproduciendo la Playlist: ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`Escuchando: ${this.cancion}`);
    } 
}

reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(10);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist("Rock de los '80s");
reproductor.reproducirPlaylist("Rock de los '80s");

