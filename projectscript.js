document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.stack__card');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
