document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');

    const projects = [
        {
            title: 'Project 6 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat purus eu augue auctor, et pulvinar quam aliquet.',
            image: 'project6.jpg'
        },
        {
            title: 'Project 7 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat purus eu augue auctor, et pulvinar quam aliquet.',
            image: 'project7.jpg'
        },
        {
            title: 'Project 8 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat purus eu augue auctor, et pulvinar quam aliquet.',
            image: 'project8.jpg'
        },
        {
            title: 'Project 9 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat purus eu augue auctor, et pulvinar quam aliquet.',
            image: 'project9.jpg'
        },
        {
            title: 'Project 10 Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat purus eu augue auctor, et pulvinar quam aliquet.',
            image: 'project10.jpg'
        },
    ];

    const loadMoreProjects = () => {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <div class="project-text">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                </div>
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    };

    let loading = false;

    const handleScroll = () => {
        if (loading) return;
        if (projectsContainer.scrollTop + projectsContainer.clientHeight >= projectsContainer.scrollHeight) {
            loading = true;
            setTimeout(() => {
                loadMoreProjects();
                loading = false;
            }, 500);
        }
    };

    projectsContainer.addEventListener('scroll', handleScroll);
});


document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('bouncingIcon');
    const hint = document.getElementById('hint');
    let bouncing = false;
    let intervalId;

    const toggleBounce = () => {
        if (bouncing) {
            clearInterval(intervalId);
            icon.style.animation = 'none';
        } else {
            intervalId = setInterval(() => {
                const newX = Math.random() * (window.innerWidth - icon.width);
                const newY = Math.random() * (window.innerHeight - icon.height);
                icon.style.transform = `translate(${newX}px, ${newY}px)`;
            }, 1000);
            icon.style.animation = 'bounce 1s infinite';
        }
        bouncing = !bouncing;
    };

    icon.addEventListener('click', toggleBounce);

    // Automatically toggle bounce every 5 seconds
    setInterval(toggleBounce, 5000);

    // Update the clock and timezone
    function updateClock() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const timeString = now.toLocaleTimeString([], options);
        const timezoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;

        document.getElementById('clock').textContent = timeString;
        document.getElementById('timezone').textContent = timezoneString;
    }

    setInterval(updateClock, 1000);

    // Password checking
    const correctPassword = "password";
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (e.target.value === correctPassword) {
                window.location.href = "index.html"; // Redirect to the main portfolio page
            } else {
                alert("Incorrect password. Try again.");
            }
        }
    });

    // Hint fading in and out
    let opacity = 1;
    let fading = true;
    setInterval(() => {
        if (fading) {
            opacity -= 0.05;
            if (opacity <= 0) {
                fading = false;
            }
        } else {
            opacity += 0.05;
            if (opacity >= 1) {
                fading = true;
            }
        }
        hint.style.opacity = opacity;
    }, 100);
});

