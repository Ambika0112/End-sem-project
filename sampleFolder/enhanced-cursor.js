// Enhanced AgriConnect Landing Page JavaScript
// Language translations and functionality

// Language translations object
const translations = {
  en: {
    'page-title': 'AgriConnect - Your Local Agricultural Marketplace',
    'brand-name': 'AgriConnect',
    'search-placeholder': '🌾 Search crops, seeds, tools...',
    'search-btn': 'Search',
    'my-cart': 'My Cart',
    'login': 'Login',
    'login-seller': 'Login as Seller',
    'login-customer': 'Login as Customer',
    'hero-title': 'Your Local Agricultural Marketplace',
    'hero-subtitle': 'Connect with nearby sellers for quality seeds, fertilizers, tools, and equipment. Supporting farmers with trusted agricultural solutions across India.',
    'start-shopping': 'Start Shopping',
    'become-seller': 'Become a Seller',
    'trusted-platform': 'Trusted Platform',
    'fast-delivery': 'Fast Delivery',
    'support-24-7': '24/7 Support',
    'stat-products': 'Products',
    'stat-sellers': 'Sellers',
    'stat-farmers': 'Happy Farmers',
    'stat-support': 'Support',
    'why-choose-title': 'Why Choose AgriConnect?',
    'why-choose-subtitle': 'Trusted by thousands of farmers across the country',
    'feature-local-title': 'Local Sellers',
    'feature-local-desc': 'Connect with verified sellers in your area for faster delivery and better prices',
    'feature-quality-title': 'Quality Assured',
    'feature-quality-desc': 'All products are verified for quality and authenticity by our expert team',
    'feature-support-title': 'Expert Support',
    'feature-support-desc': 'Get agricultural advice and support from our team of farming experts',
    'marquee-text': '🌾 Quality Agricultural Products | 🚚 Fast Delivery | 💰 Best Prices | 🌱 Trusted Sellers | 📞 24/7 Support',
    'categories-title': 'Shop by Category',
    'categories-subtitle': 'Find everything you need for successful farming',
    'category-insecticides': 'Insecticides',
    'category-insecticides-desc': 'Protect your crops',
    'category-seeds': 'Seeds',
    'category-seeds-desc': 'Quality seeds for growth',
    'category-fertilizers': 'Fertilizers',
    'category-fertilizers-desc': 'Essential plant nutrition',
    'category-pesticides': 'Pesticides',
    'category-pesticides-desc': 'Crop protection solutions',
    'category-tools': 'Farm Tools',
    'category-tools-desc': 'Quality farming equipment',
    'category-irrigation': 'Irrigation',
    'category-irrigation-desc': 'Water management systems',
    'popular-products-title': 'Popular Products',
    'popular-products-subtitle': 'Most loved by our farming community',
    'view-all-products': 'View All Products',
    'how-it-works-title': 'How It Works',
    'how-it-works-subtitle': 'Simple steps to get started',
    'step-1-title': 'Browse Products',
    'step-1-desc': 'Explore our wide range of agricultural products from local sellers',
    'step-2-title': 'Select & Add to Cart',
    'step-2-desc': 'Choose products that match your farming needs and add them to cart',
    'step-3-title': 'Place Order',
    'step-3-desc': 'Complete your purchase with secure payment and delivery options',
    'step-4-title': 'Get Delivered',
    'step-4-desc': 'Receive your products at your doorstep with fast local delivery',
    'testimonials-title': 'What Farmers Say',
    'testimonials-subtitle': 'Real stories from real farmers',
    'testimonial-1': '"AgriConnect helped me find quality seeds at the best prices. The local sellers are trustworthy and delivery is always on time."',
    'farmer-1-name': 'Rajesh Kumar',
    'farmer-1-location': 'Punjab',
    'testimonial-2': '"The variety of fertilizers and pesticides available is amazing. I can compare prices and choose the best option for my crops."',
    'farmer-2-name': 'Priya Sharma',
    'farmer-2-location': 'Maharashtra',
    'testimonial-3': '"Excellent customer support and expert advice. They helped me choose the right irrigation system for my farm."',
    'farmer-3-name': 'Suresh Patel',
    'farmer-3-location': 'Gujarat',
    'community-title': 'Join Our Farming Community',
    'community-subtitle': 'Get access to premium products, expert advice, and special offers!',
    'register-customer': 'Register as Customer',
    'register-seller': 'Register as Seller',
    'footer-about-title': 'About AgriConnect',
    'footer-about-desc': 'Connecting farmers with quality agricultural products and equipment across India. Your trusted partner in farming success.',
    'footer-quick-links': 'Quick Links',
    'footer-about-us': 'About Us',
    'footer-contact': 'Contact',
    'footer-terms': 'Terms & Conditions',
    'footer-privacy': 'Privacy Policy',
    'footer-categories': 'Categories',
    'footer-contact-title': 'Contact Us',
    'footer-address': 'New Delhi, India',
    'footer-copyright': '© 2024 AgriConnect. All rights reserved.',
    'footer-tagline': 'Empowering Farmers, Growing Together',
    'login-title': 'Login to AgriConnect',
    'customer-tab': 'Customer',
    'seller-tab': 'Seller',
    'email-label': 'Email Address',
    'email-placeholder': 'Enter your email',
    'password-label': 'Password',
    'password-placeholder': 'Enter your password',
    'remember-me': 'Remember me',
    'forgot-password': 'Forgot Password?',
    'login-btn': 'Login',
    'no-account': "Don't have an account?",
    'signup-link': 'Sign up here'
  },
  hi: {
    'page-title': 'एग्रीकनेक्ट - आपका स्थानीय कृषि बाज़ार',
    'brand-name': 'एग्रीकनेक्ट',
    'search-placeholder': '🌾 फसल, बीज, उपकरण खोजें...',
    'search-btn': 'खोजें',
    'my-cart': 'मेरी गाड़ी',
    'login': 'लॉगिन',
    'login-seller': 'विक्रेता के रूप में लॉगिन',
    'login-customer': 'ग्राहक के रूप में लॉगिन',
    'hero-title': 'आपका स्थानीय कृषि बाज़ार',
    'hero-subtitle': 'गुणवत्तापूर्ण बीज, उर्वरक, उपकरण और उपकरणों के लिए आस-पास के विक्रेताओं से जुड़ें। भारत भर में विश्वसनीय कृषि समाधानों के साथ किसानों का समर्थन।',
    'start-shopping': 'खरीदारी शुरू करें',
    'become-seller': 'विक्रेता बनें',
    'trusted-platform': 'विश्वसनीय प्लेटफॉर्म',
    'fast-delivery': 'तेज़ डिलीवरी',
    'support-24-7': '24/7 सहायता',
    'categories-title': 'श्रेणी के अनुसार खरीदारी करें',
    'categories-subtitle': 'सफल खेती के लिए आवश्यक सब कुछ खोजें',
    'category-insecticides': 'कीटनाशक',
    'category-seeds': 'बीज',
    'category-fertilizers': 'उर्वरक',
    'category-pesticides': 'कीटनाशक',
    'category-tools': 'कृषि उपकरण',
    'category-irrigation': 'सिंचाई'
  },
  ta: {
    'page-title': 'அக்ரிகனெக்ட் - உங்கள் உள்ளூர் விவசாய சந்தை',
    'brand-name': 'அக்ரிகனெக்ட்',
    'search-placeholder': '🌾 பயிர்கள், விதைகள், கருவிகள் தேடுங்கள்...',
    'search-btn': 'தேடுங்கள்',
    'my-cart': 'என் வண்டி',
    'login': 'உள்நுழைய',
    'categories-title': 'வகையின் அடிப்படையில் வாங்குங்கள்',
    'category-insecticides': 'பூச்சிக்கொல்லிகள்',
    'category-seeds': 'விதைகள்',
    'category-fertilizers': 'உரங்கள்',
    'category-pesticides': 'பூச்சிக்கொல்லிகள்',
    'category-tools': 'விவசாய கருவிகள்',
    'category-irrigation': 'நீர்ப்பாசனம்'
  }
};

// Global variables
let currentLanguage = 'en';
let currentUserType = 'customer';
let isLoggedIn = false;
let currentUser = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
  initializeAuth();
  initializeCarousel();
  initializePopularProducts();
  updateCartCount();
  setupEventListeners();
});

// Language functionality
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLanguage);
}

function changeLanguage(langCode) {
  currentLanguage = langCode;
  localStorage.setItem('selectedLanguage', langCode);
  
  // Update current language display
  const currentLangElement = document.getElementById('currentLanguage');
  const languageNames = {
    'en': 'English',
    'hi': 'हिंदी',
    'ta': 'தமிழ்',
    'te': 'తెలుగు',
    'bn': 'বাংলা',
    'mr': 'मराठी',
    'gu': 'ગુજરાતી'
  };
  
  if (currentLangElement) {
    currentLangElement.textContent = languageNames[langCode] || 'English';
  }
  
  // Update all translatable elements
  updateTranslations();
}

function updateTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
}

// Authentication functionality
function initializeAuth() {
  const user = localStorage.getItem('currentUser');
  if (user) {
    currentUser = JSON.parse(user);
    isLoggedIn = true;
    updateAuthUI();
  }
}

function showLoginModal(userType = 'customer') {
  currentUserType = userType;
  switchUserType(userType);
  const modal = new bootstrap.Modal(document.getElementById('authModal'));
  modal.show();
}

function switchUserType(userType) {
  currentUserType = userType;
  
  // Update tab appearance
  const customerTab = document.getElementById('customerTab');
  const sellerTab = document.getElementById('sellerTab');
  
  if (userType === 'customer') {
    customerTab.classList.add('active', 'btn-success');
    customerTab.classList.remove('btn-outline-success');
    sellerTab.classList.remove('active', 'btn-success');
    sellerTab.classList.add('btn-outline-success');
  } else {
    sellerTab.classList.add('active', 'btn-success');
    sellerTab.classList.remove('btn-outline-success');
    customerTab.classList.remove('active', 'btn-success');
    customerTab.classList.add('btn-outline-success');
  }
}

function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Mock login - in real app, this would be an API call
  if (email && password) {
    const user = {
      email: email,
      userType: currentUserType,
      name: email.split('@')[0],
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
    isLoggedIn = true;
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
    
    // Update UI
    updateAuthUI();
    
    // Redirect sellers to dashboard
    if (currentUserType === 'seller') {
      setTimeout(() => {
        window.location.href = 'seller.html';
      }, 1000);
    }
    
    // Show success message
    showNotification('Login successful! Welcome to AgriConnect.', 'success');
  }
}

function updateAuthUI() {
  const userDisplayName = document.getElementById('userDisplayName');
  const loginDropdownMenu = document.getElementById('loginDropdownMenu');
  
  if (isLoggedIn && currentUser) {
    userDisplayName.textContent = `Hello, ${currentUser.name}`;
    
    // Update dropdown menu for logged-in user
    loginDropdownMenu.innerHTML = `
      <li>
        <a class="dropdown-item d-flex align-items-center" href="seller.html">
          <i class="fas fa-tachometer-alt me-2 text-primary"></i> Dashboard
        </a>
      </li>
      <li>
        <a class="dropdown-item d-flex align-items-center" href="#" onclick="handleLogout()">
          <i class="fas fa-sign-out-alt me-2 text-danger"></i> Logout
        </a>
      </li>
    `;
  }
}

function handleLogout() {
  localStorage.removeItem('currentUser');
  currentUser = null;
  isLoggedIn = false;
  location.reload();
}

// Search functionality
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm) {
    // Redirect to products page with search query
    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
  }
}

// Carousel functionality with enhanced features
function initializeCarousel() {
  const carouselTrack = document.querySelector('.carousel-track');
  if (!carouselTrack) return;
  
  const images = carouselTrack.querySelectorAll('.carousel-image');
  let currentIndex = 0;
  
  // Clone images for infinite scroll
  images.forEach(img => {
    const clone = img.cloneNode(true);
    carouselTrack.appendChild(clone);
  });
  
  function moveCarousel() {
    currentIndex++;
    const translateX = -currentIndex * (100 / images.length);
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Reset to beginning when reaching cloned images
    if (currentIndex >= images.length) {
      setTimeout(() => {
        carouselTrack.style.transition = 'none';
        currentIndex = 0;
        carouselTrack.style.transform = 'translateX(0%)';
        setTimeout(() => {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    }
  }
  
  // Auto-play carousel
  setInterval(moveCarousel, 4000);
  
  // Pause on hover
  carouselTrack.addEventListener('mouseenter', () => {
    carouselTrack.style.animationPlayState = 'paused';
  });
  
  carouselTrack.addEventListener('mouseleave', () => {
    carouselTrack.style.animationPlayState = 'running';
  });
}

// Popular products functionality
function initializePopularProducts() {
  const popularProductsContainer = document.getElementById('popularProducts');
  if (!popularProductsContainer) return;
  
  // Mock popular products data
  const popularProducts = [
    {
      id: 1,
      name: 'Premium Wheat Seeds',
      price: 450,
      originalPrice: 500,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=300&q=80',
      rating: 4.5,
      discount: 10
    },
    {
      id: 2,
      name: 'Organic Fertilizer',
      price: 280,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80',
      rating: 4.8,
      discount: 12
    },
    {
      id: 3,
      name: 'Irrigation Sprinkler',
      price: 1200,
      originalPrice: 1400,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80',
      rating: 4.3,
      discount: 14
    }
  ];
  
  popularProducts.forEach(product => {
    const productCard = createProductCard(product);
    popularProductsContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'col-md-4';
  
  card.innerHTML = `
    <div class="card border-0 shadow-sm h-100 product-card">
      <div class="position-relative">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
        ${product.discount ? `<span class="badge bg-danger position-absolute top-0 end-0 m-2">${product.discount}% OFF</span>` : ''}
      </div>
      <div class="card-body">
        <h6 class="card-title fw-bold">${product.name}</h6>
        <div class="d-flex align-items-center mb-2">
          <div class="text-warning me-2">
            ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <small class="text-muted">(${product.rating})</small>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <span class="h6 text-success fw-bold">₹${product.price}</span>
            ${product.originalPrice ? `<small class="text-muted text-decoration-line-through ms-1">₹${product.originalPrice}</small>` : ''}
          </div>
          <button class="btn btn-success btn-sm" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus me-1"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Cart functionality
function updateCartCount() {
  const cartCount = getCartItemCount();
  const cartBadge = document.getElementById('cartCountBadge');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'inline' : 'none';
  }
}

function getCartItemCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function addToCart(productId) {
  // This would typically fetch product details from your data source
  showNotification('Product added to cart!', 'success');
  updateCartCount();
}

// Utility functions
function scrollToCategories() {
  const categoriesSection = document.getElementById('categories-section');
  if (categoriesSection) {
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
  notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 3000);
}

// Setup event listeners
function setupEventListeners() {
  // Language dropdown clicks
  document.querySelectorAll('[data-lang]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.currentTarget.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
  
  // Login dropdown clicks
  document.querySelectorAll('[onclick*="showLoginModal"]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const userType = e.currentTarget.getAttribute('onclick').includes('seller') ? 'seller' : 'customer';
      showLoginModal(userType);
    });
  });
}

// Enhanced navigation function using data attributes
function navigateToProducts(cardElement) {
  const category = cardElement.getAttribute('data-category');
  // Store navigation state for return functionality
  sessionStorage.setItem('returnPage', window.location.href);
  window.location.href = `products.html?category=${category}`;
}

// Export functions for global access
window.changeLanguage = changeLanguage;
window.showLoginModal = showLoginModal;
window.switchUserType = switchUserType;
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.handleSearch = handleSearch;
window.scrollToCategories = scrollToCategories;
window.navigateToProducts = navigateToProducts;
window.addToCart = addToCart;
