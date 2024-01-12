document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.btn-clave');
    const textToCopy = document.getElementById('clave');

    copyButton.addEventListener('click', function () {
        const textWithoutSpaces = textToCopy.textContent.replace(/\s/g, ''); // elimina espacios
        const textArea = document.createElement('textarea'); // crea un área de texto temporal
        textArea.value = textWithoutSpaces;
        document.body.appendChild(textArea);
        textArea.select(); // selecciona el texto del área de texto

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? '¡Texto copiado!' : 'No se pudo copiar el texto';
            alert(msg);
        } catch (err) {
            alert('Oops, no se pudo copiar');
        }

        document.body.removeChild(textArea); // elimina el área de texto temporal
    });
});
