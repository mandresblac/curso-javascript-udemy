// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobre todo porque es un objeto grande con todas las funciones...

const reproductor = {
  reproducir: function (id) {
    return `Reproduciendo canción con el id ${id}`;
  },
  pausar: function () {
    return"pausando...";
  },
  borrar: function (id) {
    return `Borrando canción con id: ${id}`;
  },
  crearPlaylist: function (nombre) {
    return `Creando la Playlist ${nombre}`;
  },
  reproducirPlaylist: function (nombre) {
    return `Reproduciendo la Playlist ${nombre}`;
  },
};

console.log(reproductor.reproducir(30));
console.log(reproductor.pausar());

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
//   return `Borrando canción`;
// }
console.log(reproductor.borrar(30));
console.log(reproductor.crearPlaylist("Heavy Metal"));
console.log(reproductor.reproducirPlaylist("Heavy Metal"));
