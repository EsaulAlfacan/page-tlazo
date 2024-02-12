document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de añadir
  const botonesAñadir = document.querySelectorAll(".platillo__añadir");

  // Agrega un event listener para el clic en cada botón
  botonesAñadir.forEach(function (botonAñadir) {
    botonAñadir.addEventListener("click", function () {
      // Obtén los datos del platillo original
      const nombre =
        this.closest(".platillo").querySelector(
          ".platillo__nombre"
        ).textContent;

      let precioPlayera = 50;
      let cantidad = parseInt(
        this.closest(".platillo").querySelector(".inputnCantidad").value.trim()
      );
      let costoTotal = precioPlayera * cantidad;
      let costo = parseInt(costoTotal);

      // Captura la talla seleccionada
      const tallaSeleccionada = this.closest(".platillo").querySelector(
        'input[name="talla"]:checked'
      );
      const talla = tallaSeleccionada
        ? tallaSeleccionada.nextElementSibling.textContent
        : "No especificada";

      // Crea una nueva estructura HTML con los datos obtenidos
      const nuevoElemento = `
                <article class="platillo">
                    <div class="platillo__detalles">
                        <h5 class="platillo__nombre">${nombre}</h5>
                        <p> Cantidad: ${cantidad}</p>
                        <p class="costoTexto">Costo Total: $<span class="costoTotal">${costo} MXM</span></p>
                        <p>Talla seleccionada: ${talla}</p>
                        <button class="platillo__añadir" onclick="eliminarElemento(this)"><i class="fa-solid fa-minus"></i> Quitar</button>
                    </div>
                </article>
            `;
      // Agrega el nuevo elemento al contenedor
      document.getElementById("contenedorElementos").innerHTML += nuevoElemento;

      // Llama a la función para actualizar el total
      actualizarTotal();
    });
  });
});

// Función para eliminar un elemento del carrito
function eliminarElemento(elemento) {
  elemento.closest(".platillo").remove();
  // Llama a la función para actualizar el total
  actualizarTotal();
}

// Función para actualizar el total de los costos
function actualizarTotal() {
  const costosTotales = document.querySelectorAll(".costoTotal");
  let total = 0;
  costosTotales.forEach((costoTotalElement) => {
    total += parseInt(costoTotalElement.textContent);
  });
  // Actualiza el elemento que muestra el total
  document.getElementById("totalCostos").textContent = total + " MXM";
}
