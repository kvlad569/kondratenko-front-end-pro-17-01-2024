document.addEventListener('DOMContentLoaded', function () {
    const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'];
    let currentImageIndex = 0;
    const imageElement = document.querySelector('.slider-image');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
  
    function toggleButtonsVisibility() {
      if (currentImageIndex === 0) {
        prevButton.style.display = 'none';
      } else {
        prevButton.style.display = 'block';
      }
      if (currentImageIndex === images.length - 1) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'block';
      }
    }
  
    function initializeSlider() {
      imageElement.src = images[currentImageIndex];
      toggleButtonsVisibility();
    }
  
    function showPrevImage() {
      if (currentImageIndex > 0) {
        currentImageIndex--;
        imageElement.src = images[currentImageIndex];
        toggleButtonsVisibility();
      }
    }
  
    function showNextImage() {
      if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        imageElement.src = images[currentImageIndex];
        toggleButtonsVisibility();
      }
    }
  
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
  
    initializeSlider();
  });