document.addEventListener("DOMContentLoaded", function () {
    const contenedorCarrusel = document.querySelector(".contenedor-carrusel");
    const slides = document.querySelectorAll(".slide");
    const btnIzquierda = document.getElementById("izquierda");
    const btnDerecha = document.getElementById("derecha");
    let index = 0;
    let intervalo;

    btnDerecha.addEventListener("click", function () {
        detenerAutoCambio();
        index = (index < slides.length - 1) ? index + 1 : 0;
        actualizarCarrusel();
        iniciarAutoCambio();
    });

    btnIzquierda.addEventListener("click", function () {
        detenerAutoCambio();
        index = (index > 0) ? index - 1 : slides.length - 1;
        actualizarCarrusel();
        iniciarAutoCambio();
    });

    function actualizarCarrusel() {
        const desplazamiento = -index * 100 + "%";
        slides.forEach(slide => {
            slide.style.transform = "translateX(" + desplazamiento + ")";
        });
    }

    function iniciarAutoCambio() {
        intervalo = setInterval(function () {
            index = (index < slides.length - 1) ? index + 1 : 0;
            actualizarCarrusel();
        }, 3000);
    }

    function detenerAutoCambio() {
        clearInterval(intervalo);
    }

    // Iniciar el cambio automático al cargar la página
    iniciarAutoCambio();

    // Detener el cambio automático al interactuar con los botones de navegación
    btnDerecha.addEventListener("mousedown", detenerAutoCambio);
    btnIzquierda.addEventListener("mousedown", detenerAutoCambio);
});
