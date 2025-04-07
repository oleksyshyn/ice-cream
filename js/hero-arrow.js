const button = document.getElementById('hero-arrow-btn');
const text = document.getElementById('hero-text');
const arrow= document.getElementById('arrow');

button.addEventListener('click', function () {
    text.classList.toggle('show');
    arrow.classList.toggle('rotate');
  });