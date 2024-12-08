// Slideshow functionality for Projects page
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
};
document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
showSlide(currentSlide);

// Form validation for Contact page
document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#message');
    const messageError = document.querySelector('#messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message cannot be empty.';
        messageError.style.color = 'red';
    } else {
        messageError.textContent = '';
        alert('Form submitted successfully!');
    }
});

