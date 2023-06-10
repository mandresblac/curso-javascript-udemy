// Arrow functions en métodos de propiedad

const reproductor = {
  cancion: "",
  reproducir: id => `Reproduciendo canción id ${id}`,
  pausar: () => "pausando...",
  borrar: id => `Borrando canción con id: ${id}`,
  crearPlaylist: nombre => `Creando la Playlist ${nombre}`,
  reproducirPlaylist: nombre => `Reproduciendo la Playlist ${nombre}`,

  // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {

// }
reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");

// Probando set y get, se utilizan de la siguiente forma
reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion; //No es necesario el paréntesis porque utiliza un get
