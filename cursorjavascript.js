// Basic language switching without API
const languages = {
    'en': 'English',
    'hi': 'हिंदी',
    'ta': 'தமிழ்',
    'te': 'తెలుగు'
};

function changeLanguage(lang) {
    document.getElementById('currentLanguage').textContent = languages[lang] || 'English';
    localStorage.setItem('preferred_language', lang);
}

// Basic page initialization
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    changeLanguage(savedLang);
});
        console.error('Translation failed:', error);
        return text;
    }
}

// Language switcher
async function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    for (const element of elements) {
        const key = element.getAttribute('data-translate');
        const translation = await translateText(element.textContent, lang);
        element.textContent = translation;
    }
    document.getElementById('currentLanguage').textContent = 
        document.querySelector(`[data-lang="${lang}"]`).textContent;
}

// Auth modal handling
function showLoginModal(userType) {
    const modal = new bootstrap.Modal(document.getElementById('authModal'));
    switchUserType(userType);
    modal.show();
}

function switchUserType(type) {
    const customerTab = document.getElementById('customerTab');
    const sellerTab = document.getElementById('sellerTab');
    
    if (type === 'customer') {
        customerTab.classList.add('active');
        sellerTab.classList.remove('active');
    } else {
        sellerTab.classList.add('active');
        customerTab.classList.remove('active');
    }
}

// Handle login form submission
async function handleLogin(event) {
    event.preventDefault();
    // Add your login logic here
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    console.log('Login attempt:', { email, password });
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (track) {
        const images = track.querySelectorAll('img');
        const clonedImages = [...images].map(img => img.cloneNode(true));
        clonedImages.forEach(img => track.appendChild(img));
    }
});
