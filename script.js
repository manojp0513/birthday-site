// Birthday Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    generateWishes();
    generateFloatingElements();
    setupScrollAnimations();
});

// Initialize all animations
function initializeAnimations() {
    // Add staggered fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
}

// Generate wishes dynamically
function generateWishes() {
    const wishes = [
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>`,
            title: "Another Year of Wonderful You",
            message: "May this new year of your life be filled with endless opportunities, beautiful moments, and all the happiness your heart can hold.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9 17,14.74 18.18,21.02 12,17.77 5.82,21.02 7,14.74 2,9 8.91,8.26"/>
            </svg>`,
            title: "Shine Bright Always",
            message: "You have this incredible ability to light up any room you enter. May you continue to shine your beautiful light on everyone around you.",
            gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
        },
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 3h12l4 6-10 13L2 9l4-6z"/>
                <path d="M11 3 8 9l4 13 4-13-3-6"/>
                <path d="M2 9h20"/>
            </svg>`,
            title: "You're Absolutely Royal",
            message: "Today you're the queen of celebration! May you always remember how special and cherished you are by everyone who knows you.",
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
        },
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 17a10 10 0 0 1-20 0"/>
                <path d="M6 17a6 6 0 0 1 12 0"/>
                <path d="M10 17a2 2 0 0 1 4 0"/>
            </svg>`,
            title: "Colors of Joy",
            message: "Like a rainbow after rain, you bring color and joy to every moment. May your life be painted with endless beautiful experiences.",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
            </svg>`,
            title: "Electric Personality",
            message: "Your energy is contagious and your spirit is unstoppable. May this year charge you with even more amazing adventures and successes.",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="8" width="18" height="4" rx="1"/>
                <path d="M12 8v13"/>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
            </svg>`,
            title: "All Your Dreams Come True",
            message: "I hope this year brings you closer to all your dreams and aspirations. You deserve every wonderful thing life has to offer.",
            gradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"
        }
    ];

    const wishesGrid = document.getElementById('wishesGrid');
    
    wishes.forEach((wish, index) => {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card fade-in-up hover-lift';
        wishCard.style.animationDelay = `${index * 0.15}s`;
        
        wishCard.innerHTML = `
            <div class="wish-card-bg" style="background: ${wish.gradient};"></div>
            <div class="wish-content">
                <div class="wish-icon-container">
                    <div class="wish-icon shimmer-effect">
                        ${wish.icon}
                    </div>
                    <div class="wish-sparkle sparkle-1"></div>
                    <div class="wish-sparkle sparkle-2"></div>
                </div>
                <h3 class="wish-title">${wish.title}</h3>
                <p class="wish-message">${wish.message}</p>
            </div>
            <div class="wish-corner corner-1"></div>
            <div class="wish-corner corner-2"></div>
        `;
        
        wishesGrid.appendChild(wishCard);
    });
}

// Generate floating elements
function generateFloatingElements() {
    generateFloatingSparkles();
    generateFloatingStars();
    generateFloatingHearts();
    generateFinalHearts();
}

function generateFloatingSparkles() {
    const sparklesContainer = document.querySelector('.floating-sparkles');
    
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = `
            <svg width="${Math.random() * 16 + 12}" height="${Math.random() * 16 + 12}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            </svg>
        `;
        
        sparkle.style.position = 'absolute';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

function generateFloatingStars() {
    const starsContainer = document.querySelector('.floating-stars');
    
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.innerHTML = `
            <svg width="${Math.random() * 12 + 8}" height="${Math.random() * 12 + 8}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12,2 15.09,8.26 22,9 17,14.74 18.18,21.02 12,17.77 5.82,21.02 7,14.74 2,9 8.91,8.26"/>
            </svg>
        `;
        
        star.style.position = 'absolute';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
}

function generateFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = `
            <svg width="${Math.random() * 8 + 8}" height="${Math.random() * 8 + 8}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        `;
        
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heart.style.color = 'var(--primary)';
        heart.style.opacity = '0.2';
        heart.className = 'heart-pulse';
        
        heartsContainer.appendChild(heart);
    }
}

function generateFinalHearts() {
    const finalHeartsContainer = document.getElementById('finalHearts');
    
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
        `;
        
        heart.style.animationDelay = `${i * 0.2}s`;
        heart.className = 'heart-pulse';
        
        finalHeartsContainer.appendChild(heart);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const sparkles = document.querySelectorAll('.floating-sparkles svg');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    sparkles.forEach((sparkle, index) => {
        if (index % 3 === 0) {
            const moveX = (mouseX - 0.5) * 20;
            const moveY = (mouseY - 0.5) * 20;
            sparkle.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${mouseX * 360}deg)`;
        }
    });
});

// Add click effects to hearts
document.addEventListener('click', (e) => {
    const hearts = document.querySelectorAll('.heart-pulse');
    hearts.forEach((heart) => {
        heart.style.animationDuration = '0.5s';
        setTimeout(() => {
            heart.style.animationDuration = '2s';
        }, 1000);
    });
});

// Smooth scrolling for better experience
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-animation');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});