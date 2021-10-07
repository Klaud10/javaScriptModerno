
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canación: ${id}`);
    },
    pausar: function () {
        console.log('pausando...');
    },
    borrar: function (id) {
        console.log(`Borrando canción...${id}`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist de: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(10);
reproductor.pausar();
reproductor.borrar(10);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist("Rock de los '80s");
reproductor.reproducirPlaylist("Rock de los '80s");

