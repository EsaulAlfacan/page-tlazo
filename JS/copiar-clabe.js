document.getElementById("CLABE").addEventListener("click", function () {
  // Encuentra el elemento que contiene el número CLABE
  const clabeElement = document.querySelector(".CLABE");
  if (clabeElement) {
    // Extrae el texto del elemento
    let clabeText = clabeElement.textContent || clabeElement.innerText;

    // Elimina las letras y los espacios del texto
    clabeText = clabeText.replace(/[^\d]/g, "");

    // Copia el texto limpio al portapapeles
    navigator.clipboard
      .writeText(clabeText)
      .then(() => {
        console.log("CLABE copiada al portapapeles: " + clabeText);
        // Opcional: Mostrar una notificación al usuario de que el texto ha sido copiado
        alert("CLABE copiada al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar la CLABE: ", err);
        // Opcional: Informar al usuario del error
        alert("Error al copiar la CLABE");
      });
  }
});
