document.addEventListener('DOMContentLoaded', function () {
    // Función para sumar y mostrar el costo total
    const calcularCostoTotal = function () {
        let precios = document.querySelectorAll('.carritos .platillos__lista .platillo__precio .precio'); // Seleccionar todos los precios
        let suma = 0; // Inicializar suma

        // Sumar todos los precios
        precios.forEach(function (precio) {
            suma += parseFloat(precio.textContent) || 0; // Asegúrate de convertir el texto a número
        });

        // Encontrar el elemento donde mostrar el costo total
        const costoTotalElemento = document.querySelector('.carrito__costo span');

        // Actualizar el costo total
        if (costoTotalElemento) {
            costoTotalElemento.innerHTML = suma; // Mostrar suma como un número fijo de dos decimales
        }
    };

    // Llamar a la función para calcular el costo total
    calcularCostoTotal();
    // También puedes llamar a calcularCostoTotal() cada vez que se añade o elimina un platillo, o su precio cambia
});
