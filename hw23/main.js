const inputField = document.getElementById('inputField');
const notificationDiv = document.getElementById('notification');

inputField.addEventListener('focus', () => {
  notificationDiv.style.display = 'block';
});

inputField.addEventListener('blur', () => {
  notificationDiv.style.display = 'none';
});