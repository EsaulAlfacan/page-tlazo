document.addEventListener('DOMContentLoaded', function () {
    // Select the button and input
    const searchButton = document.querySelector('.menu__buscar');
    const searchInput = document.querySelector('.menu__buscador');

    // Add an event listener to the button
    searchButton.addEventListener('click', function () {
        // Toggle the display style
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'block'; // Show the input
        } else {
            searchInput.style.display = 'none'; // Hide the input
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the input and container of items to filter
    const searchInput = document.querySelector('.menu__buscador');
    const platillosContainer = document.querySelector('.platillos');

    searchInput.addEventListener('input', function () {
        // Get the current value of the input field
        const searchText = searchInput.value.toLowerCase();

        // Get all items
        const platillos = platillosContainer.querySelectorAll('.platillo');

        // Loop through all items
        platillos.forEach(function (platillo) {
            // Check if the item's text includes the search text
            const match = platillo.textContent.toLowerCase().includes(searchText);

            // Toggle the visibility of the item
            platillo.style.display = match ? '' : 'none';
        });
    });
});
