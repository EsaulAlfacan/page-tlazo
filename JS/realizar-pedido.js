function formatCart() {
    // Example: Clear the contents of platillos__lista
    document.querySelector('.platillos__lista').innerHTML = '';
    // Add any other formatting tasks here
}

document.querySelector('.carrito-pedir').addEventListener('click', function () {
    // Get all the articles in the platillos__lista div
    let articles = document.querySelectorAll('.platillos__lista article');
    let messageParts = ['Hola! Quisiera pedir los siguientes platillos:' + '\n' + '\n'];

    // Loop through each article and add details to the message parts
    articles.forEach(article => {
        // Select the platillo__detalles div within the article
        let detalles = article.querySelector('.platillo__detalles');
        // Add the text content of the detalles div, if it exists
        if (detalles) {
            messageParts.push(`♦ ${detalles.textContent.trim()}` + '\n' + '\n'); // Trim to remove extra whitespace
        }
    });

    // Join the parts of the message with no additional separator (already included as %0a)
    let message = messageParts.join('');

    // Construct the WhatsApp URL
    let whatsappUrl = `https://api.whatsapp.com/send?phone=7752091646&text=${encodeURIComponent(message)}`;

    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');

    // Format the cart after sending the message
    formatCart();
});