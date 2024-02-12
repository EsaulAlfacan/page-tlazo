document.querySelector(".carrito-pedir").addEventListener("click", function () {
  // Captura los elementos <article> dentro del contenedor
  let articulos = document.querySelectorAll(".platillos__lista article");
  let contenidoCarrito = "";
  let costosTotales = document.getElementById("totalCostos").textContent;

  // Recorre cada artículo y captura su contenido
  articulos.forEach(function (articulo) {
    // Clona el artículo para manipular el contenido sin afectar el DOM original
    let contenidoArticulo = articulo.cloneNode(true);
    // Encuentra el botón de añadir dentro del artículo clonado y elimínalo si existe
    let botonAñadir = contenidoArticulo.querySelector(".platillo__añadir");
    if (botonAñadir) {
      botonAñadir.parentNode.removeChild(botonAñadir);
    }
    // Agrega el contenido del artículo al mensaje del carrito
    contenidoCarrito += contenidoArticulo.textContent.trim() + "\n\n";
  });

  // Número de teléfono al que se enviará el mensaje
  let telefonoDestino = "5573973302"; // Reemplaza con el número deseado
  let envio = 280;

  // Genera el enlace para abrir WhatsApp con el mensaje predefinido
  let whatsappLink = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(
    contenidoCarrito
  )}
Costo de envío $280 MXM. El costo total de su carrito es de: $${
    parseInt(costosTotales) + envio
  } MXM. Gracias por su solicitud.`;

  // Abre una nueva ventana con el enlace para enviar el mensaje por WhatsApp
  window.open(whatsappLink, "_blank");
});
