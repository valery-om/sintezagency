document.addEventListener('DOMContentLoaded', () => {
    // === Theme Switcher Logic ===
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        html.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'light') {
            html.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // === Sticky Header on Scroll ===
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // === Parallax Effect for Hero ===
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < 1000) { // Performance optimization
                hero.style.transform = `translateY(${scrolled * 0.2}px)`;
                // Manually adjusting opacity if needed, currently handled by CSS fades
            }
        });
    }

    // === Number Counter Animation ===
    function animateCounter(element, target, suffix = '') {
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        const increment = target / totalFrames;

        let current = 0;
        let frame = 0;

        const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out quart function
            const ease = 1 - Math.pow(1 - progress, 4);

            current = target * ease;

            if (frame === totalFrames) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, frameDuration);
    }

    // === Trigger counters when in viewport ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.dataset.target || entry.target.textContent;

                // Logic to extract numbers and formats
                // Simplified for robustness: relying on data attributes often better, 
                // but keeping original logic structure for compatibility

                if (text.includes('+') && text.includes('%')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '%');
                } else if (text.includes('×')) {
                    entry.target.textContent = '×2'; // Simple text replacement for small numbers
                } else if (text.includes('ТОП')) {
                    entry.target.textContent = 'ТОП-3';
                } else if (text.includes('+')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '+');
                } else if (text.includes('%')) {
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(entry.target, num, '%');
                } else {
                    // Default number fallback
                    const num = parseInt(text.replace(/[^0-9]/g, ''));
                    if (!isNaN(num)) animateCounter(entry.target, num);
                }
            }
        });
    }, observerOptions);

    const counterElements = document.querySelectorAll('.result-number');
    counterElements.forEach(el => counterObserver.observe(el));


    // === Intersection Observer for Scroll Fade In ===
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on visual order if possible, 
                // or just simple timeout
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    // Stop observing once visible to save performance
                    fadeObserver.unobserve(entry.target);
                }, 100);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.problem-card, .service-item, .investment-card, .action-item');
    animatedElements.forEach(el => fadeObserver.observe(el));


    // === Services Interaction (Hybrid Tabs/Accordion) ===
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        const header = card.querySelector('.service-header');

        header.addEventListener('click', (e) => {
            // Prevent default if it was a link (safety)
            e.preventDefault();

            // If it's desktop grid layout
            if (window.innerWidth > 968) {
                // Remove active class from all cards
                serviceCards.forEach(c => c.classList.remove('active'));
                // Add to current
                card.classList.add('active');
            }
            // If it's mobile accordion
            else {
                // If clicking an already active card, close it (optional behavior, let's keep it toggle-like)
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                } else {
                    // Close others (accordion style) or keep open? 
                    // Let's standard accordion: close others
                    serviceCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            }
        });
    });

    // Optional: Auto-select first tab on resize to desktop if none active
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            const hasActive = document.querySelector('.service-card.active');
            if (!hasActive && serviceCards.length > 0) {
                serviceCards[0].classList.add('active');
            }
        }
    });  // === Smooth Scroll to Anchors ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only process internal links that are valid selectors
            if (href.length > 1 && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
