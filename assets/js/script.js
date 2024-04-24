import Reproductor from "./clases/Reproductor.js";


let objMusica = new Reproductor("https://www.youtube.com/embed/aVb6tLeONo8?si=_8_EGi3_im26f5ld", "musica");
let objPelicula = new Reproductor("https://www.youtube.com/embed/wmiIUN-7qhE?si=kdM73URo7pbY1uOR", "peliculas");
let objSerie = new Reproductor("https://www.youtube.com/embed/vjHdJIdhCMU?si=_byWZ-kqljcn_shS", "series")

objMusica.setInicio(50);
objMusica.playMultimedia();
objPelicula.playMultimedia();
objSerie.playMultimedia();
