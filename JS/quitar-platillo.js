document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar la lista de platillos
    const listaPlatillos = document.querySelector('.platillos__lista');

    // Delegación de evento para escuchar clics en la lista
    listaPlatillos.addEventListener('click', function (event) {
        // Comprobar si el clic fue en un botón de "platillo-añadir"
        if (event.target.classList.contains('carrito-quitar')) {
            // Encontrar el platillo más cercano, que es el contenedor del botón
            const platillo = event.target.closest('.platillo');

            // Quitar el platillo de la lista
            platillo.remove();
        }
    });
});
