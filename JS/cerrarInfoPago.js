document.addEventListener("DOMContentLoaded", function () {
  const closePagar = document.getElementById("closePagar");
  const infoPagar = document.getElementById("infoPagar");
  const datosPago = document.getElementById("datosPago");

  // Función para ocultar el contenido
  closePagar.addEventListener("click", function () {
    datosPago.style.display = "none"; // Oculta la sección
  });

  // Función para mostrar el contenido
  infoPagar.addEventListener("click", function (event) {
    event.preventDefault(); // Evita la navegación al enlace
    datosPago.style.display = "flex"; // Muestra la sección (remueve el estilo inline)
  });
});
