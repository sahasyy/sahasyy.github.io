document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();

    const links = document.querySelectorAll('.link');

    links.forEach(link => {
        const originalText = link.textContent;
        const hoverText = link.getAttribute('data-hover');

        link.addEventListener('mouseover', () => {
            link.querySelector('span').textContent = hoverText;
        });

        link.addEventListener('mouseout', () => {
            link.querySelector('span').textContent = originalText;
        });

        link.addEventListener('click', () => {
            switch (hoverText) {
                case 'ABOUT-->':
                    window.location.href = 'about.html';
                    break;
                case 'PROJECTS-->':
                    window.location.href = 'projects.html';
                    break;
                case 'TIMELINE-->':
                    window.location.href = 'timeline.html';
                    break;
                case 'CONTACT-->':
                    window.location.href = 'contact.html';
                    break;
            }
        });
    });
});
