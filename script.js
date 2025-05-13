document.addEventListener("DOMContentLoaded", () => {
    // Fade in animation
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

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
                "• Assist in custom battery pack manufacturing\n" +
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
            title: "Indusrial Grinding Research Project",
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
                "• Achieved reliable performance on complex paths\n"
        },
        gesture: {
            title: "Hand Gesture Control Device",
            description: "Innovative control system using ultrasonic technology:\n\n" +
                "• Developed real-time gesture recognition\n" +
                "• Implemented multiple control commands\n" +
                "• Created responsive user interface\n" +
                "• Achieved 90% gesture recognition accuracy\n"
        }
    };

    // Add click event listeners to all modal triggers
    document.querySelectorAll('[data-modal]').forEach(element => {
        element.addEventListener('click', () => {
            const modalId = element.getAttribute('data-modal');
            const data = modalData[modalId];
            if (data) {
                modalTitle.textContent = data.title;
                modalDescription.innerHTML = data.description.replace(/\n/g, '<br>');
                modalContainer.style.display = 'block';
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
}); 
