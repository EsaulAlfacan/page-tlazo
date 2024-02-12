document.getElementById('btn__submit').addEventListener('click', function (event) {
    event.preventDefault();  // Prevenir la recarga de la página o comportamiento predeterminado del formulario

    // Recoger los valores de los inputs de radio para cada pregunta
    const calificacionInstalaciones = document.querySelector('input[name="calificacionInstalaciones"]:checked')?.value || '';
    const calificacionServicio = document.querySelector('input[name="calificacionServicio"]:checked')?.value || '';
    const calificacionComida = document.querySelector('input[name="calificacionComida"]:checked')?.value || '';

    // Recoger el texto del área de texto
    const recomendaciones = document.getElementById('recomendacion').value.trim();

    // Verificar si todos los datos requeridos están presentes
    if (!calificacionInstalaciones || !calificacionServicio || !calificacionComida || !recomendaciones) {
        alert("Por favor, completa todos los campos de la encuesta.");
        return; // Detener la función aquí si hay datos faltantes
    }

    // Crear el mensaje
    const mensaje = 'ENCUESTA DE SERVICIO AL CLIENTE\n' + '\n' +
        `Calificación de Instalaciones: ${calificacionInstalaciones}\n` +
        `Calificación del Servicio: ${calificacionServicio}\n` +
        `Calificación de las playeras: ${calificacionComida}\n` +
        `Recomendaciones: ${recomendaciones}` + '\n' + '\n' +
        '¡Gracias! Por sus observaciones.\n';

    // Codificar el mensaje para URL
    const mensajeURI = encodeURIComponent(mensaje);

    // Redirigir a WhatsApp
    // Cambiar 'YOURNUMBER' con tu número de WhatsApp en formato internacional sin '+', por ejemplo, "1234567890"
    const whatsappURL = `https://api.whatsapp.com/send?phone=5573973302&text=${mensajeURI}`;
    window.open(whatsappURL, '_blank');
});
