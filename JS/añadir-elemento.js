document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los botones de añadir platillos
    const botonesAñadir = document.querySelectorAll('.platillo__añadir');

    // Función que maneja el clic en el botón de añadir
    botonesAñadir.forEach(function (boton) {
        boton.addEventListener('click', function (event) {
            // Encontrar el platillo más cercano, que es el contenedor del botón
            const platillo = event.target.closest('.platillo');

            // Clonar el platillo
            const platilloClonado = platillo.cloneNode(true);

            // Cambiar el botón 'Pedir Carrito' a 'Quitar' en el platillo clonado
            const botonPedir = platilloClonado.querySelector('.platillo__añadir');
            if (botonPedir) {
                botonPedir.classList.remove = ('.platillo__añadir');
                botonPedir.textContent = 'Quitar'; // Cambiar texto
                botonPedir.classList.add('carrito-quitar'); // Cambia la clase o añade estilos directamente aquí
            }

            // Encontrar dónde añadir el platillo clonado
            const listaPlatillos = document.querySelector('.platillos__lista');

            // Añadir el platillo clonado a la lista
            listaPlatillos.appendChild(platilloClonado);
        });
    });


});
