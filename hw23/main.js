const textInput = document.getElementById('textInput');
const customDiv = document.getElementById('customDiv');

textInput.addEventListener('focus', () => {
    customDiv.style.display = 'block';
});

textInput.addEventListener('blur', () => {
    customDiv.style.display = 'none';
});