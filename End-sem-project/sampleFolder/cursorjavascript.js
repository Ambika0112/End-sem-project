// ===== API-BASED TRANSLATION SYSTEM =====

// API Configuration
const API_CONFIG = {
  // Google Translate API (requires API key)
  GOOGLE_TRANSLATE_API: 'https://translation.googleapis.com/language/translate/v2',
  GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY', // Replace with your API key
  
  // LibreTranslate API (free, no API key required)
  LIBRE_TRANSLATE_API: 'https://libretranslate.com/translate'
};

// Language codes for API calls
const languageCodes = {
  en: 'en', hi: 'hi', ta: 'ta', te: 'te', bn: 'bn', mr: 'mr', gu: 'gu'
};

// Language names for display
const languageNames = {
  en: "English", hi: "हिंदी", ta: "தமிழ்", te: "తెలుగు", 
  bn: "বাংলা", mr: "मराठी", gu: "ગુજરાતી"
};

// Global variables
let currentLanguage = 'en';
let translationCache = {};

// ===== TRANSLATION FUNCTIONS =====

/**
 * Translate text using Google Translate API
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language code
 * @returns {Promise<string|null>} - Translated text or null if failed
 */
async function translateWithGoogle(text, targetLang) {
  try {
    const response = await fetch(`${API_CONFIG.GOOGLE_TRANSLATE_API}?key=${API_CONFIG.GOOGLE_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text, target: targetLang, source: 'en'
      })
    });

    if (!response.ok) throw new Error('Google Translate API failed');
    
    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.log('Google Translate failed, trying LibreTranslate...');
    return null;
  }
}

/**
 * Translate text using LibreTranslate API (free)
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language code
 * @returns {Promise<string|null>} - Translated text or null if failed
 */
async function translateWithLibre(text, targetLang) {
  try {
    const response = await fetch(API_CONFIG.LIBRE_TRANSLATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text, source: 'en', target: targetLang
      })
    });

    if (!response.ok) throw new Error('LibreTranslate API failed');
    
    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.log('LibreTranslate failed');
    return null;
  }
}

/**
 * Main translation function with caching
 * @param {string} text - Text to translate
 * @param {string} targetLang - Target language code
 * @returns {Promise<string>} - Translated text or original if failed
 */
async function translateText(text, targetLang) {
  // Check cache first for performance
  const cacheKey = `${text}_${targetLang}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  // Try Google Translate first (more accurate)
  let translatedText = await translateWithGoogle(text, targetLang);
  
  // If Google fails, try LibreTranslate (free)
  if (!translatedText) {
    translatedText = await translateWithLibre(text, targetLang);
  }
  
  // If both APIs fail, keep original text
  if (!translatedText) {
    translatedText = text;
  }

  // Cache the result for future use
  translationCache[cacheKey] = translatedText;
  return translatedText;
}

/**
 * Change language for entire page using API translation
 * @param {string} lang - Language code to switch to
 */
async function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Show loading state
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = 'Translating...';
  }

  try {
    // Get all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    
    // Collect unique texts to translate (avoid duplicates)
    const textsToTranslate = new Set();
    
    translatableElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (key) textsToTranslate.add(key);
    });
    
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (key) textsToTranslate.add(key);
    });

    // Translate all texts in parallel
    const translationPromises = Array.from(textsToTranslate).map(async (text) => {
      const translated = await translateText(text, lang);
      return { original: text, translated };
    });

    const translations = await Promise.all(translationPromises);
    const translationMap = {};
    translations.forEach(({ original, translated }) => {
      translationMap[original] = translated;
    });

    // Update all translatable elements
    translatableElements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translationMap[key]) {
        element.textContent = translationMap[key];
      }
    });

    // Update placeholders
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translationMap[key]) {
        element.placeholder = translationMap[key];
      }
    });

    // Update UI and save preferences
    if (currentLanguageElement) {
      currentLanguageElement.textContent = languageNames[lang];
    }
    
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    console.log(`Successfully translated to ${languageNames[lang]}`);
    
  } catch (error) {
    console.error('Translation failed:', error);
    // Keep original language if translation fails
    if (currentLanguageElement) {
      currentLanguageElement.textContent = languageNames[currentLanguage];
    }
  }
}

// ===== CAROUSEL FUNCTIONALITY =====
window.addEventListener('DOMContentLoaded', function() {
  // Carousel setup
  const track = document.querySelector('.carousel-track');
  const images = Array.from(document.querySelectorAll('.carousel-image'));
  let currentIndex = 0;

  // Carousel functions
  function updateCarousel() {
    // Each image is 20% width, so move by 20% for each step
    const translateX = currentIndex * 20;
    track.style.transform = `translateX(-${translateX}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  // Initialize carousel
  updateCarousel();
  track.style.transition = 'transform 0.6s cubic-bezier(0.4,0,0.2,1)';
  setInterval(showNext, 3000); // Auto-slide every 3 seconds

  // ===== LANGUAGE SWITCHING FUNCTIONALITY =====
  
  // Load saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && languageCodes[savedLanguage]) {
    changeLanguage(savedLanguage);
  }
  
  // Add click event listeners to language options
  document.querySelectorAll('[data-lang]').forEach(option => {
    option.addEventListener('click', async function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      
      // Show loading state
      this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Translating...';
      
      try {
        await changeLanguage(lang);
      } catch (error) {
        console.error('Language change failed:', error);
        // Restore original content on error
        this.innerHTML = this.getAttribute('data-original-html') || this.innerHTML;
      }
      
      // Close dropdown after selection
      const dropdown = document.querySelector('#languageDropdown');
      if (dropdown) {
        const bsDropdown = bootstrap.Dropdown.getInstance(dropdown);
        if (bsDropdown) bsDropdown.hide();
      }
    });
  });
});