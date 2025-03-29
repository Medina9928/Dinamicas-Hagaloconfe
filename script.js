document.getElementById('payButton').addEventListener('click', function() {
    const selectedQuantity = document.querySelector('input[name="quantity"]:checked').value;
    const message = `Hola, me interesa participar en la rifa con la cantidad de ${selectedQuantity} números.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573024990764&text=${encodeURIComponent(message)}`;
    
    // Redirigir al enlace de WhatsApp
    window.open(whatsappUrl, '_blank');
});

document.getElementById('checkNumbersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactInfo = event.target.contact.value;
    alert(`Buscando números para: ${contactInfo}`);
});