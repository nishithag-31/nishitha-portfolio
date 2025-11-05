// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.section');

    // Handle navigation tab clicks
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // Remove active class from all tabs and sections
            navTabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked tab and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');

            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Initialize rain effect
    createRainEffect();
});

// Rain effect variables
let rainInterval = null;
let resizeTimeout = null;

// Rain effect function with mobile optimization
function createRainEffect() {
    // Check if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Skip animation if user prefers reduced motion
    }

    const rainOverlay = document.querySelector('.rain-overlay');
    if (!rainOverlay) return;

    // Clear any existing interval
    if (rainInterval) {
        clearInterval(rainInterval);
    }

    // Detect mobile device and adjust drop count
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;
    
    let rainDropsCount = 100;
    if (isSmallMobile) {
        rainDropsCount = 40; // Reduced drops for small screens
    } else if (isMobile) {
        rainDropsCount = 60; // Medium drops for tablets
    }

    // Create initial rain drops
    for (let i = 0; i < rainDropsCount; i++) {
        createRainDrop(rainOverlay, isMobile, isSmallMobile);
    }

    // Continuously add new rain drops with optimized interval
    const addInterval = isMobile ? 300 : 200;
    rainInterval = setInterval(() => {
        // Remove old drops that are off screen
        const drops = rainOverlay.querySelectorAll('.rain-drop');
        const maxDrops = rainDropsCount * 2;
        
        if (drops.length > maxDrops) {
            // Remove oldest drops
            const dropsToRemove = drops.length - maxDrops;
            for (let i = 0; i < dropsToRemove; i++) {
                if (drops[i] && drops[i].parentNode) {
                    drops[i].remove();
                }
            }
        }
        
        // Add new drop
        createRainDrop(rainOverlay, isMobile, isSmallMobile);
    }, addInterval);
}

// Handle window resize (only add once)
if (!window.rainResizeHandlerAdded) {
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const rainOverlay = document.querySelector('.rain-overlay');
            if (rainOverlay) {
                // Clean up existing drops
                const existingDrops = rainOverlay.querySelectorAll('.rain-drop');
                existingDrops.forEach(drop => drop.remove());
                
                // Reinitialize with new dimensions
                createRainEffect();
            }
        }, 250);
    });
    window.rainResizeHandlerAdded = true;
}

function createRainDrop(container, isMobile, isSmallMobile) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';

    // Random horizontal position
    const leftPosition = Math.random() * 100;
    drop.style.left = leftPosition + '%';

    // Random animation duration (adjusted for mobile)
    let duration;
    if (isSmallMobile) {
        duration = 1.5 + Math.random() * 1.5; // Faster on small screens
    } else if (isMobile) {
        duration = 2 + Math.random() * 1.5;
    } else {
        duration = 2 + Math.random() * 2;
    }
    drop.style.animationDuration = duration + 's';

    // Random delay
    const delay = Math.random() * 0.5;
    drop.style.animationDelay = delay + 's';

    // Random height (adjusted for mobile)
    let height;
    if (isSmallMobile) {
        height = 8 + Math.random() * 10;
    } else if (isMobile) {
        height = 10 + Math.random() * 12;
    } else {
        height = 10 + Math.random() * 15;
    }
    drop.style.height = height + 'px';

    // Random width (already handled in CSS for mobile)
    const width = isSmallMobile ? 1 : (isMobile ? 1.5 : 2);
    drop.style.width = width + 'px';

    // Random opacity
    const opacity = 0.3 + Math.random() * 0.4;
    drop.style.opacity = opacity;

    container.appendChild(drop);

    // Remove drop after animation completes (with buffer)
    setTimeout(() => {
        if (drop.parentNode) {
            drop.remove();
        }
    }, (duration + delay + 0.5) * 1000);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.card, .project-card, .education-item, .participation-item, .hackathon-item, .certificate-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

