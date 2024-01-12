document.addEventListener("DOMContentLoaded", function () {
    const testimoniosContainer = document.getElementById("testimonios-container");
    const btnIzquierda = document.querySelector(".botones-testimonios .flecha-izq");
    const btnDerecha = document.querySelector(".botones-testimonios .flecha-der");

    let testimonioIndex = 0;

    function mostrarTestimonio(index) {
        const testimonios = document.querySelectorAll('.testimonio');
        testimonios.forEach(testimonio => testimonio.style.transform = `translateX(-${index * 100}%)`);
    }

    function cambiarTestimonio(direccion) {
        testimonioIndex += direccion;
        const testimonios = document.querySelectorAll('.testimonio');
        if (testimonioIndex < 0) {
            testimonioIndex = testimonios.length - 1;
        } else if (testimonioIndex >= testimonios.length) {
            testimonioIndex = 0;
        }
        mostrarTestimonio(testimonioIndex);
    }

    btnIzquierda.addEventListener("click", () => cambiarTestimonio(-1));
    btnDerecha.addEventListener("click", () => cambiarTestimonio(1));

    mostrarTestimonio(testimonioIndex);
});
