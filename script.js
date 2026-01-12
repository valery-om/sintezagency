document.addEventListener('DOMContentLoaded', () => {
    // === Theme Switcher Logic (iOS Toggle) ===
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        html.setAttribute('data-theme', 'light');
        themeToggle.checked = false; // Light theme = unchecked (sun side)
    } else {
        themeToggle.checked = true; // Dark theme = checked (moon side)
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Dark theme
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Light theme
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // === Language Switcher Logic ===
    const langToggle = document.getElementById('lang-toggle');
    const savedLang = localStorage.getItem('language') || 'ru';

    // Set initial state
    if (savedLang === 'en') {
        langToggle.checked = true;
        translatePage('en');
    } else {
        langToggle.checked = false;
    }

    langToggle.addEventListener('change', () => {
        const newLang = langToggle.checked ? 'en' : 'ru';
        localStorage.setItem('language', newLang);
        translatePage(newLang);
    });

    // === Translation System ===
    const translations = {
        ru: {
            brand: "SINTEZ AGENCY",
            heroTitle: "Маркетинг для стоматологий,<br>который приносит <span class=\"highlight\">кратный рост</span>",
            heroSubtitle: "Мы строим цифровые экосистемы, которые превращают хорошие клиники в лидеров города. Без контроля с вашей стороны. Без отчётов ради отчётов. Мы работаем как партнёры — ваш рост это наш рост.",
            heroCTA: "Обсудить ваш проект",
            problemsTitle: "Почему стоматологии с отличными врачами<br>зарабатывают меньше посредственных конкурентов?",
            problem1Title: "Администраторы сливают половину заявок",
            problem1Text: "Люди звонят, пишут — но не записываются. Проблема не в трафике, а в том, что происходит после звонка.",
            problem2Title: "Летний провал убивает годовую прибыль",
            problem2Text: "Июнь-август — врачи простаивают, кресла пустуют. Клиники без стратегии теряют 20-30% годового потенциала.",
            problem3Title: "Нет репутации = нет доверия",
            problem3Text: "Люди выбирают клинику в интернете ДО первого звонка. Если у вас мало отзывов на 2ГИС — они идут к конкурентам.",
            problem4Title: "Неявки съедают 5-10% прибыли",
            problem4Text: "Каждое пустое кресло — это потерянные десятки тысяч рублей. Каждый месяц.",
            problem5Title: "Вы работаете вслепую",
            problem5Text: "Нет понимания: какие услуги приносят деньги, откуда приходят платёжеспособные пациенты, куда утекает бюджет.",
            problem6Title: "Пациенты \"одноразки\"",
            problem6Text: "Приходят лечить один зуб и исчезают. Вы тратите бюджет на привлечение, но упускаете прибыль от комплексных планов.",
            problemsCTA: "Как мы это решаем",
            servicesTitle: "Что мы делаем",
            caseTitle: "Кейс: Стоматология \"Престиж\"",
            caseSubtitle: "Магнитогорск, 6 лет сотрудничества",
            investmentTitle: "Почему подписка выгоднее<br>разовых услуг?",
            ctaTitle: "Стратегическая диагностика<br>системы маркетинга",
            ctaSubtitle: "Закрытый формат. Только для собственников.",
            ctaButton: "Записаться на диагностику",
            footerQuote: "Наш клиент начал с тетрадки и хаоса.<br>Сегодня это одна из самых узнаваемых стоматологий города.<br><br><strong>Следующими можете быть вы.</strong>",
            footerNav: "Навигация",
            footerContact: "Связаться",
            footerCopyright: "© 2025 SINTEZ Agency. All rights reserved."
        },
        en: {
            brand: "SINTEZ AGENCY",
            heroTitle: "Systematic Marketing for Dental Clinics",
            heroSubtitle: "We build digital ecosystems that turn good clinics into city leaders. Without your control. Without reports for the sake of reports. We work as partners — your growth is our growth.",
            heroCTA: "Discuss Your Project",
            problemsTitle: "Why clinics with great doctors<br>earn less than average competitors?",
            problem1Title: "Receptionists lose half of all leads",
            problem1Text: "People call and write — but don't book appointments. The problem isn't traffic, it's what happens after the call.",
            problem2Title: "Summer slump kills annual profits",
            problem2Text: "June-August — doctors are idle, chairs are empty. Clinics without strategy lose 20-30% of annual potential.",
            problem3Title: "No reputation = no trust",
            problem3Text: "People choose a clinic online BEFORE the first call. If you have few reviews on Google Maps — they go to competitors.",
            problem4Title: "No-shows eat 5-10% of profits",
            problem4Text: "Every empty chair means thousands in lost revenue. Every month.",
            problem5Title: "You're working blind",
            problem5Text: "No understanding: which services bring money, where high-value patients come from, where budget is wasted.",
            problem6Title: "One-time patients",
            problem6Text: "They come to treat one tooth and disappear. You spend budget on acquisition but miss profits from comprehensive treatment plans.",
            problemsCTA: "How we solve this",
            servicesTitle: "What We Do",
            caseTitle: "Case Study: \"Prestige\" Dental Clinic",
            caseSubtitle: "Magnitogorsk, 6 years of partnership",
            investmentTitle: "Why subscription is better<br>than one-time services?",
            ctaTitle: "Strategic Marketing<br>System Diagnostics",
            ctaSubtitle: "Closed format. Owners only.",
            ctaButton: "Book Diagnostics",
            footerQuote: "Our client started with a notebook and chaos.<br>Today it's one of the most recognized dental clinics in the city.<br><br><strong>You could be next.</strong>",
            footerNav: "Navigation",
            footerContact: "Contact",
            footerCopyright: "© 2025 SINTEZ Agency. All rights reserved."
        }
    };

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }


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
