// Obtener los elementos por sus identificadores o clases
const openBtn = document.getElementById('openEncuestaBtn');
const closeBtn = document.getElementById('closeEncuestaBtn');
const encuestaSection = document.getElementById('encuestaSection');

// Función para mostrar la encuesta
openBtn.addEventListener('click', function () {
    encuestaSection.classList.add('active'); // Añadir la clase 'active' para mostrar
});

// Función para ocultar la encuesta
closeBtn.addEventListener('click', function () {
    encuestaSection.classList.remove('active'); // Remover la clase 'active' para ocultar
});
