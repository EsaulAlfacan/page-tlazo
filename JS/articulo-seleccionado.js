document.addEventListener("DOMContentLoaded", function () {
  const articulos = document.querySelectorAll(".platillo");

  articulos.forEach((articulo) => {
    // Se añade el botón de cierre a cada artículo desde el principio para evitar recrearlo en cada clic
    const botonCierre = document.createElement("button");
    botonCierre.textContent = "×"; // Carácter de tache
    botonCierre.classList.add("boton-cierre", "oculto"); // Añade una clase 'oculto' para esconderlo inicialmente

    // Función para abrir el artículo en pantalla completa
    const abrirArticulo = () => {
      // Remueve la clase 'oculto' para mostrar el botón de cierre
      botonCierre.classList.remove("oculto");
      articulo.classList.add("articulo-en-pantalla-completa");
      articulo.appendChild(botonCierre);
    };

    // Función para cerrar el artículo y ocultar el botón de cierre
    const cerrarArticulo = () => {
      articulo.classList.remove("articulo-en-pantalla-completa");
      botonCierre.classList.add("oculto"); // Añade la clase 'oculto' para esconder el botón
    };

    // Evento para abrir el artículo en pantalla completa
    articulo.addEventListener("click", function (e) {
      // Asegura que el clic no sea en el botón de cierre ni en un artículo ya abierto
      if (
        !this.classList.contains("articulo-en-pantalla-completa") &&
        e.target !== botonCierre
      ) {
        abrirArticulo();
      }
    });

    // Añade el evento al botón de cierre para cerrar el artículo
    botonCierre.addEventListener("click", function (e) {
      cerrarArticulo();
      e.stopPropagation(); // Previene que el evento se propague al artículo
    });
  });
});
