// Анимация при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Мобильное меню
const mobileMenu = document.getElementById('mobileMenu');
document.querySelector('nav button').addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

document.getElementById('closeMenu').addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});