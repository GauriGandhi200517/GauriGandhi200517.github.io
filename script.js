// ============================================
// SCROLL TO TOP BUTTON FUNCTIONALITY
// ============================================

const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');
const experienceCards = document.querySelectorAll('.experience-card');

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ============================================
// HIGHLIGHT SECTION ANIMATIONS
// ============================================

const highlights = document.querySelectorAll('.highlight');

highlights.forEach(highlight => {
    highlight.style.opacity = '0';
    highlight.style.transform = 'translateY(20px)';
    highlight.style.transition = 'all 0.6s ease';
    observer.observe(highlight);
});

// ============================================
// ACTIVE NAV LINK INDICATOR
// ============================================

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ADD ACTIVE CLASS STYLING
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        opacity: 1;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ============================================
// LAZY LOADING FOR IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 16ms per frame
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is visible
        observer.observe(counter);
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR FOR CTA BUTTONS
// ============================================

const ctaButtons = document.querySelectorAll('.cta-buttons a[href^="#"]');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = button.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ADD RIPPLE EFFECT TO BUTTONS
// ============================================

const buttons = document.querySelectorAll('.btn, .social-icon, .social-links-contact a');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to stylesheet
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// FORM SUBMISSION HANDLER (if needed)
// ============================================

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for reaching out! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// ============================================
// MOBILE MENU TOGGLE (for future mobile menu)
// ============================================

function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    
    // Add mobile menu button if screen is small
    if (window.innerWidth <= 768) {
        // Mobile-specific functionality can be added here
    }
}

// Call on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);

// ============================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ============================================

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Apply debounce to scroll events if needed
const debouncedScroll = debounce(() => {
    // Scroll event logic here
}, 100);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Ensure all interactive elements are keyboard accessible
document.addEventListener('keydown', (e) => {
    // Escape key closes any open modals/menus
    if (e.key === 'Escape') {
        // Close logic here
    }
    
    // Tab key for navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard-nav styles
const a11yStyle = document.createElement('style');
a11yStyle.textContent = `
    .keyboard-nav a:focus,
    .keyboard-nav button:focus,
    .keyboard-nav .btn:focus {
        outline: 2px solid #6366f1;
        outline-offset: 2px;
    }
`;
document.head.appendChild(a11yStyle);

// ============================================
// PAGE LOAD COMPLETE INDICATOR
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('Portfolio loaded successfully!');
});

// Initial state
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
