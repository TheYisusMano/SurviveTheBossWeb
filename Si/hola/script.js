document.addEventListener('DOMContentLoaded', () => {
    // Galería de imágenes
    const sliderImage = document.getElementById('slider-image');
    const prevImageBtn = document.querySelector('#galeria .prev');
    const nextImageBtn = document.querySelector('#galeria .next');
    const images = [
        'jefe.png',
        'imagen2.jpg',
        'imagen3.jpg'
    ];
    let currentImageIndex = 0;

    function updateImage() {
        sliderImage.src = images[currentImageIndex];
        sliderImage.alt = `Imagen del juego ${currentImageIndex + 1}`;
    }

    prevImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % 