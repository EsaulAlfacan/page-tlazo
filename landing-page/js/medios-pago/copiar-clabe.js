document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.btn-clave');
    const textToCopy = document.getElementById('clave');

    copyButton.addEventListener('click', function () {
        const range = document.createRange();
        range.selectNode(textToCopy);
        window.getSelection().removeAllRanges(); // quita cualquier selección existente
        window.getSelection().addRange(range); // selecciona el texto

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? '¡Texto copiado!' : 'No se pudo copiar el texto';
            alert(msg);
        } catch (err) {
            alert('Oops, no se pudo copiar');
        }

        window.getSelection().removeAllRanges(); // limpia la selección
    });
});
