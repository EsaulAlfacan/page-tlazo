document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de añadir
  const botonesAñadir = document.querySelectorAll(".platillo__añadir");

  // Agrega un event listener para el clic en cada botón
  botonesAñadir.forEach(function (botonAñadir) {
    botonAñadir.addEventListener("click", function () {
      // Verificar si se ha ingresado una cantidad mayor que 0
      const cantidadInput =
        this.closest(".platillo").querySelector(".inputnCantidad");
      const cantidad = parseInt(cantidadInput.value.trim());
      if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida mayor que 0.");
        return; // Detener la ejecución si la cantidad no es válida
      }

      // Verificar si se ha seleccionado una talla
      const tallaSeleccionada = this.closest(".platillo").querySelector(
        'input[name="talla"]:checked'
      );
      if (!tallaSeleccionada) {
        alert("Seleccione una talla antes de agregar al carrito.");
        return; // Detener la ejecución si no se ha seleccionado una talla
      }

      // Obtén los datos del platillo original
      const nombre =
        this.closest(".platillo").querySelector(
          ".platillo__nombre"
        ).textContent;

      let precioPlayera = 50;
      let costoTotal = precioPlayera * cantidad;
      let costo = parseInt(costoTotal);

      // Captura la talla seleccionada
      const talla = tallaSeleccionada.nextElementSibling.textContent;

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

      // Limpiar el input de cantidad después de agregar al carrito
      cantidadInput.value = "";

      // Llama a la función para actualizar el total
      actualizarTotal();
    });
  });
});

// Resto del código sin cambios
function eliminarElemento(elemento) {
  elemento.closest(".platillo").remove();
  actualizarTotal();
}

function actualizarTotal() {
  const costosTotales = document.querySelectorAll(".costoTotal");
  let total = 0;
  costosTotales.forEach((costoTotalElement) => {
    total += parseInt(costoTotalElement.textContent);
  });
  document.getElementById("totalCostos").textContent = total + " MXM";
}
