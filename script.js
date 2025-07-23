window.A11Y_WIDGET_CONFIG = {
    position: 'bottom-left',
    theme: 'light',
    language: 'de',
    showToggleText: false,
};

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .highlight-item, .package-card');
    animateElements.forEach(el => {
        el.classList.add('scroll-animation');
        observer.observe(el);
    });
});

// Dynamic mailto link functionality
function updateMailtoLink() {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create email subject
    const emailSubject = subject || 'Kontakt von Portfolio';
    
    // Create email body
    const emailBody = `Hallo Alexander,\n\n` +
                     `Name: ${name || 'Nicht angegeben'}\n` +
                     `Betreff: ${subject || 'Allgemeine Anfrage'}\n\n` +
                     `Nachricht:\n${message || 'Keine Nachricht'}\n\n` +
                     `---\n` +
                     `Diese Nachricht wurde über Ihr Portfolio-Kontaktformular gesendet.`;
    
    // Encode for URL
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // Update the mailto link
    const mailtoButton = document.getElementById('mailto-button');
    mailtoButton.href = `mailto:alexanderkoch@uxnetwork.eu?subject=${encodedSubject}&body=${encodedBody}`;
}

// Add event listeners to update the mailto link when inputs change
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    if (nameInput && subjectInput && messageInput) {
        // Update link initially
        updateMailtoLink();
        
        // Update link when inputs change
        nameInput.addEventListener('input', updateMailtoLink);
        subjectInput.addEventListener('input', updateMailtoLink);
        messageInput.addEventListener('input', updateMailtoLink);
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'info':
            notification.style.backgroundColor = '#3b82f6';
            break;
        default:
            notification.style.backgroundColor = '#6b7280';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Typing animation for hero text
function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Skills animation on scroll
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        item.style.transform = 'translateY(0)';
                        item.style.opacity = '1';
                    }, index * 100);
                }
            });
        });
        
        item.style.transform = 'translateY(30px)';
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="spinner"></div>
            <p>Laden...</p>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    
    const loaderContent = loader.querySelector('.loader-content');
    loaderContent.style.cssText = `
        text-align: center;
        color: #2563eb;
    `;
    
    const spinner = loader.querySelector('.spinner');
    spinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 4px solid #e5e7eb;
        border-top: 4px solid #2563eb;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    `;
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }, 500);
    });
}

// Initialize loader
showLoadingAnimation();

// Load and display packages
async function loadPackages() {
    try {
        const packages = [
                {
                    "name": "Starter-Paket – Web-Visitenkarte",
                    "beschreibung": [
                        "Domainregistrierung (.de)",
                        "Webhosting (1 Jahr inklusive)",
                        "WordPress-Installation",
                        "1–3 Seiten (z.B. Start, Kontakt, Leistungen)",
                        "DSGVO-konformes Impressum & Datenschutz",
                        "Responsive Design (mobiloptimiert)",
                        "Basis-SEO (Meta-Daten, Suchmaschinen-Anmeldung)"
                    ],
                    "preis": {
                        "einmalig": "1000–1500 €",
                        "hosting_vertrag": "10–20 € netto/Monat"
                    }
                },
                {
                    "name": "Business-Paket – Online-Präsenz für Unternehmen",
                    "beschreibung": [
                        "Alle Leistungen aus dem Starter-Paket",
                        "Bis zu 8 Seiten (z.B. Team, Portfolio, Blog)",
                        "Erweiterte SEO-Optimierung",
                        "Individuelles Design nach CI",
                        "Einbindung von Social Media",
                        "Kontakt-/Anfrageformulare",
                        "Einrichtung von E-Mail-Adressen",
                        "Schulung (1h Video-Call oder vor Ort)"
                    ],
                    "preis": {
                        "einmalig": "2000–2900 €",
                        "hosting_vertrag": "20–35 € netto/Monat"
                    }
                },
                {
                    "name": "Premium-Paket – Komplett digital",
                    "beschreibung": [
                        "Alle Leistungen aus dem Business-Paket",
                        "Bis zu 15 Seiten & individuelle Unterseiten",
                        "Blog- oder Newsbereich",
                        "Erweiterte Sicherheitsmaßnahmen (Backups, Firewalls)",
                        "Einrichtung Google Analytics & Search Console",
                        "Content-Erstellung (Texte, Bilder, SEO)",
                        "Performance-Optimierung",
                        "Laufende Wartung & Updates (6 Monate inklusive)"
                    ],
                    "preis": {
                        "einmalig": "3000–4900 €",
                        "hosting_vertrag": "30–50 € netto/Monat"
                    }
                }
            ]
        ;
        displayPackages(packages);
    } catch (error) {
        console.error('Fehler beim Laden der Pakete:', error);
        showNotification('Fehler beim Laden der Pakete', 'error');
    }
}

// Display packages in the grid
function displayPackages(packages) {
    const packagesGrid = document.getElementById('packages-grid');
    if (!packagesGrid) return;

    packagesGrid.innerHTML = '';

    packages.forEach((pkg, index) => {
        const packageCard = createPackageCard(pkg, index);
        packagesGrid.appendChild(packageCard);
    });

    // Add scroll animation to package cards
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.classList.add('scroll-animation');
        observer.observe(card);
    });
}

// Create individual package card
function createPackageCard(pkg, index) {
    const card = document.createElement('div');
    card.className = 'package-card';
    
    // Determine package tier for styling
    const tierClass = index === 0 ? 'starter' : index === 1 ? 'business' : 'premium';
    card.classList.add(`package-${tierClass}`);
    
    // Create features list
    const featuresList = pkg.beschreibung.map(feature => 
        `<li><i class="fas fa-check"></i>${feature}</li>`
    ).join('');

    card.innerHTML = `
        <div class="package-header">
            <div class="package-icon">
                <i class="fas ${getPackageIcon(index)}"></i>
            </div>
            <h3>${pkg.name}</h3>
            ${index === 1 ? '<div class="popular-badge">Beliebt</div>' : ''}
        </div>
        <div class="package-pricing">
            <div class="price-item">
                <span class="price-label">Einmalig</span>
                <span class="price-value">${pkg.preis.einmalig}</span>
            </div>
            <div class="price-item">
                <span class="price-label">Hosting</span>
                <span class="price-value">${pkg.preis.hosting_vertrag}</span>
            </div>
        </div>
        <div class="package-features">
            <ul>
                ${featuresList}
            </ul>
        </div>
        <div class="package-action">
            <a href="#contact" class="btn btn-package ${tierClass}" onclick="fillContactForm('${pkg.name}')">
                <i class="fas fa-envelope"></i>
                Jetzt anfragen
            </a>
        </div>
    `;

    return card;
}

// Get appropriate icon for each package
function getPackageIcon(index) {
    const icons = ['fa-rocket', 'fa-building', 'fa-crown'];
    return icons[index] || 'fa-star';
}

// Fill contact form with package information
function fillContactForm(packageName) {
    setTimeout(() => {
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        if (subjectInput) {
            subjectInput.value = `Anfrage für ${packageName}`;
        }
        
        if (messageInput) {
            messageInput.value = `Hallo Alexander,\n\nich interessiere mich für das "${packageName}" und würde gerne weitere Informationen erhalten.\n\nBitte kontaktieren Sie mich für ein unverbindliches Beratungsgespräch.\n\nVielen Dank!`;
        }
        
        // Update mailto link
        updateMailtoLink();
        
        // Show notification
        showNotification('Kontaktformular wurde mit Paket-Informationen ausgefüllt', 'success');
    }, 100);
}

// Initialize packages when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadPackages();
});

// Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Dark mode toggle (optional feature)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDark);
    });
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.body.appendChild(toggle);
}