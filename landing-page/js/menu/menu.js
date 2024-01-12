document.addEventListener("DOMContentLoaded", function () {
    const hamburguesa = document.querySelector(".hamburguesa");
    const lista = document.querySelector(".lista");

    hamburguesa.addEventListener("click", function () {
        lista.classList.toggle("show");

        // Cambia el icono de hamburguesa a "x" cuando se activa
        hamburguesa.textContent = lista.classList.contains("show") ? "✕" : "☰";
    });

    // Cierra el menú al hacer clic en un enlace (puedes ajustar esto según tus necesidades)
    lista.querySelectorAll(".link").forEach(function (enlace) {
        enlace.addEventListener("click", function () {
            lista.classList.remove("show");
            // Restaura el icono de hamburguesa a "☰" cuando se cierra el menú
            hamburguesa.textContent = "☰";
        });
    });
});
