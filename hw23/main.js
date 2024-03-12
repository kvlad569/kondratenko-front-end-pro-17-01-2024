document.addEventListener("DOMContentLoaded", function(event) {
    const textField = document.getElementById('textField');
    const messageDiv = document.getElementById('message');

    // Показуємо div
    textField.addEventListener('focus', function() {
        messageDiv.style.display = 'block';
    });

    // Ховаємо div
    textField.addEventListener('blur', function() {
        messageDiv.style.display = 'none';
    });
});