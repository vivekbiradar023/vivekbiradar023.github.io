document.addEventListener("DOMContentLoaded", () => {
    // Add cursor effect div to hero section
    const hero = document.querySelector('.hero');
    const cursorEffect = document.createElement('div');
    cursorEffect.className = 'cursor-effect';
    hero.appendChild(cursorEffect);

    // Handle cursor movement
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        hero.style.setProperty('--cursor-x', `${x}%`);
        hero.style.setProperty('--cursor-y', `${y}%`);
    });

    // Handle touch movement for mobile
    hero.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const rect = hero.getBoundingClientRect();
        const touch = e.touches[0];
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;
        
        hero.style.setProperty('--cursor-x', `${x}%`);
        hero.style.setProperty('--cursor-y', `${y}%`);
    });

    // Fade in animation for sections
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => observer.observe(section));

    // Modal functionality
    const modalContainer = document.getElementById("modalContainer");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-btn");

    // Modal content data
    const modalData = {
        // Experience modals
        suind: {
            title: "SUIND Pvt Ltd",
            description: "At SUIND Pvt Ltd, I gained hands-on experience in drone technology. Key responsibilities included:\n\n" +
                "• Assembly and testing of various drone components\n" +
                "• Circuit troubleshooting and maintenance\n" +
                "• Quality control and performance testing\n" +
                "• Documentation of assembly procedures\n" +
                "• Collaboration with the R&D team for product improvements"
        },
        vecros: {
            title: "Vecros Technologies",
            description: "During my time at Vecros Technologies, I focused on drone design using Fusion 360. Achievements include:\n\n" +
                "• Created modular drone components for easy assembly and maintenance\n" +
                "• Optimized designs for weight reduction and improved aerodynamics\n" +
                "• Collaborated with manufacturing team for design feasibility\n" +
                "• Implemented design improvements based on testing feedback"
        },
        eleation: {
            title: "ELEATION",
            description: "At ELEATION, I specialized in CAD design and animation. Key projects included:\n\n" +
                "• Created detailed 3D models using Creo\n" +
                "• Developed animations for product demonstrations\n" +
                "• Produced high-quality renderings for marketing materials\n" +
                "• Optimized designs for manufacturability"
        },
        hal: {
            title: "HAL ARDC",
            description: "At Hindustan Aeronautics Limited Aerospace Research and Development Centre, I gained valuable exposure to:\n\n" +
                "• Aerospace design principles and methodologies\n" +
                "• Manufacturing processes in aviation industry\n" +
                "• Quality control standards in aerospace\n" +
                "• Technical documentation and compliance"
        },
        // Project modals
        scanner: {
            title: "3D Scanner Development",
            description: "An innovative project combining hardware and software for 3D scanning:\n\n" +
                "• Utilized ESP32 microcontroller for data acquisition\n" +
                "• Implemented Python for point cloud processing\n" +
                "• Developed real-time visualization system\n" +
                "• Achieved accuracy within 2mm for small objects\n" +
                "• Created user-friendly interface for scan control"
        },
        grinding: {
            title: "Grinding Research Project",
            description: "Advanced research in CNC grinding techniques:\n\n" +
                "• Studied adaptive grinding methodologies\n" +
                "• Developed optimization algorithms for surface finish\n" +
                "• Analyzed material removal rates\n" +
                "• Implemented process control improvements\n" +
                "• Documented research findings and recommendations"
        },
        robot: {
            title: "Line Follower Robot",
            description: "Autonomous robot project with advanced tracking capabilities:\n\n" +
                "• Designed using QTR sensors for precise line detection\n" +
                "• Programmed Arduino for path optimization\n" +
                "• Implemented PID control for smooth movement\n" +
                "• Achieved reliable performance on complex paths\n" +
                "• Added obstacle detection features"
        },
        gesture: {
            title: "Hand Gesture Control Device",
            description: "Innovative control system using ultrasonic technology:\n\n" +
                "• Developed real-time gesture recognition\n" +
                "• Implemented multiple control commands\n" +
                "• Created responsive user interface\n" +
                "• Achieved 95% gesture recognition accuracy\n" +
                "• Added customizable gesture mapping"
        }
    };

    // Add click event listeners to all modal triggers
    document.querySelectorAll('[data-modal]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = element.getAttribute('data-modal');
            const data = modalData[modalId];
            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.innerHTML = data.description.replace(/\n/g, '<br>');
                modalContainer.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            closeModal();
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalContainer.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modalContainer.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 
