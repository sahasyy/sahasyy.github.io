// Terminal Command Data
const terminalCommands = [
    { text: 'Loading system modules...', delay: 500 },
    { text: 'Initializing portfolio interface...', delay: 800 },
    { text: 'Establishing connection...', delay: 600 },
    { text: 'Access granted.', delay: 400 },
    { text: '', delay: 300 },
    { text: '> echo "Welcome to my portfolio, wait for this to load through"', delay: 100 },
    { text: '> whoami', delay: 800 },
    { text: 'Sahas Sharma', delay: 100 },
    { text: '', delay: 300 },
    { text: '> cat skills.json', delay: 800 },
    { text: '{', delay: 100 },
    { text: '  "frontend": ["React", "Next.js", "TypeScript", "JavaScript"],', delay: 100 },
    { text: '  "backend": ["Python", "TensorFlow", "PyTorch", "FastAPI"],', delay: 100 },
    { text: '}', delay: 100 },
    { text: '', delay: 300 },
    { text: '> ls projects/', delay: 800 },
    { text: 'neurovision/  fingertip-fluency/  securecheck/', delay: 100 },
    { text: '> echo "Just Keep Scrolling! scrolling scrolling, what do we do, we scroll!"', delay: 100 }
];

// Project Data
const projects = [
    {
        title: "NeuroVision",
        description: "Leveraging a hybrid CNN-GNN model to classify EEG signals, enhancing seizure detection and advancing epilepsy diagnostics.",
        tech: ["Python", "PyTorch", "OpenCV", "PhysioNet"],
        award: "1st Place Award",
        github: "https://github.com/sahasyy/NeuroVision"
    },
    {
        title: "Fingertip Fluency",
        description: "Utilized conformers, Fingertip Fluency converts ASL fingerspelling into text, advancing accessibility for the Deaf community.",
        tech: ["Python", "TensorFlow", "MediaPipe", "ChicagoFSWild"],
        award: "1st Place Award",
        github: "https://github.com/sahasyy/fingertip_fluency_base"
    },
    {
        title: "SecureCheck",
        description: "Employs advanced AI for fraud detection, integrating credit card analysis, scammer voice detection, and textual fraud assessment for seamless user experience.",
        tech: ["Python", "JavaScript", "Flask", "Whispr API"],
        award: "1st Place @ Hackathon",
        github: "https://github.com/sahasyy/SecureCheck"
    }
];

// Interests Data
const interests = [
    {
        title: "Art & Painting",
        description: "In my free time i draw sketches or even paint, i have a couple pieces painted and hung up on my walls.",
        tools: ["Pencil", "Watercolor", "Traditional Acrylics"],
        highlight: "\"Painters understand nature and love her and teach us to see.\" - Vincent Van Gogh"
    },
    {
        title: "Poetry & Creative Writing",
        description: "Writing honeslty is just me experimenting with words that i resonate with during a certain period i am in, highs and lows.",
        tools: ["Ethos", "Escape", "Emotion"],
        highlight: " \"Tell me every terrible thing you ever did, and let me love you anyway.\" - Edgar Allen Poe" 
    }
];

// Helper Functions
function getSkillColor(skill) {
    if (skill.includes('React') || skill.includes('Type') || skill.includes('Next') || skill.includes('Three')) {
        return 'blue';
    } else if (skill.includes('Python') || skill.includes('Torch') || skill.includes('Tensor') || skill.includes('OpenCV')) {
        return 'green';
    }
    return 'orange';
}

function createCommandLine(text) {
    const line = document.createElement('div');
    line.className = 'command-line';

    if (text.includes('Sahas Sharma')) {
        line.innerHTML = `<span class="gradient-text" style="font-weight: bold;">${text}</span>`;
    } else if (text.startsWith('>')) {
        line.innerHTML = `
            <span class="command-prefix">sahas@portfolio</span>
            <span class="command-separator">:</span>
            <span class="command-path">~</span>
            <span class="command-separator">$</span>
            <span class="command-text">${text.slice(2)}</span>
        `;
    } else {
        line.textContent = text;
    }
    
    return line;
}

// Terminal Animation
let currentCommandIndex = 0;
const terminalContent = document.getElementById('terminal-content');
const aboutSection = document.getElementById('about-section');
const projectsSection = document.getElementById('projects-section');
const interestsSection = document.getElementById('interests-section');

function typeNextCommand() {
    if (currentCommandIndex < terminalCommands.length) {
        const command = terminalCommands[currentCommandIndex];
        const line = createCommandLine(command.text);
        terminalContent.appendChild(line);
        terminalContent.scrollTop = terminalContent.scrollHeight;
        currentCommandIndex++;
        
        setTimeout(typeNextCommand, command.delay);
    } else {
        // Show other sections when typing is complete
        showSections();
    }
}

// Populate Projects
function populateProjects() {
    const projectsSection = document.getElementById('projects-section');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                   class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `
                    <span class="tech-tag ${getSkillColor(tech)}">${tech}</span>
                `).join('')}
            </div>
            <div class="award">
                <i class="fas fa-trophy" style="color: #fcd34d;"></i>
                <span class="award-text">${project.award}</span>
            </div>
        `;
        
        projectsSection.appendChild(projectCard);
    });
}

// Populate Interests
function populateInterests() {
    const interestsGrid = document.getElementById('interests-grid');
    
    interests.forEach(interest => {
        const interestCard = document.createElement('div');
        interestCard.className = 'interest-card';
        
        interestCard.innerHTML = `
            <h3 class="interest-title">${interest.title}</h3>
            <p class="project-description">${interest.description}</p>
            <div class="tools-stack">
                ${interest.tools.map(tool => `
                    <span class="tool-tag">${tool}</span>
                `).join('')}
            </div>
            <p class="interest-highlight">${interest.highlight}</p>
        `;
        
        interestsGrid.appendChild(interestCard);
    });
}

// Show sections after typing is complete
function showSections() {
    aboutSection.classList.remove('hidden');
    projectsSection.classList.remove('hidden');
    interestsSection.classList.remove('hidden');
    
    populateProjects();
    populateInterests();
}

// Start the terminal animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    typeNextCommand();
});