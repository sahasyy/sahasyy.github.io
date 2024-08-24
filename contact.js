function toggleImage(element) {
    const images = element.querySelectorAll('img');
    images.forEach(img => {
        img.classList.toggle('hidden');
    });
}
