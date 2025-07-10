document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-anim]');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-up');
            el.classList.remove('initial-hidden');
        }, index * 150);
    });
});