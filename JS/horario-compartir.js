document.getElementById('shareIcon').addEventListener('click', function (event) {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).then(() => {
            console.log('Gracias por compartir!');
        })
            .catch(console.error);
    } else {
        // Web Share API is not available
        alert('La API de compartir no está disponible en tu navegador.');
    }
});
