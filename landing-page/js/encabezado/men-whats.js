document.addEventListener("DOMContentLoaded", function () {
    const btnAdquirirServicio = document.querySelector(".btn-accion");

    btnAdquirirServicio.addEventListener("click", function () {
        // Reemplaza el número de teléfono y el mensaje con tus valores
        const telefono = "123456789";  // Cambia por el número de teléfono al que deseas enviar el mensaje
        const mensaje = "¡Hola! Estoy interesado en adquirir tu servicio.";

        // Genera el enlace de WhatsApp con el número y el mensaje
        const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        // Abre una nueva ventana o pestaña con el enlace de WhatsApp
        window.open(enlaceWhatsApp, "_blank");
    });
});