window.addEventListener('DOMContentLoaded', () => {
    const imagePath = 'images/'; 
    const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

    const randomImageName = imageNames[Math.floor(Math.random() * imageNames.length)];

    const imgElement = document.createElement('img');
    imgElement.src = imagePath + randomImageName;
    imgElement.alt = "Random Image";

    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imgElement);
});