document.addEventListener("DOMContentLoaded", function () {
  const articulos = document.querySelectorAll(".platillo");

  articulos.forEach((articulo) => {
    const botonCierre = document.createElement("button");
    botonCierre.textContent = "×";
    botonCierre.classList.add("boton-cierre", "oculto");

    const abrirArticulo = () => {
      botonCierre.classList.remove("oculto");
      articulo.classList.add("articulo-en-pantalla-completa");
      articulo.appendChild(botonCierre);
    };

    const cerrarArticulo = () => {
      articulo.classList.remove("articulo-en-pantalla-completa");
      botonCierre.remove(); // Elimina el botón de cierre del DOM
    };

    articulo.addEventListener("click", function (e) {
      if (
        !this.classList.contains("articulo-en-pantalla-completa") &&
        e.target !== botonCierre
      ) {
        abrirArticulo();
      }
    });

    botonCierre.addEventListener("click", function (e) {
      cerrarArticulo();
      e.stopPropagation(); // Previene la propagación para evitar que el evento de clic se propague al artículo
    });
  });

  // Selecciona el botón de añadir utilizando su ID
  const botonAnadirElemento = document.getElementById("botonAnadirElemento");

  // Añade el evento al botón de añadir para cerrar el artículo abierto
  botonAnadirElemento.addEventListener("click", function () {
    // Encuentra y cierra el artículo que está actualmente en pantalla completa
    const articuloAbierto = document.querySelector(
      ".articulo-en-pantalla-completa"
    );
    if (articuloAbierto) {
      articuloAbierto.classList.remove("articulo-en-pantalla-completa");
      const botonCierre = articuloAbierto.querySelector(".boton-cierre");
      if (botonCierre) {
        botonCierre.remove(); // Asegura que el botón de cierre también se elimine
      }
    }
  });
});
