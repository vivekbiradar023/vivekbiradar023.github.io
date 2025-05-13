document.addEventListener("DOMContentLoaded", () => {
    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    // Store scroll position when opening modal
    let scrollPosition = 0;

    // Navbar sticky behavior
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.scrollY >= heroBottom) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
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
                "• Created user-friendly interface for scan control"
        },
        grinding: {
            title: "Industrial Grinding Research Project",
            description: "Advanced research in CNC grinding techniques:\n\n" +
                "• Studied adaptive grinding methodologies\n" +
                "• Analyzed material removal rates\n" +
                "• Documented research findings and recommendations"
        },
        robot: {
            title: "Line Follower Robot",
            description: "Autonomous robot project with advanced tracking capabilities:\n\n" +
                "• Designed using QTR sensors for precise line detection\n" +
                "• Programmed Arduino for path optimization\n" +
                "• Implemented PID control for smooth movement\n" +
                "• Achieved reliable performance on complex paths"
        },
        gesture: {
            title: "Hand Gesture Control Device",
            description: "Innovative control system using ultrasonic technology:\n\n" +
                "• Developed real-time gesture recognition\n" +
                "• Implemented multiple control commands\n" +
                "• Created responsive user interface\n" +
                "• Achieved 90% gesture recognition accuracy"
        }
    };

    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.innerHTML = description.replace(/\n/g, '<br>');
        
        // Show modal
        modalContainer.style.display = 'block';
        
        // Prevent background scrolling while keeping position
        document.body.classList.add('modal-open');
        
        // Add animation
        requestAnimationFrame(() => {
            modalContainer.style.opacity = '1';
            const modalElement = modalContainer.querySelector('.modal');
            if (modalElement) {
                modalElement.style.transform = 'translate(-50%, -50%)';
                modalElement.style.opacity = '1';
            }
        });
    }

    function closeModal() {
        const modalElement = modalContainer.querySelector('.modal');
        
        // Start fade out animation
        if (modalElement) {
            modalElement.style.transform = 'translate(-50%, -45%)';
            modalElement.style.opacity = '0';
        }
        modalContainer.style.opacity = '0';

        // Hide modal after animation
        setTimeout(() => {
            modalContainer.style.display = 'none';
            document.body.classList.remove('modal-open');
        }, 300);
    }

    // Add click event listeners to all modal triggers
    document.querySelectorAll('[data-modal]').forEach(element => {
        element.addEventListener('click', () => {
            const modalId = element.getAttribute('data-modal');
            const data = modalData[modalId];
            if (data) {
                openModal(data.title, data.description);
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

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

    // Smooth scroll for navigation links with offset for sticky navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
