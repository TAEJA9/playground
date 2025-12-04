document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. Dark Mode Logic
       ========================================= */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });


    /* =========================================
       2. Mobile Menu Logic
       ========================================= */
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }


    /* =========================================
       3. Project Modal Logic (Only on Projects Page)
       ========================================= */
    const projectModal = document.getElementById('project-modal');
    
    if (projectModal) {
        const closeModalBtn = projectModal.querySelector('.close-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');
        const openModalBtns = document.querySelectorAll('.open-modal');

        // Detailed Content Mock Data (In a real app, fetch from JSON/API)
        const projectDetails = {
            1: {
                title: "E-Commerce Dashboard",
                desc: "This dashboard allows store owners to track sales, manage inventory, and analyze customer behavior in real-time. Built with clean HTML/CSS and vanilla JavaScript for performance. Features include dark mode support, responsive data tables, and interactive charts."
            },
            2: {
                title: "Task Management App",
                desc: "A Kanban-style task manager. Users can create columns, drag and drop tasks, and assign labels. It uses LocalStorage to persist data between sessions, making it a handy tool for personal organization without a backend."
            },
            3: {
                title: "Portfolio Template",
                desc: "The very code you are looking at! A lightweight, accessible, and fast-loading portfolio template designed for developers. It scores 100/100 on Lighthouse performance metrics."
            },
            4: {
                title: "Weather Forecast API",
                desc: "Fetches live weather data using the OpenWeatherMap API. Displays current conditions, humidity, wind speed, and a 5-day forecast. Handles errors gracefully and features a location search with auto-complete."
            },
            5: {
                title: "Social Media Bot",
                desc: "A Python script (simulated here) that automates social media posts. The front-end interface allows users to schedule posts, view engagement stats, and manage multiple accounts from a single dashboard."
            },
            6: {
                title: "Fitness Tracker",
                desc: "A mobile-first web app for tracking workouts. Users can log sets, reps, and weights. It visualizes progress over time using SVG graphs and provides rest timers between sets."
            }
        };

        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.project-card');
                const projectId = card.getAttribute('data-id');
                const details = projectDetails[projectId];

                if (details) {
                    modalTitle.textContent = details.title;
                    modalDesc.textContent = details.desc;
                    // In a real app, update image src here too
                    projectModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        // Close Modal Functions
        const closeModal = () => {
            projectModal.classList.add('hidden');
            document.body.style.overflow = '';
        };

        closeModalBtn.addEventListener('click', closeModal);

        // Close when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });
        
        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }


    /* =========================================
       4. Contact Form Logic (Only on Contact Page)
       ========================================= */
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop actual submission

            // Basic Validation (already handled by 'required' attribute, but explicit check here)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Simulate API call
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    contactForm.reset();
                    formFeedback.textContent = "Thanks! Your message has been sent successfully.";
                    formFeedback.style.color = "var(--color-primary)";
                    
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Clear success message after a few seconds
                    setTimeout(() => {
                        formFeedback.textContent = "";
                    }, 5000);
                }, 1000);
            }
        });
    }

});
