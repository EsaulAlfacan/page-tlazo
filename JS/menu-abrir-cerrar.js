document.addEventListener('DOMContentLoaded', function () {
    // Elementos del menú
    const menuIcono = document.querySelector('.menu__icono');
    const cerrarBtn = document.querySelector('.menu__cerrar');
    const menu = document.querySelector('.menu ul');

    // Abrir el menú con el ícono
    menuIcono.addEventListener('click', function () {
        menu.classList.toggle('is-visible'); // Alternar la visibilidad de la lista
    });

    // Cerrar el menú con el botón de cerrar
    cerrarBtn.addEventListener('click', function () {
        menu.classList.remove('is-visible'); // Esto ocultará el menú
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        // Comprobar si se ha hecho clic fuera del menú y el clic no es el ícono de abrir menú
        if (!menu.contains(event.target) && !menuIcono.contains(event.target)) {
            menu.classList.remove('is-visible');
        }
    });
});
