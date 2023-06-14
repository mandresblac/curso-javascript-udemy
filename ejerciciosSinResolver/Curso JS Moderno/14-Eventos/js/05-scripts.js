// En este video estaremos viendo eventos que suceden con el scroll del mouse en el sitio web...

// Es muy común que muchos sitios agreguen funcionalidad de que al dar scroll y llegar a ver un elemento este tenga alguna animación, eso se hace con eventos en el mouse..

window.addEventListener("scroll", () => {
  //console.log("scrolling...");

  //Detectar el Scrolling vertical...
  /* const pxScroll = window.scrollY;
  console.log(pxScroll); */

  //Detectar un elemento al dar scroll...
  const premium = document.querySelector(".premium");

  const ubicacion = premium.getBoundingClientRect(); // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
  // console.log(ubicacion);

  if (ubicacion.top < 784) {
    console.log("El elemento ya esta visible");
  } else {
    console.log("Aún no esta visible el elemento, da mas scroll");
  }
});
