// Перший Swiper (фото, autoplay)
var photoSwiper = new Swiper(".photoSwiper", {
    loop: true,                        // Безкінечний цикл
    autoplay: {
        delay: 3000,                   // Змінює слайд кожні 3 секунди
        disableOnInteraction: false,   // Продовжує автоплей після взаємодії
    },
    simulateTouch: true,               // Додає можливість перетягувати фото мишкою
    spaceBetween: 100,                 // Відстань між слайдами (у пікселях)
});

// Другий Swiper (відгуки, пагінація)
var reviewSwiper = new Swiper(".reviewSwiper", {
    loop: true,
    spaceBetween: 100,
    pagination: {
        el: ".reviewSwiper .swiper-pagination",
        clickable: true,               // Пагінація буде клікабельною
    },
});