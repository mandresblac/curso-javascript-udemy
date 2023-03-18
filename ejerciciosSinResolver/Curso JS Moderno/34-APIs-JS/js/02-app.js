// Previamente vimos getclientRect, que nos permitia identificar cuando un elemento estaba visible, existe otra API llamada Intersection Observer, veamos como utilizarla..

//IntersectionObserver() nos permite identificar cuando un elemento esta visible en la pantalla del navegador, IntersectionObserver() es una API nativa de JavaScript.

document.addEventListener("DOMContentLoaded", () => {
  // 1- Primero habilitamos IntersectionObserver()
  const observer = new IntersectionObserver((entries) => {
    console.log(entries[0]);

    if (entries[0].isIntersecting) {
      console.log("Ya esta visible...");
    }
  });

  // 2- le decimos que elemento va a observar.
  observer.observe(document.querySelector(".premium"));
});
