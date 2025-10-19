// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        body.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    // Toggle theme function
    function toggleTheme() {
        const isDark = body.classList.contains('dark');

        if (isDark) {
            body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // Add click event listener to toggle button
    darkModeToggle.addEventListener('click', toggleTheme);

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 0,
        anchorPlacement: 'top-bottom'
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth < 768) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Scroll spy for navigation highlighting
    const allSections = document.querySelectorAll('section[id]');
    const desktopNavLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100; // Offset for navbar height

        allSections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                // Remove active class from all links
                desktopNavLinks.forEach(link => {
                    link.classList.remove('text-primary', 'font-semibold');
                    link.classList.add('text-gray-700', 'dark:text-slate-300');
                });

                mobileNavLinks.forEach(link => {
                    link.classList.remove('text-primary', 'font-semibold');
                    link.classList.add('text-gray-700', 'dark:text-slate-300');
                });

                // Add active class to current link
                const activeDesktopNavLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                const activeMobileNavLink = document.querySelector(`.mobile-nav-link[data-section="${sectionId}"]`);

                if (activeDesktopNavLink) {
                    activeDesktopNavLink.classList.remove('text-gray-700', 'dark:text-slate-300');
                    activeDesktopNavLink.classList.add('text-primary', 'font-semibold');
                }

                if (activeMobileNavLink) {
                    activeMobileNavLink.classList.remove('text-gray-700', 'dark:text-slate-300');
                    activeMobileNavLink.classList.add('text-primary', 'font-semibold');
                }
            }
        });
    }

    // Throttle scroll events for better performance
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial call to set active link on page load
    updateActiveNavLink();

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle contact form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = formData.get('nama') || formData.get('name');
        const email = formData.get('email');
        const message = formData.get('pesan') || formData.get('message');

        // Simple validation
        if (!name || !email || !message) {
            alert('Silakan lengkapi semua field!');
            return;
        }

        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Mengirim...';
        submitButton.disabled = true;

        setTimeout(() => {
            alert('Terima kasih! Pesan Anda telah dikirim.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1000);
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const fallback = document.getElementById('profile-fallback') || document.getElementById('about-profile-fallback');
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });
    });
});
