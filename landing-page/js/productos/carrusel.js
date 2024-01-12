document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.getElementById('carrusel');
    let scrollStep = carrusel.scrollWidth / carrusel.children.length;
    let scrollPos = 0;

    setInterval(() => {
        if (scrollPos < carrusel.scrollWidth - scrollStep) {
            scrollPos += scrollStep;
        } else {
            scrollPos = 0;
        }
        carrusel.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
    }, 3000); // Cambia la imagen cada 3 segundos
});
